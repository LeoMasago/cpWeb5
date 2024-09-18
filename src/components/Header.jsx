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

    return (
        <>
            <header className="transition duration-300 bg-violet-100 text-gray-900 font-bold w-full space-y-5 md:space-y-0 h-[100%] md:h-[10px] flex flex-col md:flex-row justify-between items-center p-10 dark:bg-gray-800 dark:text-gray-400 sticky top-0 z-50">
                <div>
                    <h1>Site Portfólio</h1>
                </div>
                <nav>
                    <ul className="flex gap-5">
                        <li className="hover:underline transition duration-300 hover:scale-[1.07]"><NavLink to="/">Home</NavLink></li>
                        <li className="hover:underline transition duration-300 hover:scale-[1.07]"><NavLink to="/projetos">Projetos</NavLink></li>
                        <li className="hover:underline transition duration-300 hover:scale-[1.07]"><NavLink to="/formacao">Formação</NavLink></li>
                    </ul>
                </nav>
                <button className="dark:fill-white transitio duration-500 dark:rotate-180 hover:scale-[1.1]" onClick={handleChangeTheme}> 
                    <svg fill="#000000 dark:bg-white" height="40px" width="40px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 296.08 296.08" xml:space="preserve" stroke="#000000" stroke-width="0.00296085" transform="matrix(1, 0, 0, 1, 0, 0)rotate(270)">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="17.765099999999997"/>
                        <g id="SVGRepo_iconCarrier"> <g> <path d="M296.051,147.956c0-0.094-0.004-0.186-0.004-0.28C295.823,66.258,229.541,0,148.098,0 c-38.547,0-75.041,14.63-102.76,41.396c-27.643,26.693-43.66,62.648-45.1,100.648h0.018c-0.158,2-0.234,4.211-0.234,5.99 c0,1.699,0.191,6.078,0.201,6.331c1.6,38.2,17.689,73.866,45.305,100.419c27.699,26.632,64.119,41.301,102.555,41.301 c81.432,0,147.815-66.253,147.98-147.707C296.063,148.246,296.059,148.102,296.051,147.956z M148.082,280.088 c-34.279,0-66.762-13.08-91.465-36.831c-9.809-9.432-17.988-20.151-24.369-31.789c7.486,5.433,15.834,9.458,24.668,11.933 c-0.02-0.014-0.037-0.026-0.057-0.04c6.838,1.929,13.969,2.935,21.223,2.935c20.377,0,39.658-7.807,54.289-21.982 c14.594-14.139,23.014-33.094,23.707-53.376c0.039-5.102,0.014-5.102,0.014-5.012l-0.004-0.118 c1.281-33.463,28.271-59.635,61.777-59.635c34.195,0,61.844,27.746,61.844,61.939c0,0.002,0-0.002,0-0.002 c0,0.058,0.177,0.346,0.183,0.473C279.586,221.08,220.612,280.088,148.082,280.088z M98,148.088c0,11.028-8.973,20-20,20 c-11.029,0-20-8.972-20-20c0-11.028,8.971-20,20-20C89.028,128.088,98,137.059,98,148.088z"/> <path d="M218,128.088c-11.029,0-20,8.972-20,20c0,11.028,8.971,20,20,20c11.027,0,20-8.972,20-20 C238,137.059,229.028,128.088,218,128.088z"/> </g> </g>
                    </svg> 
                </button>
            </header>
        </>
    )
}