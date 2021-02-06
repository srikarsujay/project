
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =Matter.Constraint
function preload()
{
	boyimage=loadImage("boy.png")
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;
 
	//Create the Bodies Here.
ground= new Ground(600,680,1200,20)
stoneobj= new Stone(80,450,40)
launcher= new Launcher(stoneobj.body,{x:140,y:530})
tree= new Tree(900,370,650,650)
mango1= new Mango(900,280,40)
mango2= new Mango(880,250,40)
mango3= new Mango(850,200,40)
mango4= new Mango(940,200,40)
mango5= new Mango(850,150,40)
mango6= new Mango(830,250,40)
mango7= new Mango(800,200,40)
mango8= new Mango(720,270,40)
mango9= new Mango(700,240,40)
mango10= new Mango(960,250,40)
mango11= new Mango(1000,250,40)
mango12= new Mango(1140,250,40)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  image(boyimage,100,450,200,300)
  ground.display()
tree.display()
mango1.display()
mango2.display()
mango3.display()
mango4.display()
mango5.display()
mango6.display()
mango7.display()
mango8.display()
mango9.display()
mango10.display()
mango11.display()
mango12.display()
stoneobj.display()
launcher.display()
  drawSprites();
 
}
function mouseDragged(){
	Matter.Body.setPosition(stoneobj.body,{x:mouseX,y:mouseY})
	
}
function mouseReleased(){
	launcher.fly()
}
function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stoneobj.body,{x:80,y:450})
		launcher.attach(stoneobj.body)	
	}
}


function detectocollsition(stone,mango){
mangoBodyPosition=mango.body.position
stoneBodyPosition=stone.body.position
var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(dist<=mango.r+stone.r){
	Matter.Body.setStatic(mango.body,false)
}
}

