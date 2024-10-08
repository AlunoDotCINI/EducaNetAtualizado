import style from './index.module.css'
export default function ViewClass(){
 
    return(
        <section className={style.conteudo}>
            <h1 className={style.titulovideo}>TITULO AULA</h1>
            <h2 className={style.titulodescricaovideo} >DESCRIÇÃO</h2>
            <div>
                <a className={style.descricaovideo}>loren</a>
            </div>
        </section>
    )
}