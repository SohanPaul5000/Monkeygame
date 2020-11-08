var gameState = "play"
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup, bananaGroup
var score
var monkey2, monkeyImage, monkey2Image  

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  monkey2Image = loadImage("monkey2.png")
  monkeyImage = loadImage("Monkey.png")
}



function setup() {
  createCanvas(600,600);
 
  
  
  
  ground=createSprite(300,590,600,30)
  monkey1 = createSprite(75,500,20,20);
  monkey1.addAnimation("running",monkey_running)
  monkey1.scale = 0.2;
  
  
  bananaG = new Group();
  obstacleG = new Group();

  
}


function draw() {
  background("white");
  console.log(monkey1.y)
  if(gameState === "play"){
     obstacle();
      banana();
  
      monkey1.collide(ground);
    
  if(keyDown("space") ){
    monkey1.velocityY = -12;
  }
   
    monkey1.velocityY=monkey1.velocityY + 0.8;
  
  if(monkey1.isTouching(bananaG)){
    bananaG.destroyEach();
    
}
  if(monkey1.isTouching(obstacleG)){
     
gameState = "end";    
  }
    
  
    drawSprites();
}
  if(gameState === "end"){
    ground.velocityX = 0;
    textSize(30)
    fill("Red");
    text("Game over",300,300)
    
  }

} 

function banana() {
  if(frameCount%150 === 0){
   banana1 = createSprite(600,Math.round(random(100,400)),20,20);
   banana1.addImage(bananaImage);
   banana1.velocityX=-6;
  banana1.scale = 0.2;
    bananaG.add(banana1);
  }
  
}

function obstacle() {
  if(frameCount%250 === 0){
   obstacle1 = createSprite(600,570,20,20);
   obstacle1.addImage(obstaceImage);
   obstacle1.velocityX=-6;
  obstacle1.scale = 0.2;
    obstacleG.add(obstacle1);
  }
}



