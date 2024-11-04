import { useState } from 'react';
import Model from '../Model/Model';
import style from './index.module.css'
import {HashLink as Link} from 'react-router-hash-link'
export default function Cabacalho(){
    const [openModal,setOpenModal] = useState(false) 

    return (
        <header className={style.Cabecalho}>
            <div className={style.divTitulo}>
            <h1 className={style.Educa}>EDUCA-</h1>
            <h1 className={style.Net}>NET</h1>
            </div>
            <div className={style.divDirecionadores}> 
            <Link to="" className={style.direcionadores}>INÍCIO</Link>
            <Link smooth to="#HowItWorks"className={style.direcionadores}>COMO FUNCIONA</Link>
            <Link smooth to="#History" className={style.direcionadores}>NOSSA HISTÓRIA</Link>
            <Link smooth to="#Footer"className={style.direcionadores}>CONTATE NOS</Link>
            </div>
            <button className={style.btn} onClick={()=> setOpenModal(true)}>Conecte-se</button>
            <Model isOpen={openModal} setModalOpen={()=> setOpenModal(!openModal)}></Model>
        </header>
    );
};
