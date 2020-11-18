//World, Engine, Bodies
// Matter.World, Matter.Engine, Matter.Bodies
//namespacing
const World = Matter.World;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;

var engine, world;
var ground;
var box1, box2;
function setup() {
  createCanvas(1200, 400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 390, 1200, 20);

  box1 = new Box(800, 350, 70, 70);
  box2 = new Box(1000, 350, 70, 70);
  pig1 = new Pig(900, 300)
  log1 = new Log(900, 280, 300, PI/2)

  box3 = new Box(800, 250, 70, 70);
  box4 = new Box(1000, 250, 70, 70);
  pig2 = new Pig(900, 200)
  log2 = new Log(900, 180, 300, PI/2)

  box5 = new Box(900, 150, 70, 70);
  log3 = new Log(800, 100, 150, PI/5)
  log4 = new Log(1000, 100, 150, -PI/5)

  bird = new Bird(23,52)
}

function draw() {
  background(0);
  Engine.update(engine);
  ground.display();

  box1.display();
  box2.display();
  pig1.display();
  log1.display()
  
  box4.display();
  box3.display();
  pig2.display();
  log2.display()

  box5.display();
  log3.display();
  log4.display();

  bird.display();
}
