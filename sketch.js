let c;
let day = 6;


let noiseDeg;
let degNoiseStep = 0.1;
let noiseLength;
let lengthNoiseStep = 0.1
let rotation = 0;

function setup() {
      c = createCanvas(500, 500);
      background(250);
      angleMode(DEGREES);
      translate(width / 2, height / 2);
      noiseDeg = random(0, 1);
      noiseLength = random(0, 1);
      strokeWeight(1);
      stroke(0,0);
      noLoop();


}

function keyPressed() {
      if (key == 's') {
            save(c, "day: " + day);
      }
}

function draw() {
      for (let i = 0; i < 1000; i++) {
            push();
            translate(width / 2, height / 2);
            rotate(rotation);
            fill(0, random(0,255));
            let angle = noise(noiseDeg) * 360;
            let length = noise(noiseLength) * 350;
            let x1 = sin(angle) * length;
            let y1 = cos(angle) * length;
            let x2 = sin(angle - random(0, 1) * 360) * length;
            let y2 = sin(angle - random(0, 1 * 360)) * length;
            curve(x1, y1, x2, y2, x2, y2, -x1, -y1);

            noiseDeg += degNoiseStep;
            noiseLength += lengthNoiseStep;
            rotation += 5;
            pop();
      }

}