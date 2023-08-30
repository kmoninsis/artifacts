let canvas,
	thesis,
	scroll,
	font;
let strings = [];
function preload(){
	strings = loadStrings('images/thesis2.txt');
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function setup (){
	canvas = createCanvas(windowWidth,windowHeight,WEBGL);
	canvas.position(0,0);
	canvas.style('display', 'block');
	canvas.style('z-index', '-1');
	
	thesis = join(strings, "\n\n");
	scroll = windowHeight/2;
	font = loadFont('images/fixedsys.ttf');
	// print(strings);
}

function draw (){
	// translate(windowWidth/2,windowHeight/2);
	background(0);
	push();
	// translate(-200,0);
	textSize(width*0.04);
	textFont(font);
	textAlign(CENTER);
	fill(238,213,75);
	rotateX(PI/4);
	let w = windowWidth*0.8;
	text(thesis, -w/2, scroll, w, windowHeight*10);
	// print(-w/2,w);
	pop();
	scroll -=0.7;
	
}
