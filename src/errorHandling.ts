const ERR = Symbol("ERROR");

// To be able to handle errors appropriately based on their type.
export const ERROR_TYPES = [
  "rover",
  "plateau",
  "control centre",
  "unknown",
] as const;

type ErrorType = (typeof ERROR_TYPES)[number];

// Symbol is used as a key for the object property.
export type Err = {
  [ERR]: true;
  error: unknown;
  type?: ErrorType;
};

// Type guard
export const isErr = (x: unknown): x is Err => {
  return typeof x === "object" && x != null && ERR in x;
};

const isErrorType = (type: string) => {
  return ERROR_TYPES.includes(type as ErrorType);
};

// TODO: Make the return type of this function Err?
// Error creation
export const CreateErr = (message: string, type?: string) => {
  return {
    [ERR]: true,
    error: message,
    type: isErrorType(type as string) ? type : "unknown",
  };
};
