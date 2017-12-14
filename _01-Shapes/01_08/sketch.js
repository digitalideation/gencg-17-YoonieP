// Global var
// The var are initialised in gui.js
var formResolution = 10;

var initRadius = 40;
var centerX;
var centerY;
var x = [formResolution];
var y = [formResolution];
var actRandomSeed, count;
var points = [formResolution]

function setup() {
  // Canvas setup
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5Container");
  // Detect screen density (retina)
  var density = displayDensity();
  pixelDensity(density);
  // The var are initialised in gui.js
  fill(255);
  smooth();

  // init form
  centerX = width/2; 
  centerY = height/2;
  var angle = radians(360/float(formResolution));
  for (var i=0; i<formResolution; i++){
    x[i] = cos(angle*i) * initRadius;
    y[i] = sin(angle*i) * initRadius;  
  }
  background(240)
}

function drawdifferentShape(){
  // Create points array
  let startHue = toInt(map(mouseY, 0, width, 180,220 ));
  let targetHue = toInt(map(mouseY, 0, height,180, 220  ));
  let startBright = toInt(map(mouseY, 0, width, 40,80 ));
  let targetBright = toInt(map(mouseY, 0, height,40, 80  ));
  let saturation = 40; 
  colorMode(HSL);

  let faderX = centerX/width;
  let t = millis()/1000;
  let r = map(options.sizeNoise,0,200,10,initRadius);
  let angle = radians(360/formResolution);

  for (let i=0; i<formResolution; i++){
    let radiusRand = r - noise(t, i*faderX)*100;
    let xPos = centerX + cos(angle*i)*radiusRand;
    let yPos = centerY + sin(angle*i)*radiusRand;
    points[i] = createVector(xPos,yPos);
  }

  beginShape();
  for (let i=0; i<formResolution; i++){
    let hue  = lerp(startHue,targetHue,i/formResolution);
    let brightness  = lerp(startBright,targetBright,i/formResolution);
    stroke(hue,brightness,saturation,0.5); 
    noFill();

    curveVertex(points[i].x, points[i].y);
    if (i==0 || i==count-1)
    { 
      curveVertex(points[i].x, points[i].y);
    }
  }
  endShape(CLOSE);
}

function setmousePos(){
  //Smooth follow of the mouse
   if (mouseX != 0 || mouseY != 0) {
    centerX += (mouseX-centerX) * 0.01;
    centerY += (mouseY-centerY) * 0.01;
  }
}

function draw() {
  setmousePos();
  //calculatePoints();
  //drawShape();
  drawdifferentShape();
}

// Tools

// resize canvas when the window is resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight, false);
}
function keyPressed() {
  // Clear sketch
  if (keyCode === 32) background(255) // 32 = SPACE BAR 
  if (key == 's' || key == 'S') saveThumb(650, 350);
}

// Int conversion
function toInt(value) {
  return ~~value;
}

// Timestamp
function timestamp() {
  return Date.now();
}

// Thumb
function saveThumb(w, h) {
  let img = get( width/2-w/2, height/2-h/2, w, h);
  save(img,'thumb.jpg');
}

