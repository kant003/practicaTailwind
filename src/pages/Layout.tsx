import { Link, Outlet } from "react-router-dom"
function MainMenu() {
    return <nav>
        <ul className="flex flex-row gap-4">
            <li>
                <Link to="/E1">Ejercicio1</Link>
            </li>
            <li>
                <Link to="/E2">Ejercicio2</Link>
            </li>
            <li>
                <Link to="/E3">PaginaGatitos</Link>
            </li>
            <li>
                <Link to="/Galeria">GaleriaNicolas</Link>
            </li>
            <li>
                <Link to="/KieneresTU">KieneresTU</Link>
            </li>
            <li>
                <Link to="/Formulario">Formulario</Link>
            </li>
            <li>
                <Link to="/Uh2">Uh2</Link>
            </li>
            <li>
                 <Link to="/Phone">Movil</Link>
            </li>
            <li>
                 <Link to="/UH3">UH3</Link>
            </li>
            <li>
                <Link to="/E3">Ejercicio2</Link>
            </li>
            <li>
              <Link to="/T">Tarjeta</Link>
            </li>
            <li>
              <Link to="/ScrollPage">Scroll Page</Link>
           </li>
           <li>
              <Link to="/uh35">uh35</Link>
           </li>
           <li>
            <Link to="/Boton">Boton</Link>
           </li>
        </ul>
    </nav>
}

const Footer = () => <footer>Pagina creada por Angel</footer>

function Layout() {
    return (
        <main className="flex flex-col">
            <img src="" alt="" />
            <MainMenu />
            <Outlet />
            <Footer />
        </main>
    )
}


export default Layout