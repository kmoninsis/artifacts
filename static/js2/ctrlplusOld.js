
let theta = 0;
let theta2 = 0;
let videos = ['images/ctrlplus_web1.mp4','images/negative.mp4'];

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
   
  theta += 0.005;
  theta2 -= 0.005
}

