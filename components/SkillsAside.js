import JsImage from "../components/svg/JsImage"
import Css3Image from "../components/svg/Css3Image"
import PhpImage from "../components/svg/PhpImage"
import { useState } from "react"
import Link from "next/link"
import { useWindowSize } from '../utils/helpers'

export default function SkillsAside(){
    const size = useWindowSize()
    const [link, setLink] = useState('');
    return(
        <aside 
            className={size.width>800?"min-h-[90vh] md:w-2/5 lg:w-1/5 pt-8 flex flex-col p-2 border-r-2 border-stone-400 border-solid"
            :"flex justify-center p-2 mb-10 border-b-2 border-stone-400 border-solid w-full"}
            >        
            <Link href="/skills/javascript">
                <a className="flex items-center text-2xl cursor-pointer py-4 mr-4">
                    <JsImage/>
                    <span>javascript</span>
                </a>   
            </Link>            
            <Link href="/skills/css">
                <a className="flex items-center text-2xl cursor-pointer py-4 mr-4">
                    <Css3Image/>
                    css
                </a>   
            </Link>     
            <Link href="/skills/php">
                <a className="flex items-center text-2xl cursor-pointer py-4 mr-4">
                    <PhpImage/>
                    php
                </a>   
            </Link>       
        </aside>
    )
}