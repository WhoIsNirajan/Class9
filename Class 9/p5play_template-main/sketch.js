var ball;
function setup() {
  createCanvas(400,400);
  
  ball = createSprite(200,200,50,50)
  ball.shapeColor="orange"
  
}

function draw() 
{
  background("white");
  
  if (keyIsDown(RIGHT_ARROW)) {
     ball.x=ball.x+3

  }
  
  if (keyIsDown(LEFT_ARROW)) {
    ball.x=ball.x-3

 } 

 if (keyIsDown(UP_ARROW)) {
  ball.y=ball.y-3

}

if (keyIsDown(DOWN_ARROW)) {
  ball.y=ball.y+3

}
  drawSprites()

}




