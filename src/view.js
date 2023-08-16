export default class view {
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
      
    }

    listenerUseEraser(callback) {
        this.eraser.addEventListener("click", (e) => {
            const colorValue ="#fff";
            callback(colorValue);
            
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
                console.log(colorValue);
            });
        });
    }
    
    listenBrushSizeChange(callback){
        this.brushSize.addEventListener("change",callback)
    }
    
    listenEraserSizeChange(callback){
        this.eraserSize.addEventListener("change",callback)
    }

    get BrushSizeValue(){
      return this.brushSize.value
    }
    get EraserSizeValue(){
      return this.eraserSize.value
    }
}