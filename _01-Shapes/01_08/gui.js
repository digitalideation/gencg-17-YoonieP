var options = {
  sizeNoise: 500,
  hslStartHue: 180,
  hslBrightness: 50,
  hslSaturation: 40,
  bgColor:[23, 22, 22],
  formCount:10,
  noiseStrength:395,
  noiseRefreshValue:3300,
  closeVertex: true
};

window.onload = function() {
  var gui = new dat.GUI();
  gui.add(options, 'sizeNoise').min(0).max(2000).step(10);
  gui.add(options, 'hslStartHue').min(0).max(360).step(10);
  gui.add(options, 'hslBrightness').min(0).max(100).step(5);
  gui.add(options, 'hslSaturation').min(0).max(100).step(5);
  gui.add(options, 'formCount').min(1).max(200).step(1);
  gui.add(options, 'noiseStrength').min(0).max(1000).step(5);
  gui.add(options, 'noiseRefreshValue').min(400).max(5000).step(100);	
  gui.addColor(options, 'bgColor');
  gui.add(options,'closeVertex');

};