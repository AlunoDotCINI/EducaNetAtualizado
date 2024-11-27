import style from './index.module.css'
import { useState, useEffect } from 'react';
import api from '../../../Service/api';
import { useNavigate } from 'react-router-dom'; // Impor

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default function SobreMeusCursos() {

    const [post, setPost] = useState(null);  // Inicializa como null para verificar se os dados foram carregados
    const [loading, setLoading] = useState(true); // Controla o estado de carregamento
    const [error, setError] = useState(null);  // Controla mensagens de erro
    const navigate = useNavigate(); // Instancia o hook de navegação
    const id = sessionStorage.getItem('courseId');
    const idUser = sessionStorage.getItem('userId');



    const sairCurso = async () => {
        try {
            const response = await api.delete('/RemoveUserFromCourse', {
                data: { userId: idUser, courseId: id } // Passa os dados no campo "data"
            });
            console.log(response.data);
            navigate("/students");
        } catch (error) {
            Swal.fire({
                title: 'Erro!',
                text: 'Credenciais inválidas, tente novamente.',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
            console.log(error);
        }
   };
   
    
    


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
                    <h3 className={style.temacurso} >{post.courseClass}</h3>
                    <p className={style.enunciado}>
                    {post.description}
                    </p>
                    <button className={style.sair} onClick={sairCurso}>SAIR DO CURSO</button>
                </>
            ) : (
                <div>Curso não encontrado.</div>
            )}

        </div>
    )
}
