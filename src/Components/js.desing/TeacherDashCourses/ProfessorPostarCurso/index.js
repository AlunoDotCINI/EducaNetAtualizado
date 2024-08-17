import style from "./index.module.css"
export default function PostCourse() {
    return (
        <div className={style.conteudo} >
            <div className={style.coteudocard}>
                <h1 className={style.titulo}>POSTE SUA CURSO</h1>
                <input type="text" className={style.entrada} placeholder="NOME DO CURSO" />
                <textarea className={style.area} placeholder="DESCRIÇÃO DO CURSO" />
                <input type="text" className={style.entrada} placeholder="HORAS DO CURSO" />
                <input type="text" className={style.entrada} placeholder="TEMA DO CURSO" />
                <button className={style.botao}>POSTAR CURSO</button>
            </div>
        </div>
    )
}