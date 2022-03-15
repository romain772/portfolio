import Title from '../components/Title'
import Link from 'next/link'
import Image from 'next/image'
import { useWindowSize } from "../utils/helpers"

export default function Portfolio(props){
    const size = useWindowSize()
    const portfolio = props.portfolio
    return (
        <>
            <Title title="Portfolio"/>
            <section className={size.width>800?"py-10 min-h-[90vh] w-[90%] m-auto":"py-10 min-h-[90vh] w-[95%] m-auto"}>
                <div className="w-full">
                    <h1 className="text-center text-2xl underline">Portfolio</h1>
                    <div 
                        className={size.width>800?"m-10 flex flex-wrap justify-center":"m-10 flex flex-col justify-center"}
                    >
                    {portfolio.map((item)=>
                        {                            
                            return(
                                <Link href={item.link} key={item.id}  >
                                    <a target="_blank" 
                                       className={size.width>800?`w-[400px] h-[400px] m-4 flex flex-col shadow-xl hover:scale-[1.05] duration-150`:
                                       `w-full min-h-[400px] m-auto mt-6 flex flex-col justify-between shadow-xl hover:scale-[1.05] duration-150`}>
                                        <div className="relative">
                                            <img src={item.image} className="w-full min-h-[270px] duration-150" alt={item.name}/>
                                        </div>
                                        <div className="flex flex-wrap px-2 py-3 absolute">
                                            {item.tags.map((tag)=>{
                                                return (
                                                    <span className="text-xs py-1 px-2 rounded-md text-white bg-red-700 hover:bg-yellow-400 mr-1 last:mr-0" key={tag}>{tag}</span>
                                                )
                                            })}
                                        </div>
                                        <div className="bg-white px-2 min-h-[130px] overflow-auto border-t-[1px] border-slate-700">
                                            <h1 className="text-xl font-bold m-2 text-center">{item.name}</h1>
                                            <p className="text-gray-600 mx-2 text-xs">{item.description}</p>
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
