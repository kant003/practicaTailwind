import { useEffect } from "react"
import initGame from "./asteroidsGame/game"

export default function Ejer1(){

    useEffect( ()=>{
        initGame()
    }, [])

    return <canvas id="miCanvas"/>
        
}