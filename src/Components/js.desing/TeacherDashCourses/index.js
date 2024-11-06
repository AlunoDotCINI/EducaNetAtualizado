import style from "./index.module.css"
import { useState } from 'react';
import api from "../../Service/api";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function DashClass(params){
//Todos Cursos
    const [post, setPostu] = useState([]);

    useEffect(() => {
        api.get("/course/AllCourses")
            .then((response) => {
                setPostu(response.data);
            })
            .catch(() => {
                console.log('Erro ao buscar os cursos');
            });
    }, []);

    const [postById, setPost] = useState([]);

    useEffect(() => {
        api.get("/course/courseId")
        .then((response) => {
            setPost(response.data);
        })
        .catch(() => {
            console.log('erro ao editar esse curso');
        });
    });

    return (
        <section className={style.conteudo}>
            <div className={style.conteudocards}>
                <div className={style.CardUm}>
                    <h1 className={style.nome}>CURSOS CADASTRADOS</h1>
                    {post.map((course, key) => {
                            return (
                        <a className={style.itens}>{course.courseName}</a>
                            );
                        })}
                </div>
                <div className={style.CardDois}>
                <Link to="/teacher/courses/post" className={style.link}><button className={style.poste_curso}> POSTE UM CURSO</button></Link>
                </div>
            </div>
            <div className={style.CardTres}>
                <h1 className={style.nome_cardTres}>EDITE SEUS CURSOS</h1>
                
                {post.map((course, key) => {
                    return (
                        <div className={style.cursoeditar}>
                        <a className={style.titulocurso}>{course.courseName}</a>
                        <Link to="/teacher/courses/edit" className={style.link}>
                             <button className={style.botaoeditar}> Editar</button>
                        </Link>
                        <button className={style.botaoapagar} >Apagar</button>
                    </div>
                    )
                })}
               
            </div>
        </section>
    );
};
