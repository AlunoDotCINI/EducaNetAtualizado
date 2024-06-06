import style from "./index.module.css"

export default function Question (){
    return(
    <form className={style.fomulario}>
    <h1>QUESTAO</h1>
        <input className={style.tabela} type='text' placeholder="TITULO DA QUESTAO" required/>
        <textarea className={style.descricao} placeholder="Enunciado" maxLength={500} required />
        <input className={style.tabela} type='text' placeholder="ALTERNATIVA A" required/>
        <input className={style.tabela} type='text' placeholder="ALTERNATIVA B" required/>
        <input className={style.tabela} type='text' placeholder="ALTERNATIVA C" required/>
    </form>
    )
}