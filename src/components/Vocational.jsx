import style from './Vocational.module.css'

export function Vocational() {
    return (
        <div className={style.content}>
        
            <div>
                <h2>Profissional</h2>
                <p className={style.description}>
                
                Buscamos recrutar pessoas profissionais da saúde que entendam as necessidades e se comprometam com o bem-estar da comunidade LGBTQIAPN+
                    
                </p>

            </div>

            <div>
                <img src="https://desafio-lacrei-five.vercel.app/_next/static/media/profissional.6700284d.svg" alt="" />
            </div>
            
        </div>
    )
}