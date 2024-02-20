import { Plateau, Location, positionOnPlateau } from "../plateau/plateau";

const DIRECTION_STRINGS = ["L", "R"] as const;
type Direction = (typeof DIRECTION_STRINGS)[number];
type Move = Direction | "M";

const COMPASS_POINT_STRINGS = ["N", "E", "S", "W"] as const;
export type Orientation = (typeof COMPASS_POINT_STRINGS)[number];
// TODO: Will ned a type guard for CompassPoint/Orientation when UI is added.

export type Rover = {
  currentPosition: Location;
  orientation: Orientation;
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
  return { currentPosition: position, orientation: direction };
};

export const spinRover = (rover: Rover, direction: Direction): Rover => {
  let newOrientation: Orientation = rover.orientation;
  const index: number = COMPASS_POINT_STRINGS.indexOf(rover.orientation);

  // Turning left = go back one compass point
  // Turning right = go forward one compass point
  // Wrap around the array in a circular fashion
  // so the compass point before N becomes W
  // and the one after W becomes N
  if (direction === "R") {
    const newIndex = index + 1;
    if (newIndex > COMPASS_POINT_STRINGS.length - 1) {
      newOrientation = COMPASS_POINT_STRINGS[0];
    } else {
      newOrientation = COMPASS_POINT_STRINGS[newIndex];
    }
  } else {
    const newIndex = index - 1;
    if (newIndex < 0) {
      newOrientation = COMPASS_POINT_STRINGS[COMPASS_POINT_STRINGS.length - 1];
    } else {
      newOrientation = COMPASS_POINT_STRINGS[newIndex];
    }
  }
  return {
    ...rover,
    orientation: newOrientation,
  };
};
