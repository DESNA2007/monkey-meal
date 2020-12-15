
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;
var time;
var ground,invisibleGround;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup(){
 createCanvas(400,400);
  
  obstacleGroup = createGroup();
  bananaGroup = createGroup();
   monkey = createSprite(80,315,20,20);
  monkey.scale = 0.10;
  monkey.addAnimation("monkey", monkey_running);
  ground = createSprite(400,350,900,10)
  score=0;
  time=0;
}

function draw(){
  background("white");
  fill("black");
  text("time: "+time, 250, 20);
  text("Score: "+score,100,20);
  
    obstacles();
    bananas();
 time =Math.ceil(frameCount/frameRate());
    
    ground.velocityX = -4
  
    if(keyDown("space")&&monkey.y >=200) {     
      monkey.velocityY = -4; 
    }
  
    monkey.velocityY = monkey.velocityY +0.10
  
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
    
    if (monkey.isTouching(bananaGroup)){
      score=score+1;  
      bananaGroup.destroyEach();
    
    }
  
  
  
  drawSprites(); 
  
  monkey.collide(ground);
}


function bananas() {
  if (frameCount % 120=== 0) {
    banana = createSprite(400,350,40,10);
    banana.addImage(bananaImage);
    banana.y = Math.round(random(120,200));
    banana.scale = 0.05;
    
    banana.velocityX = -3;
    banana.lifetime = 200;
  bananaGroup.add(banana);
  }



  
}

function obstacles(){
  if (frameCount%160=== 0){
    
     obstacle = createSprite(620,330,50,50);
    obstacle.addAnimation("rock", obstacleImage);
    obstacle.setCollider("circle", 0, 0, 180);
    obstacle.scale = 0.10 ;
    obstacle.velocityX = -4
    obstacle.lifetime = 200;
    obstacleGroup.add(obstacle);
    
  }
  
  
}













