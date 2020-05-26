let c;
let day = 7;



let capturer; 
let btn;


let ballList = [];


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
      angleMode(DEGREES);
      frameRate(24)
      btn = document.createElement("button");
      btn.textContent = "start recording";
      document.body.appendChild(btn);
      btn.onclick = record;
      //btn.click(); //start recording automatically
      let gap = 20;
      for (let y = -150; y < height + gap; y += gap){
            for (x = -150; x < width + 100; x += 5){
                  ballList.push({
                        x: x,
                        y: y
                  })
            }

      }
}

function keyPressed() {
      if (key == 's') {
            //capturer.save();
            save(c, "day: " + day);
      }
}

function draw() {
      translate(width/2, 0);
      rotate(45);
      background(250);
      ballList.forEach(ball => {
            let x = ball.x;
            let y = ball.y;
            //anglemode(RADIANS);
            ellipse(x, y + sin(x * 3) * 10, 2, 2);
            ball.x += 1;
            if(ball.x >= width + 100){
                  ball.x = -150;
            }
      })
      if (capturer) {
            capturer.capture(document.getElementById("defaultCanvas0"));
      }
}