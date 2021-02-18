
var fixrect,r1,r2,r3, movrect
function setup() {
  createCanvas(800,400);
  movrect=createSprite(400, 200, 50, 50);
  fixrect=createSprite(200,200,50,50);
r1=createSprite(200,300,30,25)
r2=createSprite(400,300,20,40)
r3=createSprite(300,300,45,35)
}

function draw() {
  background(200,25,59);  
  console.log(movrect.x-fixrect.x)
  movrect.x=mouseX;
  movrect.y=mouseY;
  if(movrect.x-fixrect.x<movrect.width/2+fixrect.width/2 &&
    fixrect.x-movrect.x<movrect.width/2+fixrect.width/2&&
    movrect.y-fixrect.y<movrect.height/2+fixrect.height/2&&
    fixrect.y-movrect.y<movrect.height/2+fixrect.height/2){
    movrect.shapeColor="yellow";
    fixrect.shapeColor="yellow";

  }
  else{
    movrect.shapeColor="green";
    fixrect.shapeColor="green";
  }
  drawSprites();
}