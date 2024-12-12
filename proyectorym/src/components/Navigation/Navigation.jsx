import "../../components/Navigation/Navigation.css"
import {Link} from "react-router"

export default function Navigation () {
    return (
        <nav className="w-100 d-flex align-items-center justify-content-between text-decoration-none">
            <h1 className=""><Link to="/">Rick & Morty</Link></h1>
            <ul className="text-decoration-none d-flex">
                <li className="p-2 m-2"><Link to="/Characters">Characters</Link></li>
                <li className="p-2 m-2"><Link to="/Contact">Contact</Link></li>
            </ul>
        </nav>
    )
}