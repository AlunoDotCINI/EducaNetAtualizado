import React from 'react'
import style from './index.module.css'
import Editar from './ModalEdite/index'
import { useState } from 'react'
import InputQuestao from '../InputQuestao/index' 
export default function ModalPostClass( {isOpen, setModalOpen,params} ) {
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
                    <div className={style.conteinerpostaratv}>
                        <h1 className={style.conteinerpostarTitulo}>POSTAR ATIVIDADES</h1>
                          <InputQuestao/> 
                          
                          <label className={style.label}>Qual curso voce deseja adicionar essa aula?</label>
                            <select className={style.select} >
                                <option disabled selected>Escolha</option>
                                <option>Escolha</option>
                                <option>Escolha</option>
                            </select>
                    </div>
                </div>
            </section>
        );
    }
    return null
}
