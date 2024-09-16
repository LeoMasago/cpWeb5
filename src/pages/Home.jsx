import CardContainer from "../components/CardContainer";
import ConteudoHome from "../components/ConteudoHome";
import ProjectCard from "../components/ProjectCard";
import projetos from "../data/projetos.json";

export default function Home(){
    return(
        <>
        <ConteudoHome/>
            <CardContainer titulo="Projetos">
            {projetos.map(project =>
                <ProjectCard key={project.id} {...project}/>
            )
            }
            </CardContainer>

        </>
    )
}