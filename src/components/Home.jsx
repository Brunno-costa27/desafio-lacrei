import style from './Home.module.css'

export function Home() {
    return (
        <div className={style.content}>
        
            <div>
                <h2>Boas vindas a Lacrei Saúde</h2>
                <p className={style.description}>Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+</p>

                <div className={style.buttonsContent}>
                    <a className={style.user} href="#">Pessoa Usuária</a>
                    <a className={style.vocational} href="#">Profissional</a>
                </div>
            </div>

            <div>
                <img src="https://app-lacrei-saude-4nn3.vercel.app/assets/home-icon-cca9946c.svg" alt="" />
            </div>
            
        </div>
        
    )
}