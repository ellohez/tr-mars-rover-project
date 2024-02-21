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
