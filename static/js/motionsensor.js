let nino;
let canvas,
	size1,
	size2,
	size3,
	move,
	sizeContainer;
let w, wX, h;
let wh = 5;
let  y = 0;
let frames = 71;
let threshold = 80;
let cam,
	prevFrame,
	currFrame,
	newFrame,
	avgMotion,
	prevMotion;

function preload(){
	// nino = loadImage('images/nino-panorama.png');
}

function setup(){
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0,0);
 	canvas.style('display', 'block');
  	canvas.style('z-index', '-1');
	// move = select('.imgs');
	// size1 = select('.ninoimg');
	// size2 = select('#ninoimg2');
	// size3 = select('#ninoimg3');
	// sizeContainer = select('.nino');
	// w = windowHeight * 1920/1080;
	// h = windowWidth * 1080/1920;

	cam = createCapture(VIDEO);
	cam.size(320,240);
	cam.hide();

	prevFrame = createImage(cam.width,cam.height);
	currFrame = createImage(cam.width,cam.height);
	newFrame = createImage(cam.width,cam.height);
	// frameRate(10);
}

function draw(){
	
// Capture image from webcam
	// image(cam,0,0,width,(width * cam.height/cam.width))
	loadPixels();
	cam.loadPixels();
	prevFrame.loadPixels();
	currFrame.loadPixels();
	newFrame.loadPixels();

	let totalMotion = 0;
 	let newMotion = 0;
// for (let x = 0; x < cam.width; x++) {
//     for (let y = 0; y < cam.height; y++) {

//       // Step 1, what is the location into the array
//       let loc = (x + y * cam.width) * 4;
      
//       // Step 2, what is the previous color
//       let r1 = prevFrame.pixels[loc   ]; 
//       let g1 = prevFrame.pixels[loc + 1];
//       let b1 = prevFrame.pixels[loc + 2];

//       // Step 3, what is the current color
//       let r2 = cam.pixels[loc   ]; 
//       let g2 = cam.pixels[loc + 1];
//       let b2 = cam.pixels[loc + 2];

//       // Step 4, compare colors (previous vs. current)
//       let diff = dist(r1, g1, b1, r2, g2, b2);

//       totalMotion += diff;
//     }
//   }
//   updatePixels();




  // Begin loop to walk through every pixel
  for (var x = 0; x < cam.width; x++) {
    for (var y = 0; y < cam.height; y++) {

      // Step 1, what is the location into the array
      var loc = (x + y * cam.width) * 4;
      
      // Step 2, what is the previous color
      var r1 = prevFrame.pixels[loc   ]; 
      var g1 = prevFrame.pixels[loc + 1];
      var b1 = prevFrame.pixels[loc + 2];
// var B1 = newFrame.pixels[loc   ]; 
      // Step 3, what is the current color
      var r2 = cam.pixels[loc   ]; 
      var g2 = cam.pixels[loc + 1];
      var b2 = cam.pixels[loc + 2];
 // var B2 = currFrame.pixels[loc   ]; 
      // Step 4, compare colors (previous vs. current)
      var diff = dist(r1, g1, b1, r2, g2, b2);
      totalMotion += diff;
      // var diff2 = abs(B1-B2);
      // newMotion += diff2;
      // Step 5, How different are the colors?
      // If the color at that pixel has changed, then there is motion at that pixel.
      if (diff > threshold) { 
        // If motion, display black
        currFrame.pixels[loc] = 0;
        currFrame.pixels[loc+1] = 0;
        currFrame.pixels[loc+2] = 0;
        currFrame.pixels[loc+3] = 255;
      } else {
        // If not, display white
        currFrame.pixels[loc] = 255;
        currFrame.pixels[loc+1] = 255;
       currFrame.pixels[loc+2] = 255;
        currFrame.pixels[loc+3] = 255;
      }
    }
  }
  updatePixels();
  currFrame.updatePixels();

 // Begin loop to walk through every pixel
  for (var x = 0; x < currFrame.width; x++) {
    for (var y = 0; y < currFrame.height; y++) {

      // Step 1, what is the location into the array
      var loc = (x + y * currFrame.width) * 4;
      
      // Step 2, what is the previous color
      var B1 = newFrame.pixels[loc   ]; 
     
      // Step 3, what is the current color
      var B2 = currFrame.pixels[loc   ]; 
     
      // Step 4, compare colors (previous vs. current)
      var diff = abs(B1-B2);
      newMotion += diff;

    }
  }
// Save frame for the next cycle
  if (cam.canvas) {
    prevFrame.copy(cam, 0, 0, cam.width, cam.height, 0, 0, cam.width, cam.height); // Before we read the new frame, we always save the previous frame for comparison!
  }

	
// averageMotion is total motion divided by the number of pixels analyzed.
	avgMotion = newMotion / (cam.width * cam.height);

	let mapMotion = map(avgMotion, 0, 255,255,0);
	
	
	// let c = lerp(prevMotion, mapMotion, 4);
	fill(avgMotion);

	
	// prevMotion = mapMotion;

	print("Average motion in screen: ", avgMotion);
	push();
	translate(windowWidth/2-cam.width,windowHeight/2-cam.height/2);
	rect(0,0,cam.width,cam.height);
	// image(cam,cam.width,0);
	image(currFrame, cam.width, 0);
	pop();
// Making noise
	// noStroke();
	// for (var x=0; x<=(windowWidth); x+=10) {
	//     for (var y=0 ;y<=(windowHeight) ; y+=10){
	//   			fill(random(0,255),random(0,255),random(0,255));
	//   			rect(x*10,y*50,width,height);
	//         }
	// 	}



// Setting the sizes of the <div> elements
	// seqLength1 = windowWidth*23;
	// seqLength2 = windowWidth*24;

// Main Div Container size
	// sizeContainer.style('width',windowWidth+'px');
	// sizeContainer.style('height',h+'px');
// Image sizes
	// size1.style('height',h+'px');
	// size2.style('height',h+'px');
	// size2.style('left',seqLength2+'px');
	// size3.style('height',h+'px');
	// size3.style('left',(seqLength1+seqLength2)+'px');
	
	// let cor = map(mouseX, windowWidth, 0, 0,frames);
	// cor = int(cor)*windowWidth;
	// // cor = constrain(cor,0, (frames*windowWidth));
	
	// move.style('left', -cor+'px');
	// // print("w: ",w, "h: ", h);

}

function windowResized(){
	// print(w, windowWidth, wX);
	// w = windowHeight * 1920/1080;
	// h = windowWidth * 1080/1920;
	canvas.resize(windowWidth,windowHeight);
}