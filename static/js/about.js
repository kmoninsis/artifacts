let links;
let h;

function setup(){

	links = selectAll('a');
	let w = windowWidth/links.length;
	h = windowHeight/2;
	for(x in links.length){
		links[x].style('width', w+'px');
	}
}

function draw(){

	for(x in links.length){
		links[x].style('top', h+'px');
	}
  
}

function myInputEvent() {
  console.log('you are typing: ', this.value());
}