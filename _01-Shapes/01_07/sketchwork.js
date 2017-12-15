// Global var
// The var are initialised in gui.js
var NUM = 50;
var NEWEST = NUM - 1;
var x = [];
var y =[];
function setup() {
  // Canvas setup
  canvas = createCanvas(window.outerWidth, window.outerHeight);
  canvas.parent("p5Container");
  // Detect screen density (retina)
  var density = displayDensity();
  pixelDensity(density);
  // Init var
  // The var are initialised in gui.js
  noStroke();
  noCursor();

  fill(255);
  for ( var i = NUM; i-1  != 0;--i){
      x[i] = 200, y[i] = 200 ;
  }
}

var ybool = false;
var xbool = false;
function draw() {
  background(-1);
  for ( var i = 0; i != NEWEST;i++){
    ellipse(x[i] = x[i + 1], y[i] = y[i + 1], i, i);
  }
  if (y[NEWEST] >= windowHeight){
    ybool = true;
  }
  if (y[NEWEST] <= 0){
    ybool = false;
  }
  if (x[NEWEST] >= windowWidth){
    xbool = true;
  }
  if (x[NEWEST] <= 0){
    xbool = false;
  }

    if (ybool) {
      yNewVal = y[NEWEST]-5;
    }
    else{
       yNewVal = y[NEWEST]+5;
    }
    if (xbool) {
      xNewVal = x[NEWEST]-5;
    }
    else{
      xNewVal = x[NEWEST]+5;
    }

  ellipse(x[NEWEST] =  xNewVal, y[NEWEST] = yNewVal, NEWEST, NEWEST);
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
class agentMeow{
 
}