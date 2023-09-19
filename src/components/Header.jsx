import style from './Header.module.css'
import { Nav } from './Nav'

export function Header({activeLink, onLinkClick}) {


    return (
        <header className={style.header}>
            <a href="/">Lacrei</a>

            <Nav
                activeLinkNav={activeLink}
                onlinkClickNav={onLinkClick}
            />
        </header>
    )
}