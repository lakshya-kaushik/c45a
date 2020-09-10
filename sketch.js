
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var pcimage1,pcimage2,pcimage3;
var gameState=0;


function preload()
{
	pcimage1=loadImage("image/player4");
	pcimage2=loadImage("image/sitting");
	pcimage3=loadImage("image/lay");
}

function setup() {
	createCanvas(displayWidth-20, displayHeight-30);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
 rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}




