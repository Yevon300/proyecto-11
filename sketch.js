var back, ocean, ship, shipAnim;

function preload(){
shipAnim = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
ocean = loadImage("sea.png");

}

function setup(){
  createCanvas(900,600);

  back = createSprite (450,300,900,600);
  back.addImage("sky", ocean);
  back.scale=0.5;
  ship = createSprite (200,400,40,40);
  ship.addAnimation("sway", shipAnim);
  ship.scale=0.3;
  
}

function draw() {
  background("blue");
 drawSprites();
}