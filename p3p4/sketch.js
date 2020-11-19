let posY;
let offset =0;
//sets the speed at which the offset is effected by change
let offsetSpeed = 25;

function setup(){
//sets the speed at which the page refreshes
  frameRate(60);
  createCanvas(windowWidth,windowHeight);
}

function draw(){
  background(50);
  posY = 0;
  offset = offset + offsetSpeed;

//if statement that reverses direction of pattern when it reaches width
  if(offset>width || offset < (-1*width)){
      offsetSpeed*=-1;

  }
//this happens while the if statement happens
//circles change color and position
  while(posY < height){
    for(let posX = 0; posX <  width; posX+=30){
      noStroke();
      fill(color(random(0,255)));
      ellipse(posX + offset, posY, 100,100);
    }
    posY+=30;
  }


}
