import style from "./index.module.css"
import api from "../../Service/api";
import { useState } from 'react';
import { useEffect } from "react";
import { Link } from 'react-router-dom'; 


export default function VerClass() {
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
    //###########################################################

    const [postById, setPostById] = useState([]);
    var id= sessionStorage.getItem("userId")

    useEffect(() => {
        api.get(`/CoursesById/${id}`)
        .then((response) => {
            setPostById(response.data);
        })
        .catch(() => {
            console.log('erro ao editar esse curso');
        });
    });


    return (
        <section className={style.conteudo}>
            <div className={style.conteudocards}>
                <div className={style.CardUm}>
                    <h1 className={style.nome_cardUm}>Cursos Cadastrados</h1>
                        {postById.map((course, key4) => {
                      
                            return (
                                <div className={style.verconteiner} key={key4}>
                                    <button className={style.botaovercurso}> <Link to="/students/courses/seemycourse" className={style.link}>Sair do curso</Link></button>
                                    <a className={style.itens}>{course.courseName}</a>
                                    
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className={style.CardDois}>
                    <h1 className={style.nome_cardDois}>PROCURE CURSOS</h1>
                    <div className={style.vercurso}>
                    {post.map((course, key5) => {
                              function setCourse(){
                                sessionStorage.setItem("courseId",course.courseId)
                            }
                            return (
                                <div className={style.verconteiner} key={key5}>
                                    <a className={style.titulocurso}>{course.courseName}</a>
                                    <button className={style.botaovercurso} onClick={setCourse}> <Link to="/students/courses/seecourse" className={style.link}>Ver Curso</Link></button>
                                </div>
                            );
                        })}
                        
                    </div>
                </div>
        </section>
    );
};
