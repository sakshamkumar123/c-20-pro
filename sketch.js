var car,wall;
var speed,weight,t;
var deformation;

function setup() {
  createCanvas(1600,400);
  car=createSprite(50, 200, 60, 30);
  speed=Math.round(random(223,321)) 
  weight=Math.round(random(30,52))
  car.velocityX=speed
  t=random(22,28)
  wall=createSprite(1200,200,t,height/2)
}

function draw() {
  background(255,255,255); 

  var deformation=0.5*speed*weight*speed/(t*t*t)
  
  re=car.x+car.width
  le=wall.x

  if (re>=le){
    car.velocityX=0

  if (deformation<10){

    wall.shapeColor="green"
  }
  if ( deformation>10){
   wall.shapeColor="red"
  }
 
  }


  drawSprites();
}