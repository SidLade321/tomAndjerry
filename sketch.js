var cat;
var mouse;
function preload() {
    //load the images here
    catImg =  loadAnimation("images/cat1.png");
    mouseImg = loadAnimation("images/mouse1.png");
    catImgA = loadAnimation("images/cat2.png","images/cat3.png");
    mouseImgA = loadAnimation("images/mouse2.png","images/mouse3.png");
    gardenImg = loadImage("images/garden.png");
    mouseHappy = loadImage("images/mouse4.png");
    catHappy = loadImage("images/cat4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(900,50,50,50);
    cat.addAnimation(catImg);

}

function draw() {

    background("images/garden.png");
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2)
    {
        cat.velocityX = 0;
        cat.addImage(catHappy);
        mouse.addImage(mouseHappy);
        
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyCode === LEFT_ARROW)
  {
    cat.velocityX = 2;
    cat.addAnimation("catRun",catImgA);
        cat.changeAnimaion("catRun");
      mouse.addAnimation("mouseTeasing", mouseImgA);
      mouse.changeAnimaion("mouseTeasing");
      mouse.frameDelay = 25;
  }


}
