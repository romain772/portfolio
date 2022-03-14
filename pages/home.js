import Image from "next/image";
import { abort , upCase , useWindowSize } from "../utils/helpers"
import Typewriter from 'typewriter-effect';
import LinkedIn from "../components/svg/Linkedin";
import Link from 'next/link'
import Title from '../components/Title'

export default function Home(props){
    const identity = props.identity
    return (
        <>
        <Title title="Accueil"></Title>
        <section className="p-10 min-h-[90vh]">
            <div className="text-center flex flex-col w-full ">
                <div className="border-4 my-10 border-red-500 rounded-full w-40 h-40 m-auto" onContextMenu={abort} >
                    <Image src="/pic.jpg" width="200" height="200" className="rounded-full" alt="profile-pic"/>
                </div>
                <div>
                    <span className="text-gray-500 font-bold text-xl">{upCase(identity.firstname)+' '}</span>
                    <span className="text-gray-500 font-bold text-xl">{upCase(identity.lastname)}</span>
                </div>
                <div>
                    <div className="my-10 text-2xl font-bold text-gray-900">
                        <Typewriter
                            options = {{
                                delay : 110
                            }}
                            onInit={(typewriter) => {
                            typewriter.pauseFor(1200)
                                .typeString(identity.description)
                                .start();
                            }}
                        />
                    </div>
                </div>
                <div className="m-auto">
                    <Link href="https://www.linkedin.com/in/romain-breuil">
                        <a target="blank" >
                            <LinkedIn color="fill-cyan-600" hoverColor="hover:fill-orange-600"/>
                        </a>
                    </Link>
                </div>
            </div>
        </section>
        </>
    )
}

Home.getInitialProps = async (ctx) => {
    const res = await fetch(process.env.ROOT_URL+'/api/identity')
    const json = await res.json()
    return { identity : json.identity }
}
