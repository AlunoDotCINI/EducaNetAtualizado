import React from 'react'
import style from './index.module.css'
import VerCursos from './ModalIrParaCurso/index'
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
                        <a className={style.tituloconteiner}> Aulas em Aberto</a>
                        <div className={style.veraulaconteiner}>
                            <div className={style.background}>
                                <a className={style.aualasList}> ATIVIDADE</a>
                            </div>
                      <button className={style.botaoveraula}><Link to ='/students/watch'>Ver Aula</Link></button>
                        </div>
                    </div>
                    <div className={style.conteinerverauala}>
                        <h1 className={style.tituloconteiner}>PROCURE NOVAS AULAS</h1>
                        <div className={style.conteinercurso}>
                        <div className={style.background}>
                            <a className={style.aualasList}> CURSO TAL</a>
                        </div>
                        <button className={style.botaosobre} onClick={() => settOpenModal(true)}>Sobre a Aula</button>
                        <VerCursos className={style.Modal} titulo="Poste ou Edite Atividades" isOpenn={openModal} settModalOpen={() => settOpenModal(!openModal)} />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
    return null
}
