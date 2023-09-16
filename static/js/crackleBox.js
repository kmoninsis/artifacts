let vid;
let visual;
let theta = 0;
let IsPlaying = false;
let S,
    B;

function preload(){
  vid = createVideo('storage/videos/cracklebox.mp4', afterLoad);
  visual = createVideo('storage/videos/visual.mp4', afterLoad);
  vid.hide();
  visual.hide();
  
}

function setup() {
  canvas = createCanvas(windowWidth,windowHeight, WEBGL);
  canvas.position(0,0);
  canvas.style('display', 'block');
  canvas.style('z-index', '-1');
  visual.volume(0);
  visual.loop();
  vid.volume(0.2);
  vid.loop();
  S = windowWidth/1.8;
  B = windowWidth/16;
  // vid.elt.muted = true;
  
}


function draw() {
  background(0);
  translate(-windowWidth/2, 0, 0);
  push();
  translate(0.5*windowWidth, 0, -1000);
    rotateZ(frameCount * 0.0001);
  rotateX(frameCount * 0.0001);
  rotateY(frameCount * 0.001);
  texture(visual);
  box(S);
  pop();

  push();
  translate(0.6*windowWidth,0,500);
  rotateZ(theta / 200);
  rotateX(theta /200);
  rotateY(theta / 200);
 
  //pass image as texture
  texture(vid);
  box(B);
  pop();
  // translate(1000, 0, 0);
  theta += 0.1;
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
  S = windowWidth/1.8;
  B = windowWidth/16;
}

function mouseClicked(){
  if(!IsPlaying){
    vid.volume(0.2);
    IsPlaying = true;
  } else {
    vid.volume(0);
    IsPlaying = false;
  }

}
function afterLoad(){
  print("Video has finished loading");

}