let osc, fft, canvas;
let Hue = 0;
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
	canvas.style('display', 'block');
	canvas.style('z-index', '-1');
	frameRate(200);
  osc = new p5.TriOsc(); // set frequency and type
  osc.amp(0.5);

  fft = new p5.FFT();
  osc.start();
}

function draw() {
  background(101, 57, 247);

  let waveform = fft.waveform(); // analyze the waveform
  beginShape();
  strokeWeight(5);
  stroke(98, 250, 47);
    // stroke(255, 187, 0);
  for (let i = 0; i < waveform.length; i++) {
    let x = map(i, 0, waveform.length, 0, width);
    let y = map(waveform[i], -1, 1, height, 0);
   
    vertex(x, y);
  }
  endShape();

  // change oscillator frequency based on mouseX
  let freq = map(mouseX, 0, width, 40, 880);
  osc.freq(freq);

  let amp = map(mouseY, 0, height, 1, 0.01);
  osc.amp(amp);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);

}