// variables controllig position and speed of moving balls
let xpos = 125;
let ypos = 0;
let ballspeed = 3;

function setup(){
  createCanvas(windowWidth, windowHeight);
background(200,200,200);
}




function draw(){

//rectangle that changes color based on mouse click
for(let i=0; i < width; i = i +25){
  for(let j=0; j< height; j = j +25){
    rect(i,j,20);
  }

}
//these two create the black borders on the left and right that change to white after a left mouse click
  if(mouseIsPressed){
    fill(255,255,255);
  } else {
    fill(0,0,0);
  }
  rect(0,0,25,height);

  if(mouseIsPressed){
    fill(255,255,255);
  } else {
    fill(0,0,0);
  }
  rect(width-50,0,25,height);

//creating small circle following mouse
noStroke();
fill(mouseX,mouseY,0);
circle(mouseX,mouseY,50);
//central appearing circle when mouse hovers over it
if(dist(width/2,height/2,mouseX,mouseY) < 100){

  circle(width/2,height/2,750);
}

//moving circles top to bottom that change color based on location of mouse
//could not find out how to make circles that both moved and followed for command
circle(xpos, ypos, 250);
circle(xpos+250, ypos, 250);
circle(xpos+500, ypos, 250);
circle(xpos+750, ypos, 250);
circle(xpos+1000, ypos, 250);
circle(xpos+1250, ypos, 250);
circle(xpos+1500, ypos, 250);
circle(xpos+1750, ypos, 250);

//controls direction of ball. keeps it within the y-axis
ypos = ypos +ballspeed;

if(ypos > height){
  ballspeed = -ballspeed
}
if(ypos < 0){
  ballspeed = -ballspeed
}
//these three commands make the color of the patterned rectangles change based on arrow direction
if(keyIsPressed & keyCode === UP_ARROW){
  fill(0,0,255);
}

if(keyIsPressed & keyCode === DOWN_ARROW){
  fill(255,0,255);
}

if(keyIsPressed & keyCode === LEFT_ARROW){
  fill(150,150,150);
}





}
