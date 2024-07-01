import React, { useEffect, useState } from 'react';
import style from './index.module.css';
import VerCursos from './ModalIrParaCurso/index';
import api from '../../../Service/api';

export default function ModalPostClass({ isOpen, setModalOpen }) {
    const [openModal, setOpenModal] = useState(false);

    let userId = sessionStorage.getItem("userId");

    //Por id do user
    const [postu, setPostu] = useState([]);

    useEffect(() => {
        const userIdInt = parseInt(userId, 10); // Converte para inteiro com base 10
        console.log(userIdInt)
        api.get(`/CoursesById/${userId}`)
            .then((response) => {
                setPostu(response.data);
            })
            .catch(() => {
                console.log('Erro ao buscar os cursos');
            });
    }, []);
    // API para buscar todos os cursos
    const [post, setPost] = useState([]);

    useEffect(() => {
        api.get('/course/AllCourses')
            .then((response) => {
                setPost(response.data);
            })
            .catch(() => {
                console.log('Erro ao buscar os cursos');
            });
    }, []);

   



    if (isOpen) {
        return (
            <section className={style.modalcorpo}>
                <h1 className={style.fechar} onClick={setModalOpen}>FECHAR</h1>
                <div className={style.paititulo}>
                    <h1 className={style.titulo}>Ver Aulas</h1>
                </div>

                <div className={style.estruturacard}>
                    <div className={style.conteinerverauala}>
                        <a className={style.tituloconteiner}>Curso em Aberto</a>
                        {postu.map((course, key) => {
                            return (
                                <div className={style.verconteiner} key={key}>
                                    <a className={style.aualasList}>{course.courseName}</a>
                                    <button className={style.botaosairdocruso}>Sair do Curso</button>

                                </div>
                            );
                        })}
                    </div>
                    <div className={style.conteinerverauala}>
                        <h1 className={style.tituloconteiner}>PROCURE NOVOS CURSOS</h1>
                        {post.map((course, key) => {
                            let courseid = course.courseId

                            const handleCheck = async () => {
                                try {
                                    const response = await api.post('/JoinUserInCourse', { userId: userId, courseId: courseid })
                                }
                                catch (error) {
                                    console.log(error)
                                }
                            }
                            return (
                                <div className={style.verconteiner} key={key}>
                                    <a className={style.aualasList}>{course.courseName}</a>
                                    <button className={style.botaosobre} onClick={handleCheck} >Entrar neste curso
                                    </button>
                                    <VerCursos isOpenn={openModal} settModalOpen={() => {
                                        setOpenModal(!openModal);
                                    }} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        );
    }
    return null;
}