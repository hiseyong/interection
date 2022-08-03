import { Link, useLocation } from "react-router-dom";
import './Nav.css'
import { useState, useEffect } from 'react';

export function Nav() {

    const loc = useLocation();
    const [active, setActive] = useState(loc.pathname.split('/')[1]);
    useEffect(()=>{
        setActive(loc.pathname.split('/')[1]);
    },[loc.pathname])
    return(
        <header>
            <nav>
                <ul>
                    <li className="navcomponents"><Link to='/'><h1 className={`btn ${active === '' ? 'active' : ''}`} onClick={() => setActive('')}>Main</h1></Link></li>
                    <li className="navcomponents"><Link to='/img'><h1 className={`btn ${active === 'img' ? 'active' : ''}`} onClick={() => setActive('img')}>Image</h1></Link></li>
                    <li className="navcomponents"><Link to='/txt'><h1 className={`btn ${active === 'txt' ? 'active' : ''}`} onClick={() => setActive('txt')}>Text</h1></Link></li>
                </ul>
            </nav>
        </header>
    )
}