import { Main } from '../Layouts/Home/Main/Main'
import { NavBar } from '../Layouts/Home/NavBar/NavBar'
import './Home.css'

export function Homes() {
    return <div className="home">
        <div className='nav-bar'><NavBar/></div>
        <div className='main'><Main/></div>
    </div>
}