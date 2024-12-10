import { Fragment,useState } from "react"

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
            <form action="">
                <label htmlFor="Name">Name</label>
                <input type="text" id="Name" value={name} onInput={(event)=>InputFormulario(event.target)}/>

                <label htmlFor="Email">Email</label>
                <input type="text" id="Email" value={email} onInput={(event)=>InputFormulario(event.target)}/>

                <label htmlFor="Message">Message</label>
                <input type="text" id="Message" value={message} onInput={(event)=>InputFormulario(event.target)}/>
            </form>
        </Fragment>
    )         
}