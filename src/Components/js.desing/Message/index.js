import style from './index.module.css'
function Mensagem(params){
    return(
        <div className={style.corpo}>
            <h1 className={style.Titulo}>{params.Titulo}</h1>
            <h2  className={style.Subtitulo}>{params.Subtitulo}</h2>
        </div>
    )
}

export default Mensagem