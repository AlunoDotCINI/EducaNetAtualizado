import style from "./index.module.css"
export default function Postctivity(){
    return (
        <div className={style.conteudo} >
           <div  className={style.coteudocard}>
            <h1 className={style.titulo}>POSTE SUA ATIVIDADE</h1>
            <input type="text"className={style.entrada} placeholder="TITULO QUESTÃO"/>
            <textarea className={style.area}   placeholder="ENUNCIADO"/>
            <input type="text"className={style.entrada} placeholder="ALTERNATIVA"/>
            <input type="text"className={style.entrada} placeholder="ALTERNATIVA"/>
            <input type="text"className={style.entrada} placeholder="ALTERNATIVA"/>
            <button className={style.botao}>POSTAR ATIVIDADE</button>
            </div>
        </div>
    )
}