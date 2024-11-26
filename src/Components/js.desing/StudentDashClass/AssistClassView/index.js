import style from "./index.module.css"
import { useEffect, useState } from 'react';
import api from "../../../Service/api";
import YouTube from "react-youtube";

export default function ViewClass(){
   const idVideoCourse = sessionStorage.getItem('videoCourseId')

   const [post, setPost] = useState([]);

    useEffect(() => {
        api.get(`/VideoCourserById/${idVideoCourse}`)
            .then((response) => {
                setPost(response.data);
            })
            .catch(() => {
                console.log('Erro ao buscar os cursos');
            });
    }, []);

    return (
        <section className={style.conteudo}>
            {post.map((course, key) => {
                return (
                    <div key={key}>
                        <h1 className={style.titulovideo}>{course.videoCourseName}</h1>
                        <div>
                            <a className={style.descricaovideo}>{course.videoCourseDescription}</a>
                        </div>
                        
                        {/* Adicionando o componente YouTube */}
                        <div className={style.youtubeContainer}>
                            <YouTube videoId={course.videoCourseDescription} /> {/* Presumindo que você tem o ID do vídeo na resposta */}
                        </div>
                    </div>
                );
            })}
        </section>
    )
}
