
 
var player,playeridle;

function preload(){
playeridle=loadImage("walk1.png");





}




function setup() {
  canvas=createCanvas(1200,800);
  

  player = createSprites(100,200);
  player.addAnimation("idle",playeridle);
 
   
}
    

 


function draw() {
  background("black");
    

 drawSprites();

}
