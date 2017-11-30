var options = {
  size: 0,
  tileCount: 20,
  circleFillColor: [255, 120, 0], //RGB   
  fill: false,
  columns: 2,
  rows: 2
};

window.onload = function() {
  var gui = new dat.GUI();
  gui.add(options, 'size').min(0).max(255).step(1);
    gui.add(options, 'columns').min(0).max(10).step(1);
    gui.add(options, 'rows').min(0).max(10).step(1);
  gui.add(options, 'fill');
  gui.addColor(options, 'circleFillColor');

};