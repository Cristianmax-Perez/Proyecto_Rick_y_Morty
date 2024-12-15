import { useState, useEffect } from "react" 
import Filters from "../../components/Filters/Filters"
import Navigation from "../../components/Navigation/Navigation"
import Card from "../../components/Card/Card"

import "../../pages/Characters/Characters.css"

export default function Characters () {
    let [datos,setDatos]=useState([])
    let [datosCompletos,setDatosCompletos]=useState([])
    let [filtrosAplicados,setFiltrosAplicados]=useState([])
    let [show,setShow]=useState(true)

    let filterName=["Character Alive","Character Dead","Female","Male","Origin Unknown"]

    const mostrarDatos=async()=>{
        let datosAPI= await fetch("https://rickandmortyapi.com/api/character")
            .then((data)=>{return data.json()})
            .catch((error)=>console.log("error:"+error))
        setDatos(datosAPI.results)
        setDatosCompletos(datosAPI.results)
        /* console.log(datosAPI.results)
        console.log(datos) */
    }

    const filtrado=(inputData)=>{
        
        let pulsado=inputData.checked;
        let filtroPulsado=inputData.value;
        console.log(pulsado)
        console.log(filtroPulsado)

        if(pulsado){
            setFiltrosAplicados([...filtrosAplicados,filtroPulsado])

        }else{
            setDatos(datosCompletos)
            let filtrosActualizado=filtrosAplicados.filter((fil)=>{return fil !== filtroPulsado})
            setFiltrosAplicados(filtrosActualizado)
        }
    }

    useEffect(()=>{
        filtrosAplicados.forEach((filtro)=>{
            let nuevaLista;

            switch (filtro) {
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
        })
    },[filtrosAplicados])


    useEffect(()=>{
        mostrarDatos();
    },[])

    return (
        <div>
            <Navigation/>
            <main>
                <section className="sectorFilterXL py-5 px-3">
                    <h2 className="subtitulo py-3">Filters</h2>
                    <div className="justify-content-between">
                        <form className="gap-2 d-flex justify-content-between flex-wrap">
                            {
                                filterName.map((filtro)=>{
                                return <Filters key={filtro} title={filtro} filtrar={filtrado}/>
                                })
                            }
                        </form>
                    </div>
                </section>

                <section className="sectorFilterMobile m-3 p-3">
                    <div className="FilterMobile d-flex justify-content-between">
                        <h2 className="subtitulo py-3">Filters</h2>
                        <button><img src="src\assets\filter-icon.svg"></img></button>
                    </div>
                </section>

                <section className="d-flex flex-wrap gap-3 justify-content-center">
                {
                    datos.length !==0?
                    datos.map((personaje)=>{
                        return <Card key={personaje.id} personaje={personaje}/>
                    })
                    :
                    <p className="alert bg-success">Sorry! There are no characters with all those properties.</p>
                }    
                </section>
            </main>
        </div>
    )
}
