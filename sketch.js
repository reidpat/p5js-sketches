function setup() {
    createCanvas(400, 400);
    background(255);
    fill(0);
    noStroke();
    rectMode(CENTER);
    let noiseAlpha = random(0,1);
    let alphaStep = 0.1;
    let noiseX = random(0, 1);
    let noiseStep = 0.2;
    let noiseY = random(0,1);
    let noiseSize = random(0,1);
    let sizeStep = 0.4;
    for (let i = 10; i < width - 10; i += 10){
        noiseX += noiseStep;
        noiseSize += sizeStep;
        for (g = 10; g < height - 10; g += 10){
            noiseY += noiseStep * 2;
            noiseAlpha += alphaStep;
            noiseSize += sizeStep;
            let alpha = noise(noiseAlpha);
            let darkness = noise(noiseX, noiseY);
            let size = noise(noiseSize) * 50;
            console.log(size);
            fill(0, 150, darkness * 255, alpha * 200);
            rect(i,g, size, size);
        }
    }
  }
  
  function draw() {
    
  }