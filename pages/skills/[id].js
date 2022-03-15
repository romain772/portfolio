import SkillsAside from "../../components/SkillsAside";
import { useRouter } from 'next/router'
import Error from 'next/error'
import Title from '../../components/Title'
import {abort} from '../../utils/helpers'
import Link from 'next/link'
import { useWindowSize } from '../../utils/helpers'

const authorizedSkillsRoutes = ['javascript','php','css']

function Display(props){
    const size = useWindowSize()
    const router = useRouter()
    const id = router.query.id
    const data = props.skills.data
    if(authorizedSkillsRoutes.includes(id)){
        return(
            <>
            <Title title={data.title} />
            <section className={size.width>800?"p-10 min-h-[90vh] flex w-[80%] m-auto":"p-10 min-h-[90vh] flex flex-col w-[80%] m-auto"}>
                <SkillsAside/>
                <div className={size.width>800?"w-4/5 py-4 px-14":"m-auto"}>
                    <h1 className="text-2xl font-bold text-center pb-10 underline">{data.title}</h1>
                    <div>
                        <div className="leading-loose text-lg text-center">{data.globalDescription}
                            {data.descriptionList.map((point)=>{
                                return (
                                    <div key={point.title}>
                                        <p>{point.title}</p>
                                        <div className="w-fit m-auto">
                                        <Link href={point.link}>
                                            <a target="_blank">
                                                <img onContextMenu={abort} src={point.image} className="my-10 bg-gray-200 shadow-md hover:scale-110 hover:bg-orange-100 hover:shadow-xl duration-200 p-5" width="200" height="200" alt={point.link}/>
                                            </a>
                                        </Link>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
        )
    }    
    return(<Error statusCode={'404'}/>)
}

Display.getInitialProps = async(ctx) => {
    const id = ctx.query.id
    if(!authorizedSkillsRoutes.includes(id)){
        return { skills : [] }
    }
    const res = await fetch(process.env.ROOT_URL+'/api/skills/'+id)
    const json = await res.json()
    return { skills : json }
}

export default Display

