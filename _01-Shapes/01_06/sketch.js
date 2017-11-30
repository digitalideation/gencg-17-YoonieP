// Global var
// The var are initialised in gui.js

function setup() {
  // Canvas setup
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5Container");
  // Detect screen density (retina)
  var density = displayDensity();
  pixelDensity(density);
  // Init var
  // The var are initialised in gui.js
  smooth();
}


function draw() {
  background(255,20);
  smooth();
  noFill();

  stroke([0,0,0], 25);
  strokeWeight(3);

  for (var gridY=0; gridY<windowHeight /8 *7	; gridY+=25) {
    for (var gridX=0; gridX<windowWidth /8 *7 ; gridX+=25) {

      let diameter = dist(mouseX, mouseY, gridX, gridY);
      diameter = diameter/options.diameter * options.multiplikatorSize;
      //diameter = diameter/400 * 40;
      push();
      translate(gridX, gridY);
      
      rect(0, 0, diameter, diameter);   
      pop(); 
    }
  }

  noFill();
}

function mousePressed() {
  p = true;
}

function mouseReleased() {
  p = false;
}

function keyPressed() {
  if (key == 's' || key == 'S') saveThumb(650, 350);
}

// Tools

// resize canvas when the window is resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight, false);
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