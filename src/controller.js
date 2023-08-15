export default class controller {
    constructor(view, model) {
        this.view = view;
        this.model = model;

        this.view.listenBrushSizeChange(() => {
            const brushSizeValue = this.view.BrushSizeValue;
            this.model.changeBrushSize(brushSizeValue);
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

        this.view.listenerUseEraser((e) => {
            if (this.model.isPainting) {
                this.model.useEraser(e, this.view.ctx);
            }
        });

        this.view.listenColorSelect((color) => {
            this.model.setColor(color);
        });
    }
    
}