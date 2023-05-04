
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;

var groundObj;
var leftSide;
var rightSide;

var radius = 20;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var ball_option = {
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}

	//Create the Bodies Here.
	ball = Matter.Bodies.circle(200, 100, radius, ball_option);
	World.add(world, ball);
	
	groundObj = new Ground(width/2, 670, width,20);
    leftSide = new Ground(500, 600, 20, 120);
	rightSide = new Ground(600, 600, 20, 120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  groundObj.display();
  leftSide.display();
  rightSide.display();

  ellipse(ball.position.x,ball.position.y,radius,radius);

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
        Matter.Body.applyForce(ball, ball.position, {x:20, y: -20}); 
	}
}