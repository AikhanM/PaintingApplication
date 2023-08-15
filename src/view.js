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
        this.black = document.querySelector(".black");
        this.yellow = document.querySelector(".yellow");
        this.red = document.querySelector(".red");
        this.green = document.querySelector(".green");
        this.blue = document.querySelector(".blue");
        this.brushSize = document.querySelector("#brush-size");
        this.eraserSize = document.querySelector("#eraser-size");
        this.colors = document.querySelectorAll(".color");
        this.colorsContainer = document.querySelector(".nav-item");
        this.prevMouseX = 0;
        this.prevMouseY = 0;
        this.ctx.lineWidth = 5;
        this.selectedColor = "#000";
    }

    listenerUseEraser(callback) {
        this.eraser.addEventListener("click", (e) => {
            callback(e);
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
        this.colorsContainer.addEventListener("click", (e) => {
            if (e.target.classList.contains("color")) {
                const colorValue = e.target.dataset.color;
                callback(colorValue); // Renk değerini Model'e iletmek için callback'i çağırıyoruz
            }
        });
    }
    
    listenBrushSizeChange(callback){
        this.brushSize.addEventListener("change",callback)
      }
    
    get BrushSizeValue(){
      return this.brushSize.value
    }
    get EraserSizeValue(){
      return this.eraserSize.value
    }

  

}