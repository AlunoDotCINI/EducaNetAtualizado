import Chart from "../ChartVerAula/Chart"
import style from "./index.module.css"
import ModalPostClass from "./ModalVerCursos/index"
import { useState } from 'react';

export default function VerClass(params){
    const [openModal,setOpenModal] = useState(false) 
    return (
        <section className={style.conteudo}>
            <h1 className={style.titulo}>{params.Titulo}</h1>
            <div className={style.conteudocards}>
                <div className={style.CardUm}>
                    <h1 className={style.nome}>CURSOS CADASTRADOS</h1>
                    <a className={style.itens}>VIDEO AULA MATEMATICA</a>
                    <a className={style.itens}>{params.itens}</a>
                    <a className={style.itens}>{params.itens}</a>
                </div>
                <div className={style.CardDois}>
                    <button className={style.acao}onClick={()=> setOpenModal(true)}>Veja ou cadastre-se em novas aualas</button>
                    <ModalPostClass className={style.modal} isOpen={openModal} setModalOpen={()=> setOpenModal(!openModal)}/>
                </div>
            </div>
            <div className={style.CardTres}>
                <h1 className={style.NomeCardDois}>Cursos Realizados</h1>
                <Chart className={style.grafico} />
            </div>
        </section>
    );
};
