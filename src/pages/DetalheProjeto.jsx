import { useParams } from "react-router-dom";

export default function DetalheProjeto() {

    const { id } = useParams()

    return (
        <>
            <h1>Detalhe do Projeto</h1>
            <p>O id do Projeto é: {id} </p>
            {/* Exibe detalhes de um filme específico. */}
        </>
    )
}