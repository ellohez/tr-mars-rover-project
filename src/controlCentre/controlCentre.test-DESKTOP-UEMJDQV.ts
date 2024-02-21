import { isCommand, processCommand } from "./controlCentre";

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
  test("should call the spinRover function when the command is 'L'", () => {
    // Arrange
    const input = "L";
    // Act & Assert
    expect(processCommand(input)).toCall;
  });
  test("should call the spinRover function when the command is 'R", () => {});
  test("should call the moveRover function when the command is 'M'", () => {});
});

describe("parseInput", () => {
  test("should throw a TypeError if the command is not in the list of valid commands", () => {});
});
