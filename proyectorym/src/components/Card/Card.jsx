import { useState } from "react"

export default function Card ({personaje}) {
   let [oculto,setOculto]=useState(true)

    return(
        <div className="d-flex gap-2 border rounded tarjeta border-3 bg-primary">
            <div>
                <img src={personaje.image}/>
                <h2>{personaje.name}</h2>
                <button onClick={()=>setOculto(false)} className={oculto?"btn btn-warning":"d-none"}>Know More</button>              
            </div>
            {oculto? "":
            <div>
                <button onClick={()=>setOculto(true)}>X</button>
                <ul>
                    <li>Character Status {personaje.status}</li>
                    <li>Species {personaje.species}</li>
                    <li>Origin {personaje.origin.name}</li>
                    <li>Gender {personaje.gender}</li>
                </ul>
            </div>
            }
        </div>
    )
}