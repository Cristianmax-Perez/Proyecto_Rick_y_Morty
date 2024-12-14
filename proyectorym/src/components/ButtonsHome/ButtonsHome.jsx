import {Link} from "react-router"
import "../ButtonsHome/ButtonsHome.css"

export default function ButtonsHome ({tituloBoton}) {
    return (
        <Link to={tituloBoton} className="btn col-3 m-2 p-3 HomeButton">{tituloBoton}</Link>
    )
}