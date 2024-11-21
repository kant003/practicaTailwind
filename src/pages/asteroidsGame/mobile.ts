import { HEIGHT, WIDTH } from "./game"

export abstract class Mobile{
    velocity: { x: number, y: number }
   
    constructor(
        public x:number,
        public y:number,
        public angle:number,
        public thrust:number,
        public size:number
    ){
        this.velocity = {x:0,y:0}
    }

    abstract draw(ctx: CanvasRenderingContext2D):void

    update(friction:number){
        this.x += this.velocity.x
        this.y += this.velocity.y

        this.velocity.x *= friction
        this.velocity.y *= friction


        if (this.x < 0) {
            this.x = WIDTH
            this.y = HEIGHT - this.y
        }
        if (this.y < 0) {
            this.y = HEIGHT
            this.x = WIDTH - this.x
        }
        if (this.x > WIDTH) {
            this.x = 0
            this.y = HEIGHT - this.y
        }
        if (this.y > HEIGHT) {
            this.y = 0
            this.x = WIDTH - this.x
        }
    }
}