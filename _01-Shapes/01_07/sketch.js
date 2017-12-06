// Global var
// The var are initialised in gui.js
var NUM = 50;
var NEWEST = NUM - 1;
var count = 5;
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
  createAgents();
  background(0);
}
	
var ybool = false;
var xbool = false;
function draw() {
	for (var i = 0; i < agentarray.length; i++) {
		agentarray[i].calculatePos();
	}
}


var agentarray =[];
function createAgents(){
	for (var i = 1; i <= count; i++) {
		let obj = new AgentBall(random(1200),random(1200));
		agentarray.push(obj);
	}
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

class AgentBall{
  constructor(xpos,ypos) {
  	console.log("obj created");
      this.NUM = 10;
      this.NEWEST = NUM - 1;
      this.x = [];
      this.y = [];
      this.ybool = false;
      this.xbool = false;
      this.xNewVal= 0;
      this.yNewVal= 0;
      for ( var i = NUM; i-1  != 0;--i)
      {
        this.x[i] = xpos, this.y[i] = ypos ;
      }
  }


  calculatePos() {
  	background(-1);
    for ( var i = 0; i != this.NEWEST;i++){
      ellipse(this.x[i] = this.x[i + 1], this.y[i] = this.y[i + 1], i, i);
    }
    if (this.y[NEWEST] >= windowHeight){
      this.ybool = true;
    }
    if (this.y[NEWEST] <= 0){
      this.ybool = false;
    }
    if (this.x[NEWEST] >= windowWidth){
      this.xbool = true;
    }
    if (this.x[NEWEST] <= 0){
      this.xbool = false;
    }
    if (this.ybool) {
      this.yNewVal = this.y[NEWEST]-5;
    }
    else{
       this.yNewVal = this.y[NEWEST]+5;
    }
    if (this.	xbool) {
      this.xNewVal = this.x[NEWEST]-5;
    }
    else{
      this.xNewVal = this.x[NEWEST]+5;
    }
    ellipse(this.x[NEWEST] = this.xNewVal, this.y[NEWEST] = this.yNewVal, this.NEWEST, this.NEWEST);
  }
}