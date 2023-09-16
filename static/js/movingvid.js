let canvas;
let totko,
	sound1;
let IsPlaying = false;
let R, centerW, centerH;

function preload(){
	totko = createVideo('storage/videos/totkoGlitchEarth.mp4', afterLoad);
	sound1 = loadSound('storage/audio/Minions.mp3', afterLoad, errorLoad, progressLoad);
	
}
function errorLoad(e){
print("Item "+e+"has error");
}

function progressLoad(e){
print("Item "+e+"has progress");
}

function afterLoad(){
print("Item has finished loading");
//	if(item == 'video'){
//		totko.size(windowWidth,AUTO);
//		totko.volume(0);
//	}
//	else { sound1.setVolume(0); }
}
function windowResized() {
//	resizeCanvas(windowWidth, windowHeight);
//	totko.size(windowWidth,AUTO);
}

function setup (){
	totko.loop();
	// totko.hide();
	sound1.loop();
	frameRate(25);
}


function draw (){
//		print(windowWidth*0.5625);
//Math.floor(windowWidth*0.5625)
	if(windowHeight == totko.size().height){
		print("video height is same as windowHeight");
		R = windowHeight/4;
	} else {
		print("video width is same as windowWidth");
		R = windowWidth/6;
	}
	centerW = windowWidth/2;
	centerH = windowHeight/2;
//	print(totko.size().width,windowWidth, totko.size().height, windowHeight);
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

