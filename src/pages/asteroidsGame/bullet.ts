import { Mobile } from "./mobile";

export class Bullet extends Mobile{

    constructor(public x:number, public y:number, public angle:number){
        super(x,y,0,0,5)
        this.velocity.x = Math.cos(this.angle) * 5
        this.velocity.y = Math.sin(this.angle) * 5
    }
    draw(ctx: CanvasRenderingContext2D): void {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.closePath()
        ctx.fillStyle = 'yellow'
        ctx.fill()
    }

}