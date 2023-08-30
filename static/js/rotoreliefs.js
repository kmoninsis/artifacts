let canvas;
let t1 = 0;
let t2 = 0;
let G, H, T;
let sourceText = 'I love Rotoreliefs\nand nobody can destroy\nmy inner peace';

let R = [];
let i = 480; 
let offset = [];
let y = 0;
let x;
function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function setup (){
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0,0);
	canvas.style('display', 'block');
	canvas.style('z-index', '-1');
	G = createGraphics(400,400);
  H = createGraphics(500,500);
  
  for (let j = 0; j<11; j++) {  
    i -= (j*8);

    R[j] = i;
    offset[j] = y;
    let c = 0;
    if (j>0) {
      c = R[j]-R[j-1];
      
    }
    let b = i*PI;
    y+= 5 ;
    
  }

}

function draw (){
 	background(50,250,150);
  fill(255);
  textSize(32);
  textAlign(CENTER, CENTER);
  let middle = sourceText.length/2;
  let left = middle - ((mouseX / (width-200)) * middle);
  let right = middle + ((mouseX / (width-200)) * middle);
  text(
    sourceText.substring(left, right+1),
    width/2, height/2);
  drawG();
  drawH();
  image(G, windowWidth-400,windowHeight-400);
  image(H, -200,200);
}

function Roto(x, r, c) {
  G.fill(c);
  
  G.ellipse(sin(t2/10)*x+200, cos(t2/10)*x+200, r, r);
}
function RotoH(x, r) {
  H.ellipse(sin(t1/10)*x+(H.width/2), cos(t1/10)*x+(H.height/2), r, r);
}

function drawH(){
  H.stroke(50,250,150);
  H.strokeWeight(1);
  H.fill(50,250,150);
 
  x = map(mouseX, 0, windowWidth, 0, 50);
  T = map(mouseY, 0, windowWidth, 0, 2);


  RotoH(0,490);
  H.stroke(0);
  H.fill(255)
  for (let j = 0; j< R.length; j++) {
    let b = (R[j]*PI);
    offset[j] = constrain(j*x,0,j*8);
    

    RotoH(offset[j], R[j]);
  }

  t1 -= T;

}


function drawG(){
  
  G.noStroke();
  for(let i = 0; i < 10; i++){
    let f;
    if(i % 2 == 0){
    f = 255;
    } else{
     f = 0; 
    }
    let x = i*10;
    let R = 400-(i*20);
    Roto(x, R, f); 
  
  }
  for(let i = 0; i < 6; i++){
    let f;
    if(i % 2 == 0){
    f = 255;
    } else{
     f = 0; 
    }
    let x = 80-i*10;
    let R = 200 -(i*20);
    Roto(x, R, f); 
   
  }
  for(let i = 0; i < 4; i++){
    let f;
    if(i % 2 == 0){
    f = 255;
    } else{
     f = 0; 
    }
    let x = 30+i*10;
    let R = 80 -(i*20);
    Roto(x, R, f); 

  }
  let increment = constrain(mouseX, windowWidth-G.width, windowWidth);

  increment = map(increment, windowWidth-G.width, windowWidth, 0.2, 2);
  
  t2 += increment;
}