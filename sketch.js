const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;

var maxDrops = 100;

function preload(){
    
}

function setup(){
    createCanvas(400,600);
    engine = Engine.create();
    world = engine.world;

    for(var i=0;i<maxDrops; i++){
        Drops.push(new createdrops(random(0,400),random(0,400)));
    }
}

function draw(){
    background(0);
    Engine.update(engine);
    drops.display();
}   

