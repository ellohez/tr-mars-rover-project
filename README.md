# Mars Rover Control Center

## Introduction
The surface of Mars is represented by a Plateau. You can make the assumption that the
Plateau is a square/rectangular grid for the purpose of this task.
Rovers navigate the Plateau so they can use their special cameras and robot arms to collect samples back to Planet Earth.
This program implements the rules for a Mars Rover. 

### Assumptions
* That each rover inhabits their own plateau to collect samples. 
* Execution of commands will stop if a rogue command is encountered in the list. Commands up to that point will however be executed. 
* createRover could be refactored to summon an existing rover. 

### Approaches
* Rather than classes, I tried to take a more JavaScript functional programming approach, developing functions that do not mutate parameters but instead return a new, updated object. This was deemed simpler to test. 
* To ensure a stable application before user input is introduced, this project is currently receiving input via the unit tests.
* TDD was used to test-drive the solution as it was built.
* The project aimed to produce production quality, readable and scalable code. 
* The unit test were created using Jest and the project maintains > 80% coverage 
* The non-mutating functional approach that returns new instances of the objects is deemed to be a very JS way. Is simpler to test and will hopefully make the introduction of async functionality simpler.

## Next sprint
+ [ ] Add tests for the missing lines to ensure 100% test coverage
+ [ ] rename createRover() - placeRover()
+ [ ] Create parsePlateauCommand and parseRoverCommand functions to reduce the code in parseInstructions and make it more readable

## Ideas for further development
+ [ ] Use Async promises for all Rover communication and output- to allow for delay in Earth to Mars communication (and vice versa)
+ [ ] User interface - at least CLI to help shape how this will look
+ [ ] Other vehicldes, not just rovers
+ [ ] Collision detection, to ensure that rovers do not 
+ [ ] Obstacle mapping, placing of obstacles on the plateau, to be avoided with collision detection
+ [ ] Programmable rover - using a file input
+ [ ] Circular shaped plateau - extend existing functionality to allow two dimension inputs for radius and circumference
+ [ ] Irregular shaped plateau - to better mirror the terrain of the planet
+ [ ] Battery tracker - Give an indication of the current battery level of the rover and use a formula to estimate the reduction in battery life for each command executed.

## Instructions
### Prerequisites
* Node version 19.18.2
* npm version 9.8.1
### Clone the repository
-   use git to clone this repo to your local environment
#### Setup and run

Install dependencies: `npm install`

Run tests: `npm test` this automatically runs all tests and creates the coverage report
To view the coverage report - open `coverage\lcov-report\index.html` in a browser

