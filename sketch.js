const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var maxsnow=50
var snow=[]
var bg

function preload(){
  bg=loadImage('snow3.jpg')
  

}





function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;
  for (var j = 0; j <maxsnow;j++){
    snow.push(new Snow(random(0,800),random(0,400)))
  }
}

function draw() {
  background(bg); 
  Engine.update(engine) 
  for (var i = 0; i<snow.length; i++){
    snow[i].display();
    snow[i].updateY();
  }
  drawSprites();
}