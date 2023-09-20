import style from './Header.module.css'
import { Nav } from './Nav'
import { Link } from 'react-router-dom'

export function Header({activeLink, onLinkClick}) {

    return (
        <header className={style.header}>
            <Link to="/">Lacrei</Link>

            <Nav
                activeLinkNav={activeLink}
                onlinkClickNav={onLinkClick}
            />
        </header>
    )
}