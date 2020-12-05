// variables controllig position and speed of moving balls
let xpos = 125;
let ypos = 0;
let ballspeed = 10;
let circleSize = 550;
let circleSizes = [550, 550, 550, 550];
let circleSizeGetVeryBigOne = 550;
let circleSizeGetVeryBigTwo = 550;
let circleSizeGetVeryBigThree = 550;
let circleSizeGetVeryBigFour = 550;

let quadOneMoving = false;
let quadTwoMoving = false;
let quadThreeMoving = false;
let quadFourMoving = false;
let growthRateOne = 90;
let growthRateTwo = 50;
let growthRateThree = 120;
let growthRateFour = 300;

let circleSizeActuallyGetSmallOne = false;
let circleSizeActuallyGetSmallTwo = false;
let circleSizeActuallyGetSmallThree = false;
let circleSizeActuallyGetSmallFour = false;

function setup() {
    createCanvas(windowWidth, windowHeight);
}


function draw() {


    //creating small circle following mouse
    noStroke();
    background(0, 0, 0);

    if (mouseIsPressed) {
        if (mouseX > 0 && mouseX < width / 2) {
            if (mouseY > 0 && mouseY < height / 2) {
                //Quad 1 clicked
                quadOneMoving = !quadOneMoving;
                circleSizes[0] = circleSize;
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
    if (quadOneMoving) {
        if (circleSizeActuallyGetSmallOne) {
            circle(0, 0, circleSizes[0] = circleSizes[0] - growthRateOne);
        } else {
            circle(0, 0, circleSizes[0] = circleSizes[0] + growthRateOne);
        }
    }
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
