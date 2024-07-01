import style from "./index.module.css"
import { useState } from 'react';
import api from "../../Service/api";
import { useEffect } from "react";

export default function VerClass(params){
    const [openModal,setOpenModal] = useState(false) 
//coursos por id
    const [postu, setPostu] = useState([]);

    useEffect(() => {
        api.get("/course/AllCourses")
            .then((response) => {
                setPostu(response.data);
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
                    <h1 className={style.nome}>CURSOS CADASTRADOS</h1>
                    {postu.map((course, key) => {
                            return (
                        <a className={style.itens}>{course.courseName}</a>
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
