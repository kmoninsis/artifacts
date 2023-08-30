
let theta = 0;
let theta2 = 0;
let videos = ['static/videos/ctrlplus_black.mp4','static/videos/ctrlplus_white.mp4'];

function preload(){
  for (x in videos){
    videos[x] = createVideo(videos[x],afterLoad);
  }
}

function afterLoad(){
  print("Video has finished loading");
}
function windowResized(){
    resizeCanvas(windowWidth, windowHeight);

}

function setup() {
  canvas = createCanvas(windowWidth,windowHeight, WEBGL);
  canvas.position(0,0);
  canvas.style('display', 'block');
  canvas.style('z-index', '-1');
  
  for (x in videos){
    videos[x].loop();
    videos[x].hide();
    videos[x].volume(0);
  } 
  videos[0].volume(0.3);
  noStroke();
}

function draw() {
  canvas.background(0);
  // orbitControl();
  translate(-windowWidth/2, 0, 0);
    let h = windowHeight/2;
  push();
  translate(0.1*windowWidth, 0, 0);
  rotateY(theta);
  texture(videos[0]);
  sphere(h);
  pop();
  
  push();
  translate(0.9*windowWidth, 0, 0);
  rotateY(theta2);
  texture(videos[1]);
  sphere(h);
  pop();
}

function mouseDragged(){

  let drag = mouseX - pmouseX;
  if(mouseX < windowWidth/2){
    theta += (drag/100);
  } else{
    theta2 += (drag/100);
  }
  
    


}