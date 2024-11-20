import { useEffect } from "react"
import initGame from "./asteroidsGame/game"


export default function Ejer1(){

    useEffect( ()=>{
        initGame()
    }, [])

    return <canvas id="miCanvas"/>
        

    useEffect(()=>{
        initGame()
    },[])
    
    return <canvas id="canvas">
    
    
    
    </canvas>

}