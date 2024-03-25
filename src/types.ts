// Modify your NodeState type definition like this:
export interface NodeState {
  killed: boolean;
  x: Value | null;
  decided: boolean | null;
  k: number | null;
}


export type Value = 0 | 1 | "?";
