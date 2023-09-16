let canvas,
	iara,
	nino,
	sound1,
	font,
	thesis,
	pg,
	div,
	textHeight,
	analyzer,
	filter, filterFreq, filterRes;

let strings = [];

let IsPlaying = false;

let x = 1, 
	y = 1,
	easing = 0.1,
	scroll;

function preload(){
	iara = loadImage('storage/images/iara.png', afterLoad);
	nino = loadImage('storage/images/nino.png', afterLoad);
	sound1 = loadSound('storage/audio/Wubi.mp3', afterLoad);
	font = loadFont('static/fonts/fixedsys.ttf', afterLoad);
	strings = loadStrings('static/thesis.txt', afterLoad);
}

function afterLoad(){
	print("Item has finished loading");
	sound1.setVolume(0);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function setup (){
	canvas = createCanvas(windowWidth,windowHeight);
	canvas.position(0,0);
	canvas.style('display', 'block');
	canvas.style('z-index', '-1');
	frameRate(25);
	
	textSize(30);
	textFont(font);
	textAlign(CENTER);
	// sound1 = select('audio');
	scroll = windowHeight;
	sound1.loop();	
	sound1.amp(0.3);
	filter = new p5.LowPass(); 
	sound1.disconnect();
	sound1.connect(filter);
	analyzer = new p5.Amplitude();
	analyzer.setInput(filter);
	thesis = join(strings, ' ');
	textHeight = (textWidth(thesis)/800)*30;
	// console.log(textHeight);
}


function draw (){
	background(150,150,255);

	let targetX = mouseX;
	let dx = targetX - x;
	x += dx * easing;

	let targetY = mouseY;
	let dy = targetY - y;
	y += dy * easing;


	let speed = map(y, 0.1, windowHeight, 0, 1.2);
	speed = constrain(speed, 0.1, 1);

	sound1.rate(speed);


	filterFreq = map(x, 0, windowWidth, -250, 1800);
	filterFreq = constrain(filterFreq, 40, 2050)


	filter.set(filterFreq, filterRes);

	let rms = analyzer.getLevel();

	textCrawl();


	image(iara, x-150, 100, sq(16+rms*10),sq(16+rms*10));
	image(nino, 100, y-200, sq(17+rms*10),sq(17+rms*10));

}

function textCrawl(){
	fill(255);

	text(thesis, (windowWidth/2)-400, scroll, 800, 2000);
	scroll -= 2.5;
	if(scroll < (windowHeight-2000)){
		scroll = windowHeight;

	}
}