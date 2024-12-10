import { useState } from "react"

export default function Card ({personaje}) {
   let [oculto,setOculto]=useState(true)

    return(
        <div className="d-flex gap-2 border rounded tarjeta border-3 bg-primary">
            <div>
                <img src={personaje.image}/>
                <h2>{personaje.name}</h2>
                <button onClick={()=>setOculto(false)}>Know More</button>              
            </div>
            {oculto===true ? "":<div><p>Mas info del personaje</p></div>} 
        </div>
    )
}