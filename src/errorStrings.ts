/* 
    To DRY out the code and the tests - constants are defined for error messages
    All error messages are also saved in one central file
    to aid future development and language options.  
*/

export const NO_SETUP_ERROR =
  "A plateau and rover must be set up before issuing commands";
export const INVALID_ROVER_COMMAND = "Invalid rover command";
export const ZERO_COORD_ERROR = "Width and height must be greater than zero";
export const OUT_OF_BOUNDS =
  "X and Y must be within 0 and the plateau dimensions";
