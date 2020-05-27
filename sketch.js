let c;
let day = 9;



let capturer; 
let btn;

let noiseSeedX;
let noiseSeedY;

function setup() {
      let p5canvas = createCanvas(500, 500);
      c = p5canvas.canvas;
      background(250);
      fill(255, 0);
      frameRate(24)
      btn = document.createElement("button");
      btn.textContent = "start recording";
      document.body.appendChild(btn);
      btn.onclick = record;
      //btn.click(); //start recording automatically

      angleMode(DEGREES);

      noiseSeedX = random(0,1);
      noiseSeedY = random(0,1);
      let noise2D;
      let xNoiseStart = noiseSeedX;

      let noiseStep = 0.03;

      let boxSize = 5;
      

      for (let y = 0; y <= height; y += boxSize){
            noiseSeedY += noiseStep;
            noiseSeedX = xNoiseStart;
            for (let x = 0; x <= width; x += boxSize){
                  let rotation = noise(noiseSeedX, noiseSeedY) * 360;
                  push();
                  translate(x,y);
                  rotate(rotation);
                  line(0,0,0,0 +5);
                  pop();
                  noiseSeedX += noiseStep;
            }
      }
}

function keyPressed() {
      if (key == 's') {
            saveCanvas(c, "day: " + day, '.png');
      }
}

function draw() {
      if (capturer) {
            capturer.capture(document.getElementById("defaultCanvas0"));
      }
}



function record() {
      capturer = new CCapture({
            format: "webm",
            framerate: 24
      });
      capturer.start();
      btn.textContent = "stop recording";
      btn.onclick = e => {
            capturer.stop();
            capturer.save();
            capturer = null;
            btn.textContent = "start recording";
            btn.onclick = record;
      };
}