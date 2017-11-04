class CanvasManipulator {
    constructor() {
        this.canvas = null;
        this.image = null;

        this.start = this.start.bind(this);
        this.loop = this.loop.bind(this);

        setTimeout(() => {this.start();}, 0);
    }

    use(canvas) {
        this.canvas = canvas;

        this.start();
    }

    apply(fn) {
        this.action = fn;

        this.start();
    }

    
    start() {
        if(this.canvas != null && this.action != null) {
            this.ctx = this.canvas.getContext("2d");
            this.loop();
        }
    }

    loop() {
        this.action(this.canvas, this.ctx);

        requestAnimationFrame(this.loop);
    }
}

const CM = new CanvasManipulator();

export default CM;