
//----------------------CLASS GHOST------------------------------------------------------------
class Ghost{
    constructor(theImg, x, y, width, height){
        this.theImg = theImg;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.direction = "NORTH";
    
        this.draw = function(){
            let ghostSprite = new Image();
            ghostSprite.src = this.theImg;
            context.drawImage(ghostSprite, this.x, this.y, this.width, this.height)
           // context.fillRect(this.x, this.y, this.width, this.height);
        }
    
        this.collision = function(obj){
      
        if(this.x + this.width + 10 > obj.x && this.x < obj.x && this.y + this.height > obj.y &&  this.y  < obj.y + obj.height && this.direction === "EAST"){
            return true;
        }else if(this.x < obj.x + obj.width + 10 && this.x > obj.x && this.y + this.height > obj.y && this.y < obj.y + obj.height && this.direction === "WEST"){
            return true;
        }else if(this.y < obj.y + obj.height + 10 && this.y > obj.y && this.x + this.width > obj.x && this.x < obj.x + obj.width && this.direction === "NORTH"){
            return true;
        }else if(this.y + this.height + 10 > obj.y && this.y < obj.y && this.x + this.width > obj.x && this.x < obj.x + obj.width && this.direction === "SOUTH"){
            return true;
        }
        return false;
        }
    
    }
    
    }