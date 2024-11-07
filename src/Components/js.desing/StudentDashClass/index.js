import style from "./index.module.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../Service/api";

export default function VerClass() {
    const [post, setPost] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState(null); // Estado para o curso selecionado
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

    // Função para redirecionar para a tela de atividades
    const handleVerAula = () => {
        if (selectedCourse) {
            // Redireciona para a página de atividades, passando o ID do curso selecionado
            navigate("/atividades", { state: { courseName: selectedCourse.courseName, courseId: selectedCourse.id } });
        } else {
            alert("Por favor, selecione um curso.");
        }
    };

    return (
        <section className={style.conteudo}>
            <div className={style.conteudocards}>
                <div className={style.CardUm}>
                    <h1 className={style.nome_cardUm}>Vídeo Aulas</h1>
                    {post.map((course, key) => (
                        <a
                            key={key}
                            className={style.itens}
                            onClick={() => setSelectedCourse(course)} // Define o curso selecionado
                            style={{
                                cursor: "pointer",
                                fontWeight: selectedCourse?.id === course.id ? "bold" : "normal"
                            }}
                        >
                            {course.courseName}
                        </a>
                    ))}
                </div>
            </div>
            <div className={style.CardDois}>
                <h1 className={style.nome_cardDois}>Vídeo Aulas para você ver</h1>
                <div className={style.veraula}>
                    <input
                        type="text"
                        className={style.tituloaula}
                        placeholder="video aula nome:"
                        value={selectedCourse ? selectedCourse.courseName : ""} // Exibe o nome do curso selecionado
                        readOnly // O input será apenas para exibição do nome do curso
                        style={{ color: 'black' }} // Definir a cor do texto como preta
                    />
                    <button className={style.botaoveraula} onClick={handleVerAula}>Ver Aula</button>
                </div>
            </div>
        </section>
    );
}
