let inp;

function setup(){
	inp = createInput('Enter personal code','password');
	inp.position(windowWidth/2,windowHeight/2);
	
	inp.input(myInputEvent);
}

function draw(){

  
}

function myInputEvent() {
  console.log('you are typing: ', this.value());
}