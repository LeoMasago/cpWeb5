import { useParams } from "react-router-dom";
import data from "../data/projetos.json"

export default function DetalheProjeto() {

    const { id } = useParams()

    const project = data.find((project) => project.id == id)
    return (
        <>
            <h1>Detalhe do Projeto</h1>
            <p>O id do Projeto é: {id} </p>
            <h2>{project.titulo}</h2>
            <h2>{project.descricao}</h2>
        </>
    )
}