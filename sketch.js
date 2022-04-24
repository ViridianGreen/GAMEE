const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var release = false;
var Block;
var jointlink;
function preload(){
  bgImg = loadImage("BG.png")
  redImg = loadImage("red .png")
  blockImg = loadImage("block.png")
  pigImg = loadImage('pig.png')
  blocks =[];
  trajectory =[]
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ctplt=createImg("ctplt.png");
  ctplt.position(200,340)
  ctplt.size(90,180)

  let groundOptions={
    isStatic:true,
    density: 50,
    friction: 12
  }

  let b3Options={
    restitution:0,
    isStatic:true,
    density:1
  }
  for(var i = 1, j=200,k=800; i<=10;i++){
   if(i%2==0){
     j = j+50;
     k=900;
   }
   else{
     k=700
   }
   
  Block = new BLOCK(k,j,30,50);
  j = j-50;
  blocks.push(Block)
  }

  Ground = Bodies.rectangle(0,560,windowWidth+600,100,groundOptions)
  fill(255)
  World.add(world,Ground)

  //red = createSprite(215,340,10,10)
 // red.addImage(redImg)
 // red.scale = 0.08;

 
 red = Bodies.circle(215,340,30,groundOptions)
 World.add(world,red)

 var angle = red.angle

 pig = Bodies.circle(780,230,40)
 //Matter.Body.setMass(pig,0.00000001)
 World.add(world,pig)
 
  b1 = Bodies.rectangle(222,370,10,10,options={isStatic:true})
  fill(255)
  World.add(world,b1)

  
  b2 = Bodies.rectangle(270,365,10,10,groundOptions)
  fill(255)
  World.add(world,b2)
  
  //b3 = Bodies.rectangle(775,270,154,10,groundOptions)
  //World.add(world,b3)

  bridge = new Bridge(10, { x:b2.position.x, y: b2.position.y });
  Matter.Composite.add(bridge.body, b2);
  jointlink = new Link(bridge,b2)

  

}


function draw() 
{

  background(bgImg);
  Engine.update(engine);
  for (var Block of blocks) {
    Block.show();
  }
  bridge.show()
     
  //if(blocks[9]!=undefined){
  rect(Ground.position.x,Ground.position.y,windowWidth+600,100)
  rect(b1.position.x,b1.position.y,10,10)
  rect(b2.position.x,b2.position.y,10,10)
  image(redImg,red.position.x,red.position.y,50,50);
  image(pigImg,pig.position.x,pig.position.y,40,40)
  //image(blockImg,b3.position.x,b3.position.y,154,10)
 if(release == false && keyDown(DOWN_ARROW)){
   //red.position.x = mouseX
   //red.position.y = mouseY
   angle+=10
 }

 red.rotate(angle)
  drawSprites()
}

function r(){
  red.position.x = red.position.x
  red.position.y = red.position.y
  Matter.Body.setStatic(red,false)
  Matter.Body.setVelocity(red,{x:17,y:-4})
  Matter.Body.setStatic(pig,false)
 // Matter.Body.setStatic(b3,false)
  release = true;
}

function mouseClicked(){
  r()
  trajectory()
}

function trajectory(){
  
    var position = [red.position.x,red.position.y];
    fill("white")
    ellipse(red.position.x,red.position.y,5,5)
    trajectory.push(position);
  

for (var i = 0; i < trajectory.length; i++) {
  fill("white");
  ellipse(trajectory[i][0], trajectory[i][1], 5, 5);
}}