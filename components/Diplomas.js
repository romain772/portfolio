import Link from "next/link";
import AcademyCap from "../components/svg/AcademyCap";
import Calendar from "../components/svg/Calendar";
import HashTag from "../components/svg/HashTag";
import Location from "../components/svg/Location";
import Share from "../components/svg/Share";
import { useWindowSize } from "../utils/helpers"

function Diplomas(props){
    const size = useWindowSize()
    const diplomas = props.data
    return(
        <article 
            className={size.width>800?"w-3/5 m-auto":"w-4/5 m-auto"}
            >
            <h1 className="p-3 text-xl font-bold text-gray-500 flex justify-center items-center border-y-2 border-y-stone-500">
                <AcademyCap/>
                FORMATION
            </h1>
            {diplomas.map((diploma)=>{
                return(
                    <div key={diploma.id} className={`my-6 py-3 shadow-lg w-full ease-out duration-150 hover:scale-[1.02]`}>
                        {diploma.link?
                        <Link href={diploma.link}>
                            <a target="_blank">
                                <h2 className="p-2 flex items-center font-bold underline text-xl decoration-red-600">
                                    <HashTag/>
                                    {diploma.title}
                                </h2>
                            </a>
                        </Link>:
                        <h2 className="p-2 flex items-center font-bold underline text-xl decoration-red-600">
                            <HashTag/>
                            {diploma.title}
                        </h2>
                        }
                        <h3 className="p-2 flex items-center">
                            <Calendar/>
                            {diploma.date}
                        </h3>
                        {diploma.description?<p className="p-2 flex items-center">
                            <Share/>
                            {diploma.description}
                        </p>:null}      
                        <p className="p-2 flex items-center">
                            <Location/>
                            {diploma.location}
                        </p>                      
                    </div>
                )
            })}
        </article>
    )
}

export default Diplomas
