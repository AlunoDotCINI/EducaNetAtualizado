import style from "./index.module.css"
export default function Editactivity(){
    return (
        <div className={style.conteudo} >
           <div  className={style.coteudocard}>
            <h1 className={style.titulo}>EDITE SUA ATIVIDADE</h1>
            <input type="text"className={style.entrada} placeholder="TÍTULO QUESTÃO"/>
            <textarea className={style.area}   placeholder="ENUNCIADO"/>
            <input type="text"className={style.entrada} placeholder="ALTERNATIVA"/>
            <input type="text"className={style.entrada} placeholder="ALTERNATIVA"/>
            <input type="text"className={style.entrada} placeholder="ALTERNATIVA"/>
            <button className={style.botao}>EDITAR ATIVIDADE</button>
            </div>
        </div>
    )
}