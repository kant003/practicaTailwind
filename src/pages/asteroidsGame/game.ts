import { Player } from "./player";

<<<<<<< Updated upstream
export default function initGame(){
=======
export const WIDTH = 800;
export const HEIGHT= 600;

<<<<<<< Updated upstream
export default function initGame() {
>>>>>>> Stashed changes
    const canvas = document.getElementById('miCanvas') as HTMLCanvasElement
    const ctx = canvas.getContext('2d')
    canvas.width = WIDTH
    canvas.height = HEIGHT
    canvas.style.border = '1px solid white'

    const player1 = new Player(WIDTH/2, HEIGHT/2)
    const asteroids: Asteroid[] = []
 
    asteroids.push(  new EdgeAsteroidFactory().create()   )
    asteroids.push(  new EdgeAsteroidFactory().create()   )

    setInterval( ()=>{
        const newAsteroid = new EdgeAsteroidFactory().create() 
        asteroids.push(newAsteroid)
    }, 1000 ) 

    function gameLoop(){
        ctx?.clearRect(0,0 ,canvas.width, canvas.height)

        player1.draw(ctx)
        player1.update()

        asteroids.forEach(asteroid => {
            asteroid.update()
            asteroid.draw(ctx)
        })

        requestAnimationFrame(gameLoop)
=======
export default function initGame(){

    const canvas = document.getElementById('miCanvas') as HTMLCanvasElement;
    const ctx = canvas.getContext("2d")
    canvas.style.border= "1px solid white"
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    if(ctx==null) return
    ctx?.arc(100,100,20,0,2*Math.PI)
    ctx?.fill()
    ctx.fillStyle = 'white';
   


    const player1 = new Player(canvas.width/2,canvas.height/2);
    function gameLoop(){
        ctx?.clearRect(0,0,canvas.width, canvas.height)
        requestAnimationFrame(gameLoop)

        player1.draw(ctx)
        player1.update()
>>>>>>> Stashed changes
    }

    gameLoop()

<<<<<<< Updated upstream
  
=======
<<<<<<< Updated upstream
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
>>>>>>> Stashed changes

    document.addEventListener('keydown', (e)=>{
        if(e.key === 'ArrowLeft') player1.isRotatingLeft = true
        if(e.key === 'ArrowRight') player1.isRotatingRight = true
        if(e.key === 'ArrowUp') player1.isThrusting = true
    })

<<<<<<< Updated upstream
    document.addEventListener('keyup', (e)=>{
        if(e.key === 'ArrowLeft') player1.isRotatingLeft = false
        if(e.key === 'ArrowRight') player1.isRotatingRight =false
        if(e.key === 'ArrowUp') player1.isThrusting = false
=======
    document.addEventListener('keyup', (e) => {
        if (e.key === 'ArrowLeft') player2.isRotatingLeft = false
        if (e.key === 'ArrowRight') player2.isRotatingRight = false
        if (e.key === 'ArrowUp') player2.isThrusting = false

        if (e.key === 'a') player1.isRotatingLeft = false
        if (e.key === 'd') player1.isRotatingRight = false
        if (e.key === 'w') player1.isThrusting = false
=======
 
    document.addEventListener('keyup', (e) =>{ 
        if(e.key == 'ArrowLeft'){player1.isRotatingLeft=true}
        if(e.key == 'ArrowRight'){player1.isRotatingRight=true}
        if(e.key == 'ArrowUp'){player1.isThrusting = true}
    })
    
    document.addEventListener('keydown',(e)=>{
       if(e.key === 'ArrowUp'){player1.thrust = 0}
    
>>>>>>> Stashed changes
>>>>>>> Stashed changes
    })
}