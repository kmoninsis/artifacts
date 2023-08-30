let dancingWords = [];
let canvas;

class DanceSpan {
	constructor(element, x, y) {
		element.position(x, y);
		this.element = element;
		this.x = x;
		this.y = y;
	}

	brownian() {
		this.x += random(-6, 6);
		this.y += random(-6, 6);
		this.element.position(this.x, this.y);

	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function setup (){
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0,0);
	canvas.style('display', 'block');
	canvas.style('z-index', '-1');
	let texts = selectAll('.text');
	fill(255,255,255)
	for (let i = 0; i < texts.length; i++) {
		let paragraph = texts[i].html();
		let words = paragraph.split(' ');
		for (let j = 0; j < words.length; j++) {
			let spannedWord = createSpan(words[j]);
			let dw = new DanceSpan(spannedWord, random(100), random(50));
			dancingWords.push(dw);
		}
	}
}

function draw (){
	background(50,50,255);
	for (let i = 0; i < dancingWords.length; i++) {

		
			dancingWords[i].brownian();
		}
}