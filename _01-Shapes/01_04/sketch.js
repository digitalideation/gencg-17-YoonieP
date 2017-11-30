// Based on the code P_2_0_02.pde from
// Generative Gestaltung, ISBN: 978-3-87439-759-9

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

  bla= false;
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

  background(255);
/*
  maxDistance = dist(windowWidth/2, windowHeight/2, windowWidth, windowHeight);
  for (var x = 0; x < windowWidth; x++) {
    distances[x] = []; // create nested array
    for (var y = 0; y < windowHeight; y++) {
      var distance = dist(windowWidth/2, windowHeight/2, x, y);
      distances[x][y] = distance/maxDistance * 255;
    }
  }
  spacer = 10;
  */
  smooth();
  // Init Var
}

function draw() {
   smooth();
  options.circleFillColor[2] = random(255);
  raseterize();

  noFill();
  if (p) {
background(0);
    for (var i = 1, len = positions.length; i < len; i++) {
      for (var b = 0, cen = positions[i].length; b < cen; b++) {
        xVal = positions[i][b][0];
        yVal = positions[i][b][1];
        //console.log("valuepair:")
        //console.log("x :" + xVal);
        //console.log("y :" + yVal);

        drawCircle(xVal,yVal);
      }
    }
  }
function drawCircle(posX, posY){
   b = options.circleFillColor;
    push();
    console.log(posX);
    console.log(posY);
    translate(posX, posY);

    var circleResolution = toInt(map(mouseY + 100, 0, height, 2, 10));
    var radius = mouseX - width / 2 + 0.5;
    var angle = TWO_PI / circleResolution;

    strokeWeight(2);
    stroke(b, 25);

    beginShape();
    for (i = 0; i <= circleResolution; i++) {
      var x = 0 + cos(angle * i) * radius;
      var y = 0 + sin(angle * i) * radius;
      vertex(x, y);
    }
    endShape();

    pop();
}

/*
  translate(width/options.tileCount/2, height/options.tileCount/2);

  background(0, options.bgAlpha);
  smooth();
  if (!options.fill) {
    noFill();
    stroke(options.circleLineColor, options.circleLineAlpha);
  } else {
    fill(options.circleFillColor);    
  }
  randomSeed(options.actRandomSeed);
  strokeWeight(mouseY/100);

  for (gridY=0; gridY<options.tileCount; gridY++) {
    for (gridX=0; gridX<options.tileCount; gridX++) {

      // draw element here
      
      posX = width/options.tileCount * gridX;
      posY = height/options.tileCount * gridY;

      shiftX = random(-mouseX, mouseX)/20;
      shiftY = random(-mouseX, mouseX)/20;

      rect(posX+shiftX, posY+shiftY, mouseY/15, mouseY/15);
    }
  }
  */
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