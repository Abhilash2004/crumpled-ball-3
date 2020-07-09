var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,paper,box,ground;
const Engine = Matter.Engine; 
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 const Constraint= Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
paper =new Paper (100,50,170,170);
box1=new Box(600,680,200,10);
box2=new Box(501,590,10,190)
box3=new Box(699,590,10,190)
ground=new Ground(100,700,7000,10)
launcher= new Launcher(paper.body,{x:100,y:50});
Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  paper.display();
 
box1.display()
box2.display()
box3.display()
ground.display();
launcher.display();
  drawSprites();
 
}
 
function mouseDragged () {
  Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY})
   }
   function mouseReleased () {
  launcher.fly()
   }





