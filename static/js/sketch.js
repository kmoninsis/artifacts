

var sketch = function(p) {

  p.x = 100;
  p.y = 100;

  p.setup = () => {
    p.createCanvas(200, 200);
  };

  p.draw = () => {
    p.background(0);
    p.fill(255);
    p.rect(x,y,50,50);
  };
};

var myp5 = new p5(sketch);