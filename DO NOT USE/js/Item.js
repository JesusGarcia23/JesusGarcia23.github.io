//------------------------------------CLASS ITEMS--------------------------------------------------------------
class Item{
    constructor(img, x, y, width, height, icon){
        this.img = img;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.icon = icon;
        this.available = false;
        this.usable = false;

    }
    draw(){
        let itemImg = new Image();
        itemImg.src = this.img;
        context.drawImage(itemImg, this.x, this.y, this.width, this.height);
    }
    eliminate(){
        context.clearRect(this.x, this.y, this.width, this.height);
    }
    //-----------------------DISAPPEAR ICONS FROM STATUS BAR-----------------------------------------
    showIcon(){
        let node = document.createElement("li");
        node.setAttribute("class", "items");
        let theImg = document.createElement("img");
        theImg.setAttribute("src", this.icon);
        node.appendChild(theImg);
      itemIcon[0].appendChild(node);
  
    }
}
