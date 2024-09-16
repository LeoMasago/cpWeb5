import CardContainer from "../components/CardContainer"
import ProjectCard from "../components/ProjectCard"
import data from "../data/projetos.json"

export default function ListaProjetos(){
    return(
        <>
        <div className="text-center text-3xl font-bold">
            <h1>Lista dos projetos</h1>
        </div>
        <CardContainer>
        {
            data.map((project) => (
                <ProjectCard key={project.id} {...project}/>
            ))
        }
        </CardContainer>
        </>
    )
}