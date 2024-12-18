import { useState } from "react"
import "../Card/Card.css"

export default function Card ({personaje}) {
   let [oculto,setOculto]=useState(true)

    return(
        <div className="characterCard d-flex flex-column gap-2 p-2 rounded tarjeta align-items-center">
            <div className="d-flex flex-column">
                <img src={personaje.image}/>
                <h2 className="nameWidth text-wrap text-center">{personaje.name}</h2>
                <button id="KnowMore" onClick={()=>setOculto(false)} className={oculto?"btn buttonCard align-self-end":"d-none"}>Know More..</button>              
            </div>
            {oculto? "":
            <div className=" d-inline-flex flex-column p-5 align-items-center">
                <button id="CloseX" className="btn buttonCard align-self-end" onClick={()=>setOculto(true)}>X</button>
                <ul className="listaAtributos p-3 text-white">
                    <li className="Atributo d-flex p-2 flex-column TituloAtributo">Character Status {personaje.status}</li>
                    <li className="Atributo d-flex p-2 flex-column">Species <span className="TituloAtributo">{personaje.species}</span></li>
                    <li className="Atributo d-flex p-2 flex-column">Origin <span className="TituloAtributo">{personaje.origin.name}</span></li>
                    <li className="Atributo d-flex p-2 flex-column">Gender <span className="TituloAtributo">{personaje.gender}</span></li>
                </ul>
            </div>
            }
        </div>
    ) 
} 