import style from './index.module.css'

export default function CardDois(params) {

    return (



        <div className={style.card}>
            <img className={style.imagem} src={params.foto} alt="" />
            <div className={style.card_content}>
                <h2 className={style.titulo}>
                    {params.titulo}
                </h2>
                <p className={style.texto}>
                    {params.subtitulo}
                </p>
                <button className={style.botao}>
                    {params.botao}
                </button>
            </div>

        </div>
    )
}