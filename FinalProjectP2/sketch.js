// variables controllig position and speed of moving balls
let xpos = 125;
let ypos = 0;
let ballspeed = 10;
let circleSize = 550;
//sets up variables controlling the size of circles
let circleSizes = [550, 550, 550, 550];
let circleSizeGetVeryBigOne = 550;
let circleSizeGetVeryBigTwo = 550;
let circleSizeGetVeryBigThree = 550;
let circleSizeGetVeryBigFour = 550;
//
let quadOneMoving = false;
let quadTwoMoving = false;
let quadThreeMoving = false;
let quadFourMoving = false;
//these set the different speeds at which the circles grow and shrink
let growthRateOne = 90;
let growthRateTwo = 50;
let growthRateThree = 120;
let growthRateFour = 300;
//determines when they shrink. until the reach their limit, shrink is false. Once true, they shrink
let circleSizeActuallyGetSmallOne = false;
let circleSizeActuallyGetSmallTwo = false;
let circleSizeActuallyGetSmallThree = false;
let circleSizeActuallyGetSmallFour = false;

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {

    background(0, 0, 0);
//makes circles appear once clicked
    if (mouseIsPressed) {
      //this section determines which quad is being pressed
        if (mouseX > 0 && mouseX < width / 2) {
            if (mouseY > 0 && mouseY < height / 2) {
                //Quad 1 clicked
                quadOneMoving = !quadOneMoving;
                //using an array to select my circle
                circleSizes[0] = circleSize;
                //stops circle from shrinking until it reaches full size
                circleSizeActuallyGetSmallOne = false;
            }
            if (mouseY > height / 2 && mouseY < height) {
                //Quad 3
                quadThreeMoving = !quadThreeMoving;
                circleSizes[2] = circleSize;
                circleSizeActuallyGetSmallThree = false;
            }
        }
        if (mouseX > width / 2 && mouseX < width) {
            if (mouseY > 0 && mouseY < height / 2) {
                //Quad 2
                quadTwoMoving = !quadTwoMoving;
                circleSizes[1] = circleSize;
                circleSizeActuallyGetSmallTwo = false;
            }
            if (mouseY > height / 2 && mouseY < height) {
                //Quad 4
                quadFourMoving = !quadFourMoving;
                circleSizes[3] = circleSize;
                circleSizeActuallyGetSmallFour = false;
            }
        }

    }

    //Quad 1 Get Very Big
    //this section actually controls when and how the circles change in size. They grow until max and then shrink. it is false until max
    if (quadOneMoving) {
        if (circleSizeActuallyGetSmallOne) {
            circle(0, 0, circleSizes[0] = circleSizes[0] - growthRateOne);
        } else {
            circle(0, 0, circleSizes[0] = circleSizes[0] + growthRateOne);
        }
    }
    //determines random color of circles
    fill(random(0, 255), random(0, 255), random(0, 255));

    //Quad 2 Get Very Big
    if (quadTwoMoving) {
        if (circleSizeActuallyGetSmallTwo) {
            circle(width, 0, circleSizes[1] = circleSizes[1] - growthRateTwo);
        } else {
            circle(width, 0, circleSizes[1] = circleSizes[1] + growthRateTwo);
        }

    }

    //Quad 3 Get Very Big
    if (quadThreeMoving) {
        if (circleSizeActuallyGetSmallThree) {
            circle(0, height, circleSizes[2] = circleSizes[2] - growthRateThree);
        } else {
            circle(0, height, circleSizes[2] = circleSizes[2] + growthRateThree);
        }

    }

    //Quad 4 Get Very Big
    if (quadFourMoving) {
        if (circleSizeActuallyGetSmallFour) {
            circle(width, height, circleSizes[3] = circleSizes[3] - growthRateFour);
        } else {
            circle(width, height, circleSizes[3] = circleSizes[3] + growthRateFour);
        }

    }
    //this section determines the rate at which the circles grow and shrink
    if (circleSizes[0] > 2500) {
        circleSizeActuallyGetSmallOne = true;
    }
    if (circleSizes[0] < 10) {
        circleSizeActuallyGetSmallOne = false;
    }

    //Quad 2 Checking
    if (circleSizes[1] > 2500) {
        circleSizeActuallyGetSmallTwo = true;
    }
    if (circleSizes[1] < 10) {
        circleSizeActuallyGetSmallTwo = false;
    }

    //Quad 3 Checking
    if (circleSizes[2] > 2500) {
        circleSizeActuallyGetSmallThree = true;
    }
    if (circleSizes[2] < 10) {
        circleSizeActuallyGetSmallThree = false;
    }

    //Quad 4 Checking
    if (circleSizes[3] > 2500) {
        circleSizeActuallyGetSmallFour = true;
    }
    if (circleSizes[3] < 10) {
        circleSizeActuallyGetSmallFour = false;
    }

}
