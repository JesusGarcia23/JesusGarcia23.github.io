
const myCanvas = document.getElementById("myBoard");
const context = myCanvas.getContext("2d");


myCanvas.width = 1280;
myCanvas.height = 600;
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
let theRadius = 70;
let littlemssg = true;
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


//--------------------------------INSTANCES OF ITEMS-----------------------------------------------------------------
let flashlight = new Item("/img/Flashlight-2.png", 520, 15, 35, 40, "/img/Flashlight-1.png"); 
let finalKey = new Item("/img/Key-1.png", 250, 570, 25, 20, "/img/Key-1.png");



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

//arrayOfWall.push(largeTable);
//arrayOfWall.push(largeTable2);
arrayOfWall.push(largeTable3);
arrayOfWall.push(largeTable4);
//arrayOfWall.push(largeTable5);
arrayOfWall.push(largeTable6);
arrayOfWall.push(ovalTable);

arrayOfWall.push(bath);

arrayOfWall.push(workbench);
arrayOfWall.push(workbench2);
arrayOfWall.push(box);
arrayOfWall.push(box2);
arrayOfWall.push(box3);
arrayOfWall.push(box4);
arrayOfWall.push(box5);
arrayOfWall.push(box6);
arrayOfWall.push(box7);
arrayOfWall.push(box8);
arrayOfWall.push(box9);
arrayOfWall.push(box10);
arrayOfWall.push(box11);
arrayOfWall.push(box12);

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
arrayOfObjects.push(livingChair);
arrayOfObjects.push(livingChair2);

arrayOfObjects.push(toilet);

arrayOfObjects.push(smallBlueSofa);
arrayOfObjects.push(blueSofa);
arrayOfObjects.push(redsofaR);
arrayOfObjects.push(redsofaL);
arrayOfObjects.push(singleChair1);
arrayOfObjects.push(singleChair2);
arrayOfObjects.push(secretWay);
arrayOfWall.push(plant);
arrayOfWall.push(plant2);
// arrayOfWall.push(plant3);
// arrayOfWall.push(plant4);
// arrayOfWall.push(plant5);
// arrayOfWall.push(plant6);
// arrayOfWall.push(plant7);
// arrayOfWall.push(plant8);
// arrayOfWall.push(plant9);
// arrayOfWall.push(plant10);
// arrayOfWall.push(plant11);
// arrayOfWall.push(plant12);
//arrayOfWall.push(plant13);
//arrayOfWall.push(plant14);
arrayOfWall.push(tv);
arrayOfWall.push(garbageCan);
arrayOfWall.push(ovalTable2);

arrayOfObjects.push(goldBroken);
arrayOfObjects.push(brokenPaint);
arrayOfObjects.push(brokenDoor);
arrayOfObjects.push(glassBroken7);
arrayOfObjects.push(glassBroken8);
arrayOfObjects.push(pianoChair);
arrayOfObjects.push(carpet);
arrayOfObjects.push(blood);
arrayOfObjects.push(blood2);
arrayOfObjects.push(papers);
arrayOfObjects.push(papers2);
arrayOfObjects.push(papers3);
arrayOfObjects.push(papers4);
arrayOfObjects.push(papers5);
arrayOfObjects.push(papers6);
arrayOfObjects.push(papers7);
arrayOfObjects.push(papers8);
arrayOfObjects.push(papers9);
arrayOfObjects.push(papers10);
arrayOfObjects.push(papers11);
arrayOfObjects.push(papers12);
arrayOfObjects.push(papers13);
arrayOfObjects.push(papers14);
arrayOfObjects.push(papers15);
arrayOfObjects.push(papers16);
arrayOfObjects.push(papers17);
arrayOfObjects.push(papers18);
arrayOfObjects.push(papers19);
arrayOfObjects.push(papers20);
arrayOfObjects.push(papers21);
arrayOfObjects.push(papers22);
arrayOfObjects.push(papers23);
arrayOfObjects.push(papers24);
arrayOfObjects.push(papers25);
arrayOfObjects.push(glassBroken);
arrayOfObjects.push(glassBroken2);
arrayOfObjects.push(glassBroken3);
arrayOfObjects.push(glassBroken4);
arrayOfObjects.push(glassBroken5);
arrayOfObjects.push(glassBroken6);
arrayOfObjects.push(finalCarpet);
arrayOfBooks.push(book);
arrayOfBooks.push(book2);
arrayOfBooks.push(book3);
arrayOfBooks.push(book4);
arrayOfBooks.push(book5);
arrayOfBooks.push(book6);
arrayOfBooks.push(book7);
arrayOfWall.push(safeBox);
arrayOfWall.push(piano);
arrayOfWall.push(stand);
arrayOfWall.push(teaTable);
arrayOfObjects.push(singleChair3);
arrayOfObjects.push(screwdriver);
arrayOfObjects.push(hammer);
arrayOfObjects.push(saw);
arrayOfObjects.push(gloves);
arrayOfObjects.push(blood3);
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
            player.y += 10;
        }
    }
    player.y -= 10;
 
    player.characterImg = "/img/character/face-top.png"
    break;

    case 68: //KEYBOARD LETTER D (RIGHT)
    player.orientation = "EAST";
    for(let i = 0; i < arrayOfWall.length; i++){
        if(player.collision(arrayOfWall[i]) === true){
            player.x -= 10;
    }  
}
player.x += 10;
player.characterImg = "/img/character/face-right.png"
    break;

    case 83: //KEYBOARD LETTER S (DOWN)
    player.orientation = "SOUTH";
    for(let i = 0; i < arrayOfWall.length; i++){
        if(player.collision(arrayOfWall[i]) === true){
            player.y -= 10;
    }
}
player.y += 10;
player.characterImg = "/img/character/face-down.png"
    break;

    case 65: //KEYBOARD LETTER A (LEFT)
    player.orientation = "WEST";
    for(let i = 0; i < arrayOfWall.length; i++){
        if(player.collision(arrayOfWall[i]) === true){
            player.x += 10;
        }    
}
player.x -= 10;
player.characterImg = "/img/character/face-left.png"
    break;

    case 70: //KEYBOARD F (FLASHLIGHT) 
    if(flashlight.available === true && isLightOff === true && flashlight.usable === true){
        if(player.flashlight === true){
            theRadius = 150;
            player.flashlight = false;
        }else{
            theRadius = 70;
            player.flashlight = true;
        }
        flashLightSound.play();
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
//--------------------------TURN LIGHTS OFF MESSAGE-----------------------------------------------
function turnLightsOff(){
    powercut.play();
    enviromentText.innerHTML = "";
setTimeout(function(){
    enviromentText.innerHTML = "ha..ha..ha.. A little dark..?";
}, 3000)

setTimeout(function(){
    enviromentText.innerHTML = "";
}, 4000)
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
            isLightOff = true;
            turnLightsOff();
         }, 5000);
        
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


    for(let i = 0; i < arrayOfObjects.length; i++){
        arrayOfObjects[i].draw();
    }
 

        for(let i = 0; i < arrayOfItems.length; i++){
            if(arrayOfItems[i].available === true){
            arrayOfItems[i].draw();
    }
}

for(let i = 0; i < arrayOfBooks.length; i++){
    arrayOfBooks[i].draw();
}

newPlayer.draw();
if(quest1 === true){
    questOne();
}

if(quest2 === true){
    questTwo();
}
 
if(quest3 === true){
    lastQuest();
}


if(isLightOff === true){
    lightOff.draw(newPlayer.x, newPlayer.y, theRadius);

 
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
context.drawImage(youDied, (myCanvas.width / 3.4), (myCanvas.height / 2), 600, 200);
}

}

playSound();
unlockSafeBox(newPlayer);
movePlayer(newPlayer);
readBook(newPlayer, book);
readBook(newPlayer, book2);
readBook(newPlayer, book3);
readBook(newPlayer, book4);
readBook(newPlayer, book5);
readBook(newPlayer, book6);
readBook(newPlayer, book7);

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
    
