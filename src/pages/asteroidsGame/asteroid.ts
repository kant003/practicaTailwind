import { HEIGHT, WIDTH } from "./game"

export class Asteroid {
    velocity: { x: number, y: number }

    constructor(public x: number, public y: number, public size: number) {
        this.velocity = { x: 0, y: 0 }

        this.velocity.x = (Math.random() - 0.5) * 2
        this.velocity.y = (Math.random() - 0.5) * 2
    }

    update() {

        this.x += this.velocity.x
        this.y += this.velocity.y

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

    draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.closePath()
        ctx.fillStyle = 'white'
        ctx.fill()
    }
}