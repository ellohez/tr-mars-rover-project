import { createPlateau, OUT_OF_BOUNDS } from "../plateau/plateau";
import {
  Rover,
  Orientation,
  createRover,
  spinRover,
  moveRover,
} from "../rover/rover";

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
describe("moveRover", () => {
  test("should increase Y position on grid when rover moves North", () => {
    // Arrange
    const x = 5;
    const y = 5;
    const rover: Rover = {
      currentPosition: { x: x, y: y },
      orientation: "N",
    };
    const plateau = createPlateau(10, 10);
    // Act
    const newRover = moveRover(plateau, rover);
    // Assert
    expect(newRover).toEqual({
      currentPosition: { x: x, y: y + 1 },
      orientation: "N",
    });
  });

  test("should decrease Y position on grid when rover moves South", () => {
    // Arrange
    const x = 5;
    const y = 5;
    const rover: Rover = {
      currentPosition: { x: x, y: y },
      orientation: "S",
    };
    const plateau = createPlateau(10, 10);
    // Act
    const newRover = moveRover(plateau, rover);
    // Assert
    expect(newRover).toEqual({
      currentPosition: { x: x, y: y - 1 },
      orientation: "S",
    });
  });

  test("should increase X position on grid when rover moves East", () => {
    // Arrange
    const x = 5;
    const y = 5;
    const rover: Rover = {
      currentPosition: { x: x, y: y },
      orientation: "E",
    };
    const plateau = createPlateau(10, 10);
    // Act
    const newRover = moveRover(plateau, rover);
    // Assert
    expect(newRover).toEqual({
      currentPosition: { x: x + 1, y: y },
      orientation: "E",
    });
  });

  test("should decrease X position on grid when rover moves West", () => {
    // Arrange
    const x = 5;
    const y = 5;
    const rover: Rover = {
      currentPosition: { x: x, y: y },
      orientation: "W",
    };
    const plateau = createPlateau(10, 10);
    // Act
    const newRover = moveRover(plateau, rover);
    // Assert
    expect(newRover).toEqual({
      currentPosition: { x: x - 1, y: y },
      orientation: "W",
    });
  });
  test("should throw an error if we try to move the rover outside of the plateau", () => {
    // Arrange
    const x = 10;
    const y = 10;
    const rover: Rover = {
      currentPosition: { x: x, y: y },
      orientation: "N",
    };
    const plateau = createPlateau(10, 10);
    // Act & Assert
    expect(() => moveRover(plateau, rover)).toThrow(RangeError(OUT_OF_BOUNDS));
  });
});
