var bullet;
var speed;
var weight;
var damage;
var Thickness;
var wall;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(150,200,20,10);
  bullet.shapeColor = "white";
 
  speed = random(223,321);
  weight = random(30,52);
  Thickness = random(22,83);
  wall = createSprite(1200,200,Thickness,height/2);
  bullet.velocityX = speed;
}
  
 function draw() {
  background("brown");
  if(hasCollided(wall,bullet)){
    bullet.velocityX = 0;
  damage = 0.5 * weight * speed * speed/Thickness*Thickness *Thickness;
  if(damage > 10) {
 wall.shapeColor = "red";
  }
  if(damage < 10){
 wall.shapeColor = "green";
  }
 }
  drawSprites();
}


function hasCollided(object1,object2){
  if (object1.x - object2.x < object1.width /2 + object2.width /2 
    &&object2.x - object1.x < object1.width /2 + object2.width /2 < 
      object1.y - object2.y < object1.height/2 + object2.height/2 
    &&object2.y - object1.y < object1.height/2 + object2.height/2){
     return true
    }
    return false
}