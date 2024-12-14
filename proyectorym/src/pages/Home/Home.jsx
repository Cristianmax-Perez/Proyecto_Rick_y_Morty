import ButtonsHome from "../../components/ButtonsHome/ButtonsHome"
import "./Home.css"

export default function Home () {
    return (
        <div className="homePage d-flex align-items-center">
            <header className="cuadroPrincipal p-3 justify-content-center container">
                <h1 className="tituloHome row mt-4 p-3 justify-content-center">Proyect Rick & Morty</h1>
                <h2 className="row p-3 justify-content-center">Welcome to Rick & Morty Project</h2>
                <p className="row p-2">This proyect was made for practising React and to made a functional website</p>
                <p className="row p-2">In this website you can know information of the characters of this animated series.</p>
                <p className="row p-2">Also you can filter for diferent types of properties to find the character that you are looking for or send us a massage for any concern o sugestion</p>
                <h2 className="row justify-content-center">Let's go!</h2>
                <div className="row m-2 justify-content-center">
                    <ButtonsHome className="" tituloBoton="Characters"/>
                    <ButtonsHome className="" tituloBoton="Contact"/>
                </div>
            </header>
        </div>
    )
}