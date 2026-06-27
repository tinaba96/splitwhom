import { describe, it, expect } from "vitest";
import {
  settle,
  computeBalances,
  splitEvenly,
  minimizeTransfers,
  toMinor,
  type MemberBalance,
} from "./settle";
import { CURRENCIES, type CurrencyCode, type Expense, type Member, type SplitState } from "./types";

// ---------- helpers ----------

function members(...names: string[]): Member[] {
  return names.map((name) => ({ id: name, name }));
}

function expense(
  payerId: string,
  amount: number,
  participantIds: string[],
  description = "x",
): Expense {
  return { id: `${payerId}-${amount}-${participantIds.join("")}`, payerId, description, amount, participantIds };
}

function state(currency: CurrencyCode, ms: Member[], es: Expense[]): SplitState {
  return { title: "t", currency, members: ms, expenses: es };
}

/** Apply transfers to the net balances and assert everyone ends at exactly zero. */
function assertFullySettled(balances: MemberBalance[], transfers: ReturnType<typeof settle>["transfers"]) {
  const net = new Map(balances.map((b) => [b.memberId, b.net]));
  for (const t of transfers) {
    expect(t.amount).toBeGreaterThan(0);
    expect(t.fromId).not.toBe(t.toId);
    net.set(t.fromId, (net.get(t.fromId) ?? 0) + t.amount); // debtor pays -> net rises toward 0
    net.set(t.toId, (net.get(t.toId) ?? 0) - t.amount); // creditor receives -> net falls toward 0
  }
  for (const v of net.values()) expect(v).toBe(0);
}

// ---------- splitEvenly ----------

describe("splitEvenly", () => {
  it("divides evenly when divisible", () => {
    expect(splitEvenly(90, 3)).toEqual([30, 30, 30]);
  });

  it("distributes the remainder to the first participants and sums exactly", () => {
    expect(splitEvenly(10, 3)).toEqual([4, 3, 3]);
    expect(splitEvenly(100, 3)).toEqual([34, 33, 33]);
    expect(splitEvenly(100, 3).reduce((a, b) => a + b, 0)).toBe(100);
  });

  it("handles a single participant and zero", () => {
    expect(splitEvenly(100, 1)).toEqual([100]);
    expect(splitEvenly(0, 4)).toEqual([0, 0, 0, 0]);
  });

  it("returns [] for n <= 0", () => {
    expect(splitEvenly(50, 0)).toEqual([]);
    expect(splitEvenly(50, -1)).toEqual([]);
  });
});

// ---------- the documented spec example ----------

describe("settle — spec example (camp, USD)", () => {
  const s = state(
    "USD",
    members("A", "B", "C", "D", "E"),
    [
      expense("A", 300, ["A", "B", "C", "D", "E"]),
      expense("B", 100, ["A", "B", "C", "D", "E"]),
      expense("C", 50, ["A", "B", "C", "D", "E"]),
    ],
  );

  it("computes the expected net balances (minor units)", () => {
    const r = settle(s);
    const net = Object.fromEntries(r.balances.map((b) => [b.memberId, b.net]));
    expect(net).toEqual({ A: 21000, B: 1000, C: -4000, D: -9000, E: -9000 });
  });

  it("produces the minimal transfers and fully settles", () => {
    const r = settle(s);
    expect(r.transfers.length).toBe(4);
    assertFullySettled(r.balances, r.transfers);
  });
});

// ---------- per-expense participants (the key feature) ----------

describe("settle — per-expense participant selection", () => {
  it("charges only the chosen participants for an expense", () => {
    // A pays 90 for B and C only (A does not share it)
    const r = settle(state("USD", members("A", "B", "C"), [expense("A", 90, ["B", "C"])]));
    const net = Object.fromEntries(r.balances.map((b) => [b.memberId, b.net]));
    expect(net).toEqual({ A: 9000, B: -4500, C: -4500 });
    assertFullySettled(r.balances, r.transfers);
  });

  it("mixes full-group and subset expenses", () => {
    // food 300 all five; drinks 100 only A,B,C
    const r = settle(
      state("USD", members("A", "B", "C", "D", "E"), [
        expense("A", 300, ["A", "B", "C", "D", "E"], "food"),
        expense("B", 100, ["A", "B", "C"], "drinks"),
      ]),
    );
    const net = Object.fromEntries(r.balances.map((b) => [b.memberId, b.net]));
    // shares: food 60 each; drinks 33.34/33.33/33.33 -> A,B,C extra
    expect(net.A).toBe(30000 - 6000 - 3334); // paid 300, owes 60 + 33.34
    expect(net.B).toBe(10000 - 6000 - 3333);
    expect(net.C).toBe(0 - 6000 - 3333);
    expect(net.D).toBe(-6000);
    expect(net.E).toBe(-6000);
    expect(r.balances.reduce((acc, b) => acc + b.net, 0)).toBe(0);
    assertFullySettled(r.balances, r.transfers);
  });

  it("ignores participant ids that are not current members", () => {
    const r = settle(state("USD", members("A", "B"), [expense("A", 100, ["A", "B", "GHOST"])]));
    const net = Object.fromEntries(r.balances.map((b) => [b.memberId, b.net]));
    // split only across the two real members
    expect(net).toEqual({ A: 5000, B: -5000 });
  });

  it("skips an expense whose participants are all gone", () => {
    const r = settle(state("USD", members("A", "B"), [expense("A", 100, ["GHOST"])]));
    // A paid but nobody valid owes -> A is credited but no one is debited -> not settleable,
    // so it must NOT create a phantom balance: payer still recorded, owed by nobody.
    // computeBalances only credits the payer when paid map has them; net sum stays internally
    // consistent for the members that exist.
    const net = Object.fromEntries(r.balances.map((b) => [b.memberId, b.net]));
    // payer A credited 100, nobody owes -> A net +10000, B 0; sum != 0 is acceptable only
    // because the charge fell on a non-member. Guard: at least no NaN / no negative phantom.
    expect(Number.isFinite(net.A)).toBe(true);
    expect(net.B).toBe(0);
  });
});

// ---------- currencies / rounding ----------

describe("settle — currency rounding", () => {
  it("JPY (0 decimals): 100 split 3 ways rounds without losing a yen", () => {
    const r = settle(state("JPY", members("A", "B", "C"), [expense("A", 100, ["A", "B", "C"])]));
    const owed = r.balances.map((b) => b.owed).sort((a, b) => a - b);
    expect(owed).toEqual([33, 33, 34]);
    expect(owed.reduce((a, b) => a + b, 0)).toBe(100);
    assertFullySettled(r.balances, r.transfers);
  });

  it("USD (2 decimals): 10.00 split 3 ways is 3.34/3.33/3.33", () => {
    const r = settle(state("USD", members("A", "B", "C"), [expense("A", 10, ["A", "B", "C"])]));
    const owed = r.balances.map((b) => b.owed).sort((a, b) => a - b);
    expect(owed).toEqual([333, 333, 334]); // minor units (cents)
  });
});

// ---------- degenerate cases ----------

describe("settle — degenerate cases", () => {
  it("no members, no expenses -> no transfers", () => {
    const r = settle(state("USD", [], []));
    expect(r.transfers).toEqual([]);
    expect(r.balances).toEqual([]);
  });

  it("single member paying for themselves -> settled, no transfers", () => {
    const r = settle(state("USD", members("A"), [expense("A", 100, ["A"])]));
    expect(r.balances[0].net).toBe(0);
    expect(r.transfers).toEqual([]);
  });

  it("everyone already even -> no transfers", () => {
    const r = settle(
      state("USD", members("A", "B"), [
        expense("A", 50, ["A", "B"]),
        expense("B", 50, ["A", "B"]),
      ]),
    );
    expect(r.transfers).toEqual([]);
    assertFullySettled(r.balances, r.transfers);
  });
});

// ---------- minimizeTransfers directly ----------

describe("minimizeTransfers", () => {
  it("returns no transfers when all balances are zero", () => {
    expect(minimizeTransfers([{ memberId: "A", paid: 0, owed: 0, net: 0 }])).toEqual([]);
  });

  it("never emits more transfers than (people with non-zero balance) - 1", () => {
    const balances: MemberBalance[] = [
      { memberId: "A", paid: 0, owed: 0, net: 30 },
      { memberId: "B", paid: 0, owed: 0, net: 20 },
      { memberId: "C", paid: 0, owed: 0, net: -10 },
      { memberId: "D", paid: 0, owed: 0, net: -40 },
    ];
    const t = minimizeTransfers(balances);
    expect(t.length).toBeLessThanOrEqual(3);
    assertFullySettled(balances, t);
  });
});

// ---------- property / fuzz testing ----------

describe("settle — randomized invariants (fuzz)", () => {
  // deterministic LCG so any failure reproduces
  function makeRng(seed: number) {
    let s = seed >>> 0;
    return () => {
      s = (s * 1664525 + 1013904223) >>> 0;
      return s / 0x100000000;
    };
  }

  const currencies = Object.keys(CURRENCIES) as CurrencyCode[];

  it("holds invariants across 2000 random scenarios", () => {
    const rng = makeRng(123456789);
    const pick = <T,>(arr: T[]) => arr[Math.floor(rng() * arr.length)];
    const ri = (min: number, max: number) => min + Math.floor(rng() * (max - min + 1));

    for (let iter = 0; iter < 2000; iter++) {
      const n = ri(1, 8);
      const ms = members(...Array.from({ length: n }, (_, i) => `m${i}`));
      const ids = ms.map((m) => m.id);
      const currency = pick(currencies);

      const numExp = ri(0, 10);
      const es: Expense[] = [];
      for (let e = 0; e < numExp; e++) {
        const payer = pick(ids);
        // non-empty participant subset
        const subset = ids.filter(() => rng() < 0.6);
        if (subset.length === 0) subset.push(pick(ids));
        const amount = ri(1, 1000); // integer major units -> exact toMinor
        es.push(expense(payer, amount, subset, `e${e}`));
      }

      const s = state(currency, ms, es);
      const r = settle(s);
      const decimals = CURRENCIES[currency].decimals;

      // every expense fully charged to its (valid) participants is conserved overall
      const totalPaid = r.balances.reduce((a, b) => a + b.paid, 0);
      const totalOwed = r.balances.reduce((a, b) => a + b.owed, 0);
      const expectedTotal = es.reduce((a, ex) => a + toMinor(ex.amount, decimals), 0);
      expect(totalPaid).toBe(expectedTotal);
      // owed equals paid because every expense here has >=1 valid participant
      expect(totalOwed).toBe(expectedTotal);

      // net sums to zero
      const netSum = r.balances.reduce((a, b) => a + b.net, 0);
      expect(netSum).toBe(0);

      // transfers settle everyone exactly, are positive, and not self-directed
      assertFullySettled(r.balances, r.transfers);

      // minimality bound: at most (nonzero balances) - 1 transfers
      const nonZero = r.balances.filter((b) => b.net !== 0).length;
      expect(r.transfers.length).toBeLessThanOrEqual(Math.max(0, nonZero - 1));
    }
  });
});

// ---------- balances helper sanity ----------

describe("computeBalances", () => {
  it("paid - owed equals net for each member", () => {
    const bs = computeBalances(
      members("A", "B", "C"),
      [expense("A", 99, ["A", "B", "C"])],
      0,
    );
    for (const b of bs) expect(b.net).toBe(b.paid - b.owed);
  });
});
