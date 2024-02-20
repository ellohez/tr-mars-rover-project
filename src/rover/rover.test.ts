import { createPlateau } from "../plateau/plateau";
import { Orientation, createRover } from "../rover/rover";

describe("createRover function", () => {
  test("should create a rover at the given position", () => {
    // Arrange
    const width = 10;
    const length = 10;
    const x = 5;
    const y = 5;
    const plateau = createPlateau(width, length);
    const direction = "N";
    // Act
    const resultRover = createRover(plateau, x, y, direction);
    // Assert
    expect(resultRover).toEqual({
      currentPosition: { x: x, y: y },
      directionOfTravel: direction,
    });
  });

  test("should throw an error when we try and place a rover outside the plateau", () => {
    const width = 10;
    const length = 10;
    const x = 5;
    const y = 5;
    const plateau = createPlateau(width, length);
    const direction = "N";
    // Act & Assert
    expect(() => createRover(plateau, x, y, direction)).toThrow(RangeError);
  });
});
