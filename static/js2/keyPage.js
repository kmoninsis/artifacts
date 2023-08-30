let canvas;
let ell, src;
let x,y, originX, originY;
let len = 450;
let angle; 
let aVel = 0.0;
let aAcc = 0.0;
let bVel = 1.0;
let bAcc = 1.0;
let bPull = 1.5;
let pull;
let pendulum;
let trigger;
let ninoB, ninoF;
let s = 200;
let L = 255;
let bottom = false;
let interactive = false;
let wrong = false;
let triggerDiv;
let form;
let slideX = -400;
let normal, hipno, cookie;

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}
function setup(){
	canvas = createCanvas(windowWidth,windowHeight);
	canvas.position(0,0);
	canvas.style('display','block');
	canvas.style('z-index','1');
	ninoB = loadImage('images/ninoB.png');
	ninoF = loadImage('images/ninoF.png');
	src = select('.container');
	trigger = select('span');
	pull = trigger.html();
	//Create next-page link
	triggerDiv = select('#next');
	triggerDiv.style('position','absolute');
	triggerDiv.style('z-index','2');
	triggerDiv.style('visibility','hidden');
	
	// Check the x,y position of the form
	form = select('input');
	originX = src.elt.offsetLeft + (src.elt.offsetWidth/2);
	originY = src.elt.offsetHeight +src.elt.clientHeight;
	angle = PI/4;
	
//Make pendulum in Graphics-buffer 
	pendulum = createGraphics(200,200);
	pendulum.fill(255);
	let initR = 180;
	pendulum.strokeWeight(10);
	for(let i = 0; i < 13; i++){
		let f;
		if(i % 2 == 0){
		    f = 255;
	    } else {
		     f = 0; 
	    }
	    let R = initR;	
		pendulum.stroke(f)
		pendulum.ellipse(100,100,R,R);
		initR -= 15;
	}
	frameRate(25);
	normal = select('#0');
	hipno = select('#1');
	cookie = select('#2');
	
	normal.loop();
	normal.volume(0);
	hipno.loop();
	hipno.volume(0);
	cookie.loop();
	cookie.volume(0);
}

function draw(){
	background(0);
//Pendulum normal state


if (bottom == false) {
	normal.volume(0.3);
	x = originX + len * sin(angle);
	y = originY + len * cos(angle);
	stroke(L);
	strokeWeight(1);
	line(originX, originY, x,y);
	push();
	translate(-s/2,-s/2);
	image(pendulum, x,y, s,s);
	pop();
	aAcc = -0.01 * sin(angle);
	angle += aVel;
	aVel += aAcc;

//Pendulum wrong password

	if (aVel < 0.4){
		aVel *= pull;
		
	} 
	if(pull == 1.01){
		normal.volume(0);
		hipno.volume(0.3);
	}
	//Password is valide, Set timer
	if(pull == 0.9){
  		let timer = millis();
  		if(timer > 3000){

  			bottom = true;  			
  			}
  		}
  	}

  			 
	//The pendulum falls to the bottom
	if (bottom == true && interactive == false){
		normal.volume(0.2);
		hipno.volume(0);
		cookie.volume(0.3);
		form.style('visibility','hidden');
		L = 0;
		push();
		translate(-s/2,-s/2);
		image(pendulum, x,y, s,s);
		pop();
		if(s > 150){
	  		s-= 0.5;
		}

		bAcc = -0.01 * bVel;
		y +=bVel;
		bVel += 0.2;
		bVel *= 0.97;
		
		if(y>windowHeight-(s/2)){
			bVel = -0.9 * bVel;
		 	
		 	if(sq(mouseX - x) + sq(mouseY - y) <= sq(s/3)){
	  			
	  			interactive = true;
	  			noCursor();

	  			

  			}
		}
		
	}
	//The pendulum fell to the bottom, takes over cursor
	if(interactive == true){
	  	triggerDiv.size(100, 50);
		triggerDiv.position(120,300);
		triggerDiv.style('color','white');
		triggerDiv.style('visibility','visible');
	  	
		if (slideX < 0){
			slideX += 10;
			
		}
	  	image(ninoB, slideX,0);
	  	push();
		translate(-s/2,-s/2);
		image(pendulum, x,y, s,s);
		pop();
		image(ninoF, slideX,0);
	  	x = mouseX;
	  	y = mouseY;
	  	if(x < 370 && y < 470){
	  		x = constrain(x,170, windowWidth);
	  		y = constrain(y, 370, windowHeight);
	  	}
	  	
	  	print(x,y);
	}
}

