let c;
let day = 10;



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
      background(50);
      background(0, 0, 100, 100);
      noStroke();
      ellipse(width/2,height/2,150,150);
      stroke(0);
      fill(255, 0);
      frameRate(24)
      btn = document.createElement("button");
      btn.textContent = "start recording";
      document.body.appendChild(btn);
      btn.onclick = record;
      //btn.click(); //start recording automatically
      createLine(width / 2, height, 200);
}

function createLine(x, y, length) {
      if (length < 20) {
            line(x, y, x + 5, y - 5)
      }
      else {

            singleLine(x,y,length, -1);
            singleLine(x,y,length, 1)
      }

}

function singleLine(x, y, length, dir) {
      let newX = x + (random(5, length) * dir) / 1.4;
      let newY = y - random(5, length);
      let newLength = length/1.5;
      strokeWeight(length/10);
      line(x, y, newX, newY);
      createLine(newX, newY, newLength);
}

function keyPressed() {
      if (key == 's') {
            //capturer.save();
            saveCanvas(c, "day: " + day, 'png');
      }
}

function draw() {
      if (capturer) {
            capturer.capture(document.getElementById("defaultCanvas0"));
      }

}