//-------------------------CLASS FURNITURES----------------------------------------------------------
class Furniture{
    constructor(img, x, y, width, height){
        this.img = img;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.use = function(player){
            if(player.x - (this.x + this.width) < 20 && this.x - (player.x + player.width) < 20 &&
            this.y - (player.y + player.height) < 20 && player.y - (this.y + this.height) < 20){
            return true;
        }
        return false;
    }
    }
    draw(){
        let furnImg = new Image();
        furnImg.src = this.img;
        context.drawImage(furnImg, this.x, this.y, this.width, this.height);

    }
   
}

//--------------------------------INSTANCES OF FURNITURE----------------------------------------------------------------------
let blood = new Furniture("/img/blood.png", 650, 420, 150, 50);
let blood2 = new Furniture("/img/blood2.png", 1050, 60, 100, 100);
let garbageCan = new Furniture("/img/garbageCan.png", 1234, 120, 30, 30);
let finalCarpet = new Furniture("/img/finalCarpet.png", 1200, 500, 80, 100);
let secretWay = new Furniture("/img/secretWay.png", 470, 250, 70, 90);

let bed = new Furniture("/img/bed.png", 10, 130, 100, 40);
let wardrobe = new Furniture("/img/wardrobe.png", 10, 10, 130, 30);
let tv = new Furniture("/img/tv.png", 1020, 20, 50, 30);

let livingChair = new Furniture("/img/livingChair.png", 1230, 250, 40, 40);
let livingChair2 = new Furniture("/img/livingChair2.png", 1180, 310, 40, 40);
let ovalTable = new Furniture("/img/ovalTable.png", 1225, 300, 45, 45);


let largeTable = new Furniture("/img/largeTable.png", 460, 200, 150, 40);
let largeTable2 = new Furniture("/img/largeTable.png", 600, 200, 150, 40);
let largeTable3 = new Furniture("/img/largeTable.png", 460, 350, 150, 40);
let largeTable4 = new Furniture("/img/largeTable.png", 600, 350, 150, 40);
let largeTable5 = new Furniture("/img/largeTable.png", 750, 200, 150, 40);
let largeTable6 = new Furniture("/img/largeTable.png", 750, 350, 150, 40);

let ovalTable2 = new Furniture("/img/ovalTable.png", 1160, 360, 50, 100);

let dinnerTable = new Furniture("/img/dinnerTable.png", 100, 470, 80, 80);
let dinnerChair = new Furniture("/img/dinnerChairLeft.png", 60, 490, 40, 40);
let dinnerChair2 = new Furniture("/img/dinnerChairRight.png", 180, 490, 40, 40);
let dinnerChair3 = new Furniture("/img/dinnerChairTop.png",119, 430, 40, 40);
let dinnerChair4 = new Furniture("/img/dinnerChairBottom.png", 119, 550, 40, 40);

let workbench = new Furniture("/img/Workbench-1.png", 490, 10, 145, 30);
let workbench2 = new Furniture("/img/Workbench-1.png", 635, 10, 145, 30);
let workbench3 = new Furniture("/img/Workbench-1.png", 780, 10, 140, 30);

let refri = new Furniture("/img/Refri.png", 130, 290, 70, 30);
let cook = new Furniture("/img/Cook.png", 10, 330, 50, 50);
let kitchen = new Furniture("/img/kitchen.png", 10, 290, 100 , 40);
let kitchen2 = new Furniture("/img/kitchen.png", 10, 380, 50 , 40);

let brokenPaint = new Furniture("/img/paintBroken.png", 30, 200, 100, 60);
let brokenDoor = new Furniture("/img/brokenDoor.png", 950, 240, 80, 120);
let glassBroken7 = new Furniture("/img/glassBroken2.png", 30, 200, 20, 20);
let glassBroken8 = new Furniture("/img/glassBroken2.png", 70, 240, 20, 20);
let goldBroken = new Furniture("/img/BrokenPiece.png", 1060, 460, 50, 140);

let desktopTable = new Furniture("/img/Desktop_Table.png", 1128, 10, 100, 40)
let desktopTable2 = new Furniture("/img/desktopTable2.png", 1228, 10, 40, 100)
let desktopChair = new Furniture("/img/deskchair.png", 1180, 60, 40, 40);

let roundTable = new Furniture("/img/RoundTable.png", 220, 15, 50, 60)
let singleChair1 = new Furniture("/img/singleChair.png", 180, 10, 30, 30);
let singleChair2 = new Furniture("/img/singleChair2.png", 240, 80, 30, 30);

let toilet = new Furniture("/img/Toilet.png", 415, 490, 40, 50);
let bath = new Furniture("/img/shower-1.png", 500, 550, 100, 60)

let smallBlueSofa = new Furniture("/img/miniBlueSofa.png", 290, 70, 40, 50);
let blueSofa = new Furniture("/img/blueSofa.png", 332, 10, 100, 50);
let redsofaR = new Furniture("/img/redSofaR.png", 1100, 360, 50, 100);
let redsofaL = new Furniture("/img/redSofaL.png", 1218, 360, 50, 100);
let plant = new Furniture("/img/plant.png", 290, 10, 40, 40);
let plant2 = new Furniture("/img/plant.png", 435, 10, 40, 40);

let plant3 = new Furniture("/img/plant.png", 490, 200, 30, 30);
let plant4 = new Furniture("/img/plant.png", 550, 200, 30, 30);
let plant5 = new Furniture("/img/plant.png", 630, 200, 30, 30);
let plant6 = new Furniture("/img/plant.png", 690, 200, 30, 30);
let plant7 = new Furniture("/img/plant.png", 770, 200, 30, 30);
let plant8 = new Furniture("/img/plant.png", 830, 200, 30, 30);

let plant9 = new Furniture("/img/plant.png", 490, 355, 30, 30);
let plant10 = new Furniture("/img/plant.png", 550, 355, 30, 30);
let plant11 = new Furniture("/img/plant.png", 630, 355, 30, 30);
let plant12 = new Furniture("/img/plant.png", 690, 355, 30, 30);
let plant13 = new Furniture("/img/plant.png", 770, 355, 30, 30);
let plant14 = new Furniture("/img/plant.png", 830, 355, 30, 30);

let carpet = new Furniture("/img/carpet.png", 305, 200, 120, 200);
let glassBroken = new Furniture("/img/brokenGlass.png", 970, 40, 25, 25);
let glassBroken2 = new Furniture("/img/brokenGlass.png", 950, 40, 25, 25);
let glassBroken3 = new Furniture("/img/brokenGlass.png", 960, 50, 25, 25);
let glassBroken4 = new Furniture("/img/brokenGlass.png", 970, 80, 25, 25);
let glassBroken5 = new Furniture("/img/brokenGlass.png", 930, 60, 25, 25);
let glassBroken6 = new Furniture("/img/brokenGlass.png", 950, 80, 25, 25);

let safeBox = new Furniture("/img/safeBox-1.png", 260, 550, 50, 50);
let papers = new Furniture("/img/papers.png", 900, 550, 20, 20);
let papers2 = new Furniture("/img/papers.png", 900, 555, 20, 20);
let papers3 = new Furniture("/img/papers.png", 890, 550, 20, 20);
let papers4 = new Furniture("/img/papers.png", 880, 550, 20, 20);
let papers5 = new Furniture("/img/papers.png", 880, 540, 20, 20);
let papers6 = new Furniture("/img/papers.png", 880, 530, 20, 20);
let papers7 = new Furniture("/img/papers.png", 870, 550, 20, 20);
let papers8 = new Furniture("/img/papers.png", 865, 540, 20, 20);
let papers9 = new Furniture("/img/papers.png", 860, 530, 20, 20);

let papers10 = new Furniture("/img/papers.png", 840, 550, 20, 20);
let papers11 = new Furniture("/img/papers.png", 840, 530, 20, 20);
let papers12 = new Furniture("/img/papers.png", 840, 555, 20, 20);
let papers13 = new Furniture("/img/papers.png", 830, 550, 20, 20);
let papers14 = new Furniture("/img/papers.png", 830, 555, 20, 20);
let papers15 = new Furniture("/img/papers.png", 830, 540, 20, 20);
let papers16 = new Furniture("/img/papers.png", 840, 520, 20, 20);
let papers17 = new Furniture("/img/papers.png", 840, 540, 20, 20);
let papers18 = new Furniture("/img/papers.png", 825, 550, 20, 20);
let papers19 = new Furniture("/img/papers.png", 835, 535, 20, 20);

let papers20 = new Furniture("/img/papers.png", 800, 555, 20, 20);
let papers21 = new Furniture("/img/papers.png", 800, 535, 20, 20);
let papers22 = new Furniture("/img/papers.png", 780, 520, 20, 20);
let papers23 = new Furniture("/img/papers.png", 780, 530, 20, 20);
let papers24 = new Furniture("/img/papers.png", 770, 550, 20, 20);
let papers25 = new Furniture("/img/papers.png", 760, 535, 20, 20);


let box = new Furniture("/img/Box.png", 700, 570, 30, 30);
let box2 = new Furniture("/img/Box.png", 700, 540, 30, 30);
let box3 = new Furniture("/img/Box.png", 700, 555, 30, 30);
let box4 = new Furniture("/img/Box.png", 730, 570, 30, 30);
let box5 = new Furniture("/img/Box.png", 760, 570, 30, 30);
let box6 = new Furniture("/img/Box.png", 745, 570, 30, 30);
let box7 = new Furniture("/img/Box.png", 775, 570, 30, 30);
let box8 = new Furniture("/img/Box.png", 805, 570, 30, 30);
let box9 = new Furniture("/img/Box.png", 785, 570, 30, 30);
let box10 = new Furniture("/img/Box.png", 815, 570, 30, 30);
let box11 = new Furniture("/img/Box.png", 845, 570, 30, 30);
let box12 = new Furniture("/img/Box.png", 730, 570, 30, 30);