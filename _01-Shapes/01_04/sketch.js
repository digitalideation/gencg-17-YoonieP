// Global var
// The var are initialised in gui.js
var b = 255, p = false;
var positions = [[]];
var bla= true;

function raseterize(){
  if (bla == true) {
  let columnlength = windowWidth / options.columns;
  let rowlength = windowHeight / options.rows;

  for (var columnval = 0; columnval < options.columns; columnval++) 
  {
    let test =[]
    for (var rowval = 0; rowval < options.rows; rowval++) 
    { 
      let position = []
      position.push(columnlength * (columnval + 1));// X
      position.push(rowlength * ( rowval + 1));// Y
      test.push(position);
    }
      positions.push(test);
  }


  }

}

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
    background(200, 20);
  options.circleFillColor[2] = random(255);
  raseterize();

  noFill();
  if (p) {
    let rotationVal = 0;
    for (var i = 1, len = positions.length; i < len; i++) {
      for (var b = 0, cen = positions[i].length; b < cen; b++) {
        xVal = positions[i][b][0];
        yVal = positions[i][b][1];
        push();
        translate(500,25)
        rotate(rotationVal)
        drawCircle(xVal,yVal);
        pop();
        rotationVal = rotationVal +30;
      }
    }
  }
}

function drawCircle(posX, posY){
   b = options.circleFillColor;
    push();
    translate(-1 * (posX/8), -1* (posY/8));

    //var circleResolution = toInt(map(mouseY + 100, 0, height, 2, 10));
    var radius = mouseX - width / 2 + 0.5;
    //var angle = TWO_PI / circleResolution;

    strokeWeight(2);
    stroke(b, 25);

    beginShape();
    rect(posX,posY,radius,radius);

    endShape();

    pop();
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