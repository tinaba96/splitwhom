import { describe, it, expect } from "vitest";
import { encodeShare, decodeShare } from "./share";
import type { SplitState } from "./types";

// Compare two states by structure (ids are regenerated on decode, so map them to names).
function normalize(s: SplitState) {
  const nameOf = (id: string) => s.members.find((m) => m.id === id)?.name ?? "?";
  return {
    title: s.title,
    currency: s.currency,
    members: s.members.map((m) => ({ name: m.name, note: m.note })),
    expenses: s.expenses.map((e) => ({
      payer: nameOf(e.payerId),
      description: e.description,
      amount: e.amount,
      participants: e.participantIds.map(nameOf),
      caps: e.caps
        ? Object.fromEntries(Object.entries(e.caps).map(([id, c]) => [nameOf(id), c]))
        : undefined,
    })),
  };
}

const sample: SplitState = {
  title: "Camping trip",
  currency: "CAD",
  members: [
    { id: "a", name: "Alex", note: "alex@example.com" },
    { id: "b", name: "Ben" },
    { id: "c", name: "Chloe", note: "@chloe-paypay" },
  ],
  expenses: [
    { id: "1", payerId: "a", description: "Board", amount: 600, participantIds: ["a", "b", "c"] },
    {
      id: "2",
      payerId: "c",
      description: "Food",
      amount: 300,
      participantIds: ["a", "b", "c"],
      caps: { a: 50 },
    },
  ],
};

describe("share encode/decode", () => {
  it("round-trips a split (structure preserved, locale included)", () => {
    const encoded = encodeShare(sample, "ja");
    const decoded = decodeShare(encoded);
    expect(decoded).not.toBeNull();
    expect(decoded!.locale).toBe("ja");
    expect(normalize(decoded!.state)).toEqual(normalize(sample));
  });

  it("preserves caps and participant relationships", () => {
    const decoded = decodeShare(encodeShare(sample, "en"))!;
    const food = decoded.state.expenses.find((e) => e.description === "Food")!;
    const alexId = decoded.state.members.find((m) => m.name === "Alex")!.id;
    expect(food.caps).toEqual({ [alexId]: 50 });
  });

  it("produces a URL-safe string (no #, ?, & or spaces)", () => {
    const encoded = encodeShare(sample, "en");
    expect(encoded).not.toMatch(/[#?&\s]/);
  });

  it("returns null for invalid or empty input", () => {
    expect(decodeShare("")).toBeNull();
    expect(decodeShare("not-valid-data!!!")).toBeNull();
  });
});
