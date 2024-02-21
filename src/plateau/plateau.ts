export type Dimensions = {
  width: number;
  height: number;
};

export type Plateau = {
  size: Dimensions;
};

export type Location = {
  x: number;
  y: number;
};

// To DRY out the code and the tests - constants are defined for error messages
export const ZERO_COORD_ERROR = "Width and length must be greater than zero";
export const OUT_OF_BOUNDS =
  "X and Y must be within 0 and the plateau dimensions";

export const createPlateau = (width: number, length: number): Plateau => {
  if (width <= 0 || length <= 0) {
    throw new RangeError(ZERO_COORD_ERROR);
  }

  return { size: { width: width, height: length } };
};

export const positionOnPlateau = (
  plateau: Plateau,
  x: number,
  y: number
): Location => {
  if (x < 0 || y < 0 || x > plateau.size.width || y > plateau.size.height) {
    throw new RangeError(OUT_OF_BOUNDS);
  }

  return { x: x, y: y };
};
