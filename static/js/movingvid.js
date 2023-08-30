let canvas;
let totko,
	sound1;
let IsPlaying = false;

function preload(){
	totko = createVideo('images/totkoGlitchEarth.mp4', afterLoad);	
	sound1 = loadSound('images/audio/Minions.mp3', afterLoad);
	
}
function afterLoad(){
print("Item has finished loading");
	totko.size(windowWidth,AUTO);
	totko.volume(0);
	sound1.setVolume(0);
}
function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	totko.size(windowWidth,AUTO);
}

function setup (){
	canvas = createCanvas(windowWidth,windowHeight);
	canvas.position(0,0);
	canvas.style('display', 'block');
	canvas.style('z-index', '-1');

	totko.loop();
	// totko.hide();
	sound1.loop();
	frameRate(25);
}


function draw (){
	let R = totko.size().height/4;
	let centerW = totko.size().width/2;
	let centerH = totko.size().height/2;

	if(sq(mouseX - centerW) + sq(mouseY - centerH) <= sq(R)){
	variableSpeed(mouseX, mouseY, pmouseX, pmouseY, false);
	} else {
	variableSpeed(mouseX, mouseY, pmouseX, pmouseY, true);
	}
}

function variableSpeed(x,y,px,py, b){
	let speed = abs(x-px) + abs(y-py);
	let vidSpeed = map(speed,0,200, 0.1,2);
	let xspeed = map(mouseX,0,width,0,2);
	let yvolume = map(mouseY,0,height,0,0.3);
	// let soundSpeed = map(speed,0,200, 0,2);
	if (vidSpeed >=0 && vidSpeed <= 2 && b == false){
		totko.speed(vidSpeed);
		sound1.rate(xspeed);
		sound1.setVolume(yvolume);
	} else if (vidSpeed >=0 && vidSpeed <= 2 && b == true){
		totko.speed(1);
		sound1.rate(1);
		sound1.setVolume(0.3);
	}


	
}

