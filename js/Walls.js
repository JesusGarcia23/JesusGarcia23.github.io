//---------------------------------------CLASS WALLS---------------------------------------------------------
class Wall{
    constructor(x, y, width, height,){
        this.x = x;
        this.y= y;
        this.width = width;
        this.height = height;
    }
    draw(){
        context.fillStyle = "rgba(70, 17, 17, 1)";
        context.fillRect(this.x, this.y, this.width, this.height);
    }
    createBorder(){
        context.fillStyle = "rgba(192, 204, 22, 1)"; //yellow
        context.fillRect(this.x, this.y, this.width, this.height);
    }
}


//-------------------------------INSTANCES OF CLASS WALL--------------------------------------------------------------------------

//--------------BORDER-----------------------------
let mainWall = new Wall(1270, 0, 10, 600);
let mainWall2 = new Wall(0, 0, 10, 600);
let mainWall3 = new Wall(0, 600, 1280, 10);
let mainWall4 = new Wall(0, 0, 1280, 10);
//-------------------START ROOM------------------------
let startWall = new Wall(0, 170, 200, 10);
let startWall2 = new Wall(270, 0, 10, 180);

//----------------------ROOM 2-----------------------------
let roomTwoWall = new Wall(0, 280, 280, 10);
let roomTwoWall2 = new Wall(270, 370, 10, 110);
let roomTwoWall3 = new Wall(270, 480, 40, 10);
let roomTwoWall4 = new Wall(310, 480, 10, 120);


//-------------------ROOM 3-----------------------------------
let roomThreeWall = new Wall(400, 480, 10, 120);
let roomThreeWall2 = new Wall(400, 480, 100, 10);
let roomThreeWall3 = new Wall(570, 480, 30, 10);
let roomThreeWall4 = new Wall(600, 480, 10, 120);


//------------------ROOM 4---------------------------------
let roomFourWall = new Wall(690, 480, 10, 120);
let roomFourWall2 = new Wall(700, 480, 100, 10);
let roomFourWall3 = new Wall(900, 480, 30, 10);
let roomFourWall4 = new Wall(930, 480, 10, 120);

//--------------------ROOM 5----------------------------------
let roomFiveWall = new Wall(1000, 0, 10, 160);
let roomFiveWall2 = new Wall(1000, 160, 120, 10);
let roomFiveWall3 = new Wall(1200, 160, 80, 10);

//---------------------ROOM 6-------------------------------------
let roomSixWall = new Wall(480, 0, 10, 100);
let roomSixWall2 = new Wall(480, 100, 90, 10);
let roomSixWall3 = new Wall(630, 100, 130, 10);
let roomSixWall4 = new Wall(830, 100, 90, 10);
let roomSixWall5 = new Wall(920, 0, 10, 110);

//------------MIDDLE ROOM-------------------------------
let middleWall = new Wall(450, 190, 450, 10);
let middleWall2 = new Wall(450, 390, 450, 10);
let middleWall3 = new Wall(450, 190, 10, 210);
let middleWall4 = new Wall(900, 190, 10, 70);
let middleWall5 = new Wall(900, 330, 10, 70);

//--------------------------FINAL ROOM--------------------------------
let finalRoomWall = new Wall(1040, 435, 10, 200);
let finalRoomWall2 = new Wall(1040, 350, 250, 10);

