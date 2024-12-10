import { useState } from "react" 

import Navigation from "../../components/Navigation/Navigation"
import Card from "../../components/Card/Card"

export default function Characters () {
    let [datos,setDatos]=useState([])

    const mostrarDatos=async()=>{
        let datosAPI= await fetch("https://rickandmortyapi.com/api/character")
            .then((data)=>{return data.json()})
            .catch((error)=>console.log("error:"+error))
        setDatos(datosAPI.results)
        console.log(datosAPI.results)
        console.log(datos)
    }

    return (
        <div>
            <Navigation/>
            <h1>Characters</h1>
            <button onClick={mostrarDatos}>Mostrar Info</button>
            <section className="d-flex flex-wrap gap-3">
            {
                datos.map((personaje)=>{
                    return <Card key={personaje.id} personaje={personaje}/>
                })
            }    
            </section>
        </div>
    )
}
