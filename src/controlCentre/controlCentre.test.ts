import {
  isCommand,
  processCommand,
  CommandType,
  parseInstructions,
  NO_SETUP_ERROR,
  INVALID_ROVER_COMMAND,
} from "./controlCentre";
import { Rover } from "../rover/rover";
import { OUT_OF_BOUNDS, createPlateau } from "../plateau/plateau";

describe("isCommand type guard", () => {
  test('should return false if command is not either "L, "R" or "M"', () => {
    // Arrange
    const input: string = "Z";
    // Act
    const isCommandResult = isCommand(input);
    // Assert
    expect(isCommandResult).toStrictEqual(false);
  });
  test('should return true if command is "M" for Move', () => {
    // Arrange
    const input: string = "M";
    // Act
    const isCommandResult = isCommand(input);
    // Assert
    expect(isCommandResult).toStrictEqual(true);
  });
  test('should return true if command is "L" for Left', () => {
    // Arrange
    const input: string = "L";
    // Act
    const isCommandResult = isCommand(input);
    // Assert
    expect(isCommandResult).toStrictEqual(true);
  });
  test('should return true if command is "R" for Right', () => {
    // Arrange
    const input: string = "R";
    // Act
    const isCommandResult = isCommand(input);
    // Assert
    expect(isCommandResult).toStrictEqual(true);
  });
});
describe("processCommand", () => {
  test("should update the rover's orientation when the command is 'L'", () => {
    // Arrange
    const input: CommandType = "L";
    const plateau = createPlateau(100, 100);
    const roverInput: Rover = {
      currentPosition: { x: 0, y: 0 },
      orientation: "E",
    };
    const roverOutput: Rover = {
      currentPosition: { x: 0, y: 0 },
      orientation: "N",
    };
    // Act
    const result = processCommand(input, plateau, roverInput);
    // Assert
    expect(result).toStrictEqual(roverOutput);
  });
  test("should update the rover's position when the command is 'M'", () => {
    // Arrange
    const input: CommandType = "M";
    const plateau = createPlateau(100, 100);
    const roverInput: Rover = {
      currentPosition: { x: 0, y: 0 },
      orientation: "E",
    };
    const roverOutput: Rover = {
      currentPosition: { x: 1, y: 0 },
      orientation: "E",
    };
    // Act
    const result = processCommand(input, plateau, roverInput);
    // Assert
    expect(result).toStrictEqual(roverOutput);
  });
  test("should throw an error if the next position would be out of the plateau bounds", () => {
    // Arrange
    const input: CommandType = "M";
    const plateau = createPlateau(5, 5);
    const roverInput: Rover = {
      currentPosition: { x: 5, y: 5 },
      orientation: "E",
    };
    // Act and Assert
    expect(() => processCommand(input, plateau, roverInput)).toThrow(
      RangeError(OUT_OF_BOUNDS)
    );
  });
});

describe("parseInstructions", () => {
  test("should ouput a position of NE corner of the plateau as the instructions direct", () => {
    // Arrange
    const instructions = ["10 10", "7 7 N", "RMLMRMLMRMLM"];
    const expectedOutput = ["10 10 N"];
    // Act
    const actualOutput = parseInstructions(instructions);
    // Assert
    // Ensure that the result has the same types and structure as we expect (strict)
    expect(actualOutput).toStrictEqual(expectedOutput);
  });
  test("should output a position of the SW corner of the plateau as the instructions direct", () => {
    // Arrange
    const instructions = ["10 10", "7 3 S", "LMMMRMMM"];
    const expectedOutput = ["10 0 S"];
    // Act
    const actualOutput = parseInstructions(instructions);
    // Assert
    // Ensure that the result has the same types and structure as we expect (strict)
    expect(actualOutput).toStrictEqual(expectedOutput);
  });

  test("should output a position of the centre of the plateau as the instructions direct", () => {
    // Arrange
    const instructions = ["6 10", "4 9 N", "LLMMMMRM"];
    const expectedOutput = ["3 5 W"];
    // Act
    const actualOutput = parseInstructions(instructions);
    // Assert
    // Ensure that the result has the same types and structure as we expect (strict)
    expect(actualOutput).toStrictEqual(expectedOutput);
  });

  test("should throw a type error if a command is not in the list of valid commands", () => {
    // Arrange
    // E.g. "LRMZMM" -> all subsequent commands should be ignored
    const instructions = ["5 5", "0 0 N", "LRZMM"];
    // Act & Assert
    expect(() => parseInstructions(instructions)).toThrow(
      TypeError(INVALID_ROVER_COMMAND)
    );
  });
  test("should throw an Error if instructions do not set up a plateau first", () => {
    // Arrange
    const instructions = ["0 0 N", "LRMM"];
    // Act & Assert
    expect(() => parseInstructions(instructions)).toThrow(
      Error(NO_SETUP_ERROR)
    );
  });
  test("should throw an Error if instructions do not set up a rover first", () => {
    // Arrange
    const instructions = ["5 5", "LRMM"];
    // Act & Assert
    expect(() => parseInstructions(instructions)).toThrow(
      Error(NO_SETUP_ERROR)
    );
  });
  test("should output a rover position of '1 3 N', '5 1 E' as the instructions direct", () => {
    // Arrange
    const instructions = ["5 5", "1 2 N", "LMLMLMLMM", "3 3 E", "MMRMMRMRRM"];
    const expectedOutput = ["1 3 N", "5 1 E"];
    // Act
    const actualOuput = parseInstructions(instructions);
    // Assert
    // Ensure that the result has the same types and structure as we expect (strict)
    expect(actualOuput).toStrictEqual(expectedOutput);
  });
});
