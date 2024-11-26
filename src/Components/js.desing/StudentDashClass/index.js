import style from "./index.module.css"
import { useEffect, useState } from 'react';
import api from "../../Service/api";
import { Link } from "react-router-dom";

export default function VerClass(params) {
    const idUsuario = sessionStorage.getItem("userId");
    const [post, setPost] = useState([]);

    useEffect(() => {
        api.get(`/VideoCoursesById/${idUsuario}`)
            .then((response) => {
                setPost(response.data);
            })
            .catch(() => {
                console.log('Erro ao buscar os cursos');
            });
    }, []);

    // Função que salva o ID do vídeo no sessionStorage
    const handleVideoClick = (videoCourseId) => {
        sessionStorage.setItem("videoCourseId", videoCourseId); // Armazena o ID do vídeo no sessionStorage
    };

    return (
        <section className={style.conteudo}>
            <div className={style.conteudocards}>
                <div className={style.CardUm}>
                    <h1 className={style.nome_cardUm}>Vídeo Aulas</h1>
                    {post.map((course, key) => {
                        return (
                            <a key={key} className={style.itens}>{course.videoCourseName}</a>
                        );
                    })}
                </div>
            </div>
            <div className={style.CardDois}>
                <h1 className={style.nome_cardDois}>Vídeo Aulas para você ver</h1>

                <div>
                    {post.map((course, key) => {
                        return (
                            <div key={key} className={style.veraula}>
                                <a className={style.tituloaula}>{course.videoCourseName}</a>
                                <button 
                                    className={style.botaoveraula} 
                                    onClick={() => handleVideoClick(course.videoCourseId)} // Chama a função ao clicar
                                >
                                    <Link className={style.link} to="/students/watch">Ver Aula</Link>
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
