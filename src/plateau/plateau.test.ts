import { Dimensions, createPlateau } from "./plateau";

describe("createPlateau", () => {
  test("should return a dimension with the ", () => {
    // Arrange
    const width = 10;
    const length = 10;
    // Act
    const result: Dimensions = createPlateau(width, length);
    // Assert
    expect(result).toEqual({ x: width, y: length });
  });

  test("should throw an error if x is 0", () => {
    // Arrange
    const width = 0;
    const length = 10;
    // Act and Assert
    expect(() => createPlateau(width, length)).toThrow(
      new RangeError("Width and length must be greater than zero")
    );
  });

  test("should throw an error if y is 0", () => {
    // Arrange
    const width = 10;
    const length = 0;
    // Act and Assert
    expect(() => createPlateau(width, length)).toThrow(
      new RangeError("Width and length must be greater than zero")
    );
  });

  test("should throw an error if both dimensions are 0", () => {
    // Arrange
    const width = 0;
    const length = 0;
    // Act and Assert
    expect(() => createPlateau(width, length)).toThrow(
      new RangeError("Width and length must be greater than zero")
    );
  });
});
