// variables controllig position and speed of moving balls
let xpos = 125;
let ypos = 0;
let ballspeed = 10;
let circleSize = 550;
let circleSizeGetVeryBig = 550;
let whichCircleClicked = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);

}


function draw() {

    background(0, 200, 200);
//makes the circles appear based on clicking in whichever quadrant is clicked on.
    if (mouseIsPressed) {
        if (mouseX > 0 && mouseX < width / 2) {
            if (mouseY > 0 && mouseY < height / 2) {
                //Quad 1 clicked
                whichCircleClicked = 1;
                //links the two variables
                circleSizeGetVeryBig = circleSize;
            }
            if (mouseY > height / 2 && mouseY < height) {
                whichCircleClicked = 3;
                circleSizeGetVeryBig = circleSize;
            }
        }
        if (mouseX > width / 2 && mouseX < width) {
            if (mouseY > 0 && mouseY < height / 2) {
                whichCircleClicked = 2;
                circleSizeGetVeryBig = circleSize;
            }
            if (mouseY > height / 2 && mouseY < height) {
                whichCircleClicked = 4;
                circleSizeGetVeryBig = circleSize;
            }
        }

    }

    //Quad 1 Grows slowly
    if (whichCircleClicked === 1) {
        circle(0, 0, circleSizeGetVeryBig = circleSizeGetVeryBig + 1);
    }

    //Quad 2 Grows
    if (whichCircleClicked === 2) {
        circle(width, 0, circleSizeGetVeryBig = circleSizeGetVeryBig + 1);
    }

    //Quad 3 Grows
    if (whichCircleClicked === 3) {
        circle(0, height, circleSizeGetVeryBig = circleSizeGetVeryBig + 1);
    }

    //Quad 4 Grows
    if (whichCircleClicked === 4) {
        circle(width, height, circleSizeGetVeryBig = circleSizeGetVeryBig + 1);
    }

    //Quad 1 - makes circle appear once hovered over
    if (dist(0, 0, mouseX, mouseY) < 250) {
        circle(0, 0, circleSize);
    }

    //Quad 2
    if (dist(width, 0, mouseX, mouseY) < 250) {
        circle(width, 0, circleSize);
    }

    //Quad 3
    if (dist(0, height, mouseX, mouseY) < 250) {
        circle(0, height, circleSize);
    }

    //Quad 4
    if (dist(width, height, mouseX, mouseY) < 250) {
        circle(width, height, circleSize);
    }





}
