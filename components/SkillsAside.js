import JsImage from "../components/svg/JsImage"
import Css3Image from "../components/svg/Css3Image"
import PhpImage from "../components/svg/PhpImage"
import { useState } from "react"
import Link from "next/link"

export default function SkillsAside(){
    const [link, setLink] = useState('');
    function getLink(e){
        const a = e.target.textContent
        setLink(a)
    }    
    return(
        <aside className="min-h-[90vh] md:w-2/5 lg:w-1/5 pt-8 flex flex-col p-2 border-r-2 border-stone-400 border-solid">        
            <Link href={`/skills/${link}`}>
                <a onMouseEnter={getLink} className="flex items-center text-2xl cursor-pointer py-4">
                    <JsImage/>
                    <span>javascript</span>
                </a>   
            </Link>            
            <Link href={`/skills/${link}`}>
                <a onMouseEnter={getLink} className="flex items-center text-2xl cursor-pointer py-4">
                    <Css3Image/>
                    css
                </a>   
            </Link>     
            <Link href={`/skills/${link}`}>
                <a onMouseEnter={getLink} className="flex items-center text-2xl cursor-pointer py-4">
                    <PhpImage/>
                    php
                </a>   
            </Link>       
        </aside>
    )
}