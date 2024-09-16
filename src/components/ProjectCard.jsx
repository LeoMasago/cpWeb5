import { Link } from "react-router-dom";

export default function ProjectCard(project) {
    return (
        <>
            <div className="flex flex-col justify-center items-center hover:shadow-lg" key={project.id}>
                <h2>{project.titulo}</h2>
                <img src={project.img} alt="" />
                <Link to={`/projetos/${project.id}`}>Ver Projeto</Link>
            </div>
        </>
    )

}