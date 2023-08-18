export default class Controller {
    constructor(view, model) {
        this.view = view;
        this.model = model;
    }
    init(){
        this.viewAllListeners()
    }
    viewAllListeners(){
        this.view.listenBrushSizeChange(() => {
            const brushSizeValue = this.view.brushSizeValue;
            this.model.changeBrushSize(brushSizeValue);
        });

        this.view.listenEraserSizeChange(() => {
            const eraserSizeValue = this.view.eraserSizeValue;
            this.model.changeEraserSize(eraserSizeValue);
        });

        this.view.listenerStartDrawing((e) => {
            this.model.startPath(e, this.view.ctx);
        });

        this.view.listenerDraw((e) => {
            if (this.model.isPainting) {
                this.model.drawLine(e, this.view.ctx);
            }
        });

        this.view.listenerStopDrawing(() => {
            this.model.stopPath(this.view.ctx);
        });

        this.view.listenerUseBrush((prevColor) => {
            this.model.setColor(prevColor);
        });
        
        this.view.listenerUseEraser((color) => {
            this.model.useEraser(color);
        });
        this.view.listenColorSelect((color) => {
            this.model.setColor(color);
        });
    }
}