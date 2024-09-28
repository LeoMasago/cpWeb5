export default function Contato() {

    const handleEnviar = () => {
        const nome = document.getElementById("nome").value;
        const senha = document.getElementById("senha").value;
        const mensagem = document.getElementById("mensagem").value;
        if(nome !== ""){
            alert(`${nome} sua mensagem foi enviada com sucesso !!`)
            console.log(`Nome: ${nome}`)
            console.log(`Senha: ${senha}`)
            console.log(`Mensagem: ${mensagem}`)
        }
    }

    return ( 
        <>
        <div className="flex justify-center">
        <section class="bg-lightContact dark:bg-darkContact  rounded-3xl m-10 w-full md:w-[900px]">
        <h1 className="text-2xl font-mono text-center p-10">Contato</h1>
            <div class="py-8 px-4 mx-auto max-w-screen-md">
                <form action="#" class="space-y-8">
                    <div>
                        <input id="nome" type="text" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-inputContact dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Nome" required></input>
                    </div>

                    <div>
                        <input id="senha" type="password" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-inputContact dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Senha"></input>
                    </div>

                    <div class="sm:col-span-2">
                        <textarea id="mensagem" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-inputContact dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Comentários"></textarea>
                    </div>
                    <div className="flex justify-center">
                        <button onClick={handleEnviar} class="w-44 py-3 px-5 text-sm font-medium text-center text-black bg-btnLight dark:text-white rounded-lg hover:bg-primary-800 dark:bg-gray-500 hover:bg-btnHover dark:hover:bg-gray-600 hover:scale-[1.1] transition duration-300">Enviar</button>
                    </div>
                </form>
            </div>
        </section>
        </div>
        </>
     );
}

