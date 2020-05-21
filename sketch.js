let c;
let day = 3;
function setup() {
      c = createCanvas(400, 400);
      background(250);
      let radius = 150;
      translate(width / 2, height / 2);
      let noiseSeed = random(1);
      let noiseStep = 0.03;
      fill(0);
      beginShape();
      let radNoise;
      let startValue = noise(noiseSeed) * radius;
      for (let d = 0; d < 360; d += 1) {
            let rads = radians(d);
            if (d > 340) {
                  let diff = d - 360;
                  radNoise = startValue + noise(noiseSeed) * diff;
            }
            else {
                 
                  radNoise = noise(noiseSeed) * radius;                 
            }
            let x = sin(rads) * radNoise;
            let y = cos(rads) * radNoise;
            noiseSeed += noiseStep;
            vertex(x, y);
      }
      endShape();
}

function keyPressed() {
      if (key == 's'){
      save(c, "day: " + day);
      }
}

function draw() {
}