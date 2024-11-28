import style from "./index.module.css";
import { useState, useEffect } from "react";
import api from "../../../Service/api";
import Swal from "sweetalert2"; // Import SweetAlert2
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function PostClass() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    api
      .get("/course/AllCourses")
      .then((response) => {
        setPost(response.data);
      })
      .catch(() => {
        console.log("Erro ao buscar os cursos");
      });
  }, []);

  const navigate = useNavigate();
  const [videoCourseName, setvideoCourseName] = useState("");
  const [videoCourseUrlId, setvideoCourseUrlId] = useState("");
  const [vDescription, setDescription] = useState("");
  const [vCourseId, setCourseId] = useState(""); // Armazenando o ID do curso selecionado

  // Função para lidar com o envio do formulário
  const handleSubmit = async () => {

    if (!vCourseId) {
      // Verifique se o vCourseId foi selecionado
      Swal.fire({
        icon: "error",
        title: "Erro",
        text: "Por favor, selecione um curso.",
      });
      return;
    }

    try {
      const response = await api.post("/videoCourse/videopost", {
        videoCourseName: videoCourseName,
        videoCourseUrlId: videoCourseUrlId,
        videoCourseDescription: vDescription,
        tbCourse: {
          courseId: parseInt(vCourseId),  // Garanta que o ID seja um número
        },
      });

      // Exibe mensagem de sucesso
      Swal.fire({
        icon: "success",
        title: "Curso postado com sucesso!",
        text: "O curso foi salvo corretamente.",
      });
      navigate("/teacher");

      console.log(response.data);
    } catch (error) {
      // Exibe mensagem de erro
      Swal.fire({
        icon: "error",
        title: "Erro ao postar o curso",
        text: "Ocorreu um erro ao tentar salvar o curso. Tente novamente.",
      });

      console.log(error);
    }
  };

  return (
    <div className={style.conteudo}>
      <div className={style.coteudocard}>
        <h1 className={style.titulo}>POSTE SUA AULA</h1>
        {/* Selecione o curso */}
        <select
          className={style.selecione}
          onChange={(e) => setCourseId(e.target.value)} // Atualiza o ID do curso selecionado
          value={vCourseId} // Vincula o valor do select ao estado vCourseId
        >
          <option className={style.opcoes} value="" disabled>
            Selecione
          </option>
          {post.map((course, key) => {
            return (
              <option key={key} value={course.courseId} className={style.opcoes}>
                {course.courseName} {/* Nome do curso será exibido */}
              </option>
            );
          })}
        </select>
        <input
          type="text"
          className={style.entrada}
          placeholder="NOME DA AULA"
          onChange={(e) => setvideoCourseName(e.target.value)}
        />
        <input
          type="text"
          className={style.entrada}
          placeholder="ID DA AULA (YOUTUBE)"
          onChange={(e) => setvideoCourseUrlId(e.target.value)}
        />
        <textarea
          className={style.area}
          placeholder="DESCRIÇÃO"
          onChange={(e) => setDescription(e.target.value)}
        />

        <button className={style.botao} onClick={handleSubmit}>POSTAR AULA</button>
      </div>
    </div>
  );
}
