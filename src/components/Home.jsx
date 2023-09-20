import { useState } from 'react';
import style from './Home.module.css'
import { Link } from 'react-router-dom'


export function Home() {

    
    return (
        <div className={style.content}>
            <div>
                <h2>Boas vindas a Lacrei Saúde</h2>
                <p className={style.description}>Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+</p>

                <div className={style.buttonsContent}>
                    <Link 
                        className={style.user}
                        to="/pessoa-usuaria"
                    >
                        Pessoa Usuária
                    
                    </Link>
                    <Link className={style.vocational} to="/profissional">Profissional</Link>
                </div>
            </div>

            <div>
                <img src="https://app-lacrei-saude-4nn3.vercel.app/assets/home-icon-cca9946c.svg" alt="" />
            </div>
            
        </div>
        
    )
}