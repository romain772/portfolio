import Title from '../components/Title'
import Link from 'next/link'

export default function Portfolio(props){
    const portfolio = props.portfolio
    return (
        <>
            <Title title="Portfolio"/>
            <section className="py-10 min-h-[90vh] w-[90%] m-auto">
                <div className="w-full px-14">
                    <h1 className="text-center text-2xl underline">Portfolio</h1>
                    <div className="m-10 flex flex-wrap justify-center">
                    {portfolio.map((item)=>
                        {                            
                            return(
                                <Link href={item.link} key={item.id}  >
                                    <a target="_blank" className={`w-[400px] h-[400px] m-4 flex flex-col justify-between shadow-xl hover:scale-[1.05] duration-150`}>
                                        <div className="relative">
                                            <img src={item.image} className="w-full h-[270px] duration-150"/>
                                        </div>
                                        <div className="px-2 py-3 absolute">
                                            {item.tags.map((tag)=>{
                                                return (
                                                    <span className="text-xs py-1 px-2 rounded-md text-white bg-red-700 hover:bg-yellow-400 mr-1 last:mr-0" key={tag}>{tag}</span>
                                                )
                                            })}
                                        </div>
                                        <div className="bg-white px-2 h-[130px] overflow-auto border-t-[1px] border-slate-700">
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
