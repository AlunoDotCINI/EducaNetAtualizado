import React from 'react'
import style from './index.module.css'
import Editar from './ModalEdite/index'
import { useState } from 'react'
export default function ModalPostClass( {isOpen, setModalOpen,} ) {
    const [openModal, settOpenModal] = useState(false)

    if (isOpen) {
        return (
            <section className={style.modalcorpo}>
                <div className={style.pai}>
                <h1 className={style.titulo}>{}</h1>
                <h1 className={style.fechar} onClick={setModalOpen}>FECHAR</h1>
                </div>
                <div className={style.estruturacard}>
                    <div className={style.conteinerveraulaspostadas}>
                        <a className={style.tituloconteiner}>AUALA POSTADAS</a>
                        <div className={style.atividadesconteiner}>
                            <a className={style.tituloatvconteiner}> AUALA A</a>
                            <button className={style.botaoeditar} onClick={() => settOpenModal(true)}>Editar</button>
                            <Editar className={style.Modal} titulo="Poste ou Edite Atividades" isOpenn={openModal} settModalOpen={() => settOpenModal(!openModal)} />
                            <button className={style.botaoapagar}>APAGAR</button>

                        </div>
                        
                    </div>
                    <form className={style.conteinerpostar}>
                        <h1 className={style.conteinerpostarTitulo}>POSTAR AULA</h1>
                            <label className={style.label}>Qual curso voce deseja adicionar essa aula?</label>
                            <select className={style.select} >
                                <option disabled selected>Escolha</option>
                                <option>Escolha</option>
                                <option>Escolha</option>
                            </select>
                            <input className={style.tabela} type='text' placeholder='NOME DA AULA' required />
                            <textarea className={style.descricao} placeholder="DESCRIÇÃO" maxLength={500} required/>
                            <input className={style.tabela} type='text' placeholder='ID DA AULA   (NO YOUTUBE)' required/>                            
                            <button className={style.botaopostar}>POSTAR</button>
                    </form>
                </div>
            </section>
        );
    }
    return null
}
