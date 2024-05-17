import React from 'react'
import style from './index.module.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function ModalPostClass({ isOpen, setModalOpen }) {
    const [openModal, settOpenModal] = useState(false)

    if (isOpen) {
        return (
            <section className={style.modalcorpo}>
                <h1 className={style.fechar} onClick={setModalOpen}>FECHAR</h1>
                <div className={style.paititulo}>
                    <h1 className={style.titulo}>Ver Aulas</h1>
                </div>
                <div className={style.estruturacard}>
                    <div className={style.conteinerverauala}>
                        <a className={style.tituloconteiner}>Video-Aulas em Aberto</a>
                        <div className={style.veraulaconteiner}>
                             <a className={style.aualasList}> Aula</a>
                            <Link to ='/students/watch'><button className={style.botaoveraula}>Ver Aula</button></Link>
                        </div>
                        
                        
                    </div>

                </div>
            </section>
        );
    }
    return null
}
