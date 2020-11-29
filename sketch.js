var movingRect, fixedRect;
var go1, go2, go3, go4;

function setup() {
  createCanvas(800,400);
  movingRect=createSprite(400, 500, 50, 50);
  fixedRect=createSprite(400, 100, 50, 50);
  //movingRect.velocityY=-3;
  //fixedRect.velocityY=3;
  go1=createSprite(100,100, 50, 50);
  go1.shapeColor="blue"
  go2=createSprite(200,100, 50, 50);
  go2.shapeColor="blue"
  go3=createSprite(300,100, 50, 50);
  go3.shapeColor="blue"
  go4=createSprite(400,100, 50, 50);
  go4.shapeColor="blue"
}

function draw() {
  background("yellow");  
  console.log(movingRect.x-fixedRect.x);
  movingRect.x=World.mouseX
  movingRect.y=World.mouseY
  

  if (isTouching(movingRect, go1)){
    movingRect.shapeColor="red"
    go1.shapeColor="red"
  }
  else{
    movingRect.shapeColor="green"
    go1.shapeColor="blue"
  }


  drawSprites();
}
function isTouching(object1, object2){
  if(object1.x-object2.x<object1.width/2+object2.width/2 
    && object2.x-object1.x<object1.width/2+object2.width/2 &&
    object1.y-object2.y<object1.height/2+object2.height/2 && 
    object2.y-object1.y<object1.height/2+object2.height/2){
    //fixedRect.shapeColor="red";
    //movingRect.shapeColor="red";
   //movingRect.velocityY=movingRect.velocityY*(-1);
   //fixedRect.velocityY=fixedRect.velocityY*(-1);
    return true;
  }
  else{
    
   return false;
  }

}


