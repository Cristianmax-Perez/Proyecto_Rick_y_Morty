import "../../components/Navigation/Navigation.css"

export default function Navigation () {
    return (
        <nav className="w-100 d-flex align-items-center justify-content-between text-decoration-none">
            <h3 className="">Rick & Morty</h3>
            <ul className="text-decoration-none d-flex">
                <li className="p-2 m-2">Characters</li>
                <li className="p-2 m-2">Contact</li>
            </ul>
        </nav>
    )
}