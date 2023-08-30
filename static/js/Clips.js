
function Clips(src, x, y, w, h){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.src = src;
 

  this.display = function() {
     push();
     translate(x,y,0);
     texture(this.src);
      plane(150*this.ratio,150);
      pop();
}

} 


// }
// function mousePressed(){
//     let posX = windowWidth/2;
//   let posY = windowHeight/2;
  
//   if(mouseX < posX+w/2 && mouseX > posX-w/2 && mouseY < posY+h/2 && mouseY > posY-h/2){
//     translate(-windowWidth/2, -windowHeight/2);
//     fill(255,255,255,10);
//     rect(w,h, posX-w/2,posY-h/2);
//     print('succes!');
//   } else {
//     fill(255,255,255,0);
//     print(mouseX, mouseY);
//   }
// }
// function mouseDragged(){
//   let posX = windowWidth/2;
//   let posY = windowHeight/2;
//   if(mouseX < posX+w/2 && mouseX > posX-w/2 && mouseY < posY+h/2 && mouseY > posY-h/2){
//     fill(255,255,255,10);
//     rect(w,h, posX-w/2,posY-h/2);
//   } else {
//     fill(255,255,255,0);
//   }

// let scrollX = map(mouseX, 0, windowWidth, camX+50,camX-50);
// // let scrollX = constrain(mouseX, camX+50, camX-50);
// // for(x in tx){
// //   tx[x] = scrollX + (x*w)+30;
  
// // }
// // print(camX, scrollX);
// camX = scrollX;

// }