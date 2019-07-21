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
