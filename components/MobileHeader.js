import Link from "next/link"
import { useRouter } from "next/router";
import { linkIsActive } from "../utils/helpers"

export default function MobileHeader(){
    const router = useRouter()
    const links = [
        {id : "1" , linkname : 'home' , content :'Accueil'},
        {id : "2" , linkname : 'about' ,content : 'Bio'},
        {id : "3" , linkname : 'skills' ,content : 'Compétences'},
        {id : "4" , linkname : 'portfolio' ,content : 'Portfolio'},
        {id : "5" , linkname : 'contact' , content : 'Contact'}
    ]
    const classNames = {
        activeLink :"px-6 py-4 font-medium text-center text-2xl text-cyan-800 bg-white",
        basicLink : "px-6 py-4 font-medium text-center text-2xl text-white bg-gray-600"
    }
    return(
        <nav className="bg-gradient-to-r from-gray-900 via-cyan-800 to-gray-900 flex justify-between items-center px-3">
            {/* <div className="flex-1 flex items-center justify-center">
                <div className="flex">
                    {
                        links.map((link) => {
                            return (
                                <Link href={`/${link.linkname}`} key={link.id}>
                                    <a
                                    className={linkIsActive(router.pathname,`/${link.linkname}`)
                                        ? classNames.activeLink
                                        : classNames.basicLink }
                                    >
                                        {link.content.toUpperCase()}
                                    </a>
                                </Link>
                            )                            
                        })
                    }
                </div>
            </div> */}
            
            <div id="menuToggle">
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
                <ul id="menu">
                    {
                        links.map((link) => {
                            return (
                            <Link     
                                key={link.id}          
                                href={`/${link.linkname}`}                     
                                >
                                    <a>
                                        <li className={linkIsActive(router.pathname,`/${link.linkname}`)
                                        ? classNames.activeLink
                                        : classNames.basicLink }>{link.content.toUpperCase()}</li>
                                    </a>
                                </Link>    
                            )                            
                        })

                    }
                </ul>
            </div>
            <div><img src="favicon.ico"/></div>
        </nav>
    )
}