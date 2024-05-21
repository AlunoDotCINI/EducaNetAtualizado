import style from "./index.module.css"

export default function Question (){
    return(
    <form className={style.fomulario}>
    <h1>QUESTAO</h1>
        <input className={style.tabela} type='text' placeholder="TITULO DA QUESTAO"/>
        <textarea className={style.descricao} placeholder="Enunciado" maxLength={500} />
        <input className={style.tabela} type='text' placeholder="ALTERNATIVA A"/>
        <input className={style.tabela} type='text' placeholder="ALTERNATIVA B"/>
        <input className={style.tabela} type='text' placeholder="ALTERNATIVA C"/>
    </form>
    )
}