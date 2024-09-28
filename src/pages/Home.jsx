import Contato from "../components/Contato";
import ConteudoHome from "../components/ConteudoHome";

export default function Home(){
    return(
        <>
        <section className="flex items-center justify-center gap-3 md:gap-[100px]">
            <ConteudoHome/>
            <img className="opacity-95 dark:opacity-65 h-[300px] w-[200px] md:h-[50%] md:w-[33%]" src="programador.png" alt=""/>
        </section>
        <section className="h-[300px]"></section>
        <Contato/>

        </>
    )
}