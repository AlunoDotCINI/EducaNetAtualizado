import style from "./index.module.css";
import api from "../../Service/api";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function VerClass() {
    const [post, setPost] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        api.get('/course/AllCourses')
            .then((response) => {
                setPost(response.data);
            })
            .catch(() => {
                console.log('Erro ao buscar os cursos');
            });
    }, []);

    // Função para redirecionar para a página correta ao clicar em "Ver Curso"
    const handleViewCourse = (course) => {
        if (course.isMyCourse) {
            navigate("/students/courses/seemycourse", { state: { course } });
        } else {
            navigate("/students/courses/seecourse", { state: { course } });
        }
    };

    return (
        <section className={style.conteudo}>
            <div className={style.conteudocards}>
                <div className={style.CardUm}>
                    <h1 className={style.nome_cardUm}>Cursos Cadastrados</h1>

                    {post.map((course, key4) => (
                        <div className={style.verconteiner} key={key4}>
                            <a className={style.itens}>{course.courseName}</a>
                        </div>
                    ))}
                </div>
            </div>
            <div className={style.CardDois}>
                <h1 className={style.nome_cardDois}>PROCURE CURSOS</h1>
                <div className={style.vercurso}>
                    {post.map((course, key4) => (
                        <div className={style.verconteiner} key={key4}>
                            <a className={style.titulocurso}>{course.courseName}</a>
                            <button
                                className={style.botaovercurso}
                                onClick={() => handleViewCourse(course)}
                            >
                                Ver Curso
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
