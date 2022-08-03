import { Link, useLocation } from "react-router-dom";
import './NavMobile.css'
import { useState, useEffect } from 'react';

export function NavMobile() {

    const loc = useLocation();
    const [active, setActive] = useState(loc.pathname.split('/')[1]);
    useEffect(()=>{
        setActive(loc.pathname.split('/')[1]);
    },[loc.pathname])
    return(
        <header className="mh">
            <nav className="mn">
                <ul className="mu">
                    <li><Link to='/'><h3 className={`btn ${active === '' ? 'active' : ''}`} onClick={() => setActive('')}>Main</h3></Link></li>
                    <li><Link to='/img'><h3 className={`btn ${active === 'img' ? 'active' : ''}`} onClick={() => setActive('img')}>Image</h3></Link></li>
                    <li><Link to='/txt'><h3 className={`btn ${active === 'txt' ? 'active' : ''}`} onClick={() => setActive('txt')}>Text</h3></Link></li>
                </ul>
            </nav>
        </header>
    )
}