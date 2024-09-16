import CardContainer from "../components/CardContainer";
import ProjectCard from "../components/ProjectCard";
import projetos from "../data/projetos.json";

export default function Home(){
    return(
        <>
            <CardContainer>
            {projetos.map(project =>
                <ProjectCard key={project.id} {...project}/>
            )
            }
            </CardContainer>

        </>
    )
}