import { Direction, Rover, moveRover, spinRover } from "../rover/rover";
import { Plateau } from "../plateau/plateau";
export type CommandType = Direction | "M";
type CommandValues = CommandType[];

const CommandsArray: CommandValues = ["L", "R", "M"];

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
// parseInput()
// determine if input is a plateau setup | rover placement | rover command set
// if plateau - set up and store?
// if rover placement - set up and store?
// if command set
// split instruction string into separate commands
export const parseInput = (input: string) => {
  // if input is number, number ->
  // test isCommand - if passes -> processCommand.
};
