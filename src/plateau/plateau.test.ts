import {
  Plateau,
  Location,
  createPlateau,
  positionOnPlateau,
  ZERO_COORD_ERROR,
} from "./plateau";

describe("createPlateau", () => {
  test("should return a dimension with the ", () => {
    // Arrange
    const width = 10;
    const height = 10;
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
