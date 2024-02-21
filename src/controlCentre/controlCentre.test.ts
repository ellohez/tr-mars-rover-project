import {
  isCommand,
  processCommand,
  CommandType,
  parseInstructions,
} from "./controlCentre";
import { Rover } from "../rover/rover";
import { createPlateau } from "../plateau/plateau";

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
    // Act
    // Assert
  });

  test("should output a position of the centre of the plateau as the instructions direct", () => {
    // Arrange
    // Act
    // Assert
  });

  test("should throw a TypeError if a command is not in the list of valid commands", () => {
    // E.g. "LRMZMM" -> all subsequent commands should be ignored
    // Arrange
    // Act
    // Assert
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
