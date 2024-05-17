import Chart from "../ChartVerAtividade/Chart"
import style from "./index.module.css"
import ModalPostClass from "./ModalVerAtividade/index"
import { useState } from 'react';

export default function VerActivity(params){
    const [openModal,setOpenModal] = useState(false) 
    return (
        <section className={style.conteudo}>
            <div className={style.conteudocards}>
                <div className={style.CardUm}>
                    <h1 className={style.nome}>Atividades</h1>
                    <a className={style.itens}>{params.itens}</a>
                    <a className={style.itens}>{params.itens}</a>
                    <a className={style.itens}>{params.itens}</a>
                </div>
                <div className={style.CardDois}>
                    <button className={style.acao}onClick={()=> setOpenModal(true)}>Ir para Atividades</button>
                    <ModalPostClass className={style.modal}isOpen={openModal} setModalOpen={()=> setOpenModal(!openModal)}/>
                </div>
            </div>
            <div className={style.CardTres}>
                <h1 className={style.NomeCardDois}>Atividades feitas!!</h1>
                <Chart className={style.grafico} />
            </div>
        </section>
    );
};
