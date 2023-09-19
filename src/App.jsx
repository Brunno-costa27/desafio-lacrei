// import style from './App.module.css'
// import { Header } from './components/Header'
// import { Home } from './components/Home'
// import  FacebookLogo from './assets/FacebookLogo.svg'
// import  InstagramLogo from './assets/InstagramLogo.svg'
// import  LinkedinLogo from './assets/LinkedinLogo.svg'
// import { useState } from 'react'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'


export function App() {

  // const [activeLink, setActiveLink] = useState(null)


  //   function handleLinkClick(link) {
  //       setActiveLink(link);
  //   }

  // return (
  //   <>
  //     <Header 
  //       activeLink={activeLink}
  //       onLinkClick={handleLinkClick}
  //     />

  //     <Home/>

  //     <footer className={style.footer}>

  //       <nav className={style.nav}>
  //               <a 
  //                   href="#"
  //                   className={activeLink === 'Home' ? style.active : ''}
  //                   onClick={() => handleLinkClick('Home')}
  //               >
  //                   Home
  //               </a>
  //               <a 
  //                   href="#"
  //                   className={activeLink === 'Pessoa Usuária' ? style.active : ''}
  //                   onClick={() => handleLinkClick('Pessoa Usuária')}
  //               >
  //                   Pessoa Usuária
  //               </a>
  //               <a 
  //                   href="#"
  //                   className={activeLink === 'Profissional' ? style.active : ''}
  //                   onClick={() => handleLinkClick('Profissional')}
  //               >
  //                       Profissional
  //               </a>
  //           </nav>
  //         <div>
  //           <a href="" target="_blank">
  //             <img src={FacebookLogo} alt="" />
  //           </a>
  //           <a href="" target="_blank">
  //             <img src={InstagramLogo} alt="" />
  //           </a>
  //           <a href="" target="_blank">
  //             <img src={LinkedinLogo} alt="" />
  //           </a>
  //         </div>

  //         <p>Desafio Front-end Lacrei</p>
  //     </footer>
  //   </>
  // )

  return (
    <BrowserRouter>
      <Router/>
    </BrowserRouter>
  )
}

