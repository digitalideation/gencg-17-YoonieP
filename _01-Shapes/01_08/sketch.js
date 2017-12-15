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
  canvas = createCanvas(width, height);
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
  formResolution = options.formCount;
  x = [formResolution];
  y = [formResolution];
  var angle = radians(360/float(formResolution));
  for (var i=0; i<formResolution; i++)
  {
    x[i] = cos(angle*i) * initRadius;
    y[i] = sin(angle*i) * initRadius;  
  }
  colorMode(RGB);
  background(options.bgColor)
}

function drawdifferentShape(){
  // Colormapping
  let startHue = toInt(map(mouseY, 0, width, options.hslStartHue,options.hslStartHue + 80));
  let targetHue = toInt(map(mouseY, 0, height,options.hslStartHue, options.hslStartHue + 80));
  let startBright = toInt(map(mouseY, 0, width, 0,options.hslBrightness));
  let targetBright = toInt(map(mouseY, 0, height,0, options.hslBrightness));
  let saturation = options.hslSaturation; 
  colorMode(HSL);
  /*let hue  = lerp(startHue,targetHue,formResolution);
  let brightness  = lerp(startBright,targetBright,formResolution);
  stroke(hue,brightness,saturation,0.5); */
  let faderX = centerX/width;
  let t = millis()/options.noiseRefreshValue;
  let r = map(options.sizeNoise,0,200,10,initRadius);
  let angle = radians(360/formResolution);
  //calculate the startingPoints of curveVertex
  for (let i=0; i<formResolution; i++)
  {
    let radiusRand = r - noise(t, i*faderX)*options.noiseStrength;
    let xPos = centerX + cos(angle*i)*radiusRand;
    let yPos = centerY + sin(angle*i)*radiusRand;
    points[i] = createVector(xPos,yPos);
  }

  beginShape();
  for (let i=0; i<formResolution; i++)
  {
    //lerp value jumps between 0.0 and 1.0
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
  if (options.closeVertex)
  {
     endShape(CLOSE);
  }
  else
  {
    endShape();
  }

}

function setmousePos(){
  //Smooth follow of the mouse
   if (mouseX != 0 || mouseY != 0) 
   {
    centerX += (mouseX-centerX) * 0.01;
    centerY += (mouseY-centerY) * 0.01;
  }
}

function draw() {
  setmousePos();
  drawdifferentShape();
}


// resize canvas when the window is resized
function windowResized() 
{
  resizeCanvas(windowWidth, windowHeight, false);
}
function keyPressed() 
{
  // Clear sketch
  if (keyCode === 32) setup(); // 32 = SPACE BAR 
  if (key == 's' || key == 'S') saveThumb(650, 350);
}

// Int conversion
function toInt(value) 
{
  return ~~value;
}

// Timestamp
function timestamp() 
{
  return Date.now();
}

// Thumb
function saveThumb(w, h)
{
  let img = get( width/2-w/2, height/2-h/2, w, h);
  save(img,'thumb.jpg');
}

