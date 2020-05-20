let c;
let day = 0;
function setup() {
    c = createCanvas(400, 400);
    background(255);
  }

  function mousePressed(){

        save(c, "day: " + day);
  }
  
  function draw(){
  }