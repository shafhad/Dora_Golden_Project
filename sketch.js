//Assigning variables
var opencard, opencardImg;
var playButton, playButtonImg;
var doraRun, doraRunImg;
var arrow, arrowImg;
var nextLevel, nextLevelImg;

var jungle, jungleImg;
var monkey, monkeyImg;
var lion, lionImg;
var bear, bearImg;
var snake, snakeImg;

var l1, l1Img;
var l2, l2Img;
var l3, l3Img;

var fort, fortImg;
var thorn, thornImg;
var invisibleGround;

var doraWalk, doraWalkImg;
var restart, restartImg;
var sadDoraImg;

var hill, hillImg;
var dora, doraImg;
var swiper,swiperImg;
var swiper1,swiper1Img;
var swiper2,swiper2Img;
var swiper3,swiper3Img;

var final;
var paddle1, paddle2;
var gameOver, gameOverImg;
var obstaclesGroup;
var end, endImg;
var treasure, treasureImg;
var hand, handImg;
var paddle3, paddle4, paddle5;

var bgMusic;

var score = 0;
var gameState  = "initialState";

var textTreasure = 0;
//var textShow     = 0;

//Loading images
function preload() {
    opencardImg   = loadImage("sprites/Openind Card.png");
    playButtonImg = loadImage("sprites/Play button.png");

    l1Img         = loadImage("sprites/L1.png");
    l2Img         = loadImage("sprites/L2.png");
    l3Img         = loadImage("sprites/L3.png");

    fortImg       = loadImage("sprites/Fort.png");
    doraRunImg    = loadAnimation("sprites/Picture1.png", "sprites/Picture2.png");
    thornImg      = loadImage("sprites/thorn.png");
    lostImg       = loadImage("sprites/Lost.png");
    nextLevelImg  = loadImage("sprites/nextLevel.png");
    arrowImg      = loadImage("sprites/arrow.png");
    gameOverImg   = loadImage("sprites/gameOver.png"); 
    restartImg    = loadImage("sprites/restart.png"); 
    sadDoraImg    = loadImage("sprites/sadDora.png"); 

    jungleImg     = loadImage("sprites/Jungle.png");
    monkeyImg     = loadImage("sprites/Monkey.png");
    lionImg       = loadImage("sprites/Lion.png");
    bearImg       = loadImage("sprites/Bear.png");
    snakeImg      = loadImage("sprites/Snake.png");
    doraWalkImg   = loadImage("sprites/Dora walk.png");

    hillImg       = loadImage("sprites/Hill.png");
    doraImg       = loadImage("sprites/dora.png");
    swiperImg     = loadImage("sprites/Swiper.png");
    swiper1Img    = loadImage("sprites/Swiper.png");
    swiper2Img    = loadImage("sprites/Swiper2.png");
    swiper3Img    = loadImage("sprites/Swiper2.png");

    endImg        = loadImage("sprites/Endcard.png");
    handImg       = loadImage("sprites/hand.png");

    bgMusic       = loadSound("Dora.mp3");

}

//Creating sprites using varibles
function setup () {

    createCanvas(windowWidth, windowHeight);

    obstaclesGroup = createGroup();

    openCard = createSprite(windowWidth/2, windowHeight/2);
    openCard.addImage("card", opencardImg);
    openCard.scale = 1.4;

    playButton = createSprite(width-130, height-530, 100, 100);
    playButton.addImage("play", playButtonImg);
    playButton.scale = 0.099;

    l1 = createSprite(width-900, height-70, 100, 100);
    l1.addImage("l1", l1Img);
    l1.scale = 0.7;
    l1.visible = false;

    l2 = createSprite(width-650, height-70, 100, 100);
    l2.addImage("l2", l2Img);
    l2.scale = 0.7;
    l2.visible = false;

    l3 = createSprite(width-400, height-70, 100, 100);
    l3.addImage("l3", l3Img);
    l3.scale = 0.7;
    l3.visible = false;

    fort = createSprite(width-580, windowHeight/2, 100, 100);
    fort.addImage("fort", fortImg);
    fort.scale = 2.3;
    fort.visible = false;
    fort.velocityX = -1.2;

    doraRun = createSprite(width-1150, height-50, 400, 400);
    doraRun.addAnimation("doraRun", doraRunImg);
    doraRun.addAnimation("sadDora",sadDoraImg);
    doraRun.scale = 0.6;
    doraRun.visible = false; 
    doraRun.setCollider("rectangle",0,0,400,400); 

    invisibleGround = createSprite(width/2, height-20, width, 20);
    invisibleGround.visible = false;

    gameOver = createSprite(width/2, height/2, 10, 10);
    gameOver.addImage("gameOver", gameOverImg);
    gameOver.visible = false;

    nextLevel = createSprite(width/2, windowHeight/2, 100, 100);
    nextLevel.addImage("nextLevel", nextLevelImg);
    nextLevel.visible = false;

    arrow = createSprite(width/2, height/2+150, 100, 100);
    arrow.addImage("arrow", arrowImg);
    arrow.scale   = 0.3;
    arrow.visible = false;

    jungle = createSprite(width-700, height-395, 100, 100);
    jungle.addImage("jungle", jungleImg);
    jungle.scale   = 2.2;
    jungle.visible = false;

    monkey = createSprite(width/2, height-40, 400, 400);
    monkey.addImage("monkey", monkeyImg);
    monkey.scale = 0.2;
    monkey.visible = false;

    lion = createSprite(width/2, height/2-50, 400, 400);
    lion.addImage("lion", lionImg);
    lion.scale     = 0.07;
    lion.visible   = false;

    bear = createSprite(970, 215, 400, 400);
    bear.addImage("bear", bearImg);
    bear.scale     = 0.09;
    bear.visible   = false;

    snake = createSprite(width/2, height/2-220, 400, 400);
    snake.addImage("snake", snakeImg);
    snake.scale     = 0.06;
    snake.visible   = false;

    doraWalk = createSprite(width/2+470, 325, 10, 500);
    doraWalk.addImage("doraWalk", doraWalkImg);
    doraWalk.scale   = 0.062;
    doraWalk.visible = false;

    hill = createSprite(windowWidth/2, windowHeight/2);
    hill.addImage("hill", hillImg);
    hill.scale   = 3.6;
    hill.visible = false;

    dora = createSprite(width/2-450, height/2, 100, 100);
    dora.addImage("dora", doraImg);
    dora.scale   = 0.2;
    dora.visible = false;

    restart = createSprite(width/2, height/2 + 130, 50, 50);
    restart.addImage("reset", restartImg);
    restart.scale = 0.3;
    restart.visible = false;

    swiper = createSprite(width/2-190, 200, 100, 100);
    swiper.addImage("swiper", swiperImg);
    swiper.scale     = 0.3;
    swiper.visible   = false;

    swiper1 = createSprite(width/2+250, 65, 100, 100);
    swiper1.addImage("swiper1", swiperImg);
    swiper1.scale   = 0.3;
    swiper1.visible = false;

    swiper2 = createSprite(width/2+460, 600, 100, 100);
    swiper2.addImage("swiper2", swiper2Img);
    swiper2.scale   = 0.3;
    swiper2.visible = false;

    swiper3 = createSprite(width/2+40, 600, 100, 100);
    swiper3.addImage("swiper3", swiper2Img);
    swiper3.scale   = 0.3;
    swiper3.visible = false;

    paddle1 = createSprite(width/2, height/2-330, 1300, 10);
    paddle1.visible = false;

    paddle2 = createSprite(width/2, height/2+330, 1300, 10);
    paddle2.visible = false;

    final = createSprite(width/2+585, height/2, 150, 1700);
    final.visible = false;
    final.shapeColor = "#58A32C";

    hand = createSprite(width/2+470, height/2-60, 10, 10);
    hand.addImage(handImg);
    hand.scale = 0.2;
    hand.visible = false;

    paddle3 = createSprite(width/2+500, height/2-10, 5, 35);
    paddle3.visible = false;

    paddle4 = createSprite(width/2+460, height/2-30, 55, 5);
    paddle4.visible = false;

    paddle5 = createSprite(width/2+460, height/2+10, 60, 5);
    paddle5.visible = false;

    one = createSprite(width/2+420, height/2-170, 05, 270);
    one.shapeColor = "brown";
    one.visible = true;

    two = createSprite(width/2-380, height/2, 05, 620);
    two.shapeColor = "brown";
    two.visible = true;

    three = createSprite(width/2+20, height/2-305, 800, 05);
    three.shapeColor = "brown";
    three.visible = true;

    four = createSprite(width/2-175, height/2+305, 410, 05);
    four.shapeColor = "brown";
    four.visible = true;

    five = createSprite(width/2+378, height/2-170, 05, 265);
    five.shapeColor = "brown";
    five.visible = true;

    six = createSprite(width/2+378, height/2+140, 05, 277);
    six.shapeColor = "brown";
    six.visible = true;

    seven = createSprite(width/2+340, height/2+120, 05, 243);
    seven.shapeColor = "brown";
    seven.visible = true;

    eight = createSprite(width/2+340, height/2+255, 05, 35);
    eight.shapeColor = "brown";
    eight.visible = true;

    nine = createSprite(width/2+340, height/2-90, 05, 105);
    nine.shapeColor = "brown";
    nine.visible = true;

    ten = createSprite(width/2+190, height-55, 370, 05);
    ten.shapeColor = "brown";
    ten.visible = true;

    eleven = createSprite(width/2+305, height/2-15, 05, 240);
    eleven.shapeColor = "brown";
    eleven.visible = true;

    twelve = createSprite(width/2+275, height/2+15, 05, 245);
    twelve.shapeColor = "brown";
    twelve.visible = true;

    thirteen = createSprite(width/2+235, height/2+35, 05, 273);
    thirteen.shapeColor = "brown";
    thirteen.visible = true;

    fourteen = createSprite(width/2+205, height/2-15, 05, 40);
    fourteen.shapeColor = "brown";
    fourteen.visible = true;

    fifteen = createSprite(width/2+205, height/2+85, 05, 170);
    fifteen.shapeColor = "brown";
    fifteen.visible = true;

    sixteen = createSprite(width/2+170, height/2-220, 05, 105);
    sixteen.shapeColor = "brown";
    sixteen.visible = true;

    seventeen = createSprite(width/2+140, height/2-165, 05, 75);
    seventeen.shapeColor = "brown";
    seventeen.visible = true;

    eighteen = createSprite(width/2+37, height/2-160, 05, 37);
    eighteen.shapeColor = "brown";
    eighteen.visible = true;

    nineteen = createSprite(width/2+75, height/2-190, 05, 37);
    nineteen.shapeColor = "brown";
    nineteen.visible = true;

    twenty = createSprite(width/2+70, height-105, 05, 37);
    twenty.shapeColor = "brown";
    twenty.visible = true;

    twentyone = createSprite(width/2+35, height-100, 05, 37);
    twentyone.shapeColor = "brown";
    twentyone.visible = true;

    twentytwo = createSprite(width/2+37, height/2-190, 05, 38);
    twentytwo.shapeColor = "brown";
    twentytwo.visible = true;

    twentythree = createSprite(width/2+35, height/2+105, 05, 70);
    twentythree.shapeColor = "brown";
    twentythree.visible = true;

    twentyfour = createSprite(width/2+03, height/2+88, 05, 38);
    twentyfour.shapeColor = "brown";
    twentyfour.visible = true;

    twentyfive = createSprite(width/2, height/2-120, 05, 38);
    twentyfive.shapeColor = "brown";
    twentyfive.visible = true;

    twentysix = createSprite(width/2-35, height/2+222, 05, 105);
    twentysix.shapeColor = "brown";
    twentysix.visible = true;

    twentyseven = createSprite(width/2-67, height-57, 05, 60);
    twentyseven.shapeColor = "brown";
    twentyseven.visible = true;

    twentyeight = createSprite(width/2-170, height/2-135, 05, 73);
    twentyeight.shapeColor = "brown";
    twentyeight.visible = true;

    twentynine = createSprite(width/2-170, height/2+20, 05, 104);
    twentynine.shapeColor = "brown";
    twentynine.visible = true;

    thirty = createSprite(width/2-170, height-140, 05, 172);
    thirty.shapeColor = "brown";
    thirty.visible = true;

    thirtyone = createSprite(width/2-200, height-170, 05, 242);
    thirtyone.shapeColor = "brown";
    thirtyone.visible = true;

    thirtytwo = createSprite(width/2-200, height/2-120, 05, 242);
    thirtytwo.shapeColor = "brown";
    thirtytwo.visible = true;

    hundredandtwelve = createSprite(width/2-240, height/2+120, 05, 244);
    hundredandtwelve.shapeColor = "brown";
    hundredandtwelve.visible = true;

    thirtythree = createSprite(width/2-240, height/2-185, 05, 107);
    thirtythree.shapeColor = "brown";
    thirtythree.visible = true;

    thirtyfour = createSprite(width/2-240, height/2-70, 05, 71);
    thirtyfour.shapeColor = "brown";
    thirtyfour.visible = true;

    thirtyfive = createSprite(width/2-275, height/2-85, 05, 106);
    thirtyfive.shapeColor = "brown";
    thirtyfive.visible = true;

    thirtysix = createSprite(width/2-275, height/2-180, 05, 46);
    thirtysix.shapeColor = "brown";
    thirtysix.visible = true;

    thirtyseven = createSprite(width/2-307, height/2-220, 05, 38);
    thirtyseven.shapeColor = "brown";
    thirtyseven.visible = true;

    thirtyeight = createSprite(width/2-305, height/2-100, 05, 204);
    thirtyeight.shapeColor = "brown";
    thirtyeight.visible = true;

    fourty = createSprite(width/2-305, height/2+86, 05, 107);
    fourty.shapeColor = "brown";
    fourty.visible = true;

    fourtyone = createSprite(width/2-305, height-105, 05, 104);
    fourtyone.shapeColor = "brown";
    fourtyone.visible = true;
    
    fourtytwo = createSprite(width/2-270, height-207, 05, 246);
    fourtytwo.shapeColor = "brown";
    fourtytwo.visible = true;

    fourtythree = createSprite(width/2-345, height-240, 05, 381);
    fourtythree.shapeColor = "brown";
    fourtythree.visible = true;

    fourtyfour = createSprite(width/2-345, height/5, 05, 140);
    fourtyfour.shapeColor = "brown";
    fourtyfour.visible = true;

    fourtyfive = createSprite(width/2+420, height-170, 05, 310);
    fourtyfive.shapeColor = "brown";
    fourtyfive.visible = true;

    fourtysix = createSprite(width/2+250, height-25, 350, 05);
    fourtysix.shapeColor = "brown";
    fourtysix.visible = true;

    fourtyseven = createSprite(width/2+290, height/9-10, 170, 05);
    fourtyseven.shapeColor = "brown";
    fourtyseven.visible = true;

    fourtyeight = createSprite(width/2+70, height/9-15, 205, 05);
    fourtyeight.shapeColor = "brown";
    fourtyeight.visible = true;

    fourtynine = createSprite(width/2-213, height/9-15, 270, 05);
    fourtynine.shapeColor = "brown";
    fourtynine.visible = true;

    fifty = createSprite(width/2+290, height/9+15, 172, 05);
    fifty.shapeColor = "brown";
    fifty.visible = true;

    fiftyone = createSprite(width/2-35, height/8+09, 280, 05);
    fiftyone.shapeColor = "brown";
    fiftyone.visible = true;

    fiftytwo = createSprite(width/2-160, height/8+09, 80, 05);
    fiftytwo.shapeColor = "brown";
    fiftytwo.visible = true;

    fiftythree = createSprite(width/2-290, height/5-05, 40, 05);
    fiftythree.shapeColor = "brown";
    fiftythree.visible = true;

    fiftyfour = createSprite(width/2-260, height/3-25, 42, 05);
    fiftyfour.shapeColor = "brown";
    fiftyfour.visible = true;

    fiftyfive = createSprite(width/2-256, height/2-30, 42, 05);
    fiftyfive.shapeColor = "brown";
    fiftyfive.visible = true;

    fiftysix = createSprite(width/2-365, height/3+10, 42, 05);
    fiftysix.shapeColor = "brown";
    fiftysix.visible = true;

    fiftyseven = createSprite(width/2-325, height/2+35, 42, 05);
    fiftyseven.shapeColor = "brown";
    fiftyseven.visible = true;

    fiftyeight = createSprite(width/2-287, height/2, 42, 05);
    fiftyeight.shapeColor = "brown";
    fiftyeight.visible = true;

    fiftynine= createSprite(width/2-220, height/2, 42, 05);
    fiftynine.shapeColor = "brown";
    fiftynine.visible = true;

    sixty = createSprite(width/2-325, height/2+140, 42, 05);
    sixty.shapeColor = "brown";
    sixty.visible = true;

    sixtyone = createSprite(width/2-255, height-80, 42, 05);
    sixtyone.shapeColor = "brown";
    sixtyone.visible = true;

    hundredandthirteen = createSprite(width/2-253, height-50, 112, 05);
    hundredandthirteen.shapeColor = "brown";
    hundredandthirteen.visible = true;

    sixtytwo = createSprite(width/2-150, height/5-05, 40, 05);
    sixtytwo.shapeColor = "brown";
    sixtytwo.visible = true;

    hundredandfourteen= createSprite(width/2+122, height/5-05, 40, 05);
    hundredandfourteen.shapeColor = "brown";
    hundredandfourteen.visible = true;

    sixtythree = createSprite(width/2+55, height/5+25, 40, 05);
    sixtythree.shapeColor = "brown";
    sixtythree.visible = true;

    sixtyfour = createSprite(width/2+255, height/2+105, 40, 05);
    sixtyfour.shapeColor = "brown";
    sixtyfour.visible = true;

    sixtyfive = createSprite(width/2+360, height/2+105, 40, 05);
    sixtyfive.shapeColor = "brown";
    sixtyfive.visible = true;

    sixtysix = createSprite(width/2+323, height/2+140, 40, 05);
    sixtysix.shapeColor = "brown";
    sixtysix.visible = true;

    sixtyseven = createSprite(width/2-20, height-120, 40, 05);
    sixtyseven.shapeColor = "brown";
    sixtyseven.visible = true;

    sixtyeight = createSprite(width/2-50, height-55, 40, 05);
    sixtyeight.shapeColor = "brown";
    sixtyeight.visible = true;

    sixtynine = createSprite(width/2-100, height-85, 78, 05);
    sixtynine.shapeColor = "brown";
    sixtynine.visible = true;

    seventy = createSprite(width/2-100, height-125, 78, 05);
    seventy.shapeColor = "brown";
    seventy.visible = true;

    seventytwo = createSprite(width/2+104, height-85, 70, 05);
    seventytwo.shapeColor = "brown";
    seventytwo.visible = true;

    seventythree = createSprite(width/2+255, height-85, 175, 05);
    seventythree.shapeColor = "brown";
    seventythree.visible = true;

    seventyfour = createSprite(width/2+173, height-120, 210, 05);
    seventyfour.shapeColor = "brown";
    seventyfour.visible = true;

    seventyfive = createSprite(width/2+120, height-160, 314, 05);
    seventyfive.shapeColor = "brown";
    seventyfive.visible = true;

    seventysix = createSprite(width/2+290, height/5, 170, 05);
    seventysix.shapeColor = "brown";
    seventysix.visible = true;

    seventyeight = createSprite(width/2+257, height/4-05, 175, 05);
    seventyeight.shapeColor = "brown";
    seventyeight.visible = true;

    seventynine = createSprite(width/2+226, height/3-20, 175, 05);
    seventynine.shapeColor = "brown";
    seventynine.visible = true;

    eighty = createSprite(width/2-20, height/3-30, 230, 05);
    eighty.shapeColor = "brown";
    eighty.visible = true;

    eightyone = createSprite(width/2-30, height/5-05, 143, 05);
    eightyone.shapeColor = "brown";
    eightyone.visible = true;

    eightytwo = createSprite(width/2-65, height/4-10, 216, 05);
    eightytwo.shapeColor = "brown";
    eightytwo.visible = true;

    eightythree = createSprite(width/2-100, height/3+10, 141, 05);
    eightythree.shapeColor = "brown";
    eightythree.visible = true;

    eightyfour = createSprite(width/2+117, height/3+10, 240, 05);
    eightyfour.shapeColor = "brown";
    eightyfour.visible = true;

    eightyfive = createSprite(width/2+135, height/3+40, 143, 05);
    eightyfive.shapeColor = "brown";
    eightyfive.visible = true;

    eightysix = createSprite(width/2-85, height/3+40, 234, 05);
    eightysix.shapeColor = "brown";
    eightysix.visible = true;

    eightyseven = createSprite(width/2+20, height/2-35, 173, 05);
    eightyseven.shapeColor = "brown";
    eightyseven.visible = true;

    eightyeight = createSprite(width/2-135, height/2-35, 71, 05);
    eightyeight.shapeColor = "brown";
    eightyeight.visible = true;

    eightynine = createSprite(width/2+380, height/2-35, 85, 05);
    eightynine.shapeColor = "brown";
    eightynine.visible = true;

    ninety = createSprite(width/2+173, height/2-35, 70, 05);
    ninety.shapeColor = "brown";
    ninety.visible = true;

    ninetyone = createSprite(width/2+155, height/2, 110, 05);
    ninetyone.shapeColor = "brown";
    ninetyone.visible = true;

    ninetytwo = createSprite(width/2+132, height/2+40, 140, 05);
    ninetytwo.shapeColor = "brown";
    ninetytwo.visible = true;

    ninetythree = createSprite(width/2-17, height/2, 175, 05);
    ninetythree.shapeColor = "brown";
    ninetythree.visible = true;

    ninetyfour = createSprite(width/2-70, height/2+40, 200, 05);
    ninetyfour.shapeColor = "brown";
    ninetyfour.visible = true;

    ninetyfive = createSprite(width/2-68, height/2+70, 144, 05);
    ninetyfive.shapeColor = "brown";
    ninetyfive.visible = true;

    ninetysix = createSprite(width/2-120, height-160, 105, 05);
    ninetysix.shapeColor = "brown";
    ninetysix.visible = true;

    ninetyseven = createSprite(width/2-85, height/2+105, 180, 05);
    ninetyseven.shapeColor = "brown";
    ninetyseven.visible = true;

    ninetyeight = createSprite(width/2+70, height/2+110, 71, 05);
    ninetyeight.shapeColor = "brown";
    ninetyeight.visible = true;

    ninetynine = createSprite(width/2+17, height/2+140, 314, 05);
    ninetynine.shapeColor = "brown";
    ninetynine.visible = true;

    hundred = createSprite(width/2+207, height/7+15, 05, 43);
    hundred.shapeColor = "brown";
    hundred.visible = true;

    hundredandone = createSprite(width/2+100, height/7+15, 05, 43);
    hundredandone.shapeColor = "brown";
    hundredandone.visible = true;

    hundredandtwo = createSprite(width/2-170, height/7+15, 05, 43);
    hundredandtwo.shapeColor = "brown";
    hundredandtwo.visible = true;

    hundredandthree = createSprite(width/2-100, height/2-17, 05, 43);
    hundredandthree.shapeColor = "brown";
    hundredandthree.visible = true;

    hundredandfour = createSprite(width/2+105, height/2-15, 05, 43);
    hundredandfour.shapeColor = "brown";
    hundredandfour.visible = true;

    hundredandfive = createSprite(width/2+65, height/2+20, 05, 43);
    hundredandfive.shapeColor = "brown";
    hundredandfive.visible = true;

    hundredandsix = createSprite(width/2+275, height-140, 05, 43);
    hundredandsix.shapeColor = "brown";
    hundredandsix.visible = true;

    hundredandseven = createSprite(width/2-140, height-143, 05, 40);
    hundredandseven.shapeColor = "brown";
    hundredandseven.visible = true;

    hundredandeight = createSprite(width/2, height-85, 05, 67);
    hundredandeight.shapeColor = "brown";
    hundredandeight.visible = true;

    hundredandnine = createSprite(width/2+175, height-223, 05, 73);
    hundredandnine.shapeColor = "brown";
    hundredandnine.visible = true;

    hundredandfifteen = createSprite(width/2+305, height-140, 05, 100);
    hundredandfifteen.shapeColor = "brown";
    hundredandfifteen.visible = true;

    hundredandten = createSprite(width/2+400, height/2+05, 40, 05);
    hundredandten.shapeColor = "brown";
    hundredandten.visible = true;

    hundredandeleven = createSprite(width/2+105, height/2+73, 140, 05);
    hundredandeleven.shapeColor = "brown";
    hundredandeleven.visible = true;

    win = createSprite(width/2+55, height-10, 30, 20);
    win.visible = false;

}

function draw () {
    
    background("black");
    //bgMusic.loop();

    if(gameState == "initialState"){
        if(mousePressedOver(playButton)){
            playButton.visible = false;
            l1.visible         = true;
            l2.visible         = true;
            l3.visible         = true;
        }
    
        if(mousePressedOver(l1)){
            openCard.visible = false;
            l1.visible       = false;
            l2.visible       = false;
            l3.visible       = false;
            fort.visible     = true;
            doraRun.visible  = true;
            gameState        = "level1Play";

        }

        if(mousePressedOver(l2)){
            openCard.visible = false;
            l1.visible       = false;
            l2.visible       = false;
            l3.visible       = false;
            gameState        = "level2Play";
            move();
        }

        if(mousePressedOver(l3)){
            openCard.visible = false;
            l1.visible       = false;
            l2.visible       = false;
            l3.visible       = false;
            gameState        = "level3Play";
            stepUp();
        }
    }

    drawSprites();   

    if(gameState == "level1Play"){
        fort.visible = true;
        if(fort.x < 650) {
           fort.x = 700;
        }

         obstacle();

         textSize(35);
         stroke("yellow");
         fill("#ff006e");
         text("SCORE : " + score, width/2-650, height-600);

         textSize(28);
         //stroke("pink");
         fill("brown");
         textFont('Comic Sans Ms');
         text("PRESS SPACE TO JUMP AND REACH 500 TO MOVE TO NEXT LEVEL", width/2-400, height-550);

         if(keyDown("space")) {
            doraRun.velocityY = -12;
            score = score + 1;
         }

         //giving gravity to dora
         doraRun.velocityY = doraRun.velocityY + 5;

         //to make dora stand on the invisible line
         doraRun.collide(invisibleGround);

         if(obstaclesGroup.isTouching(doraRun)){
             gameState = "level1End";
         } 

         if(score > 500) {  
            gameState = "level2Play";
             reset();
         }

      
 
         line = createSprite(680, 02, 1300, 10);
         line.visible = false;
         doraRun.collide(line);

    }

    if(gameState == "level1End"){
       fort.visible = false;
       doraRun.changeAnimation("sadDora",sadDoraImg);
       doraRun.scale = 0.23;
       gameOver.visible = true;
       restart.visible = true;
       doraRun.velocityY = 0;
       obstaclesGroup.setLifetimeEach(-1);
       obstaclesGroup.setVelocityXEach(0);

       if(mousePressedOver(restart)) {
        level1reset();
       }
    }

         if(gameState === "level2Play"){

            if(mousePressedOver(arrow)){
                move(); 
             }

        if (keyDown("LEFT_ARROW")) {
            doraWalk.x = doraWalk.x - 6;
        }

        if (keyDown("RIGHT_ARROW")) {
            doraWalk.x = doraWalk.x + 6;
        }

        if (keyDown("UP_ARROW")) {
            doraWalk.y = doraWalk.y - 6;
        }

        if (keyDown("DOWN_ARROW")) {
            doraWalk.y = doraWalk.y + 6;
        }

        var m = color(random(0, 255), random(0, 255), random(0, 255));
        win.shapeColor = m;
        
        textSize(20);
        fill(m);
        text("TOUCH HERE TO MOVE TO NEXT LEVEL",width/2+80,height);

        if(doraWalk.isTouching(win)) {
            gameState = "level3Play";
            reset2();
        }

        doraWalk.bounceOff(paddle3);
        doraWalk.bounceOff(paddle4);
        doraWalk.bounceOff(paddle5);

        monkey.bounceOff(fourtyfive);
        monkey.bounceOff(twentyseven);

        lion.bounceOff(thirtytwo);
        lion.bounceOff(thirteen);

        bear.bounceOff(eleven);
        bear.bounceOff(twentyfive);

        snake.bounceOff(hundredandone);
        snake.bounceOff(hundredandtwo);

        doraWalk.bounceOff(one);
        doraWalk.bounceOff(two);
        doraWalk.bounceOff(three);
        doraWalk.bounceOff(four);
        doraWalk.bounceOff(five);
        doraWalk.bounceOff(six);
        doraWalk.bounceOff(seven);
        doraWalk.bounceOff(eight);
        doraWalk.bounceOff(nine);
        doraWalk.bounceOff(ten);

        doraWalk.bounceOff(eleven);
        doraWalk.bounceOff(twelve);
        doraWalk.bounceOff(thirteen);
        doraWalk.bounceOff(fourteen);
        doraWalk.bounceOff(fifteen);
        doraWalk.bounceOff(sixteen);
        doraWalk.bounceOff(seventeen);
        doraWalk.bounceOff(eighteen);
        doraWalk.bounceOff(nineteen);
        doraWalk.bounceOff(twenty);

        doraWalk.bounceOff(twentyone);
        doraWalk.bounceOff(twentytwo);
        doraWalk.bounceOff(twentythree);
        doraWalk.bounceOff(twentyfour);
        doraWalk.bounceOff(twentyfive);
        doraWalk.bounceOff(twentysix);
        doraWalk.bounceOff(twentyseven);
        doraWalk.bounceOff(twentyeight);
        doraWalk.bounceOff(twentynine);
        doraWalk.bounceOff(thirty);

        doraWalk.bounceOff(thirtyone);
        doraWalk.bounceOff(thirtytwo);
        doraWalk.bounceOff(thirtythree);
        doraWalk.bounceOff(thirtyfour);
        doraWalk.bounceOff(thirtyfive);
        doraWalk.bounceOff(thirtysix);
        doraWalk.bounceOff(thirtyseven);
        doraWalk.bounceOff(thirtyeight);
        doraWalk.bounceOff(fourty);

        doraWalk.bounceOff(fourtyone);
        doraWalk.bounceOff(fourtytwo);
        doraWalk.bounceOff(fourtythree);
        doraWalk.bounceOff(fourtyfour);
        doraWalk.bounceOff(fourtyfive);
        doraWalk.bounceOff(fourtysix);
        doraWalk.bounceOff(fourtyseven);
        doraWalk.bounceOff(fourtyeight);
        doraWalk.bounceOff(fourtynine);
        doraWalk.bounceOff(fifty);

        doraWalk.bounceOff(fiftyone);
        doraWalk.bounceOff(fiftytwo);
        doraWalk.bounceOff(fiftythree);
        doraWalk.bounceOff(fiftyfour);
        doraWalk.bounceOff(fiftyfive);
        doraWalk.bounceOff(fiftysix);
        doraWalk.bounceOff(fiftyseven);
        doraWalk.bounceOff(fiftyeight);
        doraWalk.bounceOff(fiftynine);
        doraWalk.bounceOff(sixty);

        doraWalk.bounceOff(sixty);
        doraWalk.bounceOff(sixtyone);
        doraWalk.bounceOff(sixtytwo);
        doraWalk.bounceOff(sixtythree);
        doraWalk.bounceOff(sixtyfour);
        doraWalk.bounceOff(sixtyfive);
        doraWalk.bounceOff(sixtysix);
        doraWalk.bounceOff(sixtyseven);
        doraWalk.bounceOff(sixtyeight);
        doraWalk.bounceOff(sixtynine);
        doraWalk.bounceOff(seventy);

        doraWalk.bounceOff(seventy);
        doraWalk.bounceOff(seventytwo);
        doraWalk.bounceOff(seventythree);
        doraWalk.bounceOff(seventyfour);
        doraWalk.bounceOff(seventyfive);
        doraWalk.bounceOff(seventysix);
        doraWalk.bounceOff(seventyeight);
        doraWalk.bounceOff(seventynine);
        doraWalk.bounceOff(eighty);

        doraWalk.bounceOff(eighty);
        doraWalk.bounceOff(eightyone);
        doraWalk.bounceOff(eightytwo);
        doraWalk.bounceOff(eightythree);
        doraWalk.bounceOff(eightyfour);
        doraWalk.bounceOff(eightyfive);
        doraWalk.bounceOff(eightysix);
        doraWalk.bounceOff(eightyseven);
        doraWalk.bounceOff(eightyeight);
        doraWalk.bounceOff(eightynine);
        doraWalk.bounceOff(ninety);

        doraWalk.bounceOff(ninety);
        doraWalk.bounceOff(ninetyone);
        doraWalk.bounceOff(ninetytwo);
        doraWalk.bounceOff(ninetythree);
        doraWalk.bounceOff(ninetyfour);
        doraWalk.bounceOff(ninetyfive);
        doraWalk.bounceOff(ninetysix);
        doraWalk.bounceOff(ninetyseven);
        doraWalk.bounceOff(ninetyeight);
        doraWalk.bounceOff(ninetynine);
        doraWalk.bounceOff(hundred);

        doraWalk.bounceOff(hundred);
        doraWalk.bounceOff(hundredandone);
        doraWalk.bounceOff(hundredandtwo);
        doraWalk.bounceOff(hundredandthree);
        doraWalk.bounceOff(hundredandfour);
        doraWalk.bounceOff(hundredandfive);
        doraWalk.bounceOff(hundredandsix);
        doraWalk.bounceOff(hundredandseven);
        doraWalk.bounceOff(hundredandeight);
        doraWalk.bounceOff(hundredandnine);
        doraWalk.bounceOff(hundredandten);

        doraWalk.bounceOff(hundredandeleven);
        doraWalk.bounceOff(hundredandtwelve);
        doraWalk.bounceOff(hundredandthirteen);
        doraWalk.bounceOff(hundredandfourteen);
        doraWalk.bounceOff(hundredandfifteen);

        if(doraWalk.isTouching(bear) || doraWalk.isTouching(snake) || doraWalk.isTouching(lion) || doraWalk.isTouching(monkey)) {
            doraWalk.x = 1150;
            doraWalk.y = 325;
        }

    }

    if(gameState === "level3Play"){

        if(mousePressedOver(arrow)){
           stepUp(); 
         }

        swiper.bounceOff(paddle1);
        swiper.bounceOff(paddle2);

        swiper1.bounceOff(paddle1);
        swiper1.bounceOff(paddle2);

        swiper2.bounceOff(paddle1);
        swiper2.bounceOff(paddle2);

        swiper3.bounceOff(paddle1);
        swiper3.bounceOff(paddle2);

        dora.collide(paddle1);
        dora.collide(paddle2);

        if(keyDown("LEFT_ARROW")){
           dora.x = dora.x - 5;
        }

        if(keyDown("RIGHT_ARROW")){
            dora.x = dora.x + 5;
         }

         if(keyDown("UP_ARROW")){
            dora.y = dora.y - 5;
         }

         if(keyDown("DOWN_ARROW")){
            dora.y = dora.y + 5;
         }
        
        if(dora.isTouching(swiper) || dora.isTouching(swiper1) || dora.isTouching(swiper2) || dora.isTouching(swiper3)) {
            dora.x = 180;
            dora.y = 300;
        }

        if(dora.isTouching(final)){
            dora.visible    = false;
            hill.visible    = false;
            swiper.visible  = false;
            swiper1.visible = false;
            swiper2.visible = false;
            swiper3.visible = false;
            final.visible   = false;

            //textShow = 1;

            end = createSprite(width/2, height/2, width, height);
            end.addImage("end",endImg);
            end.scale = 2;

            treasure = createSprite(160, 500, 100, 100);
            treasure.addImage(treasureImg);
            treasure.scale = 0.7;

            var a = color(random(0, 255), random(0, 255), random(0, 255));
            fill(a);
            textSize(35);
            text("YOU WON ", 50, 50);
        }

        /*if(textShow == 1) {
            textSize(25);
            fill("blue");
            stroke("red");
            text("USE ARROW KEYS TO MOVE AND BEWARE OF THE SWIPERS!!! ", 20, 40);
        }*/
        
        if(textTreasure == 1){
            noStroke();
            var c = color(random(0, 255), random(0, 255), random(0, 255));
            fill(c);
            textSize(30);
            text("YOUR ", width-120,height/2-250);
            textSize(25);
            text("TREASURE ", width-150,height/2-100);
            textSize(30);
            text("IS ", width-100,height/2+50);
            text("HERE ", width-120,height/2+200);
        }

    }  

}

function level1reset(){
    gameState = "level1Play";
    gameOver.visible = false;
    restart.visible  = false; 
    doraRun.changeAnimation("doraRun", doraRunImg); 
    doraRun.scale = 0.6;
    obstaclesGroup.destroyEach();
    score = 0;
    openCard.destroy();
    l1.destroy();
    l2.destroy();
    l3.destroy();
}

//creating obstacles
function obstacle () {
    if(frameCount % 70 === 0) {
        thorn = createSprite(width,height-80,40,10);
        thorn.velocityX = -9;
        thorn.lifetime  = 150;
        thorn.addImage(thornImg);
        thorn.scale = 0.7;

        obstaclesGroup.add(thorn);
    }
}

function reset() {
    nextLevel.visible = true;
    arrow.visible     = true;
    doraRun.destroy();
    fort.destroy();
    obstaclesGroup.destroyEach();    
}

function reset2() {
    nextLevel.visible = true;
    arrow.visible     = true;
    
    snake.destroy();
    lion.destroy();
    monkey.destroy();
    bear.destroy();

    hand.destroy();
    win.destroy();

    jungle.destroy();
    monkey.destroy();
    lion.destroy();
    bear.destroy();
    snake.destroy();

    doraWalk.destroy();

    one.destroy();
    two.destroy();
    three.destroy();
    four.destroy();
    five.destroy();
    six.destroy();
    seven.destroy();
    eight.destroy();
    nine.destroy();
    ten.destroy();

    eleven.destroy();
    twelve.destroy();
    thirteen.destroy();
    fourteen.destroy();
    fifteen.destroy();
    sixteen.destroy();
    seventeen.destroy();
    eighteen.destroy();
    nineteen.destroy();
    twenty.destroy();

    twentyone.destroy();
    twentytwo.destroy();
    twentythree.destroy();
    twentyfour.destroy();
    twentyfive.destroy();
    twentysix.destroy();
    twentyseven.destroy();
    twentyeight.destroy();
    twentynine.destroy();
    thirty.destroy();

    thirtyone.destroy();
    thirtytwo.destroy();
    thirtythree.destroy();
    thirtyfour.destroy();
    thirtyfive.destroy();
    thirtysix.destroy();
    thirtyseven.destroy();
    thirtyeight.destroy();
    fourty.destroy();

    fourtyone.destroy();
    fourtytwo.destroy();
    fourtythree.destroy();
    fourtyfour.destroy();
    fourtyfive.destroy();
    fourtysix.destroy();
    fourtyseven.destroy();
    fourtyeight.destroy();
    fourtynine.destroy();
    fifty.destroy();

    fiftyone.destroy();
    fiftytwo.destroy();
    fiftythree.destroy();
    fiftyfour.destroy();
    fiftyfive.destroy();
    fiftysix.destroy();
    fiftyseven.destroy();
    fiftyeight.destroy();
    fiftynine.destroy();
    sixty.destroy();

    sixtyone.destroy();
    sixtytwo.destroy();
    sixtythree.destroy();
    sixtyfour.destroy();
    sixtyfive.destroy();
    sixtysix.destroy();
    sixtyseven.destroy();
    sixtyeight.destroy();
    sixtynine.destroy();
    seventy.destroy();

    seventytwo.destroy();
    seventythree.destroy();
    seventyfour.destroy();
    seventyfive.destroy();
    seventysix.destroy();
    seventyeight.destroy();
    seventynine.destroy();
    eighty.destroy();

    eightyone.destroy();
    eightytwo.destroy();
    eightythree.destroy();
    eightyfour.destroy();
    eightyfive.destroy();
    eightysix.destroy();
    eightyseven.destroy();
    eightyeight.destroy();
    eightynine.destroy();
    ninety.destroy();

    ninetyone.destroy();
    ninetytwo.destroy();
    ninetythree.destroy();
    ninetyfour.destroy();
    ninetyfive.destroy();
    ninetysix.destroy();
    ninetyseven.destroy();
    ninetyeight.destroy();
    ninetynine.destroy();
    hundred.destroy();

    hundredandone.destroy();
    hundredandtwo.destroy();
    hundredandthree.destroy();
    hundredandfour.destroy();
    hundredandfive.destroy();
    hundredandsix.destroy();
    hundredandseven.destroy();
    hundredandeight.destroy();
    hundredandnine.destroy();
    hundredandten.destroy();

    hundredandeleven.destroy();
    hundredandtwelve.destroy();
    hundredandthirteen.destroy();
    hundredandfourteen.destroy(); 
    hundredandfifteen.destroy();


}

function move () {
    gameState = "level2Play";

    snake.velocityX = 4;
    lion.velocityX = 4;
    monkey.velocityX = 4;
    bear.velocityX = 4;

    hand.visible     = true;
    win.visible      = true;
    openCard.visible = false;
    l1.visible       = false;
    l2.visible       = false;
    l3.visible       = false;

    jungle.visible   = true;
    monkey.visible   = true;
    lion.visible     = true;
    bear.visible     = true;
    snake.visible    = true;

    doraWalk.visible = true;

    one.visible   = true;
    two.visible   = true;
    three.visible = true;
    four.visible  = true;
    five.visible  = true;
    six.visible   = true;
    seven.visible = true;
    eight.visible = true;
    nine.visible  = true;
    ten.visible   = true;

    eleven.visible    = true;
    twelve.visible    = true;
    thirteen.visible  = true;
    fourteen.visible  = true;
    fifteen.visible   = true;
    sixteen.visible   = true;
    seventeen.visible = true;
    eighteen.visible = true;
    nineteen.visible  = true;
    twenty.visible    = true;

    twentyone.visible    = true;
    twentytwo.visible    = true;
    twentythree.visible  = true;
    twentyfour.visible   = true;
    twentyfive.visible   = true;
    twentysix.visible    = true;
    twentyseven.visible  = true;
    twentyeight.visible  = true;
    twentynine.visible   = true;
    thirty.visible       = true;

    thirtyone.visible    = true;
    thirtytwo.visible    = true;
    thirtythree.visible  = true;
    thirtyfour.visible   = true;
    thirtyfive.visible   = true;
    thirtysix.visible    = true;
    thirtyseven.visible   = true;
    thirtyeight.visible  = true;
    fourty.visible       = true;

    fourtyone.visible   = true;
    fourtytwo.visible   = true;
    fourtythree.visible = true;
    fourtyfour.visible  = true;
    fourtyfive.visible  = true;
    fourtysix.visible   = true;
    fourtyseven.visible = true;
    fourtyeight.visible = true;
    fourtynine.visible  = true;
    fifty.visible       = true;

    fiftyone.visible    = true;
    fiftytwo.visible    = true;
    fiftythree.visible  = true;
    fiftyfour.visible   = true;
    fiftyfive.visible   = true;
    fiftysix.visible    = true;
    fiftyseven.visible  = true;
    fiftyeight.visible  = true;
    fiftynine.visible   = true;
    sixty.visible       = true;

    sixtyone.visible    = true;
    sixtytwo.visible    = true;
    sixtythree.visible  = true;
    sixtyfour.visible   = true;
    sixtyfive.visible   = true;
    sixtysix.visible    = true;
    sixtyseven.visible  = true;
    sixtyeight.visible  = true;
    sixtynine.visible   = true;
    seventy.visible     = true;

    seventytwo.visible   = true;
    seventythree.visible = true;
    seventyfour.visible  = true;
    seventyfive.visible  = true;
    seventysix.visible   = true;
    seventyeight.visible = true;
    seventynine.visible  = true;
    eighty.visible       = true;

    eightyone.visible   = true;
    eightytwo.visible   = true;
    eightythree.visible = true;
    eightyfour.visible  = true;
    eightyfive.visible  = true;
    eightysix.visible   = true;
    eightyseven.visible = true;
    eightyeight.visible = true;
    eightynine.visible  = true;
    ninety.visible      = true;

    ninetyone.visible   = true;
    ninetytwo.visible   = true;
    ninetythree.visible = true;
    ninetyfour.visible  = true;
    ninetyfive.visible  = true;
    ninetysix.visible   = true;
    ninetyseven.visible = true;
    ninetyeight.visible = true;
    ninetynine.visible  = true;
    hundred.visible     = true;

    hundredandone.visible   = true;
    hundredandtwo.visible   = true;
    hundredandthree.visible = true;
    hundredandfour.visible  = true;
    hundredandfive.visible  = true;
    hundredandsix.visible   = true;
    hundredandseven.visible = true;
    hundredandeight.visible = true;
    hundredandnine.visible  = true;
    hundredandten.visible   = true;

    hundredandeleven.visible   = true;
    hundredandtwelve.visible   = true;
    hundredandthirteen.visible = true;
    hundredandfourteen.visible = true; 
    hundredandfifteen.visible  = true;
}

function stepUp () {

  gameState        = "level3Play";
  textTreasure     = 1;

  openCard.visible = false;
  l1.visible       = false;
  l2.visible       = false;
  l3.visible       = false;

  hill.visible    = true;
  dora.visible    = true;
  swiper.visible  = true;
  swiper1.visible = true;
  swiper2.visible = true;
  swiper3.visible = true;

  final.visible   = true;

  swiper.velocityY  = 13;
  swiper1.velocityY = 13;
  swiper2.velocityY = 13;
  swiper3.velocityY = 13;
   
}
