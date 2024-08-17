import { Link } from "react-router-dom";
import style from "./index.module.css"
import { useState } from 'react';

export default function VerActivity(params){
    return (
        <section className={style.conteudo}>
            <div className={style.conteudocards}>
                <div className={style.CardUm}>
                    <h1 className={style.nome_cardUm}>Atividades</h1>
                    <a className={style.itens}>{params.itens}</a>
                </div>
            </div>
            <div className={style.CardDois}>
                <h1 className={style.nome_cardDois}>Atividades a fazer!</h1>
                <div className={style.veratividade}>
                    <a className={style.tituloatividade}>ATIVIDADE NOME</a>
                    <button className={style.botaoveratv}><Link to="/students/goactivity" className={style.link}> Ver Atividade </Link></button>
                </div>
            </div>
        </section>
    );
};
