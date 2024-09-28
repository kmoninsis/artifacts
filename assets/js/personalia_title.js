let totalpersW = 0;
let totalprofW = 0;
let persW, profW;
let persChar;
let persArray = [];
let profChar;
let profArray = [];
let col = ['#fdff00','#ece200','#ffee42','#d0db2e','#c9ff00','#fdff00','#ece200','#ffee42','#d0db2e','#c9ff00','#fdff00','#ece200','#ffee42','#d0db2e','#c9ff00'];
let col2 = ['#eeaf61','#fb9062','#ee5d6c','#ce4993','#6a0d83', '#eeaf61','#fb9062','#ee5d6c','#ce4993','#6a0d83', '#eeaf61','#fb9062','#ee5d6c','#ce4993','#6a0d83'];
let css = "";
let test = [];
let counti = 0;
let countj = 0;
let i, j, y, f;
let x = [];
let w = [];
let h = [];
let parent1, parent2;
let hover1 = false;
let hover2 = false;
let persShow = false;
let profShow = false;
let imgs = [];
let maxH = [];
let soundHome, soundProf, soundPers;
let urls = ['storage/images/ear03sm.png',
			'storage/images/ear10sm.png',
			'storage/images/ear11sm.png',
			'storage/images/tracian.png',
			'storage/images/tracian01.png',
			'storage/images/tromba.png',
			'storage/images/obj01sm.png',
			'storage/images/obj02sm.png',
			'storage/images/obj04sm.png',
			'storage/images/obj05sm.png',
			'storage/images/obj07sm.png',
			'storage/images/obj08sm.png',
			'storage/images/obj09sm.png',
			'storage/images/obj10sm.png',
			'storage/images/obj11sm.png',
			'storage/images/obj12.png',
			'storage/images/obj13sm.png',
			'storage/images/obj14sm.png',
			'storage/images/obj15sm.png',
			'storage/images/obj16sm.png',
			'storage/images/obj17sm.png',
			'storage/images/obj18sm.png',
			'storage/images/cracklebox.png',
			'storage/images/anatomy03sm.png'];


function windowResized(){
	canvasResized(windowWidth, windowHeight);
}

function setup(){
	let canvas = createCanvas(windowWidth, windowHeight);
	canvas.style('display', 'block');
	canvas.position(0,0);
	canvas.style('z-index', '-1');

	let space = select('.space');
	print(space);
	space.style('display', 'inline-block');
	let persDiv = select('.personalia');
	let profDiv = select('.professionalia');
	soundHome = select('#home');
	soundProf = select('#prof');
	soundPers = select('#pers');
	select(".fmiDiv").style("display", "block");
	soundHome.loop();
// Personalia
	parent1 = select('#title1');
	parent1.style('width','auto');
	parent1.style('display','inline-block');

	let personalia = select('#personalia');
	
	let words = personalia.html();
	let chars = split(words, '');
	
	for(i in chars){
		persChar = createSpan(chars[i]);
		append(persArray, persChar);		
		persChar.position(0,0);		
		persChar.style('color', col[i]);
		persChar.style('position', 'relative');
		persChar.style('font-size', '50px');
		persChar.style('font-weight', '900');
		persChar.style('font-family', 'monospace');
		persChar.parent(parent1);
		persW = persChar.elt.offsetWidth;
		totalpersW += persW;		
	}
	

//Professionalia 	
	parent2 = select('#title2');
	parent2.style('display','inline-block');	
	parent2.style('width','auto');	


	let professionalia = select('#professionalia');
	
	words = professionalia.html();
	chars = split(words, '');

	for(i in chars){
		profChar = createSpan(chars[i]);
		append(profArray, profChar);		
		profChar.position(0,0);		
		profChar.style('color', col[i]);
		profChar.style('position', 'relative');
		profChar.style('font-size', '50px');
		profChar.style('font-weight', '900');
		profChar.style('font-family', 'monospace');
		profChar.parent(parent2);
		profW = profChar.elt.offsetWidth;
		totalprofW += profW;		
	}
	

	parent1.mouseOver(function(){
		hover1 = true;
	});
	parent1.mouseOut(function(){
		hover1 = false;
	});
	parent2.mouseOver(function(){
		
			hover2 = true;
		
	});
	parent2.mouseOut(function(){
		
			hover2 = false;
				
	});
	
	soundProf.pause();
	soundPers.pause();
//Personalia click
	parent1.mouseClicked(function(){
		if(persShow == false){
			soundHome.pause();
			soundPers.play();
			select(".fmiDiv").style("display", "none");
			select(".tutors").style("display", "none");
			selectAll(".info")[0].style("display", "none");
			selectAll(".info")[1].style("display", "none");
			parent2.style('display','none');
			space.style('display', 'none');
			persDiv.style('display','inline-block');
			document.body.style.background = '-moz-linear-gradient(left,   '+ col2[0]+ 
																		' 20%, '+ col2[1]+
																		' 20%, '+ col2[1]+
																		' 40%, '+ col2[2]+
																		' 40%, '+ col2[2]+
																		' 60%, '+ col2[3]+
																		' 60%, '+ col2[3]+
																		' 80%, '+ col2[4]+
																		' 80%)';
			document.body.style.background = '-webkit-linear-gradient(left,   '+ col2[0]+ 
																		' 20%, '+ col2[1]+
																		' 20%, '+ col2[1]+
																		' 40%, '+ col2[2]+
																		' 40%, '+ col2[2]+
																		' 60%, '+ col2[3]+
																		' 60%, '+ col2[3]+
																		' 80%, '+ col2[4]+
																		' 80%)';															
			document.body.style.background = 'linear-gradient(to right,   '+ col2[0]+ 
																		' 20%, '+ col2[1]+
																		' 20%, '+ col2[1]+
																		' 40%, '+ col2[2]+
																		' 40%, '+ col2[2]+
																		' 60%, '+ col2[3]+
																		' 60%, '+ col2[3]+
																		' 80%, '+ col2[4]+
																		' 80%)';
			persShow = true;
		} else{
			soundHome.play();
			soundPers.pause();
			parent2.style('display','inline-block');
			select(".fmiDiv").style("display", "block");
			select(".tutors").style("display", "block");
			selectAll(".info")[0].style("display", "block");
			selectAll(".info")[1].style("display", "block");
			space.style('display', 'inline-block');
			persDiv.style('display','none');
			document.body.style.background = '-moz-linear-gradient(left,   '+ col[0]+ 
																		' 20%, '+ col[1]+
																		' 20%, '+ col[1]+
																		' 40%, '+ col[2]+
																		' 40%, '+ col[2]+
																		' 60%, '+ col[3]+
																		' 60%, '+ col[3]+
																		' 80%, '+ col[4]+
																		' 80%)';
			document.body.style.background = '-webkit-linear-gradient(left,   '	+ col[0]+
																		' 20%, '+ col[1]+
																		' 20%, '+ col[1]+
																		' 40%, '+ col[2]+
																		' 40%, '+ col[2]+
																		' 60%, '+ col[3]+
																		' 60%, '+ col[3]+
																		' 80%, '+ col[4]+
																		' 80%)';															
			document.body.style.background = 'linear-gradient(to right,   '		+ col[0]+
																		' 20%, '+ col[1]+
																		' 20%, '+ col[1]+
																		' 40%, '+ col[2]+
																		' 40%, '+ col[2]+
																		' 60%, '+ col[3]+
																		' 60%, '+ col[3]+
																		' 80%, '+ col[4]+
																		' 80%)';
			persShow = false;
		}
	});

//Professionalia click
	parent2.mouseClicked(function(){
		if(profShow == false){
			soundHome.pause();
			soundProf.play();

			select(".fmiDiv").style("display", "none");
			select(".tutors").style("display", "none");
			selectAll(".info")[0].style("display", "none");
			selectAll(".info")[1].style("display", "none");
			parent1.style('display','none');
			space.style('display', 'none');
			profDiv.style('display','inline-block'); 
			document.body.style.background = '-moz-linear-gradient(left,   '+ col[0]+ 
																		' 20%, '+ col[1]+
																		' 20%, '+ col[1]+
																		' 40%, '+ col[2]+
																		' 40%, '+ col[2]+
																		' 60%, '+ col[3]+
																		' 60%, '+ col[3]+
																		' 80%, '+ col[4]+
																		' 80%)';
			document.body.style.background = '-webkit-linear-gradient(left,   '	+ col[0]+
																		' 20%, '+ col[1]+
																		' 20%, '+ col[1]+
																		' 40%, '+ col[2]+
																		' 40%, '+ col[2]+
																		' 60%, '+ col[3]+
																		' 60%, '+ col[3]+
																		' 80%, '+ col[4]+
																		' 80%)';															
			document.body.style.background = 'linear-gradient(to right,   '		+ col[0]+
																		' 20%, '+ col[1]+
																		' 20%, '+ col[1]+
																		' 40%, '+ col[2]+
																		' 40%, '+ col[2]+
																		' 60%, '+ col[3]+
																		' 60%, '+ col[3]+
																		' 80%, '+ col[4]+
																		' 80%)';
			profShow = true;
		} else {
			soundHome.play();
			soundProf.pause();
			
			select(".fmiDiv").style("display", "block");
			select(".tutors").style("display", "block");
			selectAll(".info")[0].style("display", "block");
			selectAll(".info")[1].style("display", "block");
			parent1.style('display','inline-block');
			space.style('display', 'inline-block');
			profDiv.style('display','none');
			document.body.style.background = '-moz-linear-gradient(left,   '+ col[0]+ 
																		' 20%, '+ col[1]+
																		' 20%, '+ col[1]+
																		' 40%, '+ col[2]+
																		' 40%, '+ col[2]+
																		' 60%, '+ col[3]+
																		' 60%, '+ col[3]+
																		' 80%, '+ col[4]+
																		' 80%)';
			document.body.style.background = '-webkit-linear-gradient(left,   '	+ col[0]+
																		' 20%, '+ col[1]+
																		' 20%, '+ col[1]+
																		' 40%, '+ col[2]+
																		' 40%, '+ col[2]+
																		' 60%, '+ col[3]+
																		' 60%, '+ col[3]+
																		' 80%, '+ col[4]+
																		' 80%)';															
			document.body.style.background = 'linear-gradient(to right,   '		+ col[0]+
																		' 20%, '+ col[1]+
																		' 20%, '+ col[1]+
																		' 40%, '+ col[2]+
																		' 40%, '+ col[2]+
																		' 60%, '+ col[3]+
																		' 60%, '+ col[3]+
																		' 80%, '+ col[4]+
																		' 80%)';
			profShow = false;
		}
	});


	frameRate(40);
	i = 0;
	j = 0;
	f = 0;
	y = 0;
	
	for(g in urls){
		
		x[g] = random(0,windowWidth-400);
		w[g] = random(100,400);
		imgs[g] = createImg(urls[g], 'imgs'+g);
		imgs[g].position(x[g], y);
		imgs[g].attribute('preload', 'preload');
		// h[g] = w[g]*(imgs[g].width / imgs[g].height);
		imgs[g].elt.height = w[g];
		// print(x[g], imgs[g].elt.height);
		
	}
	// print(space.value('width'));
}

function draw(){
		//Images
		imgs[f].elt.style.top = y + 'px';
		// imgs[f].position(w[f], y);
		
		maxH[f] =  320 + imgs[f].elt.height;
		if(y < maxH[f]){
			y += 1;				
		} else {
			y = maxH[f];
		}
		
		// print(maxH, y);
	if(f < imgs.length-1){
		f ++;
	} else {
		f = 0;
	}


print("Home: "+soundHome.elt.paused +"Prof: "+soundProf.elt.paused +"Pers: "+soundPers.elt.paused);


	if(profShow == false && persShow == false){		
		// document.body.style.background = '-moz-linear-gradient(to right, '+ col[0]+ ' 20%, '+ col[1]+' 20%, '+ col[1]+' 40%, '+ col[2]+' 40%, '+ col[2]+'	60%, '+ col[3]+' 60%, '+ col[3]+' 80%, '+ col[4]+'	80%)';	
	}
	 
//Personalia	
	persArray[i].style('color', getColor1(counti+i));
	for(x in persArray){
		if(persShow == true){
			persArray[x].style('font-size', '100px');
		} else {
			persArray[x].style('font-size', '50px');
		}

	}
	
	if(frameCount % 10 == 0 && counti < persArray.length-1){
		counti ++;
	} else if(frameCount % 10 == 0 && counti == persArray.length-1){
		counti = 0;	
	}
	
	if(i < 9){
		i++;
	} else {
		i = 0;
	}
//
//Professionalia
	profArray[j].style('color', getColor2(countj+j));

//Make title bigger	
	for(x in profArray){
		if(profShow == true){
			profArray[x].style('font-size', '100px');
		} else {
			profArray[x].style('font-size', '50px');
		}
	}

	if(frameCount % 10 == 0 && countj < profArray.length-1){
		countj ++;
	} else if(frameCount % 10 == 0 && countj == profArray.length-1){
		countj = 0;	
	}
		if(j < 13){
		j++;
	} else {
		j = 0;
	}

}


function getColor1(index) {
    	if(hover1 == true){
    		return 'black';
    	} else if(persShow == false && hover1 == false){
    		return col[index%5];
    	} else if(persShow == true){
    		return col2[index%5];
    	}
    	
}
function getColor2(index) {
    	if (hover2 == true){
    		return 'black';
    	} else if(profShow == false && hover2 == false){
    		return col[index%5];
    	} else if(profShow == true){
    		return col[index%5];
    	} 
}