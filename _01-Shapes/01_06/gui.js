var options = {
  diameter: 500,
  multiplikatorSize:50
 
};

window.onload = function() {
  var gui = new dat.GUI();
  gui.add(options, 'diameter').min(0).max(1000).step(25);
  gui.add(options, 'multiplikatorSize').min(0).max(250).step(25);
;

};