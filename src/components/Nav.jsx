// import { useState } from 'react'
import style from './Nav.module.css'

export function Nav({activeLinkNav, onlinkClickNav}) {

    
    // const [activeLink, setActiveLink] = useState(null)
    
    
    // function handleLinkClick(link) {
    //     setActiveLink(link);
    // }

    return (
        <nav className={style.nav}>
                <a 
                    href="#"
                    onClick={() => onlinkClickNav('Home')}
                    style={{ color: activeLinkNav === 'Home' ? '#018762': '#1f1f1f'}}
                >
                    Home
                </a>
                <a 
                    href="#"
                    onClick={() => onlinkClickNav('Pessoa Usuária')}
                    style={{ color: activeLinkNav === 'Pessoa Usuária' ? '#018762': '#1f1f1f'}}
                >
                    Pessoa Usuária
                </a>
                <a 
                    href="#"
                    onClick={() => onlinkClickNav('Profissional')}
                    style={{ color: activeLinkNav === 'Profissional' ? '#018762': '#1f1f1f'}}
                >
                        Profissional
                </a>
            </nav>
    )
}