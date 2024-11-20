import { motion, useScroll, useTransform } from "motion/react"
import { useEffect, useState } from "react"
const FooterComponent = ({margin}:{margin?:number}) => {

const { scrollY } = useScroll()
let maxY = document.documentElement.scrollHeight - window.innerHeight
const minY = maxY-300
const y = useTransform(scrollY, [minY,maxY], [50,-50])
useEffect(()=>{
    maxY = document.documentElement.scrollHeight - window.innerHeight
},[scrollY])

const marginValue = margin??"10"


return <>
    <motion.footer className={`z-10 bg-[#232323] p-4 divide-y-2 divide-solid divide-zinc-500 mx-${marginValue} mb-10 shadow-sm shadow-black rounded-lg will-change-transform duration-500 ease-out`}
        style={{y}}
        >
        <div className="flow flow-col sm:grid sm:grid-cols-2 py-3 content-center">
            <div className="ml-10 justify-self-center sm:justify-self-start will-change-transform duration-500"><img className="w-16 h-16 rounded-full" src="" alt="icon"/>Icon</div>
            <div className="flex flex-col md:flex-row justify-self-center pr-4  text-lg font-bold justify-between">
                <a className="hover:text-blue-400 will-change-auto duration-500 text-nowrap " href="#">xxxxx</a>
            </div>
        </div>
        <div className="flex flex-row content-center justify-center py-6 text-zinc-500">
            <span>© 2024 xxxx. All Rights Reserved.</span>
        </div>
    </motion.footer>
</>
}

export default FooterComponent
