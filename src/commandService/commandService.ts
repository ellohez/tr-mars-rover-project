import { Direction } from "../rover/rover";
type CommandType = Direction | "M";
type CommandValues = CommandType[];

const CommandsArray: CommandValues = ["L", "R", "M"];

export const isCommand = (
  input: string | CommandType
): input is CommandType => {
  let testArray = [...CommandsArray.toString()];
  return testArray.includes(input);
};

export const parseInput = (input: string) => {
  // determine if input is a plateau setup | rover placement | rover command set
  // if input is number number -> createPlateau and store
  // next line of input should be number number Compass point -> createRover and store
  // next line should be letterletterletter - all valid commands
  // split instruction string into separate commands
  // test isCommand - if passes -> processCommand.
};

export const processOutput = (): string => {
  // get rover's current position and return as a string.
  return "";
};

export const processCommand = (command: string) => {
  // case L / R -> spinRover
  // case M -> moveRover
};