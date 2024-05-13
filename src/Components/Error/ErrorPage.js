import style from'./index.module.css'
import Robo from '../img/roboerro.png'
export default function ErrorPage(){
    return(
        <section className={style.corpo}>
        <div className={style.texto}>
        <h1 className={style.titulo}>ERROR 404,NOT FOUND!!!</h1>
        <h1 className={style.subtitulo}>Ops!!!Esse caminho não <span className={style.span}>EXISTE</span></h1>
        <h1 className={style.subtitulo}>TENTE NOVAMENTE,CASO ERRO PERSISTA NÓS CONTATE.</h1>
        </div>
        <img className={style.Robo} src={Robo}/>
        </section>
    )
}