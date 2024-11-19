import { HEIGHT, WIDTH } from "./game"

export class Player{
    velocity:{x:number, y:number}
    size:number
    color:string = 'white'
    angle: number
    thrust: number // aceleración
    friction:number

    isRotatingLeft: boolean
    isRotatingRight: boolean
    isThrusting: boolean

    rotationSpeed: number
    
    constructor(public x:number,public y:number){
        this.velocity = {x:0, y:0}
        this.size=20
        this.angle =0
        this.thrust = 0.09
        this.friction = 0.99
        this.isRotatingLeft = false
        this.isRotatingRight = false
        this.isThrusting = false
        this.rotationSpeed = 0.05
    }
    draw(ctx:CanvasRenderingContext2D){
        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.rotate(this.angle)
        ctx.beginPath()
        ctx.moveTo(this.size, 0)
        ctx.lineTo(-this.size/2, this.size/2)
        ctx.lineTo(-this.size/2, -this.size/2)
        ctx.closePath()
        ctx.fillStyle=this.color
        ctx.fill()
        ctx.restore()
    }
    update(){
        if(this.isThrusting){
            this.thrust = 0.05
        }else{
            this.thrust = 0 
        }
            this.velocity.x += Math.cos(this.angle) * this.thrust
            this.velocity.y += Math.sin(this.angle) * this.thrust

        if(this.isRotatingLeft) this.angle -= this.rotationSpeed
        if(this.isRotatingRight) this.angle += this.rotationSpeed

        this.x += this.velocity.x
        this.y += this.velocity.y

        this.velocity.x *= this.friction
        this.velocity.y *= this.friction


        if(this.x < 0) this.x = WIDTH 
        if(this.y < 0) this.y = HEIGHT 
        if(this.x > WIDTH) this.x = 0
        if(this.y > HEIGHT) this.y = 0
    }




}