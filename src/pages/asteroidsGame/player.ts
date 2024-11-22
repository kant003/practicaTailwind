import { Bullet } from "./bullet"
import { WIDTH } from "./game"
import { Mobile } from "./mobile"

export class Player extends Mobile{
    color: string = 'white'

    isRotatingLeft: boolean
    isRotatingRight: boolean
    isThrusting: boolean

    rotationSpeed: number

    bullets: Bullet[] = []
    score: number = 0

    constructor(public x: number, public y: number) {
        super(x,y,0,0.2,20)

        this.isRotatingLeft = false
        this.isRotatingRight = false
        this.isThrusting = false
        this.rotationSpeed = 0.05
    }
    draw(ctx: CanvasRenderingContext2D) {
        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.rotate(this.angle)
        ctx.beginPath()
        ctx.moveTo(this.size, 0)
        ctx.lineTo(-this.size / 2, this.size / 2)
        ctx.lineTo(-this.size / 2, -this.size / 2)
        ctx.closePath()
        ctx.fillStyle = this.color
        ctx.fill()
        ctx.restore()
    }

   
    update(friction: number = 0.99) {
        if (this.isThrusting) {
            this.velocity.x += Math.cos(this.angle) * this.thrust
            this.velocity.y += Math.sin(this.angle) * this.thrust
        }

        if (this.isRotatingLeft) this.angle -= this.rotationSpeed
        if (this.isRotatingRight) this.angle += this.rotationSpeed
       
        super.update(friction)
        this.sphericWorld()
    }

    shot(){
        const newBullet = new Bullet(this.x, this.y, this.angle)
        this.bullets.push(newBullet)
        const sound = new Audio('./sounds/laser.wav')
        sound.play()

    }

    drawScore(ctx: CanvasRenderingContext2D, pos:'izq'|'der'){
        ctx.fillStyle = 'white'
        ctx.font = "24px arial"
        if(pos === 'izq') ctx.fillText(`Score Player 1: ${this.score}`, 20, 40)
        else  ctx.fillText(`Score Player 2: ${this.score}`, WIDTH-40, 40)
    }



}