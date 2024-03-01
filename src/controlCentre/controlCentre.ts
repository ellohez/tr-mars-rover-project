import {
  Direction,
  Rover,
  createRover,
  moveRover,
  spinRover,
  isOrientation,
} from "../rover/rover";

import { INVALID_ROVER_COMMAND, NO_SETUP_ERROR } from "../errorStrings";
import { Plateau, createPlateau } from "../plateau/plateau";
import { isErr, Err, CreateErr } from "../errorHandling";

export type CommandType = Direction | "M";
type CommandValues = CommandType[];

const CommandsArray: CommandValues = ["L", "R", "M"];
let rover: Rover;
let plateau: Plateau;

export const isCommand = (
  input: string | CommandType
): input is CommandType => {
  let testArray = [...CommandsArray.toString()];
  return testArray.includes(input);
};

export const processCommand = (
  command: CommandType,
  plateau: Plateau,
  rover: Rover
): Err | Rover => {
  switch (command) {
    case "M":
      return moveRover(plateau, rover);
    case "L":
    case "R":
      return spinRover(rover, command);
  }
};

export const parseInstructions = (input: string[]): Err | string[] => {
  const outputArray: Array<string> = [];
  let plateauExists = false;
  let roverExists = false;

  for (const line of input) {
    // line is not a string of commands
    if (line.includes(" ")) {
      let inputArray = line.split(" ").filter((item) => item !== " ");
      if (inputArray.length === 3 && plateau) {
        let x = parseInt(inputArray[0]);
        let y = parseInt(inputArray[1]);
        if (isOrientation(inputArray[2])) {
          const result = createRover(plateau, x, y, inputArray[2]);
          if (!isErr(result)) {
            rover = result as typeof rover;
          } else {
            return result;
          }
          roverExists = true;
        }
      } else if (inputArray.length === 2) {
        const width = parseInt(inputArray[0]);
        const height = parseInt(inputArray[1]);
        plateau = createPlateau(width, height);
        plateauExists = true;
      }
    } else {
      if (plateauExists && roverExists) {
        let commandArray = line.split("");
        for (let command of commandArray) {
          if (isCommand(command)) {
            let result = processCommand(command, plateau, rover);
            if (!isErr(result)) {
              rover = result;
            }
          } else {
            throw TypeError(INVALID_ROVER_COMMAND);
          }
        }
        outputArray.push(
          `${rover.currentPosition.x} ${rover.currentPosition.y} ${rover.orientation}`
        );
      } else if (!plateauExists || !roverExists) {
        throw Error(NO_SETUP_ERROR);
      }
    }
  }
  return outputArray;
};
