let offset =0.0;

function setup(){
  createCanvas(windowWidth,windowHeight);

}

function draw(){
background(220);
strokeWeight(1);
stroke(random(255));
//this for loop creates my lines and creates them horizontally.
for(let x =0; x < width; x=x+1){
  line(x + offset, 100, 100, 100);
}//offset +5 makes the smaller lines that start far left to merge right until they meet the farthest point
  offset = offset+5;
//I couldn't figure out arrays with this so I had to copy them this way
  for(let x =0; x < width; x=x+1){
    line(x + offset, 200, 100, 0);
  }
    offset = offset+5;

    for(let x =0; x < width; x=x+1){
      line(x + offset, 300, 100, 0);
    }
      offset = offset+5;

      for(let x =0; x < width; x=x+1){
        line(x + offset, 400, 100, 0);
      }
        offset = offset+5;

        for(let x =0; x < width; x=x+1){
          line(x + offset, 500, 100, 0);
        }
          offset = offset+5;

          for(let x =0; x < width; x=x+1){
            line(x + offset, 600, 100, 0);
          }
            offset = offset+5;

            for(let x =0; x < width; x=x+1){
              line(x + offset, 700, 100, 0);
            }
              offset = offset+5;

              for(let x =0; x < width; x=x+1){
                line(x + offset, 800, 100, 0);
              }
                offset = offset+5;

                for(let x =0; x < width; x=x+1){
                  line(x + offset, 900, 100, 100);
                }
                  offset = offset+5;

                  for(let x =0; x < width; x=x+1){
                    line(x + offset, 1000, 100, 0);
                  }
                    offset = offset+5;

                    for(let x =0; x < width; x=x+1){
                      line(x + offset, 1100, 100, 0);
                    }
                      offset = offset+5;

                      for(let x =0; x < width; x=x+1){
                        line(x + offset, 1200, 100, 0);
                      }
                        offset = offset+5;

                        for(let x =0; x < width; x=x+1){
                          line(x + offset, 1300, 100, 0);
                        }
                          offset = offset+5;

                          for(let x =0; x < width; x=x+1){
                            line(x + offset, 1400, 100, 0);
                          }
                            offset = offset+5;

                            for(let x =0; x < width; x=x+1){
                              line(x + offset, 1500, 100, 0);
                            }
                              offset = offset+5;

                              for(let x =0; x < width; x=x+1){
                                line(x + offset, 1600, 100, 0);
                              }
                                offset = offset+5;






}
