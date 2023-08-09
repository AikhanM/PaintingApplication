class View {
    constructor() {
        this.canvas = document.querySelector("canvas");
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.ctx = this.canvas.getContext("2d");
        this.square = document.querySelector(".square");
        this.circle = document.querySelector(".circle");
        this.brush = document.querySelector(".brush");
        this.eraser = document.querySelector(".eraser");
        this.black = document.querySelector(".black");
        this.yellow = document.querySelector(".yellow");
        this.red = document.querySelector(".red");
        this.green = document.querySelector(".green");
        this.blue = document.querySelector(".blue");

        this.prevMouseX = 0;
        this.prevMouseY = 0;
        this.ctx.lineWidth=5
        this.square.addEventListener("click", ()=>this.drawSquare());
        this.brush.addEventListener("click",  this.drawLine());
        this.eraser.addEventListener("click", () => this.useEraser());
        this.black.addEventListener("click", () => this.changeColor("#000"));
        this.yellow.addEventListener("click", () => this.changeColor("#ff0"));
        this.red.addEventListener("click", () => this.changeColor("#f00"));
        this.green.addEventListener("click", () => this.changeColor("#0f0"));
        this.blue.addEventListener("click", () => this.changeColor("#00f"));
    }

    changeColor(color) {
        this.selectedColor = color;
        this.ctx.strokeStyle = color;
    }


    useEraser(){
        this.ctx.strokeStyle="#fff"
        this.ctx.lineWidth=5
    }

    drawSquare() {
    }

    drawCircle(xpos, ypos, radius, color) {
        this.ctx.beginPath();
        this.ctx.arc(xpos, ypos, radius, 0, 2 * Math.PI);
        this.ctx.strokeStyle = color;
        this.ctx.stroke();
        this.ctx.closePath();
    }


    drawLine(prevMouseX, prevMouseY, nextMouseX, nextMouseY) {
    
        this.ctx.beginPath();
        this.ctx.moveTo(prevMouseX, prevMouseY);
        this.ctx.lineTo(nextMouseX, nextMouseY);
        this.ctx.strokeStyle=this.color
        this.ctx.stroke();
        this.ctx.closePath();
    }

    selectColor(color) {
        this.selectedColor = color;
    }
   
}
class Model {
    constructor(view) {
        this.view = view;
        this.isPainting = false;
        this.prevMouseX = 0;
        this.prevMouseY = 0;
       
    }

    startPath(e) {
        if (!this.isPainting) {
            this.isPainting = true;
            this.prevMouseX = e.offsetX;
            this.prevMouseY = e.offsetY;
        }
    }

    stopPath() {
        this.isPainting = false;
        this.view.ctx.beginPath();
    }

    useEraser(e){
        if (!this.isPainting) return;
        const nextMouseX = e.offsetX;
        const nextMouseY = e.offsetY;
        this.view.drawLine(
            this.prevMouseX,
            this.prevMouseY,
            nextMouseX,
            nextMouseY
        );
        this.prevMouseX = nextMouseX;
        this.prevMouseY = nextMouseY;
    }

    drawLine(e) {
        if (!this.isPainting) return;
        const nextMouseX = e.offsetX;
        const nextMouseY = e.offsetY;
        this.view.drawLine(
            this.prevMouseX,
            this.prevMouseY,
            nextMouseX,
            nextMouseY
        );
        this.prevMouseX = nextMouseX;
        this.prevMouseY = nextMouseY;
    }
    drawCircle(e) {
        if (!this.isPainting) return;

        const nextMouseX = e.offsetX;
        const nextMouseY = e.offsetY;
        const radius = Math.sqrt(Math.pow((this.prevMouseX - nextMouseX), 2) + Math.pow((this.prevMouseY -nextMouseY), 2));
        this.view.drawCircle(
            this.prevMouseX,
            this.prevMouseY,
            radius,
            this.view.selectedColor
        );

        this.prevMouseX = nextMouseX;
        this.prevMouseY = nextMouseY;
    }

    // Model içinde drawSquare'ı düzeltilmiş hali
    drawSquare(e) {
        if (!this.isPainting) return;
        const nextMouseX = e.offsetX;
        const nextMouseY = e.offsetY;
        this.view.ctx.clearRect(0, 0, this.view.canvas.width, this.view.canvas.height); // Önceki çizimi temizle
        this.view.ctx.fillStyle = this.view.selectedColor;
        this.view.ctx.fillRect(this.prevMouseX, this.prevMouseY, nextMouseX - this.prevMouseX, nextMouseY - this.prevMouseY);
    }
}

class Controller {
    constructor() {
        this.view = new View();
        this.model = new Model(this.view);

        this.view.canvas.addEventListener("mousedown", this.model.startPath.bind(this.model));
        this.view.canvas.addEventListener("mouseup", this.model.stopPath.bind(this.model));
        this.view.canvas.addEventListener("mousemove", this.model.drawLine.bind(this.model));
    }
}

const controller = new Controller();
