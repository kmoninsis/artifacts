let orbit,
    sound1;
let theta = 0;
let IsPlaying = false;

function preload(){
  orbit = createVideo('images/orbit.mp4', afterLoad);
  sound1 = loadSound('images/orbit.mp3', afterLoad);
  orbit.hide();
}

function afterLoad(){
  print("Video has finished loading");
  orbit.volume(0);
  sound1.setVolume(0);

}
function setup() {
  canvas = createCanvas(windowWidth,windowHeight, WEBGL);
  canvas.position(0,0);
  canvas.style('display', 'block');
  canvas.style('z-index', '-1');
  orbit.loop();
  noStroke();
  sound1.amp(0.3);
  // orbit.elt.muted = true;
  
}

function draw() {
  background(250);
  translate(-220, 0, 0);
  // let yvolume = map(mouseY,0,1,0,1);
  // audio.setVolume(yvolume);
  // print(orbit.volume());
  push();
  let MX = map(mouseX, 0, windowWidth, -1000, 1000);
  let MY = map(mouseY, 0, windowHeight, 1000, -1000);
  //MY = constrain(MY, 500, -500);
  //MX = constrain(MX, -500,500);
 //rotateZ(theta * M * 0.0001);
  rotateX(MY*0.005);
  rotateY(MX*0.005);
  //pass image as texture
  texture(orbit);
  sphere(900);
  pop();
  translate(440, 0, 0);
  theta += 0.05;
}
function mouseClicked(){
  if(!IsPlaying){
    sound1.amp(0.3);
    IsPlaying = true;
  } else {
    sound1.amp(0);
    IsPlaying = false;
  }

}
