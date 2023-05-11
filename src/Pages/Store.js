import { Main } from "../Layouts/Store/Main/Main"
import { NavBar } from "../Layouts/Store/NavBar/NavBar"
import './Store.css'

export function Store() {
    return <div className="store">
        <div className="nav-bar">
            <NavBar/>
        </div>
        <Main/>
    </div>
}