// Global var
// The var are initialised in gui.js
var NUM = 50;
var NEWEST = NUM - 1;
var x = [];
var y =[];
function setup() {
  // Canvas setup
  canvas = createCanvas(windowWidth, windowHeight);
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
 var ball = agentBalls(200,200);
var ybool = false;
var xbool = false;
function draw() {
  ball.draw();
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
class agentBalls {
  constructor(x,y) {
      this.NUM = 50;
      this.NEWEST = NUM - 1;
      this.x = [];
      this.y = [];
      this.ybool = false;
      this.xbool = false;
      this.xNewVal= 0;
      this.yNewVal= 0;
      for ( var i = NUM; i-1  != 0;--i)
      {
        x[i] = x, y[i] = y ;
      }
      this.draw = function(){
        background(-1);
    for ( var i = 0; i != this.NEWEST;i++){
      ellipse(this.x[i] = this.x[i + 1], this.y[i] = this.y[i + 1], i, i);
    }
    if (y[NEWEST] >= windowHeight){
      this.ybool = true;
    }
    if (y[NEWEST] <= 0){
      this.ybool = false;
    }
    if (x[NEWEST] >= windowWidth){
      this.xbool = true;
    }
    if (x[NEWEST] <= 0){
      this.xbool = false;
    }
    if (ybool) {
      this.yNewVal = this.y[NEWEST]-5;
    }
    else{
       this.yNewVal = this.y[NEWEST]+5;
    }
    if (xbool) {
      this.xNewVal = this.x[NEWEST]-5;
    }
    else{
      this.xNewVal = this.x[NEWEST]+5;
    }
    ellipse(this.x[NEWEST] = this.xNewVal, y[NEWEST] = yNewVal, NEWEST, NEWEST);
      }
  }


}