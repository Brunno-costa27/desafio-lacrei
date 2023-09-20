import style from './App.module.css'
import { Header } from './components/Header'
import { Home } from './components/Home'
import  FacebookLogo from './assets/FacebookLogo.svg'
import  InstagramLogo from './assets/InstagramLogo.svg'
import  LinkedinLogo from './assets/LinkedinLogo.svg'
import { useState } from 'react'
import { Router } from './Router'
import { BrowserRouter, Link } from 'react-router-dom'



export function App() {

  const [activeLink, setActiveLink] = useState('Home')


    function handleLinkClick(link) {
        setActiveLink(link);
    }


  return (
    <BrowserRouter>
     <Header 
         activeLink={activeLink}
         onLinkClick={handleLinkClick}
     />
      <Router path="/" element={
        <Home />
      }
      />

      <footer className={style.footer}>

        <nav className={style.nav}>
                 <Link 
                    to="/"
                    className={activeLink === 'Home' ? style.active : ''}
                    onClick={() => handleLinkClick('Home')}
                >
                    Home
                </Link>
                <Link
                    to="/pessoa-usuaria"
                    className={activeLink === 'Pessoa Usuária' ? style.active : ''}
                    onClick={() => handleLinkClick('Pessoa Usuária')}
                >
                    Pessoa Usuária
                </Link>

                <Link 
                    to="/profissional"
                    className={activeLink === 'Profissional' ? style.active : ''}
                    onClick={() => handleLinkClick('Profissional')}
                >
                        Profissional
                </Link>
            </nav>
          <div>
            <a href="" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="128" r="40" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="16"></circle><rect x="36" y="36" width="184" height="184" rx="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></rect><circle cx="180" cy="76" r="12"></circle></svg>
            </a>
            <a href="" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle><path d="M168,88H152a23.9,23.9,0,0,0-24,24V224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><line x1="96" y1="144" x2="160" y2="144" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line></svg>
            </a>
            <a href="" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><rect x="36" y="36" width="184" height="184" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></rect><line x1="120" y1="112" x2="120" y2="176" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="88" y1="112" x2="88" y2="176" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><path d="M120,140a28,28,0,0,1,56,0v36" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><circle cx="88" cy="80" r="12"></circle></svg>
            </a>
          </div>

          <p>Desafio Front-end Lacrei</p>
      </footer>
    </BrowserRouter>
  )
}

