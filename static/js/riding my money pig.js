
let canvas;
let sound; 
let pig;
let x = 100,
	y = 100,
	angle1 = 0.0,
	segLength = 20;




function preload(){
	pig = loadImage("static/images/vivi3.png");
//	sound = loadSound("static/audio/MeMony.mp3");
//	sound.setVolume(0);
}

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0,0);
	canvas.style('display', 'block');
	canvas.style('z-index', '-1');
	select('body').elt.style.backgroundColor = 'black';
//	sound.loop();
//	sound.amp(0.3);
	

}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function draw() {
	dx = mouseX -x;
	dy = mouseY - y;
	angle1 = atan2(dy, dx);
	x = mouseX - cos(angle1) * segLength;
	y = mouseY - sin(angle1) * segLength;
	segment(x, y, angle1);

}

function segment(x,y,a){
let speed = abs(mouseX - pmouseX) + abs(mouseY - pmouseY);
push();
translate(x,y);
rotate(a);
if(speed > 0){
	image(pig, 0, 0, speed*4, speed*8);
}
pop();
}


