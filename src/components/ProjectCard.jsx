import { Link } from "react-router-dom";

export default function ProjectCard(project) {
    return (
        <>
            <div className="flex flex-col justify-center items-center hover:shadow-lg hover:shadow-cyan-950 hover:scale-[1.10] transition duration-300 hover:saturate-150 rounded-lg border-2 border-gray-500 w-[200px] md:w-[400px]" key={project.id}>
                <h2>{project.titulo}</h2>
                <Link to={`/projetos/${project.id}`}>
                    <img className="h-[250px] w-[200px] md:h-[250px] md:w-[400px]" src={project.img} alt="" />
                </Link>
                <Link to={`/projetos/${project.id}`}>Ver Projeto</Link>
            </div>
        </>
    )

}