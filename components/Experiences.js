import Calendar from "../components/svg/Calendar";
import HashTag from "../components/svg/HashTag";
import Location from "../components/svg/Location";
import Computer from "../components/svg/Computer";
import Truck from "./svg/Truck";
import { useWindowSize } from "../utils/helpers"

export default function Experiences(props){
    const size = useWindowSize()
    const experiences = props.data    
    return(
        <article className={size.width>800?"w-3/5 m-auto":"w-4/5 m-auto"}>
            <h1 className="p-3 text-xl font-bold text-gray-500 flex justify-center items-center border-y-2 border-y-stone-500">
                <Computer/>
                PARCOURS
            </h1>
            {experiences.map((experience)=>{
                return(
                    <div key={experience.id} className="my-6 py-3 shadow-lg w-full ease-out duration-150 hover:scale-[1.02]">
                        <h2 className="p-2 flex items-center font-bold underline text-xl decoration-red-600">
                            <HashTag/>
                            {experience.title}
                        </h2>
                        <h3 className="p-2 flex items-center">
                            <Calendar/>
                            {experience.date}
                        </h3>
                        <p className="p-2 flex items-center">
                            <Location/>
                            {experience.location}
                        </p>                      
                        <div className="p-2.5 flex">
                            <Truck/>
                            <ul>
                                {experience.tasks.map((task)=>{
                                    return <li key={task} className="py-1 pr-4">{task}</li>
                                })}
                            </ul>
                        </div>
                    </div>
                )
            })}
        </article>
    )

}
