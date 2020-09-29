var car,wall;
var speed,weight;
var deformation;

function setup() {
  createCanvas(1600,400);
  car=createSprite(50, 200, 50, 50);
  wall=createSprite(1500,200,60,height/2)
  speed=Math.round(random(55,90)) 
  weight=Math.round(random(400,1500))
  car.velocityX=speed

}

function draw() {
  background(255,255,255); 

  var deformation=0.5*speed*weight*speed/22500
  

  if (wall.x-car.x<(car.width+wall.width)/2 ){
    car.velocityX=0

  if (deformation<100){

    car.shapeColor="green"
  }
  if (deformation>100 && deformation<180){
    car.shapeColor="yellow"
  }
  if (deformation>180){
    car.shapeColor="red"
  }

  }


  drawSprites();
}