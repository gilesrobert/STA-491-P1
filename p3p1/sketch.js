//sets up my offset for use later
let xoffset = 0.0;
let yoffset = 0.0;


function setup(){
  createCanvas(windowWidth,windowHeight);
//sets up the bounds in which the circle path can move (allows it to move in many directions)

  xoffset = 1000000000;
  yoffset = 999999999;

}

 function draw(){
   noStroke();

//map and noiseX together sequences the positionof the ellipse in x axis depending on the standing of the offset setting. the same is true of the y variation
   let noiseX =noise(xoffset);
   let x = map(noiseX, 0,1,0, width);
   let noiseY = noise(yoffset);
   let y = map(noiseY,0, 1, 0, height);
// *500 determines the ellipse size. it depends on the offset whether it is larger or smaller
   ellipse(x,y,noise(xoffset)*500,noise(xoffset)*500);

fill(random(0,255))
//makes the circles follow consecutively and very close by (0.005 is such a small number)
  xoffset = xoffset + 0.005;
  yoffset = yoffset + 0.005;


 }
