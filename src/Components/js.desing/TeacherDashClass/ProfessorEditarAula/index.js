import style from "./index.module.css";
import { useEffect, useState } from "react";
import api from "../../../Service/api";
import Swal from "sweetalert2"; // Import SweetAlert2
import { useNavigate } from "react-router-dom";

export default function EditClass() {
  const [post, setPost] = useState({});
  const idVideoCourse = sessionStorage.getItem("currentVideoCourseId");
  const navigate = useNavigate();

  const [videoCourseName, setVideoCourseName] = useState("");
  const [videoCourseUrlId, setVideoCourseUrlId] = useState("");
  const [vDescription, setDescription] = useState("");
  const [vCourseId, setCourseId] = useState("");

  useEffect(() => {
    // Verificar se o ID do curso existe no sessionStorage
    if (!idVideoCourse) {
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
    api
      .get(`/VideoCourserById/${idVideoCourse}`)
      .then((response) => {
        console.log(response.data)
        if (response.data && response.data.length > 0) {
            

          // A resposta contém dados válidos
          setPost(response.data[0]); // A resposta é uma lista, pegamos o primeiro item
          setVideoCourseName(response.data[0].videoCourseName || "");
          setVideoCourseUrlId(response.data[0].videoCourseUrlId || "");
          setDescription(response.data[0].videoCourseDescription || "");
          console.log(response.data[0].tbCourse.courseId); // Verifique o valor
          setCourseId(response.data[0].tbCourse.courseId || "");

          setCourseId(response.data[0].tbCourse.courseId || "");
        } else {
          // Se não houver curso, exibe um erro
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
  }, [idVideoCourse, navigate]);

  // Função para o envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Verifique se vCourseId está definido antes de enviar a requisição
    if (!vCourseId) {
      Swal.fire({
        icon: "error",
        title: "Erro",
        text: "Por favor, selecione um curso.",
      });
      return;
    }
  
    // Exibe os dados para garantir que estão corretos
    console.log({
      videoCourseName,
      videoCourseUrlId,
      videoCourseDescription: vDescription,
      tbCourse: {
        courseId: parseInt(vCourseId), // Certifique-se de que o ID seja um número
      },
    });
  
    try {
      // Aqui estamos passando o courseId na URL e os dados no corpo
      const response = await api.put(`/videoCourse/${idVideoCourse}`, {
        videoCourseName,
        videoCourseUrlId,
        videoCourseDescription: vDescription,
        tbCourse: {
          courseId: parseInt(vCourseId), // Verifique se o ID é um número válido
        },
      });
  
      // Mensagem de sucesso
      Swal.fire({
        icon: "success",
        title: "Curso editado com sucesso!",
        text: "O curso foi atualizado corretamente.",
      });
      navigate("/teacher");
  
      console.log(response.data);
    } catch (error) {
      // Exibe mensagem de erro
      Swal.fire({
        icon: "error",
        title: "Erro ao editar o curso",
        text: "Ocorreu um erro ao tentar salvar o curso. Tente novamente.",
      });
  
      console.log(error);
    }
  };
  
  

  return (
    <div className={style.conteudo}>
      <div className={style.coteudocard}>
        <h1 className={style.titulo}>EDITE SUA AULA</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className={style.entrada}
            placeholder="NOME DA AULA"
            value={videoCourseName}
            onChange={(e) => setVideoCourseName(e.target.value)}
          />
          <input
            type="text"
            className={style.entrada}
            placeholder="ID DA AULA (YouTube)"
            value={videoCourseUrlId}
            onChange={(e) => setVideoCourseUrlId(e.target.value)}
          />
          <textarea
            className={style.area}
            placeholder="DESCRIÇÃO"
            value={vDescription}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button type="submit" className={style.botao}>
            EDITAR AULA
          </button>
        </form>
      </div>
    </div>
  );
}
