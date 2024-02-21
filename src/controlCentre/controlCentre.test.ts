import { isCommand, processCommand, CommandType } from "./controlCentre";
import { Rover } from "../rover/rover";
import { createPlateau } from "../plateau/plateau";

describe("isCommand type guard", () => {
  test('should return false if command is not either "L, "R" or "M"', () => {
    // Arrange
    const input: string = "Z";
    // Act
    const isCommandResult = isCommand(input);
    // Assert
    expect(isCommandResult).toEqual(false);
  });
  test('should return true if command is "M" for Move', () => {
    // Arrange
    const input: string = "M";
    // Act
    const isCommandResult = isCommand(input);
    // Assert
    expect(isCommandResult).toEqual(true);
  });
  test('should return true if command is "L" for Left', () => {
    // Arrange
    const input: string = "L";
    // Act
    const isCommandResult = isCommand(input);
    // Assert
    expect(isCommandResult).toEqual(true);
  });
  test('should return true if command is "R" for Right', () => {
    // Arrange
    const input: string = "R";
    // Act
    const isCommandResult = isCommand(input);
    // Assert
    expect(isCommandResult).toEqual(true);
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
    expect(result).toEqual(roverOutput);
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
    expect(result).toEqual(roverOutput);
  });
});

describe("parseInput", () => {
  test("should throw a TypeError if the command is not in the list of valid commands", () => {});
});
