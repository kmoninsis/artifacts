let letters = [];
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

let totko;

let movers = [];
let liquid;

function preload(){
	totko = loadImage("images/totko.png");
	fixedsys = loadFont("images/fixedsys.ttf");
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
	reset();
	textFont(fixedsys);

	liquid = new Liquid(0, height / 2, width, height / 2, 0.1);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);

}

function draw() {
	background(Magenta);
	
	liquid.display();

	for(let i = 0; i < movers.length; i++){
		if (liquid.contains(movers[i])) {
      // Calculate drag force
      let dragForce = liquid.calculateDrag(movers[i]);
      // Apply drag force to Mover
      movers[i].applyForce(dragForce);
    }

    // Gravity is scaled by mass here!
    let gravity = createVector(0, 0.1 * movers[i].mass);
    // Apply gravity
    movers[i].applyForce(gravity);

    // Update and display
    movers[i].update();
    movers[i].display();
    movers[i].checkEdges();
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
fill(Magenta);
noStroke();
translate(-(totko.width/2),-(totko.height/2));
ellipse(0,0,140,140);

image(totko, 0, 0);
pop();
}

function reset(){
	
	
		for(i = 0; i < sourceText.length; i++){
			textSize(random(30,150));
			let offset = i * textSize();
			let allign = windowWidth/2-windowWidth/5;
			fill(C);
			letters[i] = sourceText.substring(curIndex, curIndex+1);
			text(letters[i],allign+offset,windowHeight/2);
			curIndex ++;
			movers[i] = new Mover(random(0.5,3), 40 + i * 90, 20);
		}
	}

let Liquid = function(x, y, w, h, c) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.c = c;
};
// Is the Mover in the Liquid?
Liquid.prototype.contains = function(m) {
  let l = m.position;
  return l.x > this.x && l.x < this.x + this.w &&
         l.y > this.y && l.y < this.y + this.h;
};
// Calculate drag force
Liquid.prototype.calculateDrag = function(m) {
  // Magnitude is coefficient * speed squared
  let speed = m.velocity.mag();
  let dragMagnitude = this.c * speed * speed;

  // Direction is inverse of velocity
  let dragForce = m.velocity.copy();
  dragForce.mult(-1);

  // Scale according to magnitude
  // dragForce.setMag(dragMagnitude);
  dragForce.normalize();
  dragForce.mult(dragMagnitude);
  return dragForce;
};
Liquid.prototype.display = function() {
  noStroke();
  fill(50);
  rect(this.x, this.y, this.w, this.h);
};

function Mover(m, x, y) {
  this.mass = m;
  this.position = createVector(x, y);
  this.velocity = createVector(0, 0);
  this.acceleration = createVector(0, 0);
}

// Newton's 2nd law: F = M * A
// or A = F / M
Mover.prototype.applyForce = function(force) {
  let f = p5.Vector.div(force, this.mass);
  this.acceleration.add(f);
};

Mover.prototype.update = function() {
  // Velocity changes according to acceleration
  this.velocity.add(this.acceleration);
  // position changes by velocity
  this.position.add(this.velocity);
  // We must clear acceleration each frame
  this.acceleration.mult(0);
};

Mover.prototype.display = function() {
  stroke(0);
  // strokeWeight(2);
  fill(Pink);
  // ellipse(this.position.x, this.position.y, this.mass * 16, this.mass * 16);
};

// Bounce off bottom of window
Mover.prototype.checkEdges = function() {
  if (this.position.y > (height - this.mass * 8)) {
    // A little dampening when hitting the bottom
    this.velocity.y *= -0.9;
    this.position.y = (height - this.mass * 8);
  }
};