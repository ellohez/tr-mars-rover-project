import { isCommand } from "./commandService";

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
