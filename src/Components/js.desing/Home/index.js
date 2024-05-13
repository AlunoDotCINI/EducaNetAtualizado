import { useState} from 'react';
import fundo from '../../img/fundo.jpg'
import Model from '../Model/Model';
import style from './index.module.css'

export default function Inicio(){
const [openModal,setOpenModal] = useState(false) 
    return(
        
        <div id="#" className={style.conteiner }>
        <img className={style.Imagem}src={fundo}></img>
        <div className={style.txtgeral}>
        <figcaption className={style.texto}>MUDE O JEITO</figcaption>
        <figcaption className={style.subtexto}>DE APRENDER!!!</figcaption>
        <button className={style.botao} onClick={()=> setOpenModal(true)}>JUNTE-SE A EQUIPE!</button>
        <Model isOpen={openModal} setModalOpen={()=> setOpenModal(!openModal)}></Model>
        </div>
        </div>
        
    )
}
