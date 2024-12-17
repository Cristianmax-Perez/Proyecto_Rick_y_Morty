import "../Filters/Filters.css"

export default function Filters ({title,filtrar}) {

    return(
        <div className="charFilter form-check form-switch px-5 py-2">
            <input className="pulsador form-check-input" id={title} type="checkbox" onClick={(event)=>filtrar(event.target)} value={title}/>
            <label className="form-check-label" htmlFor={title}>{title}</label>
        </div>
    )
}