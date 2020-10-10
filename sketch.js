
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
	Roof = new roof(400,100,150,10)
  bobObject1 = new bob(100,400)
	bobObject2 = new bob(120,400)
	bobObject3 = new bob(140,400)
	bobObject4 = new bob(160,400)
	bobObject5 = new bob(180,400)
	rope1 = new Rope(bobObject1.body,Roof.body,160,0)
	rope2 = new Rope(bobObject2.body,Roof.body,160,0)
	rope3 = new Rope(bobObject3.body,Roof.body,160,0)
	rope4 = new Rope(bobObject4.body,Roof.body,160,0)
	rope5 = new Rope(bobObject5.body,Roof.body,160,0)
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  Roof.display()
  bobObject1.display()
  bobObject2.display()
  bobObject3.display()
  bobObject4.display()
  bobObject5.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  drawSprites();
}



