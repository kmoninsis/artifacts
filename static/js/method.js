let text = "My method of investigation is like Bas Jan Ader's Falling"
let dancingChars = [];
//let totalW = 150;
let w;
let spannedChar;
let spanArray = [];
let col = ['#8ae0c5','#a5e8db','#95c8d4','#90a8c9','#b3abd6'];
let activatedChars = [];


function setup(){
	let container = createElement('h2');
	container.style('pointerEvents:auto;display:flex;width:100%;textAlign:justify;justifyContent:space-evenly;position:absolute;paddingLeft:50px;paddingRight:50px;whiteSpace:pre');
	const chars = split(text, '');
	for(index in chars){
		spannedChar = createSpan(chars[index]);
		spannedChar.style('color', random(col));
		spannedChar.style('paddingTop', '0px');
		spannedChar.style('height','min-content');
		Object.defineProperty(spannedChar,'index', {value: index});
		spanArray.push(spannedChar);
		container.child(spannedChar);
		activatedChars.push(0);
	}

	for(x in spanArray){
		spanArray[x].mouseOver(function(){
			print(this.index)
			activatedChars[this.index] = 1;
		});
	}
}

function draw(){
	for(x in spanArray){
		if(activatedChars[x] == 1){
			let char = spanArray[x];
			if(int(char.elt.style.paddingTop) < windowHeight -50){
				let newHeight = int(char.elt.style.paddingTop) + random(5);
				char.elt.style.paddingTop = `${newHeight}px`;
			} else {
			char.elt.style.paddingTop = `${windowHeight - 50}px`;
			}
		}
	}
}

