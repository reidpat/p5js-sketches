let c;
let day = 0;
function setup() {
    c = createCanvas(400, 400);
    background(255);
  }

  function keyPressed(){
      if (key == 's'){
        save(c, "day: " + day);
      }
  }
  
  function draw(){
  }