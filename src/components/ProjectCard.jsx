import { Link } from "react-router-dom";

export default function ProjectCard(project) {
    return (
        <>
            <div className="flex flex-col justify-center items-center hover:shadow-lg bg-card border-black-100 font-bold dark:hover:shadow-cyan-950 dark:bg-cardDark hover:scale-[1.10] transition duration-300 hover:saturate-150 rounded-lg border-2 dark:border-gray-500 w-[350px] md:w-[450px]" key={project.id}>
                <h2>{project.titulo}</h2>
                <Link to={`/projetos/${project.id}`}>
                    <img className="h-[250px] w-[350px] md:h-[250px] md:w-[450px]" src={project.img} alt="" />
                </Link>
                <Link to={`/projetos/${project.id}`}>Ver Projeto</Link>
            </div>
        </>
    )

}