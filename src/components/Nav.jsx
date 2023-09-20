import style from './Nav.module.css'
import { Link } from 'react-router-dom'

export function Nav({activeLinkNav, onlinkClickNav}) {


    return (
        <nav className={style.nav}>
                <Link 
                    to="/"
                    onClick={() => onlinkClickNav('Home')}
                    style={{ color: activeLinkNav === 'Home' ? '#018762': '#1f1f1f'}}
                >
                    Home
                </Link>

                <Link
                    to="/pessoa-usuaria"
                    onClick={() => onlinkClickNav('Pessoa Usuária')}
                    style={{ color: activeLinkNav === 'Pessoa Usuária' ? '#018762': '#1f1f1f'}}
                >
                    Pessoa Usuária
                </Link>

                <Link
                    to="/profissional"
                    onClick={() => onlinkClickNav('Profissional')}
                    style={{ color: activeLinkNav === 'Profissional' ? '#018762': '#1f1f1f'}}
                >
                        Profissional
                </Link>
            </nav>
    )
}