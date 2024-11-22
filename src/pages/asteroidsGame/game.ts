import { Asteroid } from "./asteroid"
import { EdgeAsteroidFactory } from "./asteroidFactory"
import { Player } from "./player"
export const WIDTH = 800
export const HEIGHT = 600

export default function initGame() {
    const canvas = document.getElementById('miCanvas') as HTMLCanvasElement
    const ctx = canvas.getContext('2d')
    canvas.width = WIDTH
    canvas.height = HEIGHT
    canvas.style.border = '1px solid white'

    const player1 = new Player(WIDTH / 2, HEIGHT / 2)
    player1.color='white'
    const player2 = new Player(WIDTH / 2 - 40, HEIGHT / 2)
    player2.color='green'
    const asteroids: Asteroid[] = []
    const PLAYER_FRICTION = 0.99
    const ASTEROID_FRICTION = 1
    let gameOver = false


    asteroids.push(new EdgeAsteroidFactory().create())
    asteroids.push(new EdgeAsteroidFactory().create())

    setInterval(() => {
        const newAsteroid = new EdgeAsteroidFactory().create()
        asteroids.push(newAsteroid)
    }, 1000)

    function gameLoop() {
        if(!ctx) return
        
        ctx?.clearRect(0, 0, canvas.width, canvas.height)
        
        player1.drawScore(ctx, 'izq')
        player2.drawScore(ctx, 'der')

        if(gameOver){
            ctx.fillStyle = 'red'
            ctx.font = "bold 40px Arial"
            ctx.textAlign = 'center'
            ctx.fillText("GAME OVER", WIDTH/2, HEIGHT/2)
            return
        }

        player1.draw(ctx)

        player2.draw(ctx)
        player1.update(PLAYER_FRICTION)
        player2.update(PLAYER_FRICTION)


        player1.bullets = player1.bullets.filter(bullet => !bullet.isOutOfBounds())
        player2.bullets = player2.bullets.filter(bullet => !bullet.isOutOfBounds())

        player1.bullets.forEach(bullet =>{
            bullet.draw(ctx)
            bullet.update(1)
        })

        player2.bullets.forEach(bullet =>{
            bullet.draw(ctx)
            bullet.update(1)
        })

        asteroids.forEach(asteroid => {
            asteroid.update(ASTEROID_FRICTION)
            asteroid.draw(ctx)
        })

        // Destruir asteroides fuera del mundo
        collisionBulletAsteroid(player1)
        collisionBulletAsteroid(player2)

        gameOver = checkCollisionPlayerAsteroid(player1)
        if(!gameOver)  gameOver = checkCollisionPlayerAsteroid(player2)

        
        requestAnimationFrame(gameLoop)
    }
    gameLoop()

    //const backgroundMusic = new Audio('./sounds/background.mp3')
    //window.addEventListener("load", ()=>{
    //    console.log('aa')
      //  backgroundMusic.play()
       // backgroundMusic.loop = true
      //  backgroundMusic.autoplay = true
        //backgroundMusic.volume = 0.5
    //})
   

    function collisionBulletAsteroid(player: Player): boolean{
        asteroids.forEach((asteroid, asteroidIndex) => {
            player.bullets.forEach((bullet, bulletIndex) => {
                const dx = asteroid.x - bullet.x
                const dy = asteroid.y - bullet.y
                const distance = Math.sqrt(dx*dx  +  dy*dy)
                if(distance <= asteroid.size + bullet.size){
                    asteroids.splice(asteroidIndex,1)
                    player.bullets.splice(bulletIndex, 1)
                    asteroid.playSound()
                    player.score ++
                    return true
                }
            })
        })
        return false
    }

    function checkCollisionPlayerAsteroid(player: Player):boolean{
        for(const asteroid of asteroids){
            const dx = asteroid.x - player.x
            const dy = asteroid.y - player.y
            const distance = Math.sqrt(dx*dx  +  dy*dy)
            if(distance <= asteroid.size + player.size) return true
        }
        return false
    }




    document.addEventListener('keydown', (e) => {
        const lowerCase = e.key.toLocaleLowerCase()
        if (e.key === 'ArrowLeft') player2.isRotatingLeft = true
        if (e.key === 'ArrowRight') player2.isRotatingRight = true
        if (e.key === 'ArrowUp') player2.isThrusting = true
        if (lowerCase === 'p') player2.shot()


        if (lowerCase === 'a') player1.isRotatingLeft = true
        if (lowerCase === 'd') player1.isRotatingRight = true
        if (lowerCase === 'w') player1.isThrusting = true
        if (lowerCase === 'q') player1.shot()

    })

    document.addEventListener('keyup', (e) => {
        if (e.key === 'ArrowLeft') player2.isRotatingLeft = false
        if (e.key === 'ArrowRight') player2.isRotatingRight = false
        if (e.key === 'ArrowUp') player2.isThrusting = false

        if (e.key === 'a') player1.isRotatingLeft = false
        if (e.key === 'd') player1.isRotatingRight = false
        if (e.key === 'w') player1.isThrusting = false
    })
}
