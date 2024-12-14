import { useState, useEffect } from "react" 
import Filters from "../../components/Filters/Filters"

import Navigation from "../../components/Navigation/Navigation"
import Card from "../../components/Card/Card"

export default function Characters () {
    let [datos,setDatos]=useState([])
    let [datosCompletos,setDatosCompletos]=useState([])
    let filterName=["Character Alive","Character Dead","Female","Male","Origin Unknown"]

    const mostrarDatos=async()=>{
        let datosAPI= await fetch("https://rickandmortyapi.com/api/character")
            .then((data)=>{return data.json()})
            .catch((error)=>console.log("error:"+error))
        setDatos(datosAPI.results)
        setDatosCompletos=(datosAPI.results)
        /* console.log(datosAPI.results)
        console.log(datos) */
    }

    const filtrado=(inputData)=>{
        let pulsado=inputData.checked;
        let filtroPulsado=inputData.value;
        console.log(pulsado)
        console.log(filtroPulsado)

        if(pulsado){
            console.log(datos);
            let nuevaLista;

            switch (filtroPulsado) {
                case "Character Alive":
                    nuevaLista=datos.filter((personaje)=>{return personaje.status === "Alive"})
                    break;
                
                case "Character Dead":
                    nuevaLista=datos.filter((personaje)=>{return personaje.status === "Dead"})
                    break;

                case "Female":
                    nuevaLista=datos.filter((personaje)=>{return personaje.gender === "Female"})
                    break;

                case "Male":
                    nuevaLista=datos.filter((personaje)=>{return personaje.gender === "Male"})
                    break;

                case "Origin Unknown":
                    nuevaLista=datos.filter((personaje)=>{return personaje.origin.name === "unknown"})
                    break;
            }
            setDatos(nuevaLista)

        } else {
            setDatos(datosCompletos)
        }
    }


    useEffect(()=>{
        mostrarDatos();
    },[])

    return (
        <div>
            <Navigation/>
            <h2>Filters</h2>
            <form className="row gap-2">
                {
                    filterName.map((filtro)=>{
                        return <Filters key={filtro} title={filtro} filtrar={filtrado}/>
                    })
                }
            </form>
        
            <section className="d-flex flex-wrap gap-3">
            {
                datos.length !==0?
                datos.map((personaje)=>{
                    return <Card key={personaje.id} personaje={personaje}/>
                })
                :
                <p className="alert bg-success">Sorry! There are no characters with all those properties.</p>
            }    

            </section>
        </div>
    )
}
