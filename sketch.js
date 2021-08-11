const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3, box4, box5; 
var box6, box7, box8, box9, box10;
var box11, box12, box13, box14, box15;
var box16, box17, box18, box19, box20;
var box21, box22, box23, box24, box25;
var box26, box27, box28, box29, box30;
var box31, box32, box33, box34, box35;
var hero, monster, rope, ground;

function preload() 
{
  bg = loadImage("background.png");
}

function setup() 
{
  createCanvas(1400, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 700, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

  //creates the 1st row
  box1 = new Box(600, 100, 50, 50);
  box2 = new Box(660, 100, 50, 50);
  box3 = new Box(720, 100, 50, 50);
  box4 = new Box(780, 100, 50, 50);
  box5 = new Box(840, 100, 50, 50);
  //creates the 2nd row
  box6 = new Box(600, 160, 50, 50);
  box7 = new Box(660, 160, 50, 50);
  box8 = new Box(720, 160, 50, 50);
  box9 = new Box(780, 160, 50, 50);
  box10 = new Box(840, 160, 50, 50);
  //creates the 3rd row
  box11 = new Box(600, 220, 50, 50);
  box12 = new Box(660, 220, 50, 50);
  box13 = new Box(720, 220, 50, 50);
  box14 = new Box(780, 220, 50, 50);
  box15 = new Box(840, 220, 50, 50);
  //creates the 4th row
  box16 = new Box(600, 280, 50, 50);
  box17 = new Box(660, 280, 50, 50);
  box18 = new Box(720, 280, 50, 50);
  box19 = new Box(780, 280, 50, 50);
  box20 = new Box(840, 280, 50, 50);
  //creates the 5th row
  box21 = new Box(600, 340, 50, 50);
  box22 = new Box(660, 340, 50, 50);
  box23 = new Box(720, 340, 50, 50);
  box24 = new Box(780, 340, 50, 50);
  box25 = new Box(840, 340, 50, 50);
  //creates the 6th row
  box26 = new Box(600, 400, 50, 50);
  box27 = new Box(660, 400, 50, 50);
  box28 = new Box(720, 400, 50, 50);
  box29 = new Box(780, 400, 50, 50);
  box30 = new Box(840, 400, 50, 50);
  //creates the 7th row
  box31 = new Box(600, 460, 50, 50);
  box32 = new Box(660, 460, 50, 50);
  box33 = new Box(720, 460, 50, 50);
  box34 = new Box(780, 460, 50, 50);
  box35 = new Box(840, 460, 50, 50);
  //creates the 8th row
  box36 = new Box(600, 520, 50, 50);
  box37 = new Box(660, 520, 50, 50);
  box38 = new Box(720, 520, 50, 50);
  box39 = new Box(780, 520, 50, 50);
  box40 = new Box(840, 520, 50, 50);
  //creates the 9th row
  box41 = new Box(600, 580, 50, 50);
  box42 = new Box(660, 580, 50, 50);
  box43 = new Box(720, 580, 50, 50);
  box44 = new Box(780, 580, 50, 50);
  box45 = new Box(840, 580, 50, 50);
  //creates the 10th row
  box46 = new Box(600, 640, 50, 50);
  box47 = new Box(660, 640, 50, 50);
  box48 = new Box(720, 640, 50, 50);
  box49 = new Box(780, 640, 50, 50);
  box50 = new Box(840, 640, 50, 50);

}

function draw() 
{
  background(bg);
  Engine.update(engine);
  ground.display();
  
  //displays the 1st row
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  //displays the 2nd row
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  //displays the 3rd row
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  //displays the 4th row
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  //displays the 5th row
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  //displays the 6th row
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();
  //displays the 7th row
  box31.display();
  box32.display();
  box33.display();
  box34.display();
  box35.display();
  //displays the 8th row
  box36.display();
  box37.display();
  box38.display();
  box39.display();
  box40.display();
  //displays the 9th row
  box41.display();
  box42.display();
  box43.display();
  box44.display();
  box45.display();
  //creates the 10th row
  box46.display();
  box47.display();
  box48.display();
  box49.display();
  box50.display();

  hero.display();
  rope.display();
  monster.display();

}

function mouseDragged() 
{
  Matter.Body.setPosition(hero.body, {x: 600, y: 765});
}

function mouseReleased()
{
  rope.fly();
  Matter.Body.applyForce(hero.body, {x: 40, y: 400});
}
