let c;
let day = 4;
let rotation = 0;
let noiseStep = 0.001;
let noiseOffset = 0;

function setup() {
      c = createCanvas(400, 400);
      background(255);
      angleMode(DEGREES);
      rectMode(CENTER);
      //colorMode(HSB);

}

function keyPressed() {
      if (key == 's') {
            saveFrames("day: " + day, 'png', 10, 60);
      }
}

function draw() {
      translate(width / 2, height / 2);
      rotate(rotation);


      let radius = 0;
      let offsetDegrees = 0;
      let size = 1;
      let radiusStep = 0.5;

      for (i = 0; i < 150; i++) {
            for (d = 0; d < 360; d += 9) {
                  
                  let degs = d + offsetDegrees;
                  let x = sin(degs) * radius;
                  let y = cos(degs) * radius;
                  fill(noise(d + noiseOffset) * 255);
                  ellipse(x, y, size);
            }
            radius += radiusStep;
            radiusStep += 0.1;
            offsetDegrees -= 20;
            size += 0.5;
            noiseOffset += noiseStep;
            
      }
      // rect(0,0,20,20);
      // rect(-10,-10, 10, 10);
      // rect(-10,10,10,10);
      // rect(10, -10, 10, 10);
      // rect(10,10,10,10);
      rotation += 0.2;
}