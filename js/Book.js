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


//-------------------------------INSTANCES OF BOOKS-------------------------------------------------------------
let book = new Book("/img/books.png", 1140, 20, 100, 30, "It has been so long.. 4 months inside this room, there is no a safe place, It is just a matter of time before they find us.\
 We are running out of water and food, I'll go out to find help. There are two keys, I'll bring one with me, the other one is inside a safebox in the dining room.\
 <br>The password is: 9856460\
 <br><br><br><br><br><br><br><br>-Milos.");

 let book2 = new Book("/img/bookLeft.png", 30, 140, 30, 30, "I don't know how I got here, those things are everywhere, It's so cold, I'm scared, I can't even sleep, when I try I feel\
 my nightmares so real, Mom... where are you?\n\n\n\n\n\
 <br><br><br><br><br><br><br><br><br><br>-Nathan.");

 let book3 = new Book("/img/book1.png", 230, 50, 20, 20, "They are there, here.... everywhere, If you sleep, you lose. I lost everything, is this hell? Why am I here?\
  This must be just a nightmare, a very long nightmare.. but no matter what, I promise.. I'll find you Emily."); //START ROOM BOOK

 let book4 = new Book("/img/bookLeft.png", 700, 510, 30, 30, "I've survived 3 days with all this darkness, thanks to that purple flashlight.. I wish I could see my family again...");

 let book5 = new Book("/img/book1.png", 150, 470, 20, 20, "Weeks inside this place, I don't want to stay here but I'm scared what is outside, the last person I saw\
  passing the door with the red carpet, never came back. Is he alive? Could He make it? Hmmmm.. I hear some voices..."); //KITCHEN ROOM BOOK

  let book6 = new Book("/img/book1.png", 810, 210, 20, 20, "I’ve decided after all this time, even without knowing where I’m at, that there is no way to escape from this hell. \
  Death is unavoidable. Dreadfully, I’ll just stay here, playing this old piano until the end.\
  I’ve done too many atrocious things. I wish could go back and fix it, but it’s too late for that now..\
  <br><br><br><br><br><br><br><br><br><br>-Michael. "); //PIANO ROOM BOOK

  
  let book7 = new Book("/img/book1.png", 730, 20, 20, 20, "Maybe this is going to be my last text, I don't trust anyone, just myself\
  , people around me, they look at me like I'm a monster, but I don't care. If they mess with me, I'll show them a real monster.\
  <br><br><br><br><br><br><br><br><br><br>-Fred."); //TOOLS ROOM BOOK