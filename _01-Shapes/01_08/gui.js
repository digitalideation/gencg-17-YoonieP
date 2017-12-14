var options = {
  sizeNoise: 500
};

window.onload = function() {
  var gui = new dat.GUI();
  gui.add(options, 'sizeNoise').min(0).max(2000).step(10);

};