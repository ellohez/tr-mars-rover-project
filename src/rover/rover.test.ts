import { createPlateau } from "../plateau/plateau";
import { Rover, createRover, spinRover, Orientation } from "../rover/rover";

describe("createRover function", () => {
  test("should create a rover at the given position", () => {
    // Arrange
    const width = 10;
    const length = 10;
    const x = 5;
    const y = 5;
    const plateau = createPlateau(width, length);
    const direction: Orientation = "N";
    // Act
    const resultRover = createRover(plateau, x, y, direction);
    // Assert
    expect(resultRover).toEqual({
      currentPosition: { x: x, y: y },
      orientation: direction,
    });
  });

  test("should throw an error when we try and place a rover outside the plateau", () => {
    const width = 10;
    const length = 10;
    const x = 50;
    const y = 50;
    const plateau = createPlateau(width, length);
    const direction = "N";
    // Act & Assert
    expect(() => createRover(plateau, x, y, direction)).toThrow(RangeError);
  });
});

describe("spinRover function", () => {
  test("should update the orientation of the rover to North if we spin RIGHT from West", () => {
    // Arrange
    const rover: Rover = {
      currentPosition: { x: 10, y: 10 },
      orientation: "W",
    };
    // Act
    const newRover = spinRover(rover, "R");
    // Assert
    expect(newRover.orientation).toBe("N");
  });
  test("should update the orientation of the rover to West if we spin LEFT from North", () => {
    // Arrange
    const rover: Rover = {
      currentPosition: { x: 10, y: 10 },
      orientation: "N",
    };
    // Act
    const newRover = spinRover(rover, "L");
    // Assert
    expect(newRover.orientation).toBe("W");
  });
  test("should update the orientation of the rover to East if we spin LEFT from South", () => {
    // Arrange
    const rover: Rover = {
      currentPosition: { x: 10, y: 10 },
      orientation: "S",
    };
    // Act
    const newRover = spinRover(rover, "L");
    // Assert
    expect(newRover.orientation).toBe("E");
  });
  test("should update the orientation of the rover to South if we spin RIGHT from East", () => {
    // Arrange
    const rover: Rover = {
      currentPosition: { x: 10, y: 10 },
      orientation: "E",
    };
    // Act
    const newRover = spinRover(rover, "R");
    // Assert
    expect(newRover.orientation).toBe("S");
  });
});


