import Title from '../components/Title'
import Link from 'next/link'
import { useWindowSize } from "../utils/helpers"
import Skeleton from 'react-loading-skeleton'
import { useState } from 'react';
import 'react-loading-skeleton/dist/skeleton.css'

export default function Portfolio(props){
    const [loading, setLoading] = useState(true)
    setTimeout(() => {
        setLoading(false)
    }, 1000);;
    const size = useWindowSize()
    const portfolio = props.portfolio
    return (
        <>
            <Title title="Portfolio"/>
            <section className={size.width>800?"scale-in py-10 min-h-[90vh] w-[90%] m-auto":"py-10 min-h-[90vh] w-[95%] m-auto"}>
                <div className="w-full">
                    <h1 className="text-center text-2xl underline">{'Portfolio'}</h1>
                    <div 
                        className={size.width>800?"m-10 flex flex-wrap justify-center":"m-10 flex flex-col justify-center"}
                    >
                    {portfolio.map((item)=>
                        {                            
                            return(
                                <Link href={item.link} key={item.id} >
                                    <a target="_blank">
                                        <div className={size.width>800?`w-[400px] h-[400px] m-4 flex flex-col shadow-xl hover:scale-[1.05] duration-150 relative`:
                                        `w-full min-h-[400px] m-auto mt-6 flex flex-col justify-between shadow-xl hover:scale-[1.05] duration-150 relative`}>
                                            <div className="flex flex-wrap px-2 py-3 absolute">
                                                    {loading?null:item.tags.map((tag)=>{
                                                        return (
                                                            <span className="text-xs py-1 px-2 rounded-md text-white bg-red-700 hover:bg-yellow-400 mr-1 last:mr-0" key={tag}>{tag}</span>
                                                        )
                                                    })}
                                                </div>
                                                {
                                                    loading?
                                                    <Skeleton height={300}/>:
                                                    <img src={item.image} className="w-full min-h-[270px] duration-150" alt={item.name}/>
                                                }
                                                <div className="bg-white px-2 min-h-[130px] overflow-auto border-t-[1px] border-slate-700">
                                                    <h1 className="text-xl font-bold m-2 text-center">{loading?<Skeleton/>:item.name}</h1>
                                                    <p className="text-gray-600 mx-2 text-xs">{loading?<Skeleton/>:item.description}</p>
                                                </div>
                                            
                                        </div>
                                    </a>
                                </Link>
                            )                                                        
                        })
                    }
                    </div>
                </div>
            </section>
        </>
    )
}

Portfolio.getInitialProps = async(ctx) => {
    const res = await fetch(process.env.ROOT_URL+'/api/portfolio')
    const json = await res.json()
    return { portfolio : json.portfolio }
}
