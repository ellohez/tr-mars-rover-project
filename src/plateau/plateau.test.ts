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

  test("should throw an error if either dimension is < 0", () => {});

  test("should throw an error if both dimensions are 0", () => {});
});
