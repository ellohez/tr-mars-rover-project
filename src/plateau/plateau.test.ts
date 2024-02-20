import { Plateau, Location, createPlateau, positionOnPlateau } from "./plateau";

describe("createPlateau", () => {
  test("should return a dimension with the ", () => {
    // Arrange
    const width = 10;
    const length = 10;
    // Act
    const result: Plateau = createPlateau(width, length);
    // Assert
    expect(result).toEqual({ size: { width: width, length: length } });
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

describe("positionOnPlateau", () => {
  test("should return a valid position object if x and y are within boundaries", () => {
    // Arrange
    const plateau = createPlateau(100, 100);
    const x = 50;
    const y = 50;
    // Act
    const resultLocation: Location = positionOnPlateau(plateau, x, y);
    // Assert
    expect(resultLocation).toEqual({ x: x, y: y });
  });
});
