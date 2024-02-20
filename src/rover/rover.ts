import { Plateau, Location, positionOnPlateau } from "../plateau/plateau";

export type CompassPoint = "N" | "E" | "S" | "W";
export type Orientation = CompassPoint;
// TODO: Will ned a type guard for CompassPoint/Orientation when UI is added.

export type Rover = {
  currentPosition: Location;
  directionOfTravel: Orientation;
};

// Pass in Plateau, location information and Orientation
// return Rover object which stores this data.
export const createRover = (
  plateau: Plateau,
  x: number,
  y: number,
  direction: Orientation
): Rover => {
  // TODO: Error checking
  // call positionOnPlateau to ensure that the location is within plateau range
  let position = null;
  try {
    position = positionOnPlateau(plateau, x, y);
  } catch (error) {
    throw error;
  }
  return { currentPosition: position, directionOfTravel: direction };
};

// export const spinRover = (rover: Rover, direction: Direction): Rover => {
//   return;
// };
