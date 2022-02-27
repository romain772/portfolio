import SkillsAside from '../components/SkillsAside'
import Title from '../components/Title'

export default function Skills(){   
    return(
        <>
        <Title title="Compétences"/>
        <section className="p-10 min-h-[90vh] flex w-[80%] m-auto">
            <SkillsAside/>
            <div className="w-4/5 py-4 px-14 text-lg">
            <   h1 className="text-2xl text-center pb-6 underline">Compétences Générales</h1>
                <p>Grace à cette formation de développeur WEB, j'ai pu acquérir les bases du développement de sites WEB et d'applications Web afin de:</p>
                <br/>
                <ul>
                    <li className="list-disc">Concevoir une page web statique et basique avec HTML</li>
                    <br/>
                    <li className="list-disc">Manipuler le DOM avec javascript afin de rendre la navigation dynamique et interactive. </li>
                    <br/>
                    <li className="list-disc">Personnaliser et rendre une page web unique et attractive grace à CSS.</li>
                    <br/>
                    <li className="list-disc">Gérer la partie serveur et données grace à PHP et une base de données (MYSQL, etc...) afin de rendre l'expérience utilisateur personnalisée et optimale.</li>
                    <br/>
                </ul>
            </div>
        </section>
        </>
    )      
}