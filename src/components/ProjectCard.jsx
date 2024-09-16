import { Link } from "react-router-dom";

export default function ProjectCard(project) {
    return(
        <>
        <div key={project.id}>
            <h2>{project.titulo}</h2>
            <Link to ={`/projetos/${project.id}`}>Ver Projeto</Link>
        </div>
        </>
    )

}