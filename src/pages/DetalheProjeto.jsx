import { useParams } from "react-router-dom";
import data from "../data/projetos.json"

export default function DetalheProjeto() {

    const { id } = useParams()

    const project = data.find((project) => project.id == id)
    return (
        <>
        <div className="text-center text-3xl font-bold">
            <h1>Detalhe do Projeto</h1>
        </div>
            <p>O id do Projeto é: {id} </p>
            <h2>{project.titulo}</h2>
            <h2>{project.descricao}</h2>
            <a href={project.github} target="_blank">Link</a>
        </>
    )
}