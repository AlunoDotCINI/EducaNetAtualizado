import YouTube from "react-youtube"
import style from './index.module.css'
export default function ViewClass(){
    const ops ={
        height:'590',
        width:'1200',
        aspectRatio:'16/9'
    }
    return(
        <section className={style.conteudo}>
            <h1 className={style.titulovideo}>TITULO AULA</h1>
            <YouTube videoId="" className={style.YouTube}   opts={ops}/>
            <h2 className={style.titulodescricaovideo} >DESCRISÃO</h2>
            <div>
                <a className={style.descricaovideo}>loren</a>
            </div>
        </section>
    )
}