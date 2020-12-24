var leftIdleImg,rightIdleImg,leftRunImg,rightRunImg,leftJumpImg,rightJumpImg,bgImg,laserImg;
var score=0;
var play=1;
var end=0
var gameState=play;
var laser,ground,main,bg;



function preload(){
  leftIdleImg=loadAnimation("sprites/Left Idle/leftidle1.png","sprites/Left Idle/leftidle2.png","sprites/Left Idle/leftidle3.png","sprites/Left Idle/leftidle4.png","sprites/Left Idle/leftidle5.png",);
  rightIdleImg=loadAnimation("sprites/Right Idle/rightidle1.png","sprites/Right Idle/rightidle2.png","sprites/Right Idle/rightidle3.png","sprites/Right Idle/rightidle4.png","sprites/Right Idle/rightidle5.png","sprites/Right Idle/rightidle6.png");
  leftRunImg=loadAnimation("sprites/Left Run/leftrun1.png","sprites/Left Run/leftrun2.png","sprites/Left Run/leftrun3.png","sprites/Left Run/leftrun4.png","sprites/Left Run/leftrun5.png","sprites/Left Run/leftrun6.png","sprites/Left Run/leftrun7.png","sprites/Left Run/leftrun8.png","sprites/Left Run/leftrun9.png","sprites/Left Run/leftrun10.png")
  rightRunImg=loadAnimation("sprites/Right Run/rightrun1.png","sprites/Right Run/rightrun2.png","sprites/Right Run/rightrun3.png","sprites/Right Run/rightrun4.png","sprites/Right Run/rightrun5.png","sprites/Right Run/rightrun6.png","sprites/Right Run/rightrun7.png","sprites/Right Run/rightrun8.png","sprites/Right Run/rightrun9.png","sprites/Right Run/rightrun10.png")
  leftJumpImg=loadAnimation("sprites/Left Jump/leftjump1.png","sprites/Left Jump/leftjump2.png","sprites/Left Jump/leftjump3.png","sprites/Left Jump/leftjump4.png","sprites/Left Jump/leftjump5.png","sprites/Left Jump/leftjump6.png","sprites/Left Jump/leftjump7.png")
  rightJumpImg=loadAnimation("sprites/Right Jump/rightjump1.png","sprites/Right Jump/rightjump2.png","sprites/Right Jump/rightjump3.png","sprites/Right Jump/rightjump4.png","sprites/Right Jump/rightjump5.png","sprites/Right Jump/rightjump6.png","sprites/Right Jump/rightjump7.png",)
  laserImg=loadImage("sprites/laser.png");
  bgImg=loadImage("sprites/bg.jpg");

}


function setup(){
    canvas=createCanvas(800,500);
    main=createSprite(30,450);
    main.addAnimation("rightidle",rightIdleImg);
    main.addAnimation("leftidle",leftIdleImg);
    main.addAnimation("rightjump",rightJumpImg);
    main.addAnimation("leftjump",leftJumpImg);
    main.addAnimation("rightrun",rightRunImg);
    main.addAnimation("leftrun",leftRunImg);
     ground= createSprite(400,690,800,20);
    ground.visible=false;
    
    var bg=createSprite(400,250,800,500);
    bg.addImage(bgImg);
    bg.scale=1;
    main.depth=bg.depth+1;
     laserGrp=createGroup();





}
function draw(){
    background("white");
    if (keyDown("w")&&ground.isTouching(main)){
       main.velocityY=-12;
       main.addAnimation("leftjump",leftJumpImg);
  
     }
     if(ground.isTouching(main)&& keyWentUp("d")){
       main.addAnimation("rightidle",rightIdleImg);
       main.velocityX=0;
    //   bg.velocityX=0;
       
       
     }
     if(ground.isTouching(main)&& keyWentUp("a")){
       main.addAnimation("leftidle",leftIdleImg);
       main.velocityX=0;
      // bg.velocityX=0;
       
       
     }
     if(keyDown("d")&& ground.isTouching(main)){
         main.addAnimation("rightrun",rightJumpImg);
         main.velocityX=15;
         //bg.velocityX=-4;
       }
       if(keyDown("a")&& ground.isTouching(main)){
         main.addAnimation("leftrun",leftRunImg);
         main.velocityX=-15;
         //bg.velocityX=4;
       }
   spawn();
     main.velocityY=main.velocityY+0.8;
    main.collide(ground);
    drawSprites();
}
function spawn(){
    if(World.frameCount%60===0){
        var rand=random(10,690) 
     laser= createSprite(rand,450,50,20);
    laser.addImage(laserImg);
    laser.scale=0.1;
    if(laser.x-main.x>=0){
      laser.velocityX=-10;
    }
    if(laser.x-main.x<0){
      laser.velocityX=10;
    }
    }
    
  }