    //----------------------CLASS BUTTONS-------------------------------------------
    class Button{
        constructor(text, x, y, size, color, font){
            this.color = color;
            this.size = size;
            this.font = font;
            this.text = text,
            this.x = x;
            this.y = y;
        }
        draw(){
        context.fillStyle = this.color;
        context.font = `${this.size}px ${this.font}`;
        context.shadowColor = "rgba(10, 4, 4, 0.2)";
     
        context.shadowBlur = 8;
        context.fillText(this.text, this.x, this.y);
    }
    }
    