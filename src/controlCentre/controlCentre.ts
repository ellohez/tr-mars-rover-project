import {
  Direction,
  Rover,
  createRover,
  moveRover,
  spinRover,
  isOrientation,
} from "../rover/rover";
import { Plateau, createPlateau } from "../plateau/plateau";
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
): Rover | null => {
  switch (command) {
    case "M":
      try {
        return moveRover(plateau, rover);
      } catch (error) {
        throw error;
      }
    case "L":
    case "R":
      try {
        return spinRover(rover, command);
      } catch (error) {
        throw error;
      }
    default:
      return null;
  }
};

export const parseInstructions = (input: string[]): string[] => {
  const outputArray: Array<string> = [];

  for (const line of input) {
    // line is not a string of commands
    if (line.includes(" ")) {
      let inputArray = line.split(" ").filter((item) => item !== " ");
      if (inputArray.length === 3 && plateau) {
        let x = parseInt(inputArray[0]);
        let y = parseInt(inputArray[1]);
        if (isOrientation(inputArray[2])) {
          rover = createRover(plateau, x, y, inputArray[2]);
        }
      } else if (inputArray.length === 2) {
        const width = parseInt(inputArray[0]);
        const height = parseInt(inputArray[1]);
        plateau = createPlateau(width, height);
      }
    } else {
      if (plateau && rover) {
        let commandArray = line.split("");
        for (let command of commandArray) {
          if (isCommand(command)) {
            let result = processCommand(command, plateau, rover);
            if (result) {
              rover = result;
            }
          }
        }
        outputArray.push(
          `${rover.currentPosition.x} ${rover.currentPosition.y} ${rover.orientation}`
        );
      } else {
        throw Error(
          "A plateau and rover must be set up before issuing commands"
        );
      }
    }
  }
  return outputArray;
};
