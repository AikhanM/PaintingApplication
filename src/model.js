export default class Model {
    constructor() {
        this.isPainting = false;
        this.prevMouseX = 0;
        this.prevMouseY = 0;
        this.color = "#000";
        this.prevColor="#000"
        this.lineWidth = 5;
   
    }

    startPath(e, ctx) {
        if (!this.isPainting) {
            this.isPainting = true;
            this.prevMouseX = e.offsetX;
            this.prevMouseY = e.offsetY;
            //ctx.beginPath();
        }
    }

    stopPath(ctx) {
        if (this.isPainting) {
            this.isPainting = false;
            //ctx.closePath();
        }
    }

    setColor(color) {
        this.color = color;
    }
    
   

    useEraser(color) {
        this.prevColor = this.color; 
        this.color = color;
    }

    drawLine(e, ctx) {
        if (this.isPainting) {
            const nextMouseX = e.offsetX;
            const nextMouseY = e.offsetY;
            ctx.beginPath();
            ctx.lineWidth = this.lineWidth;
            ctx.strokeStyle = this.color;
            ctx.moveTo(this.prevMouseX, this.prevMouseY);
            ctx.lineTo(nextMouseX, nextMouseY);
            ctx.lineCap = "round";
            ctx.stroke();
            ctx.closePath();
           
            this.prevMouseX = nextMouseX;
            this.prevMouseY = nextMouseY;
        }
    }

    changeBrushSize(data) {
        this.lineWidth = data;
        return this.lineWidth;
    }
    changeEraserSize(data){
        this.lineWidth=data
        return this.lineWidth
    }
  
}
