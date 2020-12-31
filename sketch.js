var ground;
var boy, boyImage;
var virus, virusImage;
var box, boxImage, box2, boxImage2;
var shield, shieldImg;
var stopb;
var boyimg;
var boyy;
var vaccine, vaccineImg;
var virusGroup;
var newyearimg

function preload() {
    boyImage = loadAnimation("man1.png", "man2.png", "man3.png", "man4.png", "man5.png");
    virusImage = loadImage("covid.png");
    boxImage = loadImage("down.png");
    boxImage2 = loadImage("down.png");
    shieldImg = loadImage('shield2.png');
    boyimg = loadAnimation("man6.png");
    vaccineImg = loadImage("injection.png");
    newyearimg=loadImage("NEWYEAR1.png");
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    virus = createSprite(width - 2400, height - 220, 20, 20);
    virus.addImage(virusImage);
    virus.visible = true;
    virus.velocityX = +2.4;
    virus.scale = 0.4;
    virus.lifetime = 650;

    stopb = createSprite(width - 240, height - 200, 10, 40);
    stopb.visible = false;

    vaccine = createSprite(width + 140, height - 200, 10, 20);
    vaccine.addImage(vaccineImg);
    vaccine.scale = 0.3;
    vaccine.visible = true;


    box = createSprite(width - 1830, height - 400, 20, 25);
    box.addImage(boxImage);
    box.scale = 0.4;

    box2 = createSprite(width - 240, height - 400, 20, 25);
    box2.addImage(boxImage2);
    box2.scale = 0.4;

    ground = createSprite(width / 2, height - 150, width, 40);

    boy = createSprite(width - 1880, height - 240, 20, 20);
    boy.addAnimation("boy", boyImage);
    boy.scale = 0.6;
    boy.visible = true;

    virusGroup = new Group();
}



function draw() {
    background("yellow");
    // coming();

    fill("white");
    textSize(50);
    stroke("green");
    strokeWeight(10);
    text("IN",width-1860,height-510);
    text("IN",width-270,height-510);
    text("2020", width - 1880, height - 460);
    text("2021", width - 290, height - 460);
    // text(boyy,boy.x,boy.y);
    // if(shield.isTouching(virus)){
    //     virus.visible=false;
    // }

    boy.velocityX = +3;

    if (boy.isTouching(stopb)) {
        // boyy=createSprite(boy.x,boy.y,20,20);
        // boyy.addImage(boyimg);
        boy.changeAnimation("boy", boyimg);
        // boy.visible=false;
        boy.velocityX = 0;

        vaccine.velocityX = -4;

        if (vaccine.isTouching(boy)) {
            vaccine.visible = false;
            shield = createSprite(boy.x, boy.y, 20, 20);
            shield.addImage(shieldImg);

        }
        if(vaccine.visible===false){
            var newyear=createSprite(width/2,height/2,20,20);
            newyear.addImage(newyearimg);
            // background(newyearimg);
            // newyear.width=windowWidth;
            newyear.scale=0.70;     
            // newyear.height=windowHeight;
        }
    }

    drawSprites();


    createEdgeSprites();
    boy.bounceOff(ground);
    boy.velocityY = boy.velocityY + 1;


}
function coming() {
    if (frameCount % 60 === 0) {
        virus = createSprite(width - 1900, height - 220, 20, 20);
        virus.addImage(virusImage);
        virus.visible = true;
        virus.scale = 0.04;
        virus.velocityX = +1.8;
        virus.y = Math.round(random(boy.y - 60, ground.y - 28));
        virusGroup.add(virus);
        virus.lifetime = 750;
    }
}