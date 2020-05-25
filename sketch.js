let c;
let day = 7;

let arcsList = [];
let colorList = ['#2A9D8F', '#E9C46A', '#F4A261', '#E76F51'];

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
      translate(width / 2, height / 2);
      for (let r = 5; r < 400; r += random(10, 20)) {
            let start = radians(random(0, 360));
            let end = start + radians(random(0, 360));
            let strW = random(1, 4);

            arcsList.push(new rotatingArc(r, start, end, strW));
      }
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
      background(255);
      translate(width / 2, height / 2);
      arcsList.forEach(arc => {
            arc.show();
      })

      if (capturer) {
            capturer.capture(document.getElementById("defaultCanvas0"));
      }
}

class rotatingArc {

      constructor(r, start, end, strW) {
            this.r = r;
            this.start = start;
            this.end = end;
            this.strW = strW;
            this.speed = random(-0.01, 0.01);
            this.rotation = 0;
            this.color = colorList[floor(random(0, 3.99))];
      }

      show() {
            push();
            this.rotation += this.speed;
            rotate(this.rotation);
            strokeWeight(this.strW);
            stroke(this.color)
            arc(0, 0, this.r, this.r, this.start, this.end);
            pop();
      }

}