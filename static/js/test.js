let text = "My method of investigation is like Bas Jan Ader -  falling"
let div, iara, nino, avatars;
let sound1;


function setup(){
	div = createElement('h2', text);
	div.position(windowWidth/2, windowHeight/2);
	div.elt.color = 'white';

	sound1 = select('audio');
	sound1.elt.playbackRate = '1';
	sound1.elt.loop = true;
	iara = select('#iara');
	nino = select('#nino');
	avatars = select('.avatars');

}

function draw(){
	let rate = map(mouseX, 0, windowWidth, 0.1, 5);
	sound1.elt.playbackRate = rate;
	print("Rate: ", sound1.elt.playbackRate, rate);

// Easing for the avatars
	let targetX = mouseX;
	let dx = targetX - x;
	x += dx * easing;

	let targetY = mouseY;
	let dy = targetY - y;
	y += dy * easing;

	let speed = map(y, 0.1, windowHeight, 0, 1.2);
	speed = constrain(speed, 0.1, 1);

	iara.style('top','100px');
	iara.style('left',(x-150)+'px');
	nino.style('top',(y-200)+'px');
	nino.style('left','100px');
	avatars.style('height','100px');
	//image(iara, x-150, 100, 50,50);
	//image(nino, 100, y-200, 50,50);

}

function mousePressed(){


}