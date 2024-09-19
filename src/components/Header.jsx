import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header() {

    const [theme, setTheme] = useState(() => {
        if(window.matchMedia('(prefers-color-scheme: dark)').matches){
            return "dark";
        }
        return "light";
    })

    useEffect(() => {
        if(theme == "dark"){
            document.querySelector("html").classList.remove("light");
            document.querySelector("html").classList.add("dark")
        }else{
            document.querySelector("html").classList.remove("dark");
            document.querySelector("html").classList.add("light")
        }
    }, [theme])

    const handleChangeTheme = () => {
        setTheme(prevTheme => prevTheme == "light" ? "dark" : "light")
    }

    function btnf(){
        const menu = document.getElementById("menu");
        menu.classList.toggle("hidden")
    }

    return (
        <>
        <header className="transition duration-300 bg-violet-100 text-gray-900 font-bold w-full space-y-5 md:space-y-0 h-[100%] md:h-[100%] flex-col md:flex-row justify-between items-center p-5 md:p-3 dark:bg-header dark:text-gray-400 sticky top-0 z-50">
            <div className="flex items-center justify-between">
            <div className="">
                 <h1 className="">Site Portfólio</h1>
            </div>
            <nav>
                <ul className="md:flex gap-5 hidden">
                    <li className="hover:underline transition duration-300 hover:scale-[1.07]"><NavLink to="/">Home</NavLink></li>
                    <li className="hover:underline transition duration-300 hover:scale-[1.07]"><NavLink to="/projetos">Projetos</NavLink></li>
                    <li className="hover:underline transition duration-300 hover:scale-[1.07]"><NavLink to="/formacao">Formação</NavLink></li>
                </ul>
            </nav>

                <button className="dark:fill-white transition duration-500 dark:rotate-180 hover:scale-[1.1]" onClick={handleChangeTheme}> 
                    <svg fill="#000000 dark:bg-white" height="40px" width="40px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 296.08 296.08" xml:space="preserve" stroke="#000000" stroke-width="0.00296085" transform="matrix(1, 0, 0, 1, 0, 0)rotate(270)">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="17.765099999999997"/>
                        <g id="SVGRepo_iconCarrier"> <g> <path d="M296.051,147.956c0-0.094-0.004-0.186-0.004-0.28C295.823,66.258,229.541,0,148.098,0 c-38.547,0-75.041,14.63-102.76,41.396c-27.643,26.693-43.66,62.648-45.1,100.648h0.018c-0.158,2-0.234,4.211-0.234,5.99 c0,1.699,0.191,6.078,0.201,6.331c1.6,38.2,17.689,73.866,45.305,100.419c27.699,26.632,64.119,41.301,102.555,41.301 c81.432,0,147.815-66.253,147.98-147.707C296.063,148.246,296.059,148.102,296.051,147.956z M148.082,280.088 c-34.279,0-66.762-13.08-91.465-36.831c-9.809-9.432-17.988-20.151-24.369-31.789c7.486,5.433,15.834,9.458,24.668,11.933 c-0.02-0.014-0.037-0.026-0.057-0.04c6.838,1.929,13.969,2.935,21.223,2.935c20.377,0,39.658-7.807,54.289-21.982 c14.594-14.139,23.014-33.094,23.707-53.376c0.039-5.102,0.014-5.102,0.014-5.012l-0.004-0.118 c1.281-33.463,28.271-59.635,61.777-59.635c34.195,0,61.844,27.746,61.844,61.939c0,0.002,0-0.002,0-0.002 c0,0.058,0.177,0.346,0.183,0.473C279.586,221.08,220.612,280.088,148.082,280.088z M98,148.088c0,11.028-8.973,20-20,20 c-11.029,0-20-8.972-20-20c0-11.028,8.971-20,20-20C89.028,128.088,98,137.059,98,148.088z"/> <path d="M218,128.088c-11.029,0-20,8.972-20,20c0,11.028,8.971,20,20,20c11.027,0,20-8.972,20-20 C238,137.059,229.028,128.088,218,128.088z"/> </g> </g>
                    </svg> 
                </button>
                <button onClick={btnf} type="button" className="md:hidden transition duration-300 hover:scale-110 inline-flex items-center justify-center p-2 dark:hover:text-white">
                    <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
                </div>
            </header>
            <div id="menu" className="md:hidden bg-purple-50 dark:bg-listHeader w-full">
                    <div className="px-2 pt-2 pd-3 flex flex-col items-center">
                        <a className="hover:underline transition duration-300 mt-3 hover:scale-[1.07] flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                        <NavLink to="/">Home</NavLink></a>

                        <a className="hover:underline transition duration-300 mt-3 hover:scale-[1.07] flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                            </svg>
                        <NavLink to="/projetos">Projetos</NavLink></a>

                        <a className="hover:underline transition duration-300 mt-3 mb-3 hover:scale-[1.07] flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                            </svg>
                            <NavLink to="/formacao">Formação</NavLink></a>
                    </div>
                 </div>
        </>
    )
}