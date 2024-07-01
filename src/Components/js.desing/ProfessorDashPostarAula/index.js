import style from "./index.module.css"
import { useState } from 'react';
import { useEffect } from "react";
import api from "../../Service/api";

export default function PostClass(){
    const [openModal,setOpenModal] = useState(false) 

    //api todos cursos
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

    return (
        <section className={style.conteudo}>
            <div className={style.conteudocards}>
                <div className={style.CardUm}>
                    <h1 className={style.nome}>Cursos Postados</h1>
                    {post.map((course, key) => {
                            return (
                                <a className={style.itens}>{course.courseName}</a>
                            );
                        })}
                </div>
                <div className={style.CardDois}>
                    <button className={style.acao}onClick={()=> setOpenModal(true)}>POSTE AULAS AQUI</button>
                </div>
            </div>
            <div className={style.CardTres}>
                <h1 className={style.NomeCardDois}></h1>
            </div>
        </section>
    );
};
