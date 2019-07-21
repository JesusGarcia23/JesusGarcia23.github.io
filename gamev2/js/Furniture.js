//-------------------------CLASS FURNITURES----------------------------------------------------------
class Furniture{
    constructor(img, x, y, width, height){
        this.img = img;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.use = function(){
            if(item.x - (this.x + this.width) < 10 && this.x - (item.x + item.width) < 10 &&
            this.y - (item.y + item.height) < 10 && item.y - (this.y + this.height) < 10){
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
