export default class model {
    constructor() {
        this.isPainting = false;
        this.prevMouseX = 0;
        this.prevMouseY = 0;
        this.color = "#000";
        this.lineWidth=5
      }

    startPath(e, ctx) {
        if (!this.isPainting) {
            this.isPainting = true;
            this.prevMouseX = e.offsetX;
            this.prevMouseY = e.offsetY;
            ctx.beginPath();
        }
    }

    stopPath(ctx) {
        if (this.isPainting) {
            this.isPainting = false;
            ctx.closePath();
        }
    }

    setColor(color) {
        this.color = color;
    }

    useEraser(e, ctx) {
        if (this.isPainting) {
            const nextMouseX = e.offsetX;
            const nextMouseY = e.offsetY;
            ctx.strokeStyle = "#fff";
            ctx.lineWidth = this.lineWidth;
            ctx.moveTo(this.prevMouseX, this.prevMouseY);
            ctx.lineTo(nextMouseX, nextMouseY);
            ctx.stroke();
            ctx.closePath();
            ctx.beginPath();
            this.prevMouseX = nextMouseX;
            this.prevMouseY = nextMouseY;
        }
    }

    drawLine(e, ctx) {
        if (this.isPainting) {
            const nextMouseX = e.offsetX;
            const nextMouseY = e.offsetY;
            ctx.lineWidth = this.lineWidth;
            ctx.moveTo(this.prevMouseX, this.prevMouseY);
            ctx.lineTo(nextMouseX, nextMouseY);
            ctx.stroke();
            ctx.closePath();
            ctx.beginPath();
            this.prevMouseX = nextMouseX;
            this.prevMouseY = nextMouseY;
        }
    }

    changeBrushSize(data){
      this.lineWidth=data
      return this.lineWidth
    }
}