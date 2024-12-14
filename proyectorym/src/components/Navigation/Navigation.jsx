import "../../components/Navigation/Navigation.css"
import {Link} from "react-router"

export default function Navigation () {
    return (
        <nav className="w-100 d-flex align-items-center justify-content-between">
            <h1><Link to="/" className="botonNavHome text-decoration-none">Rick & Morty</Link></h1>
            <ul className="d-flex">
                <li><Link to="/Characters" className="botonNav text-decoration-none p-2 m-2">Characters</Link></li>
                <li><Link to="/Contact" className="botonNav text-decoration-none p-2 m-2">Contact</Link></li>
            </ul>
        </nav>
    )
}