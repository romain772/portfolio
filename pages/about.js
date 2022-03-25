import Diplomas from '../components/Diplomas';
import Experiences from '../components/Experiences';
import Title from '../components/Title'

export default function About(props){
    const diplomas = props.diplomas
    const experiences = props.experiences
    return (
        <>
        <Title title="A propos..."></Title>
        <section className="scale-in min-h-[90vh] pt-10">
            <Diplomas data={diplomas}/>
            <Experiences data={experiences}/>
        </section>
        </>
    )
}
About.getInitialProps = async (ctx) => {
    const res1 = await fetch(process.env.ROOT_URL+'/api/diplomas')
    const res2 = await fetch(process.env.ROOT_URL+'/api/experiences')
    const json1 = await res1.json()
    const json2 = await res2.json()
    return { diplomas : json1.diplomas , experiences : json2.experiences}
}

