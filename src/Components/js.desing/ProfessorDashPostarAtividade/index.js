import style from "./index.module.css"
import { useState } from 'react';

export default function PostActivity(params) {
    const [openModal, setOpenModal] = useState(false)
    return (
        <section className={style.conteudo}>
            <div className={style.conteudocards}>
                <div className={style.CardUm}>
                    <h1 className={style.nome}>ATIVIDADES POSTADAS</h1>
                    <a className={style.itens}></a>
                    <a className={style.itens}></a>
                    <a className={style.itens}></a>
                </div>
                <div className={style.CardDois}>
                    <button className={style.acao} onClick={() => setOpenModal(true)}>POSTE UM ATIVIDADE AQUI</button>
                </div>
            </div>
            <div className={style.CardTres}>
                <h1 className={style.NomeCardDois}></h1>
            </div>
        </section>
    );
};
