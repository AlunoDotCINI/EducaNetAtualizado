import React, { useEffect } from 'react'
import style from './index.module.css'
import VerCursos from './ModalIrParaCurso/index'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../../../Service/api'
export default function ModalPostClass({ isOpen, setModalOpen }) {
    const [openModal, settOpenModal] = useState(false)

       //API CADASTRO
   const [vdescricao,setDescricao] = useState('');
   const [vnome,setNome] = useState('');
   const [vhorascurso,setHorasCurso] = useState('');
   const [vtemacurso,setTemaCurso] = useState('');

   useEffect(() =>{
   api.get('/course/AllCourses',{courseName:setNome,workload:setHorasCurso,description:setDescricao ,courseClass:setTemaCurso},)
   .then((response) => {
    console.log(response.data)
   })
   .catch(()=>{
    console.log("error")
   })
   
},[])
    if (isOpen) {
        return (
            <section className={style.modalcorpo}>
                <h1 className={style.fechar} onClick={setModalOpen}>FECHAR</h1>
                <div className={style.paititulo}>
                    <h1 className={style.titulo}>Ver Aulas</h1>
                </div>
                <div className={style.estruturacard}>
                    <div className={style.conteinerverauala}>
                        <a className={style.tituloconteiner}> Curso em Aberto</a>
                        <div className={style.verconteiner}>
                                <a className={style.aualasList}></a>
                            <button className={style.botaosairdocruso}>Sair do Curso</button>
                        </div>
                    </div>
                    <div className={style.conteinerverauala}>
                        <h1 className={style.tituloconteiner}>PROCURE NOVOS CURSOS</h1>
                        <div className={style.verconteiner}>
                            <a className={style.aualasList}>{}</a>
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
