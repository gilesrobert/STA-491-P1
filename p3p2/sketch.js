let noiseScale=0.9;

function setup(){
createCanvas(windowWidth,windowHeight);
//allows new lines to overlap old lines to create pattern
background(0);
}

function draw(){
//for loop sets up lines going from left to right all the way across canvas
for(let x=0; x < width; x++){
// creates new lines and tells them to follow mouse vertically AND horizontally
  // mouseY*noiseScale makes the lines shorter or taller based on position of mouse
  let noiseVal = noise((mouseX+x)+noiseScale, mouseY*noiseScale);

//stroke at 750 makes lines essentially white; lower number makes them darker(values of black to white)
stroke(noiseVal*750);
// ypos of mouseY+noiseVal*5 and height essentially makes the lines go vertically from top to bottom since noiseVal is so small *5
line(x,mouseY+noiseVal*5,x,height);

}

}
