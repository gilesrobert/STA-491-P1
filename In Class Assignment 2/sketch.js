let xpos =100;
let ypos =100;
let ballspeed = 5;

function setup() {

  createCanvas(windowWidth,windowHeight);

}
function draw() {

  background(255,255,255);
  fill(255,0,0);
  circle(xpos, ypos, 100);
// these are the controls for ball movement

xpos = xpos +ballspeed;


if(xpos > width){
ballspeed = -ballspeed;
}

if(xpos < 0){
  ballspeed = -ballspeed;
}

ypos = ypos +ballspeed;


if(ypos > height){
ballspeed = -ballspeed;
}

if(ypos < 0){
  ballspeed = -ballspeed;
}
// these are the controls for clicking on the ball
if(mouseIsPressed & dist(mouseX, mouseY) <250){
  circle = random(xpos,ypos);
}

if(mouseIsPressed & dist(mouseX,mouseY, xpos, ypos) < 50){
  xpos = random(0,width);
  ypos = random(0,height);
}


}
