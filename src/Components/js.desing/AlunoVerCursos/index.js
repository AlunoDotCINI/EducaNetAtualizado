import style from "./index.module.css"
import api from "../../Service/api";
import { useState } from 'react';
import { useEffect } from "react";

export default function VerClass() {
    const [openModal,setOpenModal] = useState(false) 
   
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

    
    return (
        <section className={style.conteudo}>
            <div className={style.conteudocards}>
                <div className={style.CardUm}>
                    <h1 className={style.nome}>Cursos Cadastrados</h1>
                    {post.map((course, key4) => {
                        return (
                            <div className={style.verconteiner} key={key4}>
                                <a className={style.itens}>{course.courseName}</a>
                            </div>
                        );
                    })}
                </div>
                <div className={style.CardDois}>
                    <button className={style.acao}onClick={()=> setOpenModal(true)}>Veja ou cadastre-se em novas aualas</button>
                </div>
            </div>
            <div className={style.CardTres}>
                <h1 className={style.NomeCardDois}>Cursos Realizados</h1>
            </div>
        </section>
    );
};
