import { Plateau, Location, positionOnPlateau } from "../plateau/plateau";

const DIRECTION_STRINGS = ["L", "R"] as const;
const COMPASS_POINT_STRINGS = ["N", "E", "S", "W"] as const;

export type Direction = (typeof DIRECTION_STRINGS)[number];

export type Orientation = (typeof COMPASS_POINT_STRINGS)[number];
// TODO: Will ned a type guard for CompassPoint/Orientation when UI is added.

export type Rover = {
  currentPosition: Location;
  orientation: Orientation;
};

export const isOrientation = (
  input: string | Orientation
): input is Orientation => {
  let testArray = [...COMPASS_POINT_STRINGS.toString()];
  return testArray.includes(input);
};

// Pass in Plateau, location information and Orientation
// return Rover object which stores this data.
export const createRover = (
  plateau: Plateau,
  x: number,
  y: number,
  direction: Orientation
): Rover => {
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

    newIndex > COMPASS_POINT_STRINGS.length - 1
      ? (newOrientation = COMPASS_POINT_STRINGS[0])
      : (newOrientation = COMPASS_POINT_STRINGS[newIndex]);
  } else {
    const newIndex = index - 1;
    newIndex < 0
      ? (newOrientation =
          COMPASS_POINT_STRINGS[COMPASS_POINT_STRINGS.length - 1])
      : (newOrientation = COMPASS_POINT_STRINGS[newIndex]);
  }
  return {
    ...rover,
    orientation: newOrientation,
  };
};

export const moveRover = (plateau: Plateau, rover: Rover): Rover => {
  let newPosition = { x: rover.currentPosition.x, y: rover.currentPosition.y };

  switch (rover.orientation) {
    case "N":
      newPosition.y += 1;
      break;
    case "S":
      newPosition.y -= 1;
      break;
    case "E":
      newPosition.x += 1;
      break;
    case "W":
      newPosition.x -= 1;
      break;
  }

  try {
    newPosition = positionOnPlateau(plateau, newPosition.x, newPosition.y);
  } catch (error) {
    throw error;
  }
  return { ...rover, currentPosition: newPosition };
};
