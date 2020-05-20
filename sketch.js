let c;
let day = 2;
function setup() {
    c = createCanvas(400, 400);
    background(255);
    fill(0);
    let xStep = 20;
    let yStep = 50;
    let variation = 0;
    let noise = 0;
    for (let y = 20; y < height - yStep; y += yStep){
        let startY = y;
        variation = 0;
        for (x = 20; x < width - xStep; x += xStep){
            let randomAmplitude = y + random(-variation, variation) / 2;
            line(x,startY, x + xStep, randomAmplitude);
            startY = randomAmplitude;
            variation += noise;
            noise += 0.04;
        }
    }
  }

  function mousePressed(){

        save(c, "day: " + day);
  }
  
  
  function draw() {
  }