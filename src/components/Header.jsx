import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <>
            <header className="w-full h-10 flex justify-between items-center p-10 mb-10 bg-gray-800 text-gray-400 sticky top-0">
                <div>
                    <h1>Site Portfólio</h1>
                </div>
                <nav>
                    <ul className="flex gap-5">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/projetos">Projetos</NavLink></li>
                        <li><NavLink to="/formacao">Formação</NavLink></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}