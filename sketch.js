var fruits,chips,chocolates;
var player;
var nutella,chocolate, bluechips, yellowchips;
var strawberry, mango, guava, watermelon;

function preload(){
nutella= loadImage("nutella.png");
chocolate= loadImage("choco.png");
bluechips= loadImage("blue.png");
yellowchips= loadImage("yellow.png");
strawberry= loadImage("strawberry.png");
mango= loadImage("mango.png");
guava= loadImage("guava.png");
watermelon= loadImage("wm.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
}


function draw() {
  background(0);  
  createchips();
  createchocolates();
  createfruits();
  drawSprites();

}

function createfruits(){
if (frameCount % 71===0){
fruits = createSprite((random(20,width-50)),0,50,50)
fruits.velocityY = 15;
var rand = Math.round(random(1,4));
switch(rand){
  case 1:fruits.addImage("strawberry",strawberry);
  break;
  case 2:fruits.addImage("guava",guava);
  break;
  case 3:fruits.addImage("mango",mango);
  break;
  case 4:fruits.addImage("watermelon",watermelon);
  break;
  
}
fruits.scale=0.5;
fruits.lifetime = 100;
console.log(height/5);
}
}

function createchips(){
  if (frameCount % 111===0){
  chips = createSprite((random(20,width-50)),0,40,80)
  chips.velocityY = 15;
  var rand = Math.round(random(1,2));
  switch(rand){
    case 1:chips.addImage("yellow",yellowchips);
    break;
    case 2:chips.addImage("blue",bluechips);
    break;
    
    
  }
  chips.lifetime = 100;
  chips.scale=0.3;
  
  }
  }

  function createchocolates(){
    if (frameCount % 171===0){
    chocolates = createSprite((random(20,width-50)),0,20,20)
    chocolates.velocityY = 15;
    var rand = Math.round(random(1,2));
    switch(rand){
      case 1:chocolates.addImage("nutella",nutella);
      break;
      case 2:chocolates.addImage("choco",chocolate);
      break;
     
      
    }
    chocolates.lifetime = 100;
    chocolates.scale=0.2;
    }
    
    }