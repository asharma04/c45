var gunman
var pedestal

function setup() {
  createCanvas(800,600);
  pedestal = createSprite(400,300,50,450);
 gunman = createSprite(400, 200, 50, 50);
 gunman.shapeColor = "red"
 
}

function draw() {
  background("skyblue");  


  //to move gunman up and down
  if(keyDown("up")){
    if(gunman.y<=75)
      gunman.y = 75
    else
      gunman.y = gunman.y-3

  }

  if(keyDown("down")){

    if(gunman.y>=525)
      gunman.y = 525
    else
      gunman.y = gunman.y+3
  }
  drawSprites();
}