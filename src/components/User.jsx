import style from './User.module.css'

export function User() {
    return (
        <div className={style.content}>
        
            <div>
                <h2>Pessoa Usuária</h2>
                <p className={style.description}>
                A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado por profissionais de qualidade e que atendam às suas necessidades de forma segura e acolhedora.
                    
                </p>

            </div>

            <div>
                <img src="https://desafio-lacrei-five.vercel.app/_next/static/media/pessoaUsuariaImg.16f76b21.svg" alt="" />
            </div>
            
        </div>
    )
}