let canvas;
let sound1;
let sourceText = 'I went to spend a time\nto get to know\nthat I have to wait';

function preload(){
	sound1 = loadSound('images/audio/Love is the answer.mp3', afterLoad);	
}

function afterLoad(){
	print("Item has finished loading");
	sound1.setVolume(0);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function setup (){
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0,0);
	canvas.style('display', 'block');
	canvas.style('z-index', '-1');
	frameRate(8);
	sound1.loop();
	sound1.amp(0.3);
	
}

function draw (){
	background(50,250,150);
	fill(255);
	textSize(32);
	textAlign(CENTER, CENTER);
	let middle = sourceText.length/2;
	let left = middle - ((mouseX / (width-200)) * middle);
	let right = middle + ((mouseX / (width-200)) * middle);
	text(
		sourceText.substring(left, right+1),
		width/2, height/2);
}