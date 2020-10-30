const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var block1 , block2, block3 ,  block4 , block5 , block6;
var block7 , block8 , block9 , block10;
var polygon;

function preload() {
    
}

function setup(){
    createCanvas(800,400);
    //createSprite(400, 200, 50, 50);
     engine = Engine.create();
     world = engine.world;


    ground = new Stand(600,height,1200,20);

    fill("black");
    polygon = Bodies.polygon(300,100,10,30);
   // Matter.Bodies.polygon(x, y, sides, radius, [options])
    World.add(world,this.polygon);
    
    /*
    block1 = new Block(500,300,50,50);
    block2 = new Block(450,300,50,50);
    block3 = new Block(400, 300,50,50);
    block4 = new Block(350,300,50,50);

    block5 = new Block(125,150,50,50);
    block6 = new Block(175,150,50.50);
    block7 = new Block(225, 150,50,50);
    block8 =  new Block(137,200,50,50);
    block9 = new Block(149,200,50,50);
    block10 = new Block(155,250,50,50);*/

    stand1 = new Stand(510,360,250,10);

  block1 = new Block(420,315,30,40);
  block2 = new Block(450,315,30,40);
  block3 = new Block(480,315,30,40);
  block4 = new Block(510,315,30,40);
  block5 = new Block(540,315,30,40);
  block6 = new Block(570,315,30,40);
  block7 = new Block(600,315,30,40);

  block8 = new Block(450,275,30,40);
  block9 = new Block(480,275,30,40);
  block10 = new Block(510,275,30,40);
  block11 = new Block(540,275,30,40);
  block12 = new Block(570,275,30,40);

  block13 = new Block(480,235,30,40);
  block14 = new Block(510,235,30,40);
  block15 = new Block(540,235,30,40);

  block16 = new Block(510,195,30,40);


    launcher = new Launcher(polygon,{x:100, y:100});
}

function draw(){
  background(255,255,255); 
    Engine.update(engine);
    ellipse(polygon.position.x,polygon.position.y,30);
    strokeWeight(4);
    block1.display();
    block2.display();
    ground.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    //polygon.display();
    stand1.display();
    launcher.display();


}

function mouseDragged(){
  //console.log(polygon.body);
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  launcher.fly();
}

function keyPressed(){
  if( keyCode === 32){
   launcher.attach(this.polygon);
  } 
}




