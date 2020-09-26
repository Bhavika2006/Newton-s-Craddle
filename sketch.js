
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new Bob(100,600,50)
	bobObject2 = new Bob(150,600,50)
	bobObject3 = new Bob(200,600,50)
	bobObject4 = new Bob(250,600,50)
	bobObject5 = new Bob(300,600,50)
	roof = new Roof(400,200,500,10)

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bobObject1.display()
  bobObject2.display()
  bobObject3.display()
  bobObject4.display()
  bobObject5.display()
  roof.display()
  drawSprites();
 
}



