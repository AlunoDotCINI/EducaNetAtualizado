import Chart from "../ChartPostarAtividade/Chart"
import style from "./index.module.css"
import ModalPostClass from "./ModalPostarAula/index"
import { useState } from 'react';

export default function PostActivity(params){
    const [openModal,setOpenModal] = useState(false) 
    return (
        <section className={style.conteudo}>
            <h1 className={style.titulo}>{params.Titulo}</h1>
            <div className={style.conteudocards}>
                <div className={style.CardUm}>
                    <h1 className={style.nome}>{params.NomeCardUm}</h1>
                    <a className={style.itens}>{params.itens}</a>
                    <a className={style.itens}>{params.itens}</a>
                    <a className={style.itens}>{params.itens}</a>
                </div>
                <div className={style.CardDois}>
                    <button className={style.acao}onClick={()=> setOpenModal(true)}>{params.acao}</button>
                    <ModalPostClass className={style.modal} txt="nao da certo"  titulo="nao da certo"isOpen={openModal} setModalOpen={()=> setOpenModal(!openModal)}/>
                </div>
            </div>
            <div className={style.CardTres}>
                <h1 className={style.NomeCardDois}>{params.NomeCardDois}</h1>
                <Chart className={style.grafico} />
            </div>
        </section>
    );
};
