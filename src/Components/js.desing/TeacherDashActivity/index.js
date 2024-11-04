import { Link } from "react-router-dom";
import style from "./index.module.css"

export default function DashActivity() {
    return (
        <section className={style.conteudo}>
            <div className={style.conteudocards}>
                <div className={style.CardUm}>
                    <h1 className={style.nome_cardUm}>ATIVIDADES POSTADAS</h1>
                    <a className={style.itens}></a>
                </div>
                <div className={style.CardDois}>
                    <Link to="/teacher/activity/post"><button className={style.poste_atividades}>POSTE UMA ATIVIDADE AQUI</button></Link>
                </div>
            </div>
            <div className={style.CardTres}>
                <h1 className={style.nome_cardTres}>EDITAR SUAS ATIVIDADES</h1>
                <div className={style.atividadeeditar}>
                    <a className={style.tituloatividade}>VÍDEO AULA NOME:</a>
                    <Link to="/teacher/activity/edit"><button className={style.botaoeditar}>Editar</button></Link>
                    <button className={style.botaoapagar} >Apagar</button>
                </div>
            </div>
        </section>
    );
};
