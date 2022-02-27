import Link from "next/link"
import { useRouter } from "next/router";
import { linkIsActive } from "../utils/helpers"

export default function Header(){
    const links = [
        {id : "1" , linkname : 'home' , content :'Accueil'},
        {id : "2" , linkname : 'about' ,content : 'Bio'},
        {id : "3" , linkname : 'skills' ,content : 'Compétences'},
        {id : "4" , linkname : 'portfolio' ,content : 'Portfolio'},
        {id : "5" , linkname : 'contact' , content : 'Contact'}
    ]
    const classNames = {
        activeLink :"px-6 py-4 font-medium text-center text-2xl text-red-700 bg-white",
        basicLink : "duration-150 ease-in px-6 py-4 font-medium text-center text-2xl text-white hover:text-red-700 hover:bg-white"
    }
    function background(link){
        switch(link){
            case '/home' : return "bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500";
            break
            case '/contact' : return "bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400";
            break
        }        
        return "bg-gradient-to-r from-red-500 via-yellow-500 to-red-500"      
    }
    const router = useRouter()
    return(
        <nav className={`${background(router.pathname)}`}>
            <div className="flex-1 flex items-center justify-center">
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
            </div>
        </nav>
    )
}