export type Dimensions = {
  width: number;
  length: number;
};

export type Plateau = {
  size: Dimensions;
};

export type Location = {
  x: number;
  y: number;
};

export const createPlateau = (width: number, length: number): Plateau => {
  if (width <= 0 || length <= 0) {
    throw new RangeError("Width and length must be greater than zero");
  }

  return { size: { width: width, length: length } };
};

export const positionOnPlateau = (
  plateau: Plateau,
  x: number,
  y: number
): Location => {
  return { x: 0, y: 0 };
};
