//these set up my variables so they can be used within the code
let chameleon;
let frog;
let octo;
let cuttle;
//these set up my jpg images so they can be used within the code
function preload(){
frog = loadImage('https://upload.wikimedia.org/wikipedia/commons/5/59/Pacific_Tree_Frog_%28Pseudacris_regilla%29_3.JPG')
chameleon = loadImage('https://upload.wikimedia.org/wikipedia/commons/6/60/Flap-necked_chameleon_%28Chamaeleo_dilepis%29_female.jpg')
octo = loadImage('https://upload.wikimedia.org/wikipedia/commons/e/ec/Octopus_vulgaris_BCN_0219_Mustekala_C.JPG')
cuttle = loadImage('https://upload.wikimedia.org/wikipedia/commons/4/4b/Sepia_officinalis_%28aquarium%29.jpg')

}

function setup(){
  //this simply sets us the canvas side in which my images can be placed along with a black background
  createCanvas(windowWidth,windowHeight);
  background(0,0,0);
}

function draw(){
//these are the commands for each images
//imageMode(CENTER) sets the image to be drawn from the center point
imageMode(CENTER);
//tint with random(0,255) sets the color to be changed randomly each time an image is placed
tint(random(0,255),random(0,255),random(0,255));
//this command actually places the image at a position randomly selected with a randomly selected size
image(chameleon, random(width), random(height), random(100,1000), random(100,1000));

imageMode(CENTER);
tint(random(0,255),random(0,255),random(0,255));
image(frog, random(width), random(height), random(100,1000), random(100,1000));

imageMode(CENTER);
tint(random(0,255),random(0,255),random(0,255));
image(octo, random(width), random(height), random(100,1000), random(100,1000));

imageMode(CENTER);
tint(random(0,255),random(0,255),random(0,255));
image(cuttle, random(width), random(height), random(100,1000), random(100,1000));

}
