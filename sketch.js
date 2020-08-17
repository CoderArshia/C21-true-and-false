var rect1,rect2,g1,g2,g3,g4;

function setup() {
  createCanvas(800,400);
  rect1=createSprite(200, 200, 50, 80);
  rect2=createSprite(400,200,80,30);
  rect1.shapeColor="green";
  rect2.shapeColor="green";

  g1=createSprite(200,100,50,50);
  g2=createSprite(300,100,50,50);
  g3=createSprite(400,100,50,50);
  g4=createSprite(500,100,50,50);
  g1.shapeColor="orange";
  g2.shapeColor="yellow";
  g3.shapeColor="pink";
  g4.shapeColor="purple";
  rect1.velocityY=5;
  rect2.velocityY=-5;
}

function draw() {
  background(0);  

rect2.x=World.mouseX;
rect2.y=World.mouseY;

bounceOff(rect1,rect2);
  if(isTouching(rect2,g4)){
    rect2.shapeColor="blue";
    g4.shapeColor="blue";
    }
    else{
    g4.shapeColor="green";
    rect2.shapeColor="green";
    }
  
  drawSprites();
}

