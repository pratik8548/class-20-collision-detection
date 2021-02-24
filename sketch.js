var mr,fr;
function setup() {
  createCanvas(800,400);
  mr=createSprite(0,0,25,50);
 fr= createSprite(400, 200, 50, 50);
  
}

function draw() {
  background(0,0,0); 
mr.x = mouseX;
mr.y = mouseY;
if (mr.x-fr.x<mr.width/2+fr.width/2&&fr.x-mr.x<mr.width/2+fr.width/2&&mr.y-fr.y<fr.height/2+mr.height/2&&fr.y-mr.y<mr.height/2+fr.height/2){
  mr.shapeColor = "red";
  fr.shapeColor = "red";
}
else {
mr.shapeColor = "yellow";
fr.shapeColor = "yellow";
}

  drawSprites();
}