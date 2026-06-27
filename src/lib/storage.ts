import { emptyState, type SplitState } from "./types";

const KEY = "splitwhom:v1";

export function loadState(): SplitState {
  if (typeof window === "undefined") return emptyState();
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return emptyState();
    const parsed = JSON.parse(raw) as Partial<SplitState>;
    return {
      ...emptyState(),
      ...parsed,
      members: parsed.members ?? [],
      expenses: parsed.expenses ?? [],
    };
  } catch {
    return emptyState();
  }
}

export function saveState(state: SplitState): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    // storage full or blocked; non-fatal
  }
}
