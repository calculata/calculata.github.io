var currX = 50;
var currY = 50;
var delta = 15;

function setup() {
  //createCanvas(displayWidth-100,displayHeight-100);
	createCanvas(windowWidth, windowHeight);
  background(0);
 
  currX = delta;
  currY = delta;
}

function draw() {

    fill(random(0,200));

    var randomValue = random();
    if (randomValue < 0.25) {
      //console.log("N");
      if ((currY + delta) < height) currY = currY + delta; 
    } else if (randomValue < 0.5) {
      //console.log("S");
      if ((currY - delta) > 0) currY = currY - delta;
    } else if (randomValue < 0.75) {
      //console.log("W");
      if ((currX - delta) > 0) currX = currX - delta;
    } else {
      //console.log("E");
      if ((currX + delta) < width) currX = currX + delta;
    }
    ellipse(currX, currY, delta, delta);
}
