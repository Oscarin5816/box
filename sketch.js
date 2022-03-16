var box;

function setup() {
  createCanvas(400,400);
  box = createSprite(100, 200, 20, 10);
  box.shapeColor = "red";
}

function draw() 
{
  background(30);

  if (keyIsDown(RIGHT_ARROW)){
    box.x += 5;
  }
  if (keyIsDown(LEFT_ARROW)){
    box.x -= 5;
  }
  drawSprites();
}




