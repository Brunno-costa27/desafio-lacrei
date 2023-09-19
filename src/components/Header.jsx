// import { useState } from 'react'
import style from './Header.module.css'
import { Nav } from './Nav'

export function Header() {

    // const [activeLink, setActiveLink] = useState(null)


    // function handleLinkClick(link) {
    //     setActiveLink(link);
    // }


    return (
        <header className={style.header}>
            <a href="/">Lacrei</a>

            <Nav/>
            {/* <nav>
                <a 
                    href="#"
                    onClick={() => handleLinkClick('Home')}
                    style={{ color: activeLink === 'Home' ? '#018762': '#1f1f1f'}}
                >
                    Home
                </a>
                <a 
                    href="#"
                    onClick={() => handleLinkClick('Pessoa Usuária')}
                    style={{ color: activeLink === 'Pessoa Usuária' ? '#018762': '#1f1f1f'}}
                >
                    Pessoa Usuária
                </a>
                <a 
                    href="#"
                    onClick={() => handleLinkClick('Profissional')}
                    style={{ color: activeLink === 'Profissional' ? '#018762': '#1f1f1f'}}
                >
                        Profissional
                </a>
            </nav> */}
        </header>
    )
}