import style from "./index.module.css"
export default function Profile() {
    return (
        <div className={style.conteudo} >
            <div className={style.coteudocard}>
                <h1 className={style.titulo}>EDITE SEU PERFIL</h1>
                <input type="text" className={style.entrada} placeholder="NOME" />
                <input type="text" className={style.entrada} placeholder="SOBRENOME" />
                <input type="text" className={style.entrada} placeholder="EMAIL" />
                <input type="text" className={style.entrada} placeholder="CPF" />
                <input type="text" className={style.entrada} placeholder="SENHA" />

                <button className={style.botao}>EDITAR PEFIL</button>
            </div>
        </div>
    )
}