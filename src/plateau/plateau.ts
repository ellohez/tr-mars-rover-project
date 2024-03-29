import { ZERO_COORD_ERROR, OUT_OF_BOUNDS } from "../errorStrings";
import { CreateErr, Err } from "../errorHandling";

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

export const createPlateau = (width: number, height: number): Plateau => {
  if (width <= 0 || height <= 0) {
    throw new RangeError(ZERO_COORD_ERROR);
  }

  return { size: { width: width, height: height } };
};

export const positionOnPlateau = (
  plateau: Plateau,
  x: number,
  y: number
): Err | Location => {
  if (x < 0 || y < 0 || x > plateau.size.width || y > plateau.size.height) {
    return CreateErr(OUT_OF_BOUNDS, "Plateau") as Err;
  }

  return { x: x, y: y };
};
