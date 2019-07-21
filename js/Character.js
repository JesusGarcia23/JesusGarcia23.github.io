

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
    this.flashlight = true;
    //this.theBag = [];
    
    this.draw = function(){
        let chrtImg = new Image();
        chrtImg.src = this.characterImg;
         context.drawImage(chrtImg, this.x, this.y, this.width, this.height);
    
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