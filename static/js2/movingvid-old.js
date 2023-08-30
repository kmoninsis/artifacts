let canvas;
let totko;
let sound1;
let IsPlaying = false;

function preload(){
	totko = createVideo('images/totkoPink.mp4', afterLoad);	
	sound1 = loadAudio('images/soundBite1.mp3', afterLoad);
	
}
function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function setup (){
	canvas = createCanvas(windowWidth,windowHeight);
	canvas.position(0,0);
	canvas.style('display', 'block');
	canvas.style('z-index', '-1');
	totko.volume(0);
	frameRate(25);
}


function draw (){
	let xspeed = map(mouseX,0,width,20,0);
	let yvolume = map(mouseY,0,height,1,0);
	// totko.speed(xspeed);
	sound1.speed(xspeed);
	sound1.volume(yvolume);
	variableSpeed(mouseX, mouseY, pmouseX, pmouseY);
	image(totko,0,0,windowWidth,windowHeight);
	console.log(variableSpeed);
}

function variableSpeed(x,y,px,py){
	let speed = abs(x-px) + abs(y-py);
	let speedMap = map(speed,0,200, 0,2);
	if (speedMap >=0 && speedMap <= 2){
		totko.speed(speedMap);
	}
	// console.log(speed);
	
}

function mouseClicked(){
		if(!IsPlaying){
			totko.loop();
			sound1.loop();
			sound1.volume(1);
			IsPlaying = false;			
		} else {
			totko.pause();
			sound1.pause();
			sound1.volume(0);
			IsPlaying = true;
			
		}
		console.log(IsPlaying);

}
function afterLoad(){
text("Video has finished loading", 20, 40);
print("Video has finished loading");
}