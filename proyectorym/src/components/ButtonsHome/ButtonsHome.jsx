import {Link} from "react-router"
import "../ButtonsHome/ButtonsHome.css"

export default function ButtonsHome ({tituloBoton}) {
    return (
        <Link to={tituloBoton} className="btn col-4 botonhome">{tituloBoton}</Link>
    )
}