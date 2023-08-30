let vivi;
let	sound1;
let canvas;
let x = 100,
	y = 100,
	angle1 = 0.0,
	segLength = 20;

function preLoad(){
	vivi = loadImage('images/vivi3.png', afterLoad, noLoad);
	sound1 = loadSound('images/audio/MeMony.mp3', afterLoad);
}

function afterLoad(){
  print("Item has finished loading");
  sound1.setVolume(0);
 }

 function noLoad(){
  print("Item has failed loading");
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function setup (){
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0,0);
	canvas.style('display', 'block');
	canvas.style('z-index', '-1');
	sound1.amp(0.3);

}

function draw (){
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
	image(vivi, 0, 0, speed*4, speed*8);
}
pop();
}
