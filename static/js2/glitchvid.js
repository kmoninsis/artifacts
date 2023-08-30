let canvas;
let glitch;
let sound1;
let IsPlaying = false;

function preload(){
	glitch = createVideo('images/GlitchVid0.mp4', afterLoad);
	sound1 = loadSound('images/audio/Game.mp3', afterLoad);
}

function afterLoad(){
	print("Item has finished loading");
	glitch.volume(0);
	sound1.setVolume(0);
	glitch.size(windowWidth,windowHeight);
	glitch.loop();
	sound1.loop();
	sound1.amp(0.3);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	glitch.size(windowWidth,windowHeight);
}

function setup (){
	canvas = createCanvas(windowWidth,windowHeight);
	canvas.position(0,0);
	canvas.style('display', 'block');
	canvas.style('z-index', '-1');
	frameRate(25);
	background(0);
}


function draw (){
	// image(glitch,0,0,windowWidth,windowHeight);
}



function mouseClicked(){
	if(!IsPlaying){
		sound1.amp(0.3);
		IsPlaying = true;
	} else {
		sound1.amp(0);
		IsPlaying = false
	}
	print(IsPlaying);
}