let canvas,
	sketch1,
	sketch2,
	strings,
	thesis,
	scroll,
	font;



function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	sketch1.size(windowWidth,windowHeight);
	sketch2.size(800, windowHeight);
}

function setup (){
	canvas = createCanvas(windowWidth,windowHeight,WEBGL);
	sketch1 = createGraphics(windowWidth,windowHeight);
	sketch2 = createGraphics(800,windowHeight,WEBGL);
	sketch1.position(0,0);
	sketch2.position(windowWidth/2,0);
	canvas.position(0,0);
	canvas.style('display', 'block');
	canvas.style('z-index', '-1');
	strings = loadStrings('images/thesis.txt');
	thesis = strings;
	scroll = sketch2.height;
	font = loadFont('images/fixedsys.ttf');
	// print(thesis);
}

function draw (){
	drawSketch1();
	drawSketch2();
	translate(-windowWidth/2,-windowHeight/2);
	image(sketch1, 0,0);
	image(sketch2, 0,0);
	scroll -= 1.5;
	
}

function drawSketch1(){
	sketch1.background(150,150,255);
}

function drawSketch2(){
	// sketch2.translate(-400,-400);
	sketch2.background(150,150,255);
	sketch2.push();
	// sketch2.translate(width/2,height/2);
	sketch2.textSize(30);
	sketch2.textFont(font);
	sketch2.textAlign(CENTER);
	sketch2.fill(255);
	sketch2.rotateX(PI/4);
	sketch2.text(thesis, -sketch2.width/2, scroll, 800, windowHeight);
	
	
	sketch2.pop();
}