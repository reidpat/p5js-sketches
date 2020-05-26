let c;
let day = 7;



let capturer; 
let btn;

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

function setup() {
      let p5canvas = createCanvas(400, 400);
      c = p5canvas.canvas;
      background(250);
      fill(255, 0);
      frameRate(24)
      btn = document.createElement("button");
      btn.textContent = "start recording";
      document.body.appendChild(btn);
      btn.onclick = record;
      //btn.click(); //start recording automatically
}

function keyPressed() {
      if (key == 's') {
            capturer.save();
            //save(c, "day: " + day);
      }
}

function draw() {
      if (capturer) {
            capturer.capture(document.getElementById("defaultCanvas0"));
      }
}