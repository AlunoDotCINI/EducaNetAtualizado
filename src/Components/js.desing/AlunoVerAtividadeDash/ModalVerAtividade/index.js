import React from 'react'
import style from './index.module.css'
import Editar from './ModaIrParaAtv/index'
import { Link } from 'react-router-dom'

import { useState } from 'react'
export default function ModalPostClass( {isOpen, setModalOpen} ) {
    const [openModal, settOpenModal] = useState(false)

    if (isOpen) {
        return (
            <section className={style.modalcorpo}>
                <div className={style.pai}>
                <h1 className={style.titulo}></h1>
                <h1 className={style.fechar} onClick={setModalOpen}>FECHAR</h1>
                </div>
                <div className={style.estruturacard}>
                    <div className={style.conteinerpostar}>
                        <a className={style.tituloconteiner}>Atividades em Aberto</a>
                        <div className={style.atividadesconteiner}>
                            <a className={style.tituloatvconteiner}> ATIVIDADE</a>
                           <Link to="/students/goactivity">  <button className={style.botaoirparaatv}>Ir para Atividade</button></Link>
                        </div>
                         
                    </div>
                </div>
            </section>
        );
    }
    return null
}
