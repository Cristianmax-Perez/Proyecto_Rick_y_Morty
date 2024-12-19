import "../../components/Navigation/Navigation.css"
import {Link} from "react-router"
import { useState } from "react"

export default function Navigation ({pageName}) {

    let [menuMobile, setMenuMobile]=useState(false)

    return (
        <nav className="w-100 p-4">

            <div className="barraNav d-flex align-items-center justify-content-between">
                <h1><Link to="/" alt="Go to home" className="botonNavHome text-decoration-none p-4">Rick & Morty</Link></h1>
 
                <ul className="xl d-none m-0 d-flex align-items-center">
                    <li><Link to="/Characters" className={pageName === "Characters"? "pageActive":"botonNav text-decoration-none p-2 m-2"}>Characters</Link></li>
                    <li><Link to="/Contact" className={pageName === "Contact"? "pageActive":"botonNav text-decoration-none p-2 m-2"}>Contact</Link></li>
                </ul>

                <img src="src\assets\list.svg" alt="Navigation menu" className="mobiles" onClick={()=>setMenuMobile(!menuMobile)}></img>
            </div>


            <div className={menuMobile?"text-center d-flex flex-column ":"d-none"}>
                <ul className="m-0 p-2">
                    <li className="p-2 m-2"><Link to="/Characters" className={pageName === "Characters"? "pageActive":"botonNav text-decoration-none p-2 m-2"}>Characters</Link></li>
                    <li className="p-2 m-2"><Link to="/Contact" className={pageName === "Contact"? "pageActive":"botonNav text-decoration-none p-2 m-2"}>Contact</Link></li>
                </ul>
            </div> 
               
        </nav>
    )
}