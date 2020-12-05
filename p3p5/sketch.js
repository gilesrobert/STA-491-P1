function setup(){
  createCanvas(windowWidth,windowHeight);
}

function draw(){
  noStroke();
  background(100,0,200);
  ellipseMode(CENTER);
  ellipse(mouseX,mouseY,30,30);
}
