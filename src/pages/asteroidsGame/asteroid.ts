import { Mobile } from "./mobile"

export class Asteroid extends Mobile{
    constructor(public x: number, public y: number, public size: number) {
        super(x,y,0,0,size)
        
        this.velocity.x = (Math.random() - 0.5) * 2
        this.velocity.y = (Math.random() - 0.5) * 2
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.closePath()
        ctx.fillStyle = 'white'
        ctx.fill()
    }
}