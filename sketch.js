let c;
let day = 5;


let noiseDeg;
let degNoiseStep = 0.1;
let noiseLength;
let lengthNoiseStep = 0.1

function setup() {
      c = createCanvas(400, 400);
      background(255);
      angleMode(DEGREES);
      translate(width/2, height/2);
      noiseDeg = random(0,1);
      noiseLength = random(0,1);
      ellipse(0, 0, 10, 10);
      strokeWeight(10);
      stroke(0, 40);
}

function keyPressed() {
      if (key == 's') {
            save(c, "day: " + day);
      }
}

function draw() {
      translate(width/2, height/2);
      let angle = noise(noiseDeg) * 360;
      let length = noise(noiseLength) * 200;
      let x = sin(angle) * length;
      let y = cos(angle) * length;
      line(-x,-y, x, y);
     

      noiseDeg += degNoiseStep;
      noiseLength += lengthNoiseStep;
}