import { Plateau, Location, createPlateau, positionOnPlateau } from "./plateau";
import { ZERO_COORD_ERROR } from "../errorStrings";

describe("createPlateau", () => {
  test("should create a regular square shaped plateau and return it", () => {
    // Arrange
    const width = 10;
    const height = 10;
    // Act
    const result: Plateau = createPlateau(width, height);
    // Assert
    expect(result).toEqual({ size: { width: width, height: height } });
  });

  test("should create a regular rectangular shaped plateau and return it", () => {
    // Arrange
    const width = 10;
    const height = 100;
    // Act
    const result: Plateau = createPlateau(width, height);
    // Assert
    expect(result).toEqual({ size: { width: width, height: height } });
  });

  test("should throw an error if x is 0", () => {
    // Arrange
    const width = 0;
    const height = 10;
    // Act and Assert
    expect(() => createPlateau(width, height)).toThrow(
      new RangeError(ZERO_COORD_ERROR)
    );
  });

  test("should throw an error if y is 0", () => {
    // Arrange
    const width = 10;
    const height = 0;
    // Act and Assert
    expect(() => createPlateau(width, height)).toThrow(
      new RangeError(ZERO_COORD_ERROR)
    );
  });

  test("should throw an error if both dimensions are 0", () => {
    // Arrange
    const width = 0;
    const height = 0;
    // Act and Assert
    expect(() => createPlateau(width, height)).toThrow(
      new RangeError(ZERO_COORD_ERROR)
    );
  });
});

describe("positionOnPlateau", () => {
  test("should return a valid position object if x and y are within boundaries (square)", () => {
    // Arrange
    const plateau = createPlateau(100, 100);
    const x = 50;
    const y = 50;
    // Act
    const resultLocation: Location = positionOnPlateau(plateau, x, y);
    // Assert
    expect(resultLocation).toEqual({ x: x, y: y });
  });
  test("should return a valid position object if x and y are within boundaries (rectangle)", () => {
    // Arrange
    const plateau = createPlateau(150, 100);
    const x = 150;
    const y = 50;
    // Act
    const resultLocation: Location = positionOnPlateau(plateau, x, y);
    // Assert
    expect(resultLocation).toEqual({ x: x, y: y });
  });
  test("should throw an error if the position is out of bounds of the plateau", () => {
    // Arrange
    const plateau = createPlateau(100, 100);
    const x = 50;
    const y = 50;
    // Act & Assert
    const resultLocation: Location = positionOnPlateau(plateau, x, y);
    // Assert
    expect(resultLocation).toEqual({ x: x, y: y });
  });
  
});
