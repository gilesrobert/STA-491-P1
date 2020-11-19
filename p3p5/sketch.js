function setup(){
  createCanvas(windowWidth,windowHeight);

}

function draw(){
  background(200,200,200);
  noStroke();
//beginShape replaces line and the details associated with line
  beginShape();
  fill(random(0,255),random(0,255),random(0,255));
  for(let x=0;x < width; x++){

//this places the shape from 0 to width
    let nx = map(x,0,width,0,30);
// this creates variables in the "line"
    let y = height * noise(nx);
    vertex(x,y);
  }
    endShape();


}
