import style from "./index.module.css";
import React, { useState, useEffect } from "react";
import api from "../../../Service/api";
import Swal from "sweetalert2"; // Import SweetAlert2
import { useNavigate } from "react-router-dom";

export default function EditCourse() {
    const idCourse = sessionStorage.getItem("currentCourseId");
    const [post, setPost] = useState({});
    const [users, setUsers] = useState([]); // Estado para armazenar os usuários
    const [vCourseName, setCourseName] = useState('');
    const [vWorkLoad, setWorkLoad] = useState('');
    const [vDescription, setDescription] = useState('');
    const [vCourseClass, setCourseClass] = useState('');

    const navigate = useNavigate();
    
    const sairCurso = async (userId) => {

        try {
            const response = await api.delete('/RemoveUserFromCourse', {
                data: { userId: userId, courseId: idCourse } // Passa os dados no campo "data"
            });
            console.log(response.data);
            navigate("/teacher");
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
   
    


    // Função para carregar os dados do curso
    useEffect(() => {
        if (!idCourse) {
            Swal.fire({
                icon: "error",
                title: "Erro",
                text: "ID do curso não encontrado. Você será redirecionado para a página inicial.",
            }).then(() => {
                navigate("/teacher"); // Redireciona para outra página caso o ID não exista
            });
            return;
        }

        // Fetch course data by ID
        api.get(`/course/${idCourse}`)
            .then((response) => {
                if (response.data) {
                    setPost(response.data);
                    setCourseName(response.data.courseName || '');
                    setDescription(response.data.description || '');
                    setWorkLoad(response.data.workload || '');
                    setCourseClass(response.data.courseClass || '');
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Erro",
                        text: "Curso não encontrado.",
                    });
                    navigate("/teacher");
                }
            })
            .catch(() => {
                Swal.fire({
                    icon: "error",
                    title: "Erro",
                    text: "Erro ao buscar dados do curso. Tente novamente.",
                });
                navigate("/teacher");
            });
    }, [idCourse, navigate]);

    // Função para carregar os usuários do curso
    useEffect(() => {
        api.get(`/courseUser/${idCourse}`)
            .then((response) => {
                setUsers(response.data); // Atualiza o estado com os usuários retornados
            })
            .catch(() => {
                console.log("Erro ao buscar os usuários do curso");
            });
    }, [idCourse]);

    // Função para o envio do formulário
    const handleSubmit = async () => {
        if (!vCourseName || !vWorkLoad || !vDescription || !vCourseClass) {
            Swal.fire({
                icon: "error",
                title: "Erro",
                text: "Todos os campos devem ser preenchidos.",
            });
            return;
        }

        try {
            const response = await api.put(`/course/${idCourse}`, {
                courseName: vCourseName,
                workload: vWorkLoad,
                description: vDescription,
                courseClass: vCourseClass
            });
            Swal.fire({
                icon: "success",
                title: "Curso editado com sucesso!",
                text: "O curso foi atualizado corretamente.",
            });
            navigate("/teacher");
        } catch (error) {
            console.error("Erro ao editar o curso:", error);
            Swal.fire({
                icon: "error",
                title: "Erro ao editar o curso",
                text: "Ocorreu um erro ao tentar salvar o curso. Tente novamente.",
            });
        }
    };

    // Função para ação no botão do usuário (exemplo de função)
  

    return (
        <div className={style.conteudo}>
            <div className={style.coteudocard}>
                <h1 className={style.titulo}>EDITE SEU CURSO</h1>
                <input
                    type="text"
                    className={style.entrada}
                    value={vCourseName}
                    onChange={(e) => setCourseName(e.target.value)}
                    placeholder="NOME DO CURSO"
                />
                <textarea
                    className={style.area}
                    value={vDescription}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="DESCRIÇÃO DO CURSO"
                />
                <input
                    type="text"
                    className={style.entrada}
                    value={vWorkLoad}
                    onChange={(e) => setWorkLoad(e.target.value)}
                    placeholder="HORAS DO CURSO"
                />
                <input
                    type="text"
                    className={style.entrada}
                    value={vCourseClass}
                    onChange={(e) => setCourseClass(e.target.value)}
                    placeholder="TEMA DO CURSO"
                />
                <button className={style.botao} onClick={handleSubmit}>EDITAR CURSO</button>
            </div>

            {/* Renderizando a lista de usuários com botões ao lado dos nomes */}
            <div className={style.coteudocardtres}>
                <h2>Usuários no curso</h2>
                {users && users.length > 0 ? (
                    <ul>
                        {users.map((user, index) => (
                            <li key={index} className={style.userItem}>
                                <span>{user.tbUser.userName} {user.tbUser.userLastName}</span>
                                <button 
                                    className={style.userButton} 
                                    onClick={() => sairCurso(user.tbUser.userId)}
                                >
                                    Retirar
                                </button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Nenhum usuário encontrado para este curso.</p>
                )}
            </div>
        </div>
    );
}
