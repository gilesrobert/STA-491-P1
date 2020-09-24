
let xpos =100;
let ypos =100;
let xspeed = 10;
let yspeed = 5;

function setup() {

  createCanvas(windowWidth,windowHeight);

}
function draw() {

  background(255,255,255);
  fill(255,0,0);
  circle(xpos, ypos, 100);
// these are the controls for ball movement

xpos = xpos +xspeed;


if(xpos > width - 50){
xspeed = -xspeed;
}

if(xpos < 50){
  xspeed = -xspeed;
}

ypos = ypos +yspeed;


if(ypos > height - 50){
yspeed = -yspeed;
}

if(ypos < 50){
  yspeed = -yspeed;
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
