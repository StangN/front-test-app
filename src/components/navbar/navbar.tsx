import './navbar.scss'
import { NavLink } from 'react-router-dom';

export function Navbar() {
    return(
    <div className="nav">
        <NavLink to='/' end>List</NavLink>
        <NavLink to='app2'>App 2</NavLink>
        <NavLink to='app3'>App 3</NavLink>
        <NavLink to='app4'>App 4</NavLink>
    </div>)
} 

  
