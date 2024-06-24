import React, { useEffect } from 'react'
import style from './index.module.css'
import VerCursos from './ModalIrParaCurso/index'
import { useState } from 'react'
import api from '../../../Service/api'
export default function ModalPostClass({ isOpen, setModalOpen }) {
    const [openModal, settOpenModal] = useState(false)
    let [id,setId] = useState ('')
    
    const parentToChild =()=>{
        setId =post.courseId
        return id;
    }
    //API CADASTRO   
    const [post,setPost] = useState([])

   useEffect(() =>{
   api.get('/course/AllCourses',)
   .then((response) => {
    setPost(response.data)
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
                            {post.map((post,key) =>{
                                            
                                return(
                                    <div className={style.verconteiner} key={key}>
                                    <a className={style.aualasList}>{post.courseName}</a>
                                    <button className={style.botaosobre} onClick={() =>{
                                        settOpenModal(true) 
                                        parentToChild()}}>Sobre a Aula</button>
                                    <VerCursos isOpenn={openModal}  settModalOpen={() => settOpenModal(!openModal)}/>
                                    
                                    </div>
                                )
                            })}
                        
                    </div>
                </div>
            </section>
        );
    }
    return null
}
