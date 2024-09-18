import CardContainer from "../components/CardContainer";
import ConteudoHome from "../components/ConteudoHome";
import ProjectCard from "../components/ProjectCard";
import projetos from "../data/projetos.json";

export default function Home(){
    return(
        <>
        <section className="flex items-center justify-center gap-3 md:gap-[100px]">
            <ConteudoHome/>
            <img className="opacity-85 dark:opacity-25 h-[300px] w-[200px] md:h-[50%] md:w-[33%]" src="programador.png" alt=""/>
        </section>
        <section className="h-[300px]"></section>
        
            <CardContainer titulo="Projetos">
            {projetos.map(project =>
                <ProjectCard key={project.id} {...project}/>
            )
            }
            </CardContainer>

        </>
    )
}