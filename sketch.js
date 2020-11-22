const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperball, box1, box2, box3, ground;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	paperball = new Paper(300, 100, 45);
	box1 = new Dustbin(900, 650, 200, 20);
	box2 = new Dustbin(810, 590, 20, 100);
	box3 = new Dustbin(990, 590, 20, 100);
	ground = new Ground(610, 670, 1220, 20);
	

	Engine.run(engine);
  
}


function draw() {
  background(0);
  paperball.display();
  box1.display();
  box2.display();
  box3.display();
  ground.display();
  drawSprites();
 
}

function keyPressed(){
 if(keyCode===UP_ARROW){
	Body.applyForce(paperball.body, paperball.body.position, {x:85,y:-85});
 }
}