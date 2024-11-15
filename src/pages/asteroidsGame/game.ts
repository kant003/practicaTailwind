export default function initGame(){
    const canvas = document.getElementById('miCanvas') as HTMLCanvasElement
    const ctx = canvas.getContext('2d')
    canvas.width = 800
    canvas.height = 600
    canvas.style.border = '1px solid white'
    function gameLoop(){
        ctx?.clearRect(0,0 ,canvas.width, canvas.height)

        requestAnimationFrame(gameLoop)
    }
    gameLoop()

    document.addEventListener('keydown', (e)=>{
        
    })

    document.addEventListener('keyup', (e)=>{

    })
}