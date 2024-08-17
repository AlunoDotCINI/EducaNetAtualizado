import style from "./index.module.css"
import api from "../../Service/api";
import { useState } from 'react';
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function VerClass() {
    const [openModal, setOpenModal] = useState(false)

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

    return (
        <section className={style.conteudo}>
            <div className={style.conteudocards}>
                <div className={style.CardUm}>
                    <h1 className={style.nome_cardUm}>Cursos Cadastrados</h1>
                    <div className={style.cursoscadastrados}>
                        <a className={style.itens}>Morbi iaculis quis sapien at vehicula. </a>
                        <button className={style.botaovercursoaberto}><Link to="/students/courses/seemycourse" className={style.link}> Ver Curso</Link></button>
                    </div>
                        {post.map((course, key4) => {
                            return (
                                <div className={style.verconteiner} key={key4}>
                                    <a className={style.itens}>{course.courseName}</a>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className={style.CardDois}>
                    <h1 className={style.nome_cardDois}>PROCURE CURSPS</h1>
                    <div className={style.vercurso}>
                        <a className={style.titulocurso}>CURSO NOME</a>
                        <button className={style.botaovercurso}> <Link to="/students/courses/seecourse" className={style.link}>Ver Curso</Link></button>
                    </div>
                </div>
        </section>
    );
};
