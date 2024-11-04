import style from "./index.module.css"
export default function EditClass(){
    return (
        <div className={style.conteudo} >
           <div  className={style.coteudocard}>
            <h1 className={style.titulo}>EDITE SUA AULA</h1>
            <input type="text"className={style.entrada} placeholder="TÍTULO QUESTÃO"/>
            <select className={style.selecione}>
                <option className={style.opcoes} disabled >SELECIONE UM CURSO</option>
            </select>
            <input type="text"className={style.entrada} placeholder="NOME DA AULA"/>
            <input type="text"className={style.entrada} placeholder="ID DA AULA(YOUTUBE)"/>
            <textarea className={style.area}   placeholder="DESCRIÇÃO"/>
            <button className={style.botao}>EDITAR AULA</button>
            </div>
        </div>
    )
}