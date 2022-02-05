
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball
var solo
var parede1
var parede2
let motor;
let mundo;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	motor = Engine.create();
	mundo = motor.world;
	
	//Create the Bodies Here.
    var ball_options={
		isStatic:false,
		restitution:0.3,
        friction:0,
		density: 1.2
	}
  var solo_options={
    isStatic:true
  }
  solo=Bodies.rectangle(400,690,800,10,solo_options);
	ball=Bodies.circle(220,10,10,ball_options);
  parede1=Bodies.rectangle(650,680,10,50,solo_options);
  parede2=Bodies.rectangle(750,680,10,100,solo_options);
  World.add(mundo,ball); 
  World.add(mundo,solo);
	World.add(mundo,parede1);
  World.add(mundo,parede2);
  Engine.run(motor);
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);
  Engine.update(motor);
  ellipse(ball.position.x,ball.position.y,20);
  rect(solo.position.x,solo.position.y,800,10);
  rect(parede1.position.x,parede1.position.y,10,50);
  rect(parede2.position.x,parede2.position.y,10,100);
  if (keyCode==32){
    Matter.Body.applyForce(ball,ball.position,{x:0.5,y:-1})
  }
  
 
}



