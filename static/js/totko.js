let totko;
let canvas;
let w, wX;
let wh = 5;
let  y = 0;

function preload(){
	// totko = loadImage('images/totko-panorama.png');
}

function setup(){
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0,0);
 	canvas.style('display', 'block');
  	canvas.style('z-index', '-1');
	
}

function draw(){
	
// Making noise
	background(255);
  	noStroke();


	// for (var x=0; x<=(windowWidth); x+=10) {
	//     for (var y=0 ;y<=(windowHeight) ; y+=10){
	//   			fill(random(0,255),random(0,255),random(0,255));
	//   			rect(x*10,y*50,width,height);
	//         }
	// 	}

	

// Setting the sizes of the <div> elements
	w = windowHeight * 640/480;
	let frames = 48;
	let seqLength = w*24;
	let move = select('.imgs');
	let size1 = select('.totkoimg');
		let size2 = select('#totkoimg2');
	let sizeContainer = select('.totko');
	sizeContainer.style('width',w+'px');
	sizeContainer.style('height',windowHeight+'px');
	size1.style('height',windowHeight+'px');
	size2.style('height',windowHeight+'px');
	size2.style('left',seqLength+'px');
	wX = windowWidth / w;
	

	let cor = map(mouseX,0, windowWidth, 0,frames);
	cor = int(cor)*w;

	cor = constrain(cor,0, (frames*w));
	move.style('left', -cor+'px');
	print(mouseX, cor);

}

function windowResized(){
	// print(w, windowWidth, wX);

}