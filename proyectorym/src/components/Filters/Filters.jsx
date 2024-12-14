export default function Filters ({title,filtrar}) {

    return(
        <div className="text-white form-check form-switch col-2">
            <input className="form-check-input" id={title} type="checkbox" onClick={(event)=>filtrar(event.target)} value={title}/>
            <label className="form-check-label" htmlFor={title}>{title}</label>
        </div>
    )
}