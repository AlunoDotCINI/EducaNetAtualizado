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
                    <h1 className={style.titulo}>Ver Cursos</h1>
                </div>
                <div className={style.estruturacard}>
                    <form className={style.conteinerpostarcuso}>
                        <a className={style.tituloconteiner}>CRIAR UM CURSO</a>
                        <div className={style.verconteiner}>
                        <input className={style.tabela} type='text' placeholder='NOME DO CURSO' required />
                        <textarea className={style.descricao} placeholder="DESCRIÇÃO" maxLength={500} required/>
                        <input className={style.tabela} type='text' placeholder='HORAS DE CURSOS (SOMENTE INTEIROS)' required/>  
                        <input className={style.tabela} type='text' placeholder='TEMA CURSO'required />                                                      
                        <button className={style.botaopostar} type='submit'>POSTAR</button>
                        </div>
                    </form>
                    <div className={style.conteinervercurso}>
                        <h1 className={style.tituloconteiner}>CURSO EM ABERTO</h1>
                        <div className={style.verconteiner}>
                            <a className={style.aualasList}> CURSO TAL</a>
                        <button className={style.botaoEdite} onClick={() => settOpenModal(true)}>EDITE</button>
                        <button className={style.botaoApagar}>APAGAR</button>
                        <VerCursos className={style.Modal}  isOpenn={openModal} settModalOpen={() => settOpenModal(!openModal)} />
                        </div>
                        
                    </div>
                </div>
            </section>
        );
    }
    return null
}
