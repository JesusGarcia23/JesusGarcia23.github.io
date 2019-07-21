
//--------------------------TURN LIGHTS OFF-----------------------------------------------
class TurnLightsOff{
    constructor(){
    }
    draw(x, y, radius){
        let grd = context.createRadialGradient(x + 20, y + 20, 0, x, y, radius);
        grd.addColorStop(0, "rgba(0, 0, 0, 0)");
        grd.addColorStop(1, "rgba(0, 0, 0, 0.98)");
        
// Fill with gradient
context.fillStyle = grd;
context.fillRect(0, 0, myCanvas.width - 10,  myCanvas.height);
    }
   

}
let lightOff = new TurnLightsOff(0, 0, 0, 0, 0, 100);