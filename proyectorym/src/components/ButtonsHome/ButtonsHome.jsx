import {Link} from "react-router"
import "../ButtonsHome/ButtonsHome.css"

export default function ButtonsHome ({tituloBoton}) {
    return (
        <Link to={tituloBoton}>{tituloBoton}</Link>
    )
}