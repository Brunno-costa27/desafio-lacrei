import style from './App.module.css'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { Nav } from './components/Nav'
import  FacebookLogo from './assets/FacebookLogo.svg'
import  InstagramLogo from './assets/InstagramLogo.svg'
import  LinkedinLogo from './assets/LinkedinLogo.svg'


export function App() {

  return (
    <>
      <Header />

      <Home/>

      <footer className={style.footer}>
          <Nav />
          <div>
            <a href="" target="_blank">
              <img src={FacebookLogo} alt="" />
            </a>
            <a href="" target="_blank">
              <img src={InstagramLogo} alt="" />
            </a>
            <a href="" target="_blank">
              <img src={LinkedinLogo} alt="" />
            </a>
          </div>

          <p>Desafio Front-end Lacrei</p>
      </footer>
    </>
  )
}
