var catImg;
var miceImg;
var pathImg;
var miceX=50;
var miceY=550;
var catX=450;
var catY=550;

function preload(){
  catImg = loadAnimation("images/cat2.png","images/cat3.png");
  miceImg = loadAnimation("images/mouse2.png","images/mouse3.png");
  pathImg = loadImage("images/garden.png");
}

function setup(){
  createCanvas(600,600); 
  
  path = createSprite(400,300);
  path.addImage(pathImg);

  cat=createSprite(catX,catY);
  cat.addAnimation("Running",catImg);
  cat.scale = 0.1;
  cat.location = 3;

  mice = createSprite(miceX,miceY,50,50); 
  mice.addAnimation("Running",miceImg);
  mice.scale = 0.1;
  mice.location = 1;
}

function setVelocity(character){
  if(character.location == 1){
    character.setVelocity(2,-2); 
  }
  if(character.location == 2){
    character.setVelocity(2,2); 
  }
  if(character.location == 3){
    character.setVelocity(-2,0); 
  }
}
function setLocation(character){
  if(character.location == 1 && character.y < 300){
    character.location = 2;
  }
  if(character.location == 2 && character.y > 550){
    character.location = 3;
  }
  if(character.location == 3 && character.x < 50){
    character.location = 1;
  }
}
function draw(){
  background(0);
  
  setLocation(cat);
  setLocation(mice);
  setVelocity(cat);
  setVelocity(mice);
  
  
  
  drawSprites();
}


