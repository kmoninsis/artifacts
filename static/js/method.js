let text = "My method of investigation is like Bas Jan Ader's Falling"
let dancingChars = [];
let totalW = 150;
let w;
let spannedChar;
let spanArray = [];
let col = ['#8ae0c5','#a5e8db','#95c8d4','#90a8c9','#b3abd6'];
let test = [];
class DanceSpan {
  constructor(element, x, y) {
    element.position(x, y); 
	element.style('margin-left',(totalW-w) + 'px');
	element.style('color', random(col)); 
    if(element.html() === '\u0020'){      	 	
    	// print(totalW, w);
    	totalW += 10;
    }
    this.element = element;
    this.x = x;
    this.y = y;
  }

  brownian(y) {
    
    if(this.y < windowHeight-50){
    	this.y += random(y);
    }
    this.element.position(this.x, this.y);

  }
  stop(){
  	this.y = windowHeight;
  	this.element.position(this.x,this.y);
  }
}

function setup(){
	createP(text).addClass('text').hide();
	let texts = selectAll('.text');

	const words = texts[0].html();
	const chars = split(words, '');
	for(x in chars){
		spannedChar = createSpan(chars[x]);
		append(spanArray, spannedChar);
		// print(spannedChar.elt.clientWidth);
		w = spannedChar.elt.clientWidth;
		totalW += w;
		spannedChar.style('margin-left','10px');
		const dw = new DanceSpan(spannedChar, x, 50);
		dancingChars.push(dw);
		append(test, 0);
	}
	for(x in spanArray){
		spanArray[x].mouseOver(function(){
			test[this.x] = 1;
			// print(test[this.x]);			
		});			
	}
	
}

function draw(){

	for(x in dancingChars){
		print(test[x]);
			if(test[x] == 1){
				dancingChars[x].brownian(5);
				
			}		
				
		

			
	}

}

