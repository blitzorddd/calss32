const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var gameState = "onsling"
var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;
var a=1;
var string="hi"
var boolean=true;
var c=null;
var d;
var e=[1,2,3,4]
var bg = "sprites/bg.png"
var score=0
console.log(e[0])
console.log(e[1])
console.log(d)
console.log(string)
console.log(a)
console.log(e.length)
var f= [[null,true],1,[2,3]]
console.log(f[2][0])
f.push(e)
console.log(f)
f.pop()
console.log(f)
var marks = [60,70,50]
var sum = 0
for(var i = 0;i<3;i=i+1){
    sum=sum+marks[i]
}
var average = sum/marks.length
console.log(average)
function preload() {
    getTime()
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    if(backgroundImg){
    background(backgroundImg);
    }
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
    textSize(25)
    fill("white")
    text("Score: "+score,1000,50)
pig1.score()
pig3.score()
}

function mouseDragged(){
    if(gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
   
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched"
}
function keyPressed(){
    if(keyCode === 32){
        //slingshot.attach(bird.body)
    }
}
async function getTime(){
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responseJSON = await response.json()
    var dateTime = responseJSON.datetime;
   console.log(dateTime)
   var Time = dateTime.slice(11,13)
   console.log(Time)
   if(Time>=06&&Time<19){
       bg = "sprites/bg.png"
   }
   else{bg = "sprites/bg2.jpg"}
   backgroundImg = loadImage(bg)
}
