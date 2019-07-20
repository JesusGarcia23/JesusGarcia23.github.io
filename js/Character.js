

//-----------------------------------------------CHARACTER CLASS-----------------------------------------------------------------
class Character {
    constructor(characterImg ,x, y, height, width){
    this.characterImg = characterImg;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.orientation = "SOUTH";
    this.step = 0;
    this.fashlight = true;
    
    this.draw = function(){
        let chrtImg = new Image();
        chrtImg.src = this.characterImg;
         context.drawImage(chrtImg, this.x, this.y, this.width, this.height);
    
    }
    
    this.update = function() {
        document.documentElement.style.setProperty('--objectX', (this.x + 100) + 'px');
        document.documentElement.style.setProperty('--objectY', (this.y + 20) + 'px');
    }
    
    this.flash = function(){
        let flashLightOn = document.styleSheets[0].cssRules[5];
        if(this.fashlight === true){
        flashLightOn.style.background = "radial-gradient(circle 8vmax at var(--objectX) var(--objectY), rgba(0,0,0, 0) 0%, rgba(0,0,0,0.1) 80%, rgba(0,0,0,0.90) 100%)";
    }else{
        flashLightOn.style.background = "radial-gradient(circle 4vmax at var(--objectX) var(--objectY), rgba(0,0,0, 0) 0%, rgba(0,0,0,0.1) 80%, rgba(0,0,0,0.90) 100%)";
    
    }
    }
    
    //---------------------------------GRAB FUNCTION---------------------------------------------------------------------
    this.grab = function(item){
            if(item.x - (this.x + this.width) < 10 && this.x - (item.x + item.width) < 10 &&
            this.y - (item.y + item.height) < 10 && item.y - (this.y + this.height) < 10){
            return true;
        }
        return false;
    }
    
    
    //--------------------collision detection #2-----------------------------------------------------------
    this.collision = function(obj){
    //RIGHT
    if(this.x + this.width + 10 > obj.x && this.x < obj.x && this.y + this.height > obj.y &&  this.y  < obj.y + obj.height && this.orientation === "EAST"){
        return true;
    //LEFT
    }else if(this.x < obj.x + obj.width + 10 && this.x > obj.x && this.y + this.height > obj.y && this.y < obj.y + obj.height && this.orientation === "WEST"){
        return true;
    //UP
    }else if(this.y < obj.y + obj.height + 10 && this.y > obj.y && this.x + this.width > obj.x && this.x < obj.x + obj.width && this.orientation === "NORTH"){
        return true;
    //BOTTOM
    }else if(this.y + this.height + 10 > obj.y && this.y < obj.y && this.x + this.width > obj.x && this.x < obj.x + obj.width && this.orientation === "SOUTH"){
        return true;
    }
    return false;
    }
    
    }
    }