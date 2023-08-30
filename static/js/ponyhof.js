let vids = [];
let placeholder = [];
let ratio;
let w, h, divW;
let initX = 0;
let active = false;
let mainDiv,
	galleryDiv,
	isEmpty,
	buffer;
	let currVid,
		currGif,
		showVid;
let urls = ['images/ponyhof/1Okalinka01.mp4',
			'images/ponyhof/2bike1.mp4',
			'images/ponyhof/3guitar.mp4',
			'images/ponyhof/4Okalinka02.mp4',
			'images/ponyhof/5OLDhike.mp4',
			'images/ponyhof/6behindthree.mp4',
			'images/ponyhof/7Okalinka03.mp4',
			'images/ponyhof/8bike2.mp4',
			'images/ponyhof/9Swinging.mp4',
			'images/ponyhof/10Okalinka04.mp4',
			'images/ponyhof/11chelo1.mp4',
			'images/ponyhof/12Car.mp4',
			'images/ponyhof/13Okalinka05.mp4',
			'images/ponyhof/14bike3.mp4',
			'images/ponyhof/15OLDhidingbehindthree.mp4',
			'images/ponyhof/16Okalinka06.mp4',
			'images/ponyhof/17OLDhike2.mp4',					
			'images/ponyhof/18Party.mp4'];
let gifs = ['images/placeholder0.gif',
			'images/placeholder1.gif',
			'images/placeholder2.gif',
			'images/placeholder3.gif',
			'images/placeholder4.gif',
			'images/placeholder5.gif',
			'images/placeholder6.gif',
			'images/placeholder7.gif',
			'images/placeholder8.gif',
			'images/placeholder9.gif',
			'images/placeholder10.gif',
			'images/placeholder11.gif',
			'images/placeholder12.gif',
			'images/placeholder13.gif',
			'images/placeholder14.gif',
			'images/placeholder15.gif',
			'images/placeholder16.gif',
			'images/placeholder17.gif'];
function preload(){
	
					
	for(let i =  0; i < gifs.length; i++){
		vids[i] = createVideo(urls[i], afterLoadVid);
		placeholder[i] = createImg(gifs[i], 'placeholder', 'anonymous', afterLoadImg);
	}

}

function afterLoadVid(){
	print("Video has finished loading");
}
function afterLoadImg(){
	print("Image has finished loading");
}
function setup() {
	let canvas = select('canvas');
	canvas.style('display','none');
	// canvas.style('display','block');
	ratio = 1280/720;
	w = 150*ratio;
	h = 150;


	//Create the main and Gallery Divs
	 mainDiv = createDiv();
	 mainDiv.class('mainDiv');
	 buffer = createDiv();
	 buffer.class('buffer');
	 galleryDiv = createDiv();
	 galleryDiv.class('galleryDiv');
	 mainDiv.style('display','none');
	mainDiv.style('position','static');
	mainDiv.style('margin','auto');
	mainDiv.style('z-index','9');
	galleryDiv.style('z-index','-1');

	for(x in vids){				
		vids[x].hide();
		buffer.child(vids[x]);
		vids[x].volume(0);
		vids[x].id('vid'+x);
		placeholder[x].id('gif'+x);
		placeholder[x].size(w,h);
		// placeholder[x].style('position', 'relative');
		galleryDiv.child(placeholder[x]);		
		
		placeholder[x].mousePressed(function(){
			currGif = this.id();
			showVid = select('#vid'+ int(split(currGif,'gif')[1]));
			if (active == false && isEmpty === ""){				
				active = true;				
				currGif = showVid.id();
				showVid.show();
				showVid.loop();
				showVid.parent(mainDiv);
				showVid.volume(0.3);
				showVid.style('position','relative');					
				mainDiv.style('display', 'block');
				mainDiv.style('z-index','11');
				showVid.style('height','100%');	
				showVid.style('width','100%');					
			} 
		});	
		vids[x].mousePressed(function(){
			currVid = this.id();
			showVid = select('#vid'+ int(split(currVid,'vid')[1]));
			currVid = showVid.id();
			if(active == true && showVid.id() !== currVid) {
				active = true;				
			} else {
				active = false;					
				showVid.parent(buffer);				
				mainDiv.style('display', 'none');
				mainDiv.style('z-index','10');
				showVid.hide();
				showVid.pause();				
				showVid.volume(0);				
			}				
		});
	}  

}

function draw() {
			
	for(x in vids){		
		 placeholder[x].elt.left = initX;
	}
	// print(initX);
	isEmpty = mainDiv.html();
	divW = mainDiv.elt.clientHeight * ratio;
	mainDiv.style('width',divW +'px');
	// print( placeholder[0].value('left'));
}


function mouseDragged(){
	let posX = windowWidth/2;
	let posY = windowHeight/2;

	let drag = mouseX - pmouseX;
	let seqLength = w*vids.length;
	maxLeft = seqLength-windowWidth;

	initX += drag;
	initX = constrain(initX, -maxLeft,0);
}