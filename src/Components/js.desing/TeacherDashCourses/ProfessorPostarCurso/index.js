import React, { useState } from "react";
import style from "./index.module.css";
import api from "../../../Service/api";
import Swal from 'sweetalert2'; // Import SweetAlert2
import { useNavigate } from "react-router-dom";

export default function PostCourse() {
    const navigate= useNavigate()
    const [vCourseName, setCourseName] = useState('');
    const [vWorkLoad, setWorkLoad] = useState('');
    const [vDescription, setDescription] = useState('');
    const [vCourseClass, setCourseClass] = useState('');

    const handleSubmit = async () => {
        try {
            const response = await api.post('/course/coursesave', {
                courseName: vCourseName,
                workload: vWorkLoad,
                description: vDescription,
                courseClass: vCourseClass
            });
            
            // Show success message using SweetAlert2
            Swal.fire({
                icon: 'success',
                title: 'Curso postado com sucesso!',
                text: 'O curso foi salvo corretamente.',
            });
            navigate('/teacher');

            console.log(response.data);
        }
        catch (error) {
            // Show error message using SweetAlert2
            Swal.fire({
                icon: 'error',
                title: 'Erro ao postar o curso',
                text: 'Ocorreu um erro ao tentar salvar o curso. Tente novamente.',
            });

            console.log(error);
        }
    }

    return (
        <div className={style.conteudo} >
            <div className={style.coteudocard}>
                <h1 className={style.titulo}>POSTE SUA CURSO</h1>
                <input
                    type="text"
                    className={style.entrada}
                    onChange={(e) => setCourseName(e.target.value)}
                    placeholder="NOME DO CURSO"
                />
                <textarea
                    className={style.area}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="DESCRIÇÃO DO CURSO"
                />
                <input
                    type="text"
                    className={style.entrada}
                    onChange={(e) => setWorkLoad(e.target.value)}
                    placeholder="HORAS DO CURSO"
                />
                <input
                    type="text"
                    className={style.entrada}
                    onChange={(e) => setCourseClass(e.target.value)}
                    placeholder="TEMA DO CURSO"
                />
                <button className={style.botao} onClick={handleSubmit}>POSTAR CURSO</button>
            </div>
        </div>
    )
}
