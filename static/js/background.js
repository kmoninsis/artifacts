let letters = [];
let pg;
let canvas;
let sourceText = "vanina tsvetkova";
let curIndex = 0;
let fixedsys;
let C,
	Pink, 
	Magenta,
	MagentaAlpha;
let x = 100,
	y = 100,
	angle1 = 0.0,
	segLength = 150;

let totko,
	sound,
	V;


function preload(){
	totko = loadImage("static/images/totko.png");
	fixedsys = loadFont("static/fonts/fixedsys.ttf");
//	sound = loadSound("static/audio/Creature_sound.mp3");
//	sound.setVolume(0);
}

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0,0);
	canvas.style('display', 'block');
	canvas.style('z-index', '-1');

	Pink  = color(255,200,190);
	MagentaAlpha  = color(255,0,200,122);
	Magenta = color(255,100,200);
	C = Pink;
	textSize(100);
//	sound.loop();
//	sound.amp(0.3);
	textFont(fixedsys);
	for(let i = 0; i < sourceText.length; i++){
		letters[i] = sourceText.substring(curIndex, curIndex+1);
		curIndex ++;
		let offset = i * 45;
		let allign = windowWidth/2-windowWidth/5;
			
	}

}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function draw() {
	background('magenta');
	noStroke();
	fill(C);
	// V = map(mouseY, 0,windowHeight,0,0.3);
	// sound.amp(V);
	for(let i = 0; i < letters.length; i++){
		let offset = i * 45;
		let allign = windowWidth/2-windowWidth/5;
			
		text(letters[i],allign+offset,windowHeight/2);	
		if(mouseX >= allign+offset && mouseX <= allign+(offset*2) && mouseY >= windowHeight/2-50 && mouseY <= windowHeight/2){
			
			letters[i] = " "
				// strokeWeight(5);
		
		}	
	}

	dx = mouseX -x;
	dy = mouseY - y;
	angle1 = atan2(dy, dx);
	x = mouseX - cos(angle1) * segLength;
	y = mouseY - sin(angle1) * segLength;
	segment(x, y, angle1);

}

function segment(x,y,a){
push();
translate(x,y);
rotate(a);
translate(-(totko.width/2),-(totko.height/2));
image(totko, 0, 0);
pop();
}

