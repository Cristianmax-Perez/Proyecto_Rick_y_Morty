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

    /*
    console.log(name)
    console.log(email)
    console.log(message)
    */
   
    return(
        <Fragment>
            <Navigation/>
            <main className="my-3">
                <section className="sectionContact w-75 h-75 container mt-5 p-3 d-flex flex-column justify-content-center">
                    <div className="text-center row">
                        <h2 className="py-4">Contact</h2>
                        <h3>Leave us your information so we can contact you</h3>
                    </div>

                    <div className="d-flex justify-content-center">
                        <form className="formContact row p-4" action="">
                            <div className="col-md-6 mb-3">
                                <label className="form-label" htmlFor="Name">Name</label>
                                <input className="form-control" type="text" id="Name" value={name} onInput={(event)=>InputFormulario(event.target)}/>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="form-label" htmlFor="Email">Email</label>
                                <input className="form-control" type="text" id="Email" value={email} onInput={(event)=>InputFormulario(event.target)}/>
                            </div>
                            <div className="col-12">
                                <label className="form-label" htmlFor="Message">Message</label>
                                <textarea className="form-control" id="Message" value={message} onInput={(event)=>InputFormulario(event.target)}/>
                            </div>
                            <div className="py-4">
                                <button type="submit" className="btn" id="sendForm">Send</button>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
        </Fragment>
    )         
}