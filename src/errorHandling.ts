const ERR = Symbol("ERROR");

// To be able to handle errors appropriately based on their type.
type ErrorTypes = "rover" | "plateau" | "control centre" | "unknown";

// Symbol is used as a key for the object property.
type Err = {
  [ERR]: true;
  error: unknown;
  type?: ErrorTypes;
};

// Type guard
export const isErr = (x: unknown): x is Err => {
  return typeof x === "object" && x != null && ERR in x;
};

// Error creation
export const Err = (message: string, type?: string) => {
  return { [ERR]: true, error: message, type: type ? type : "unknown" };
};
