import { useState } from "react"
import "../Card/Card.css"

export default function Card ({personaje}) {
   let [oculto,setOculto]=useState(true)

    return(
        <div className="d-flex gap-2 p-2 rounded tarjeta align-items-center">
            <div className="d-flex flex-column">
                <img src={personaje.image}/>
                <h2 className="nameWidth text-wrap text-center">{personaje.name}</h2>
                <button onClick={()=>setOculto(false)} className={oculto?"btn buttonCard align-self-end":"d-none"}>Know More..</button>              
            </div>
            {oculto? "":
            <div className="d-flex flex-column p-5 algin-items-center">
                <button className="btn buttonCard align-self-end" onClick={()=>setOculto(true)}>X</button>
                <ul className="listaAtributos p-3 text-white">
                    <li className="d-flex p-1 flex-column Atributo">Character Status {personaje.status}</li>
                    <li className="d-flex p-1 flex-column">Species <span className="Atributo">{personaje.species}</span></li>
                    <li className="d-flex p-1 flex-column">Origin <span className="Atributo">{personaje.origin.name}</span></li>
                    <li className="d-flex p-1 flex-column">Gender <span className="Atributo">{personaje.gender}</span></li>
                </ul>
            </div>
            }
        </div>
    )
}