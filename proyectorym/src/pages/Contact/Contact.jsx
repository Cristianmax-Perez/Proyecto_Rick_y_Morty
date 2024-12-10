import { Fragment,useState } from "react"
import "../Contact/Contact.css"
import Navigation from "../../components/Navigation/Navigation"

export default function ContactForm () {

    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [message,setMessage]=useState("")

    const InputFormulario=(nodo)=>{
        switch (nodo.id) {
            case "Name":
                setName(nodo.value)
                break;
            case "Email":
                setEmail(nodo.value)
                break;
            case "Message":
                setMessage(nodo.value)
                break;
        }
    }

    return(
        <Fragment>
            <Navigation/>
            <main>
                <section className="sectionContact w-75 container mt-5 p-4 justify-content-center">
                    <div className="text-center row">
                        <h2 className="py-4">Contact</h2>
                        <h3>Leave us your information so we can contact you</h3>
                    </div>
                    <form className="row justify-content-center" action="">
                        <div className="col-md-5">
                            <label className="form-label" htmlFor="Name">Name</label>
                            <input className="form-control" type="text" id="Name" value={name} onInput={(event)=>InputFormulario(event.target)}/>
                        </div>
                        <div className="col-md-5">
                            <label className="form-label" htmlFor="Email">Email</label>
                            <input className="form-control" type="text" id="Email" value={email} onInput={(event)=>InputFormulario(event.target)}/>
                        </div>
                        <div className="col-10">
                            <label className="form-label" htmlFor="Message">Message</label>
                            <input className="form-control" type="text" id="Message" value={message} onInput={(event)=>InputFormulario(event.target)}/>
                        </div>
                    </form>
                </section>
            </main>
        </Fragment>
    )         
}