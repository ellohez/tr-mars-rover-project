export type Dimensions = {
  x: number;
  y: number;
};
// Can we create a 2d array - NEEDED?
// export type Grid = number[][];

export const createPlateau = (width: number, length: number): Dimensions => {
  if (width <= 0 || length <= 0) {
    throw new RangeError("Width and length must be greater than zero");
  }

  return { x: width, y: length };
};
