// Tiny external store backed by localStorage, read through useSyncExternalStore.
// This is the React-blessed way to source render state from a browser API: the
// server renders the empty snapshot, the client re-renders with the persisted
// snapshot after hydration — no effect, no setState-in-effect, no mismatch.

import { useSyncExternalStore } from "react";
import { type SplitState, emptyState } from "./types";
import { loadState, saveState } from "./storage";

type Updater = SplitState | ((prev: SplitState) => SplitState);

// stable empty reference for SSR (getServerSnapshot must be referentially stable)
const SERVER_SNAPSHOT = emptyState();

let current: SplitState | null = null;
const listeners = new Set<() => void>();

function getSnapshot(): SplitState {
  if (current === null) current = loadState();
  return current;
}

function getServerSnapshot(): SplitState {
  return SERVER_SNAPSHOT;
}

function subscribe(cb: () => void): () => void {
  listeners.add(cb);
  return () => listeners.delete(cb);
}

export function setSplitState(updater: Updater): void {
  const prev = getSnapshot();
  const next = typeof updater === "function" ? updater(prev) : updater;
  if (next === prev) return;
  current = next;
  saveState(next);
  for (const cb of listeners) cb();
}

export function useSplitState(): [SplitState, typeof setSplitState] {
  const state = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return [state, setSplitState];
}
