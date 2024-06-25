import React from 'react'
import style from './index.module.css'
import VerCursos from './ModalIrParaCurso/index'
import { useState } from 'react'
import api from '../../../Service/api'
export default function ModalPostClass({ isOpen, setModalOpen }) {
    const [openModal, settOpenModal] = useState(false)
     //API CADASTRO
    const [vdescricao,setDescricao] = useState('');
    const [vnome,setNome] = useState('');
    const [vhorascurso,setHorasCurso] = useState('');
    const [vtemacurso,setTemaCurso] = useState('');

    const handleSubmit = async () =>{
    try{
    const response = await api.post('/course/coursesave',{courseName:vnome,workload:vhorascurso,description:vdescricao ,courseClass:vtemacurso})
    console.log(response.data)
    console.log("Curso Cadastrado!!")
     }
    catch(error){
   console.log(error)
 }
}
    //PROTEGER DE CARACTERES ESPECIAS
    const checkboxSpecialChar = (e) => {
        if (!/^[a-zA-Z0-9áàâãéèêíïóôõöúüçÁÀÂÃÉÈÊÍÏÓÔÕÖÚÜÇ]*$/.test(e.key)   || e.key === "&") {
            e.preventDefault();
        }
    }; 

    //PROTEGER DE CERTOS CARACTERES
    const checkboxChar = (e) => {
        if (!/^[a-zA-Z0-9áàâãéèêíïóôõöúüçÁÀÂÃÉÈÊÍÏÓÔÕÖÚÜÇ!^&()_[\]|;:'",.?/\\-\s]*$/.test(e.key)) {
            e.preventDefault();
        }
    };  

    //PROTEGER DE LETRAS 
    const checkboxNumber = (e) => {
        if (!/[0-9]|Backspace/.test(e.key)) {
            e.preventDefault();
        }
    };  

    
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
                            
                        <input className={style.tabela} type='text' placeholder='NOME DO CURSO' 
                        required maxLength={65}
                        onChange= {(e)=> setNome(e.target.value)} 
                        onKeyDown={ (e) =>checkboxSpecialChar(e)}/>
                        
                        <textarea className={style.descricao} placeholder="DESCRIÇÃO" 
                        required maxLength={500} 
                        onChange= {(e)=> setDescricao(e.target.value)} 
                        onKeyDown={ (e) =>checkboxChar(e)}/>

                        <input className={style.tabela} type='text' placeholder='HORAS DE CURSOS (SOMENTE INTEIROS)' 
                        required maxLength={2}
                        onChange= {(e)=> setHorasCurso(e.target.value)} 
                        onKeyDown={ (e) =>checkboxNumber(e)}/> 

                        <input className={style.tabela} type='text' placeholder='TEMA CURSO'
                        required maxLength={20}  
                        onChange= {(e)=> setTemaCurso(e.target.value)} 
                        onKeyDown={ (e) =>checkboxSpecialChar(e)}/>        

                        <button className={style.botaopostar} type='button' onClick={handleSubmit} >POSTAR</button>
                        </div>
                    </form>
                    <div className={style.conteinervercurso}>
                        <h1 className={style.tituloconteiner}>CURSO EM ABERTO</h1>
                        <div className={style.verconteiner}>
                            <a className={style.aualasList}> CURSO TAL</a>
                        <button className={style.botaoEdite} onClick={() => settOpenModal(true)}>EDITE</button>
                        <button className={style.botaoApagar}>APAGAR</button>
                        <VerCursos className={style.Modal}  isOpenn={openModal} settModalOpen={() => settOpenModal(!openModal)}/>
                        </div>
                        
                    </div>
                </div>
            </section>
        );
    }
    return null
}
