
//------------------------MAKE CUSTOM ALERT, PROMPT---------------------------------------------
let alertBox = new customAlert();
//let safePrompt = new customPrompt(); TESTING
let controlBox = new showControl();

//-------------------------GETTIN ACCES TO HTML ELEMENT-----------------------------------------
let introSound = document.querySelector(".introSong");

let playerName = document.querySelector("#playerName");

let status = document.querySelector("#status");

let overSound = document.querySelector(".gameOverSong");

let introMainScreen = document.querySelector("#introScreen");

let startButton = document.querySelector(".startBttn");

let controlButton = document.querySelector(".controlBttn");


//----------------------CONTROL BUTTON------------------------------------------
controlButton.addEventListener("click", function(){
    controlBox.render();
})

const myCanvas = document.getElementById("myBoard");
const context = myCanvas.getContext("2d");

let introOn = true;
let gameOn = true;
let gameOff = false;
let gameWon = false;


//------------------------START GAME BUTTON--------------------------------------------
startButton.addEventListener("click", function(){
    playerName.innerHTML = prompt("Introduce your name", "")
    introSound.remove();
    introMainScreen.style.display = "none";
    myCanvas.style.display = "block";
    animate();
})


myCanvas.width = 1280;
myCanvas.height = 600;

let arrayOfWall = [];
let arrayOfObjects = [];
let arrayOfItems = [];
let arrayOfBooks = [];

let arrayOfRandomText = ["Im going.... to kill...you", "I remember...when I was......Alive", "look behind you....", "....There you are.....",
"The swimming pool... I need to get there.....", "HINT: When there are 4, everything goes better", "where are you....?", "..come with me.....",
"I want to find the way.....to get you.", "Be afraid. Be very afraid...", "Pray while you are alive", "abandoned....by God", "That cold ain't the weather. That's death approaching..",
"Do you want to see me?..", "I feel so alone...", "Let's play...", "There is just one difference between us...you're alive.."];

let showRandomPosition = Math.floor(Math.random() * 4);
let arrayOfGhostShow = [
     { x:350,  y:260},
    {x:596, y:418},
    { x:914, y:334},
    {x:602, y:130}
];

//-------------------------GAME OVER PICTURE--------------------------------------------------
let youDied = new Image();
youDied.src = "/img/YouHaveDied.png"
//----------------------------------------SOUND-------------------------------------------------
let bckgrSound = new Audio("/sound/backgroundSong.mp3");
let bckgrSoundOn = true;

let powercut = new Audio("/sound/powercut.mp3");

let gameOverSong = new Audio("/sound/gameOverSong.mp3");

let ghostSound = new Audio("/sound/ghostShow.mp3");

let introSong = new Audio("/sound/introSong.mp3");

let winSong = new Audio("/sound/winSong.mp3");

let manScream = new Audio("/sound/manScream.mp3");

let unlockSafebox = new Audio("/sound/unlockSafebox.mp3");

let paperFlip = new Audio("/sound/paperFlip.mp3");

let grabItemSound = new Audio("/sound/grabItem.mp3");

let flashLightSound = new Audio("/sound/flashlightSound.mp3");
//------------------------------------CONDITIONALS-------------------------------------------
let isLightOff = false;
let showItems = false;
let showGhost = false;
let safeBoxUsed = false;
let safeBoxOn = false;
let ghostSoundOn = true;

//-------------------------------------QUESTS----------------------------------------------------------------
let quest1 = true;
let quest2 = false;
let quest3 = false;


//----------------------------GET HTML ELEMENTS--------------------------------------------------

//-----------------------ITEM LIST---------------------------
let itemIcon = document.getElementsByClassName('item-list');

//----------------------OBJECTIVE-----------------------------
let objectiveText = document.querySelector("#obj");

//---------------ENVIROMENT-------------------------------------
let enviromentText = document.querySelector("#enviro");


//--------------------------------INSTANCES OF FURNITURE----------------------------------------------------------------------
let blood = new Furniture("/img/blood.png", 650, 420, 150, 50);
let blood2 = new Furniture("/img/blood2.png", 1050, 60, 100, 100);

let bed = new Furniture("/img/bed.png", 10, 130, 100, 40);
let wardrobe = new Furniture("/img/wardrobe.png", 10, 10, 130, 30);


let largeTable = new Furniture("/img/largeTable.png", 460, 200, 150, 40);
let largeTable2 = new Furniture("/img/largeTable.png", 600, 200, 150, 40);
let largeTable3 = new Furniture("/img/largeTable.png", 460, 350, 150, 40);
let largeTable4 = new Furniture("/img/largeTable.png", 600, 350, 150, 40);
let largeTable5 = new Furniture("/img/largeTable.png", 750, 200, 150, 40);
let largeTable6 = new Furniture("/img/largeTable.png", 750, 350, 150, 40);

let dinnerTable = new Furniture("/img/dinnerTable.png", 100, 470, 80, 80);
let dinnerChair = new Furniture("/img/dinnerChairLeft.png", 60, 490, 40, 40);
let dinnerChair2 = new Furniture("/img/dinnerChairRight.png", 180, 490, 40, 40);
let dinnerChair3 = new Furniture("/img/dinnerChairTop.png",119, 430, 40, 40);
let dinnerChair4 = new Furniture("/img/dinnerChairBottom.png", 119, 550, 40, 40);

let workbench = new Furniture("/img/Workbench-1.png", 490, 10, 145, 30);
let workbench2 = new Furniture("/img/Workbench-1.png", 635, 10, 145, 30);
let workbench3 = new Furniture("/img/Workbench-1.png", 780, 10, 145, 30);

let refri = new Furniture("/img/Refri.png", 130, 290, 70, 30);
let cook = new Furniture("/img/Cook.png", 10, 330, 50, 50);
let kitchen = new Furniture("/img/kitchen.png", 10, 290, 100 , 40);
let kitchen2 = new Furniture("/img/kitchen.png", 10, 380, 50 , 50);


let desktopTable = new Furniture("/img/Desktop_Table.png", 1128, 10, 100, 40)
let desktopTable2 = new Furniture("/img/desktopTable2.png", 1228, 10, 40, 100)
let desktopChair = new Furniture("/img/deskchair.png", 1180, 60, 40, 40);

let roundTable = new Furniture("/img/RoundTable.png", 220, 15, 50, 60)
let singleChair1 = new Furniture("/img/singleChair.png", 180, 10, 30, 30);
let singleChair2 = new Furniture("/img/singleChair2.png", 240, 80, 30, 30);

let smallBlueSofa = new Furniture("/img/miniBlueSofa.png", 290, 70, 40, 50);
let blueSofa = new Furniture("/img/blueSofa.png", 332, 10, 100, 50);
let plant = new Furniture("/img/plant.png", 290, 10, 40, 40);
let plant2 = new Furniture("/img/plant.png", 435, 10, 40, 40);

let carpet = new Furniture("/img/carpet.png", 305, 200, 120, 200);

let safeBox = new Furniture("/img/safeBox-1.png", 260, 550, 50, 50);
let papers = new Furniture("/img/papers.png", 1050, 20, 20, 20);
let papers2 = new Furniture("/img/papers.png", 1050, 30, 20, 20);
let papers3 = new Furniture("/img/papers.png", 1050, 30, 20, 20);

//-------------------------------INSTANCES OF BOOKS-------------------------------------------------------------
let book = new Book("/img/books.png", 1140, 20, 100, 30, "It has been so long.. 4 months inside this room, there is no a safe place, It is just a matter of time before they find us.\
 We are running out of water and food, I'll go out to find help. There are two keys, I'll bring one with me, the other one is inside a safebox in the dining room.\
 <br>The password is: 9856460\
 <br><br><br><br><br><br><br><br>-Milos.");

 let book2 = new Book("/img/books.png", 30, 140, 100, 30, "I don't know how I got here, those things are everywhere, It's so cold, I'm scared, I can't even sleep, when I try I feel\
 my nightmares so real, Mom... where are you?\n\n\n\n\n\
 <br><br><br><br><br><br><br><br><br><br>-Nathan.");

 let book3 = new Book("/img/book1.png", 230, 40, 20, 20, " "); //START ROOM BOOK
//--------------------------------INSTANCES OF ITEMS-----------------------------------------------------------------
let flashlight = new Item("/img/Flashlight-2.png", 520, 15, 35, 40, "/img/Flashlight-1.png"); 
let finalKey = new Item("/img/Key-1.png", 250, 570, 25, 20, "/img/Key-1.png");

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


//-----------------CHARACTER IMAGE---------------------------------------------------------------------------------
let newPlayer = new Character("/img/character/face-down.png", 20, 40, 40, 40);

//-----------------CREATE GHOST INSTANCE-------------------------------------
let ghost = new Ghost("/img/GhostDown.png",arrayOfGhostShow[showRandomPosition].x, arrayOfGhostShow[showRandomPosition].y, 50, 50);

//-------------------------PUSH TO ARRAY OF WALLS----------------------------------------------

arrayOfWall.push(mainWall);
arrayOfWall.push(mainWall2);
arrayOfWall.push(mainWall3);
arrayOfWall.push(mainWall4);


arrayOfWall.push(startWall);
arrayOfWall.push(startWall2);

arrayOfWall.push(roomTwoWall);
arrayOfWall.push(roomTwoWall2);
arrayOfWall.push(roomTwoWall3);
arrayOfWall.push(roomTwoWall4);


arrayOfWall.push(roomThreeWall);
arrayOfWall.push(roomThreeWall2);
arrayOfWall.push(roomThreeWall3);
arrayOfWall.push(roomThreeWall4);


arrayOfWall.push(roomFourWall);
arrayOfWall.push(roomFourWall2);
arrayOfWall.push(roomFourWall3);
arrayOfWall.push(roomFourWall4);

arrayOfWall.push(roomFiveWall);
arrayOfWall.push(roomFiveWall2);
arrayOfWall.push(roomFiveWall3);

arrayOfWall.push(roomSixWall);
arrayOfWall.push(roomSixWall2);
arrayOfWall.push(roomSixWall3);
arrayOfWall.push(roomSixWall4);
arrayOfWall.push(roomSixWall5);

arrayOfWall.push(middleWall);
arrayOfWall.push(middleWall2);
arrayOfWall.push(middleWall3);
arrayOfWall.push(middleWall4);
arrayOfWall.push(middleWall5);


arrayOfWall.push(finalRoomWall);
arrayOfWall.push(finalRoomWall2);

//---------------------------------PUSH TO ARRAY OF OBJECTS------------------------------------------------------------------------
arrayOfObjects.push(bed);
arrayOfWall.push(wardrobe);

arrayOfWall.push(largeTable);
arrayOfWall.push(largeTable2);
arrayOfWall.push(largeTable3);
arrayOfWall.push(largeTable4);
arrayOfWall.push(largeTable5);
arrayOfWall.push(largeTable6);

arrayOfWall.push(workbench);
arrayOfWall.push(workbench2);
arrayOfWall.push(workbench3);

arrayOfWall.push(refri);
arrayOfWall.push(cook);
arrayOfWall.push(kitchen);
arrayOfWall.push(kitchen2);
arrayOfWall.push(roundTable);

arrayOfWall.push(desktopTable);
arrayOfWall.push(desktopTable2);

arrayOfWall.push(dinnerTable);
arrayOfObjects.push(dinnerChair);
arrayOfObjects.push(dinnerChair2);
arrayOfObjects.push(dinnerChair3);
arrayOfObjects.push(dinnerChair4);
arrayOfObjects.push(desktopChair);

arrayOfObjects.push(smallBlueSofa);
arrayOfObjects.push(blueSofa);
arrayOfObjects.push(singleChair1);
arrayOfObjects.push(singleChair2);
arrayOfWall.push(plant);
arrayOfWall.push(plant2);

arrayOfObjects.push(carpet);
arrayOfObjects.push(blood);
arrayOfObjects.push(blood2);
arrayOfObjects.push(papers);
arrayOfObjects.push(papers2);
arrayOfObjects.push(papers3);
arrayOfBooks.push(book);
arrayOfBooks.push(book2);
arrayOfBooks.push(book3);
arrayOfWall.push(safeBox);



//-----------------------------PUSH TO ARRAY OF ITEMS------------------------------------------------------------------------
flashlight.available = true;
arrayOfItems.push(flashlight);



//-----------------------------THE LOGIC TO MOVE THE CHARACTER---------------------------------------------------------------------
function movePlayer(player){
window.addEventListener("keydown", function(event){
switch(event.keyCode){

    case 87: //KEYBOARD LETTER W (UP)
    player.orientation = "NORTH";
    for(let i = 0; i < arrayOfWall.length; i++){
        if(player.collision(arrayOfWall[i]) === true){
            player.y += 6;
        }
    }
    player.y -= 6;
 
    player.characterImg = "/img/character/face-top.png"
    player.update();
    break;

    case 68: //KEYBOARD LETTER D (RIGHT)
    player.orientation = "EAST";
    for(let i = 0; i < arrayOfWall.length; i++){
        if(player.collision(arrayOfWall[i]) === true){
            player.x -= 6;
    }  
}
player.x += 6;
player.characterImg = "/img/character/face-right.png"
player.update();
    break;

    case 83: //KEYBOARD LETTER S (DOWN)
    player.orientation = "SOUTH";
    for(let i = 0; i < arrayOfWall.length; i++){
        if(player.collision(arrayOfWall[i]) === true){
            player.y -= 6;
    }
}
player.y += 6;
player.characterImg = "/img/character/face-down.png"
    player.update();
    break;

    case 65: //KEYBOARD LETTER A (LEFT)
    player.orientation = "WEST";
    for(let i = 0; i < arrayOfWall.length; i++){
        if(player.collision(arrayOfWall[i]) === true){
            player.x += 6;
        }    
}
player.x -= 6;
player.characterImg = "/img/character/face-left.png"
    player.update();
    break;

    case 70: //KEYBOARD F (FLASHLIGHT) 
    if(flashlight.available === true && isLightOff === true && flashlight.usable === true){
        if(player.flashlight === true){
            player.flashlight = false;
        }else{
            player.flashlight = true;
        }
        flashLightSound.play();
        player.flash();
    }
    break;

    case 69:
    grabItem();
    break;

    default:
    break;

}
})
}
//----------------------------GRAB ITEMS-------------------------------------------------
function grabItem(){
        for(let i = 0; i < arrayOfItems.length; i++){
            if(newPlayer.grab(arrayOfItems[i]) === true){
                grabItemSound.play();
        arrayOfItems[i].showIcon();
        arrayOfItems[i].available = true;
        arrayOfItems[i].usable = true;
        arrayOfItems.splice(arrayOfItems.indexOf(arrayOfItems[i]) ,1); 
        }
    }
    }

//-----------------------LOGIC TO MOVE GHOST----------------------------------------
function moveGhost(ghost, direct){
    let randomDirection = ["EAST", "WEST", "NORTH", "SOUTH"]; //randomDirection[Math.floor(Math.random() * 4)

    switch(direct){
    case "EAST":
            ghost.theImg = "/img/GhostRight.png";
        for(let i = 0; i < arrayOfWall.length; i++){
            if(ghost.collision(arrayOfWall[i]) === true){
                ghost.x -= 2;
                ghost.direction = randomDirection[Math.floor(Math.random() * 4)];;
            }
}
ghost.x += 3; 
    break;
   case "WEST":
        ghost.theImg = "/img/GhostLeft.png";
         for(let i = 0; i < arrayOfWall.length; i++){
            if(ghost.collision(arrayOfWall[i]) === true){
        ghost.x += 2;
        ghost.direction = randomDirection[Math.floor(Math.random() * 4)];
   }
}
    ghost.x -= 2;
    break;

    case "NORTH":
            ghost.theImg = "/img/GhostUp.png";
        for(let i = 0; i < arrayOfWall.length; i++){
            if(ghost.collision(arrayOfWall[i]) === true){
           ghost.y += 2;
            ghost.direction = randomDirection[Math.floor(Math.random() * 4)];;
            }
        }
ghost.y -= 2;
    break;
    case "SOUTH":
            ghost.theImg = "/img/GhostDown.png";
            for(let i = 0; i < arrayOfWall.length; i++){
                if(ghost.collision(arrayOfWall[i]) === true){
 
           ghost.y -= 2;
           ghost.direction = randomDirection[Math.floor(Math.random() * 4)];;
}
                }
ghost.y += 2;
    break;

}

}

//--------------------------------METHODS--------------------------------------------

//------------------------------GHOST GRAB FUNCTION-------------------------------
function characterCaught(player){
    if(ghost.collision(player) === true){
        gameOff = true;
        manScream.volume = 1;
        manScream.play();
}
}

//--------------------------MAKE SOUNDS-----------------------------------------------------
function playSound(){
    if(showGhost === true){
        ghostSound.play();
    }
}

//-----------------------------------READ BOOKS----------------------------------------------------------------
function readBook(player, bookToRead){
window.addEventListener("keydown", function(event){
    switch(event.keyCode){
        case 69:
            if(bookToRead.use(player) === true){
                paperFlip.play();
                alertBox.render(bookToRead.text);
            }
    }
})
}


//----------------------------SAFEBOX-------------------------------------------------
function unlockSafeBox(player){
    let pssword = "9856460";
window.addEventListener("keydown", function(event){
    let answer;
    switch(event.keyCode){
        case 69:
        if(player.collision(safeBox) === true && safeBoxUsed === false && safeBoxOn === true){ 
          answer = prompt("Insert the Password (6 digits)", "000000");
        // safePrompt.render("SAFE LOCK", checkPassword);
         if(answer === pssword){
            unlockSafebox.play();
            safeBoxOn = false;
            safeBoxUsed = true;
            setTimeout(function(){
                arrayOfItems.push(finalKey);
                finalKey.available = true;
                quest3 = true;
            }, 500)
        }else{
            alert("WRONG PASSWORD")
        }
        break;
}


}

})
}

//--------------------------TURN LIGHTS OFF-----------------------------------------------
function turnLightsOff(){
    isLightOff = true;
    enviromentText.innerHTML = "";
    setTimeout(function(){
        let light = document.styleSheets[0].cssRules[5];
        powercut.play();
        light.style.background = "radial-gradient(circle 4vmax at var(--objectX) var(--objectY), rgba(0,0,0, 0) 0%, rgba(0,0,0,0.1) 80%, rgba(0,0,0,0.90) 100%)";
    }, 3000);
setTimeout(function(){
    enviromentText.innerHTML = "ha..ha..ha.. A little dark..?";
}, 5000)

setTimeout(function(){
    enviromentText.innerHTML = " ";
}, 1000)
}

//--------------------------MAKE SOUNDS-----------------------------------------------------
//----------------------------------GENERATE RANDOM MESSAGES ON ENVIROMENT-----------------------------------------
function generateEnviroText(){
 enviromentText.innerHTML = arrayOfRandomText[Math.floor(Math.random() * arrayOfRandomText.length)];

 setTimeout(function(){
    enviromentText.innerHTML = "";
 }
 , 4000)
}
//=-------------------------------------QUESTS----------------------------------------------------------------
//----------------------------FIRST QUEST-----------------------------------------
function questOne(){
    if(quest1 == true){
    objectiveText.innerHTML = "Find the exit";
}if(newPlayer.x + newPlayer.width > 1200 && newPlayer.y + newPlayer.height > 500 && finalKey.available === false){
    quest1 = false;
    quest2 = true;
    enviromentText.innerHTML = "Door closed";
}

}


//-------------------------SECOND QUEST----------------------------------
function questTwo(){
    if(quest2 === true){
    if(finalKey.available === false){
        safeBoxOn = true;
        enviromentText.innerHTML = "";
        objectiveText.innerHTML = "Find the key";
        enviromentText.innerHTML = "Did you really think, It was going to be easy?";

        setTimeout(function(){
            turnLightsOff();
        }, 3000)
     
        
        setTimeout(function(){
           finalKey.available = true;
        }, 7000);

        setTimeout(function(){
            showGhost = true;
        }, 30000);
    }
    quest2 = false;
}
}

//----------------------------LAST QUEST--------------------------------
function lastQuest(){
    if(quest3 === true){
    objectiveText.innerHTML = "Go to the exit (orange carpet)";
    if(newPlayer.x + newPlayer.width > 1200 && newPlayer.y + newPlayer.height > 500 && finalKey.available === true){
        gameOn = false;
        gameWon = true;
        gameOff = true;
        bckgrSoundOn = false;
    }
}
}


let frame = 0;



function animate(){
    if(gameOn === true && gameOff === false){
frame++;
    if(bckgrSoundOn === true){
   bckgrSound.play();
}else{
    bckgrSound.volume = 0;
}
    window.requestAnimationFrame(animate);
    context.clearRect(0, 0, window.innerWidth, innerHeight);
    context.fillStyle = "orange";
    context.fillRect(1200, 500, 80, 100);
 

    for(let i = 0; i < arrayOfObjects.length; i++){
        arrayOfObjects[i].draw();
    }
 
    newPlayer.draw();

    if(showGhost === true){
        ghost.draw();
        moveGhost(ghost, ghost.direction);
        characterCaught(newPlayer);
        if(showGhost === true && ghostSoundOn === true){
            ghostSound.play();
            ghostSoundOn = false;
        }
}
    
    for(let i = 0; i < arrayOfWall.length; i++){
        arrayOfWall[i].draw();
    }
        for(let i = 0; i < arrayOfItems.length; i++){
            if(arrayOfItems[i].available === true){
            arrayOfItems[i].draw();
    }
}

for(let i = 0; i < arrayOfBooks.length; i++){
    arrayOfBooks[i].draw();
}

if(quest1 === true){
    questOne();
}

if(quest2 === true){
    questTwo();
}
 
if(quest3 === true){
    lastQuest();
}

if(frame % 2000 === 0){
    generateEnviroText();
}
}else if(gameOn === false && gameWon === true){
levelPassed();
status.display = "none";
//context.drawImage(youDied, (myCanvas.width / 3.3), (myCanvas.height / 2), 600, 200);
}


else if(gameOff === true && gameWon === false){
gameOver();
status.display = "none";
context.drawImage(youDied, (myCanvas.width / 3.3), (myCanvas.height / 2), 600, 200);
}
}

playSound();
unlockSafeBox(newPlayer);
movePlayer(newPlayer);
readBook(newPlayer, book);
readBook(newPlayer, book2);
readBook(newPlayer, book3);





//-------------------GAME OVER FUNCTION------------------------------------------------------
function gameOver(){
    bckgrSound.pause();
    overSound.play();
    let light = document.styleSheets[0].cssRules[5];
    light.style.background = "";
    status.style.display = "none"

    myCanvas.width = window.innerWidth;
    myCanvas.height = window.innerHeight;
    context.clearRect(0, 0, myCanvas.width, myCanvas.height)
    myCanvas.style.background = `url("/img/gameOverPicture2.gif")`;
    myCanvas.style.backgroundSize = "cover";
    myCanvas.style.backgroundPositionY = "-80px"
    myCanvas.style.backgroundRepeat = "no-repeat";
}


//------------------------LEVEL PASSED FUNCTION-----------------------------------------------------
function levelPassed(){
bckgrSound.pause();
winSong.play();
let light = document.styleSheets[0].cssRules[5];
    light.style.background = "";

    myCanvas.width = window.innerWidth;
    myCanvas.height = window.innerHeight;
    context.clearRect(0, 0, myCanvas.width, myCanvas.height)
    myCanvas.style.background = `url("/img/winBackground.png")`;
    myCanvas.style.backgroundSize = "cover";
    myCanvas.style.backgroundPositionY = "-100px"
    myCanvas.style.backgroundRepeat = "no-repeat";


    context.fillStyle = "white";
    context.font = "80px Arial";
    context.fillText("You survived!", myCanvas.width/3.5, 200);

    context.fillStyle = "white";
    context.font = "30px Arial";
    context.fillText("for now....", myCanvas.width/3.5, 300);

     context.fillStyle = "white";
     context.font = "60px Arial";
    context.fillText("Will Continue.....", myCanvas.width/2, myCanvas.height - 100);


}



//------------------------SHOW CONTROLS------------------------------------------------------------
function showControl(){
    this.render = function(){
    let winW = window.innerWidth;
    let winH = 0;
    let controlOverlay = document.getElementById('controloverlay');
    let controlBox = document.getElementById('controlbox');
    controlOverlay.style.display = "block";
    controlOverlay.style.height = winH + "px";
    controlOverlay.style.width = (winW/2) + "px";
   // dialogBox.style.top = "100px";
   controlBox.style.display = "block";
document.getElementById('controlboxhead').innerHTML = "CONTROLS";
document.getElementById('controlboxfoot').innerHTML = '<button onclick="controlBox.ok()">OK</button>';

startButton.style.display = "none";
controlButton.style.display = "none";
    }
    this.ok = function(){
        let controlOverlay = document.getElementById('controloverlay');
    let controlBox = document.getElementById('controlbox');
    controlOverlay.style.display = "none";
        controlBox.style.display = "none";

        startButton.style.display = "flex";
controlButton.style.display = "flex";
    }
    }



//------------------------MAKE A CUSTOM ALERT BOX (CLASS)------------------------------------------------------------
function customAlert(){
    this.render = function(book){
    let winW = window.innerWidth;
    let winH = window.innerHeight;
    let dialogOverLay = document.getElementById('dialogoverlay');
    let dialogBox = document.getElementById('dialogbox');
    dialogOverLay.style.display = "block";
    dialogOverLay.style.height = winH + "px";
   // dialogOverLay.style.left = (winW/2.5) + "px";
   // dialogBox.style.top = "100px";
    dialogBox.style.display = "block";
document.getElementById('dialogboxhead').innerHTML = "NOTE";
document.getElementById('dialogboxbody').innerHTML = `${book}`;
document.getElementById('dialogboxfoot').innerHTML = '<button onclick="alertBox.ok()">OK</button>';
    }
    this.ok = function(){
        let dialogOverLay = document.getElementById('dialogoverlay');
    let dialogBox = document.getElementById('dialogbox');
        dialogOverLay.style.display = "none";
        dialogBox.style.display = "none";
    }
    }

//---------------------MAKE A CUSTOM PROMPT BOX--------------------------------------------------------------------
function customPrompt(){
    this.render = function(textTitle, funct){
        let winW = window.innerWidth;
    let winH = window.innerHeight;
    let dialogOverLay = document.getElementById('dialogoverlay');
    let dialogBox = document.getElementById('dialogbox');
    dialogOverLay.style.display = "block";
    dialogOverLay.style.height = winH + "px";
   // dialogOverLay.style.left = (winW/2.5) + "px";
   // dialogBox.style.top = "100px";
    dialogBox.style.display = "block";
document.getElementById('dialogboxhead').innerHTML = textTitle;
document.getElementById('dialogboxbody').innerHTML = "";
document.getElementById('dialogboxbody').innerHTML = '<br><input id="prompt_value1">';
document.getElementById('dialogboxfoot').innerHTML = `<button onclick="safePrompt.ok("${funct}()")">OK</button>`;


    }
    this.ok = function(funct){
    let prompt_value1 = document.getElementById('prompt_value1').value;
    safeAnswer = (prompt_value1);
    [funct](safeAnswer);
    document.getElementById('dialogoverlay').style.display = "none";
     document.getElementById('dialogbox').style.display = "none";
    }
}








// intro();
// if(activateGame() === true){

//}
 



//----------------------------------ADDITIONAL OLD CODE---------------------------------------------------

//-----------------------------------------CREATE BUTTON INSTANCE-----------------------------------------------
// let startGameButton = new Button("Start Game",  (myCanvas.width / 2.5),  (myCanvas.height / 1.2), 60, "darkGray", "Helvetica");


//----------------------------CHECK NUMBER OF PASSWORD-------------------------------------------------------------TESTING
// function checkPassword(value){
//     let pssword = "9856460";
//     if(value === pssword){
//        return true
//     }else{
//         return false;
//     }

// }







//-----------------------COLLISION DETECTION WITH PIXELS----------------------------------------------------
// this.collision = function(data){
//     //let getBottom = this.y;
//     let getPixRightTop = context.getImageData(data.x, data.y, data.width, data.height);
//     console.log("Pixel Right TOP got: " + getPixRightTop.data);

//     let getPixRight = context.getImageData(this.x, this.y, this.width + 10, this.height + 10);
//    // console.log("Pixel Right got: " + getPixRight.data[264]);

//     let getPixLeft = context.getImageData(this.x - 10, this.y, this.width + 10, this.height + 10);
//    // console.log("Pixel Left got: " + getPixLeft.data[28]);
// for(let i = 1; i < 1200; i++){
//     if(getPixRightTop.data[i] !== 0 && this.orientation === "WEST"){
//         // console.log("Pixel Right Top found! " + getPixRightTop.data[i]);
//         return true;
//     }
//     return false;
// }

// }

//---------------------------------STATUS BAR-------------------------------------------------------------------------
// function statusBar(){
//     //HORIZONTAL SUPERIOR
//     context.strokeStyle = "white";
//     context.lineWidth = 5;
//     context.beginPath();
//     context.moveTo(0, innerHeight - 100);
//     context.lineTo(innerWidth, innerHeight - 100);
//     context.stroke();
//     context.closePath();

//     //HORIZONTAL INFERIOR
//     context.strokeStyle = "white";
//     context.lineWidth = 5;
//     context.beginPath();
//     context.moveTo(0, innerHeight - 12);
//     context.lineTo(innerWidth, innerHeight - 12);
//     context.stroke();
//     context.closePath();

//     //VERTICAL LINE 1
//     context.strokeStyle = "white";
//     context.lineWidth = 5;
//     context.beginPath();
//     context.moveTo(500, innerHeight - 13);
//     context.lineTo(500, innerHeight - 100);
//     context.stroke();
//     context.closePath();

//     //VERTICAL LINE 2
//     context.strokeStyle = "white";
//     context.lineWidth = 5;
//     context.beginPath();
//     context.moveTo(900, innerHeight - 13);
//     context.lineTo(900, innerHeight - 100);
//     context.stroke();
//     context.closePath();

//     //PLAYER NAME
//     context.fillStyle = "white";
//     context.font = "13px Helvetica";
//     context.fillText("ITEMS:", 10, innerHeight - 35);

//     //ITEMS
//     //PLAYER NAME
//     context.fillStyle = "white";
//     context.font = "13px Helvetica";
//     context.fillText("NAME:", 10, innerHeight - 75);

//     //OBJECTIVE
//     context.fillStyle = "white";
//     context.font = "13px Helvetica";
//     context.fillText("OBJECTIVE:", 520, innerHeight - 75);

//     //ENVIROMENT
//     context.fillStyle = "white";
//     context.font = "13px Helvetica";
//     context.fillText("ENVIROMENT:", 920, innerHeight - 75);
// }

// //GENERATES OBJECTIVE TEXT
// function generateObjectiveText(){
//     context.fillStyle = "white";
//     context.font = "13px Helvetica";
//     let txt = "Hello"
//     context.fillText(txt, 520, innerHeight - 50);
// }

// //GENERATES ENVIROMENT TEXT
// function generateEnviroText(){
//     context.fillStyle = "white";
//     context.font = "13px Helvetica";
//     let txt = "This is enviroment"
//     context.fillText(txt, 920, innerHeight - 50);
// }




// //console.log(document.styleSheets[0]);
// console.log(document.styleSheets[0].cssRules[2].style.background);

// console.log(newEffect);



//rgba(22, 1, 1, 0.904); COLOR FOR WALLS

//---------------------TYPE EFFECT--------------------------------------------
// let letterCount = 0;

// function typeWriter(id, text) {
//   if (letterCount < text.length) {
//     document.getElementById(id).innerHTML += text.charAt(letterCount);
//     letterCount++;
//     setTimeout(typeWriter, 1000);
//   }
//   setTimeout(function(){
//     eraseText(id);
//   }, 1500);

// }

//-------------------------ERASE TEXT---------------------------------------------
// function eraseText(id){
//     setTimeout(function(){
//         document.getElementById(id).innerHTML = "";
//       }, 3000);
// }


//--------------------------------INTRO SCREEN----------------------------------------------------------------


//     //----------------------INSTANCE BUTTONS-------------------------------------------
 

// window.addEventListener("click", function(event){
//     let mouseX = event.clientX;
//     let mouseY = event.clientY;

//       if(mouseX > startGameButton.x && mouseX < (startGameButton.x + 310) && mouseY > (startGameButton.y - 50) && mouseY < startGameButton.y){
//         myCanvas.style.background = `linear-gradient(
//             rgba(10, 4, 4, 0.6), 
//             rgba(10, 4, 4, 0.8)
//           ), url("/img/Map2.png")`;
//           introOn = false;
//           startGame();
//                    }


// })
// window.addEventListener("mousemove", function(event){
//     let mouseX = event.clientX;
//     let mouseY = event.clientY;
//       if(mouseX > startGameButton.x && mouseX < (startGameButton.x + 310) && mouseY > (startGameButton.y - 50) && mouseY < startGameButton.y){
//           startGameButton.color = "White";
//             }else{
//                 startGameButton.color = "darkGray"; 
//             }


// })



// function animateIntro(){
//     window.requestAnimationFrame(animateIntro);
//     startGameButton.draw();
// }
// animateIntro();
// }else{
// console.log("HELLO");
// }
// }
    
