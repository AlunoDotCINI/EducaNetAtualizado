import style from "./index.module.css"
import { useEffect, useState } from 'react';
import api from "../../Service/api";

export default function VerClass(params){
    const [openModal,setOpenModal] = useState(false) 
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
            <h1 className={style.titulo}>{params.Titulo}</h1>
            <div className={style.conteudocards}>
                <div className={style.CardUm}>
                    {post.map((course, key) => {
                            return (
                    <a className={style.itens}>{course.courseName}</a>
                            );
                        })}
                </div>
                <div className={style.CardDois}>
                    <button className={style.acao}onClick={()=> setOpenModal(true)}>Veja as aulas</button>
                </div>
            </div>
            <div className={style.CardTres}>
                <h1 className={style.NomeCardDois}>{params.NomeCardDois}</h1>
            </div>
        </section>
    );
};
