import React from 'react'
import style from './index.module.css'
import Editar from './ModaIrParaAtv/index'
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
                        <a className={style.tituloconteiner}></a>
                        <div className={style.atividadesconteiner}>
                            <a className={style.tituloatvconteiner}> ATIVIDADE</a>
                            <button className={style.botaoeditar} onClick={() => settOpenModal(true)}>Editar</button>
                            <Editar className={style.Modal} titulo="Poste ou Edite Atividades" isOpenn={openModal} settModalOpen={() => settOpenModal(!openModal)} />
                            <button className={style.botaoapagar}>APAGAR</button>

                        </div>
                    </div>
                    <div className={style.conteinerpostar}>
                        <h1 className={style.conteinerpostarTitulo}>POSTAR ATIVIDADES</h1>
                        <form className={style.fomulario}>
                        <label className={style.texto}>Horas de curso(somente inteiras)
                                ( de 00:00 a 12:00):</label>
                            <input className={style.tabelahora} type='time' step={3600000} min={0} max={12} />
                            <input className={style.tabela} type='text' />
                            <input className={style.tabela} type='text'/>
                            <textarea className={style.descricao} placeholder="descrição" maxLength={500} />

                            <button className={style.botaopostar}>POSTAR</button>
                        </form>
                    </div>
                </div>
            </section>
        );
    }
    return null
}
