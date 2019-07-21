class Book{
    constructor(img, x, y, width, height, text){
        this.img = img;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.text = text;
    }
    use(player){
        if(player.x - (this.x + this.width) < 15 && this.x - (player.x + player.width) < 15 &&
        this.y - (player.y + player.height) < 15 && player.y - (this.y + this.height) < 15){
        return true;
    }
    return false;
}
    draw(){
        let bookImg = new Image();
        bookImg.src = this.img;
        context.drawImage(bookImg, this.x, this.y, this.width, this.height);

    }
}