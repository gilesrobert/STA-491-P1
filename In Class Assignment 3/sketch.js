

function setup(){
  createCanvas(windowWidth,windowHeight);
background(120,150,175);
}


function draw(){

for(let i =0; i < width; i = i +10){
  for(let j = 0; j<height; j = j +20){

    fill(255,255,255);
    rect(i,j,10);
  }
}

  for(let counter = 0; counter <width; counter = counter +10){
    rect(counter, counter, 100);

  }
  for(let counter = 0; counter <width; counter = counter +10){
    rect(counter, counter, 50);
  }

for(let counter = 0; counter <width; counter = counter +10){
  circle(counter, counter, 25);
let rcol = random(0,255);
let gcol = random(0,255);
let bcol = random(0,255);


  fill(rcol,gcol,bcol);

}
}
