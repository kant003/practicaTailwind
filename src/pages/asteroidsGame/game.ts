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
    const asteroids: Asteroid[] = []

    asteroids.push(new EdgeAsteroidFactory().create())
    asteroids.push(new EdgeAsteroidFactory().create())

    setInterval(() => {
        const newAsteroid = new EdgeAsteroidFactory().create()
        asteroids.push(newAsteroid)
    }, 1000)

    function gameLoop() {
        ctx?.clearRect(0, 0, canvas.width, canvas.height)

        player1.draw(ctx)
        player1.update()

        asteroids.forEach(asteroid => {
            asteroid.update()
            asteroid.draw(ctx)
        })

        requestAnimationFrame(gameLoop)
    }
    gameLoop()



    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') player1.isRotatingLeft = true
        if (e.key === 'ArrowRight') player1.isRotatingRight = true
        if (e.key === 'ArrowUp') player1.isThrusting = true
    })

    document.addEventListener('keyup', (e) => {
        if (e.key === 'ArrowLeft') player1.isRotatingLeft = false
        if (e.key === 'ArrowRight') player1.isRotatingRight = false
        if (e.key === 'ArrowUp') player1.isThrusting = false
    })
}