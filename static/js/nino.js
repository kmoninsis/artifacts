let nino;
let canvas,
	size1,
	size2,
	size3,
	move,
	sizeContainer,
	
	step;
let w, wX, h;
let acc = 0;
let cor;
let wh = 5;
let  y = 0;
let frames = 71;
let noise;
let sound, lastFrame, currFrame;

function preload(){
	// nino = loadImage('images/nino-panorama.png');
}

function setup(){
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0,0);
 	canvas.style('display', 'block');
  	canvas.style('z-index', '-1');
	move = select('.imgs');
	size1 = select('.ninoimg');
	size2 = select('#ninoimg2');
	size3 = select('#ninoimg3');
	sizeContainer = select('.nino');
	sound = select('audio');
	w = windowHeight * 1920/1080;
	h = windowWidth * 1080/1920;

	noise = createGraphics(windowWidth,windowHeight);

	document.getElementsByTagName('audio')[0].addEventListener("play", function (){
				print("playing");
			setTimeout(function(){
				sound.pause();
				print("paused");
			},
        	500);
        }, false);

}        

function draw(){
	let start = millis();
// Making noise
	noise.noStroke();
	// for (var x=0; x<=(windowWidth); x+=10) {
	//     for (var y=0 ;y<=(windowHeight) ; y+=10){
	//   			noise.fill(getRandomFloat(255),getRandomFloat(255),getRandomFloat(255));
	//   			noise.rect(x*10,y*50,width,height);
	//   			image(noise,0,0);
	//         }
	// 	}
	
	loadPixels();
      for (var y = 0; y < windowHeight; y++) {
        for (var x = 0; x < windowWidth; x++) {
          var index = (x + y * windowWidth)*4;

          pixels[index+0] = getRandomFloat(255);
          pixels[index+1] = getRandomFloat(255);
          pixels[index+2] = getRandomFloat(255);
          pixels[index+3] = 255;      
        }
      }
      updatePixels();
		let end = millis();
let elapsed = end - start;
// console.log("This took: " + elapsed + "ms.")

// Setting the sizes of the <div> elements
	seqLength1 = windowWidth*23;
	seqLength2 = windowWidth*24;

// Main Div Container size
	sizeContainer.style('width',windowWidth+'px');
	sizeContainer.style('height',h+'px');
// Image sizes
	size1.style('height',h+'px');
	size2.style('height',h+'px');
	size2.style('left',seqLength2+'px');
	size3.style('height',h+'px');
	size3.style('left',(seqLength1+seqLength2)+'px');
	
	let cor = map(mouseX, windowWidth, 0, 0,frames);

	step = Math.floor(cor);
	footstep(step);
	console.log(step);
	cor = constrain(step*windowWidth,0, (frames*windowWidth));
	
	move.style('left', -cor+'px');
	

}

function windowResized(){
	// print(w, windowWidth, wX);
	w = windowHeight * 1920/1080;
	h = windowWidth * 1080/1920;
	resizeCanvas(windowWidth,windowHeight);
}

function getRandomFloat(max){
	return Math.random() * max;
}

function footstep(frameNum){
	for(let i = 10; i < frames; i+=3){
		currFrame = i;
		if(frameNum == i && currFrame != lastFrame){
			
			sound.play();
			lastFrame = currFrame;	
		} 
	} 
}

