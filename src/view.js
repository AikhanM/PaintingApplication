export default class View {
    constructor() {
        this.canvas = document.querySelector("canvas");
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.ctx = this.canvas.getContext("2d");
        this.square = document.querySelector(".square");
        this.circle = document.querySelector(".circle");
        this.brush = document.querySelector(".brush");
        this.eraser = document.querySelector(".eraser");
        this.brushSize = document.querySelector("#brush-size");
        this.eraserSize = document.querySelector("#eraser-size");
        this.colors = document.querySelectorAll(".color");
        this.colorsContainer = document.querySelectorAll(".nav-item");
        this.prevMouseX = 0;
        this.prevMouseY = 0;
        this.ctx.lineWidth = 5;
        this.prevColor="#000"
   
    }
    listenerUseEraser(callback,color) {
        this.eraser.addEventListener("click", () => {
            const colorValue = "#fff"; 
            callback(colorValue);
        });
    }

    listenerUseBrush(callback) {
        this.brush.addEventListener("click", () => {
            callback(this.prevColor); 
        });
    }
    

    listenerStartDrawing(callback) {
        this.canvas.addEventListener("mousedown", (e) => {
            callback(e);
        });
    }

    listenerDraw(callback) {
        this.canvas.addEventListener("mousemove", (e) => {
            callback(e);
        });
    }

    listenerStopDrawing(callback) {
        this.canvas.addEventListener("mouseup", callback);
    }

    listenColorSelect(callback) {
        this.colors.forEach((colorOption) => {
            colorOption.addEventListener("click", (e) => {
                const colorValue = colorOption.dataset.color;
                callback(colorValue);
                this.prevColor = colorValue;
            });
        });
    }
    
    listenBrushSizeChange(callback){
        this.brushSize.addEventListener("change",callback)
        this.brush.addEventListener("click",callback)
    }
    
    listenEraserSizeChange(callback){
        this.eraserSize.addEventListener("change",callback)
        this.eraser.addEventListener("click",callback)
    }

    get brushSizeValue(){
      return this.brushSize.value
    }
    get eraserSizeValue(){
      return this.eraserSize.value
    }
}