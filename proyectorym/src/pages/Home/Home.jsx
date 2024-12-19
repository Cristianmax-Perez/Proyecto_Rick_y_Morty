import ButtonsHome from "../../components/ButtonsHome/ButtonsHome"
import "./Home.css"

export default function Home () {

    return (
        <div className="homePage d-flex align-items-center justify-content-center">
            <header className="cuadroPrincipal d-flex container justify-content-center align-items-center p-2 m-1">
                <div className="align-items-center">
                    <div>
                        <h1 className="tituloHome row text-center justify-content-center">Proyect Rick & Morty</h1>
                        <h2 className="subtituloHome row text-center p-3 justify-content-center">Welcome to Rick & Morty Project!</h2>
                    </div>

                    <div>
                        <p className="row p-2">This proyect was made for practising React and to made a functional website</p>
                        <p className="row p-2 pb-0 mb-0">In this website you can know information of the characters of this animated series.</p> 
                        <p className="row p-2 pt-0 mt-0">Also you can filter for diferent types of properties to find the character that you are looking for or send us a massage for any concern o sugestion</p>              
                        <h2 className="subtituloHome row p-2 justify-content-center">Let's go!</h2>
                    </div>
                
                    <div className="areaBotones row m-2 flex-column align-items-center">
                        <ButtonsHome tituloBoton="Characters"/>
                        <ButtonsHome tituloBoton="Contact"/>
                    </div>
                </div>
            </header>
        </div>
    )
}