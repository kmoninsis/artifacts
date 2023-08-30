let canvas,
	thesis,
	scroll,
	font;
let strings = [];
let iara, nino, avatars;

let x = 1, 
	y = 1,
	easing = 0.1

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

	iara = select('#iara');
	nino = select('#nino');
	avatars = select('.avatars');
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

	// Easing for the avatars
	let targetX = mouseX;
	let dx = targetX - x;
	x += dx * easing;

	let targetY = mouseY;
	let dy = targetY - y;
	y += dy * easing;

	let speed = map(y, 0.1, windowHeight, 0, 1.2);
	speed = constrain(speed, 0.1, 1);
// Styling the avatars
	iara.style('top','100px');
	iara.style('left',(x-150)+'px');
	nino.style('top',(y)+'px');
	nino.style('left','100px');

	
}
