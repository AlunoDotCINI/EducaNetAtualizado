import style from "./index.module.css"
import { useState } from 'react';
import { useEffect } from "react";
import api from "../../Service/api";
import { Link } from "react-router-dom";

export default function DashClass() {

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

    //#################################
    return (
        <section className={style.conteudo}>
            <div className={style.conteudocards}>
                <div className={style.CardUm}>
                    <h1 className={style.nome_cardUm}>EDITE SUAS VIDEO AULAS</h1>
                    {post.map((course, key) => {
                        return (
                            <a className={style.itens}>{course.courseName}</a>
                        );
                    })}
                </div>
                <div className={style.CardDois}>
                    <Link to="/teacher/class/post"><button className={style.poste_videoaulas}>POSTE SUAS VIDEO AULAS AQUI</button></Link>
                </div>
            </div>
            <div className={style.CardTres}>
                <h1 className={style.nome_cardTres}>EDITE SUAS VIDEO AUALAS</h1>
                <div className={style.videoeditar}>
                    <a className={style.titulovideoaula}>VIDEO AULA NOME</a>
                    <Link to="/teacher/class/edit" className={style.link}><button className={style.botaoeditar}>Editar</button></Link>
                    <button className={style.botaoapagar} >Apagar</button>
                </div>
            </div>
        </section>
    );
};
