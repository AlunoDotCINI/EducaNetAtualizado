import style from './index.module.css';
import { useState, useEffect } from 'react';
import api from '../../../Service/api';
import { useNavigate } from 'react-router-dom'; // Importe o hook useNavigate




export default function SobreCurso() {
    const [post, setPost] = useState(null);  // Inicializa como null para verificar se os dados foram carregados
    const [loading, setLoading] = useState(true); // Controla o estado de carregamento
    const [error, setError] = useState(null);  // Controla mensagens de erro
    const navigate = useNavigate(); // Instancia o hook de navegação
    const id = sessionStorage.getItem('courseId');


    const handleSubmit = async () => {
        try {
            const courseClass = sessionStorage.getItem('courseId');
            if (!courseClass) {
                console.log("courseClass não encontrado no sessionStorage");
                return;
            }

            const userId = sessionStorage.getItem('userId');
            if (!userId) {
                console.log("userId não encontrado no sessionStorage");
                return;
            }

            const response = await api.post('/JoinUserInCourse', {
                userId: userId,
                courseId: courseClass,
            });

            console.log(response.data);

            sessionStorage.setItem('selectedCourse', JSON.stringify(response.data)); // Armazena o curso selecionado no sessionStorage
            navigate('/students/courses'); // Redireciona para a página de cursos cadastrados
        } catch (error) {
            console.error("Erro ao associar o usuário ao curso", error);
        }
    };


// dados do curso
    useEffect(() => {
        if (!id) {
            setError("ID do curso não encontrado");
            setLoading(false);
            return;
        }

        api.get(`/course/${id}`)
            .then((response) => {
                setPost(response.data);
                setLoading(false);
            })
            .catch(() => {
                setError("Erro ao buscar o curso");
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className={style.conteudo}>
            {post ? (
                <>
                    <h1 className={style.titulo}>{post.courseName}</h1>
                    <h3 className={style.temacurso}>{post.courseClass || "TEMA CURSO"}</h3>
                    <h3 className={style.descricao}>Carga Horaria: {post.workload}</h3>
                    <p className={style.enunciado}>
                        {post.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."}
                    </p>
                    <button className={style.entre} onClick={handleSubmit}>ENTRE</button>
                </>
            ) : (
                <div>Curso não encontrado.</div>
            )}
        </div>
    );
}
