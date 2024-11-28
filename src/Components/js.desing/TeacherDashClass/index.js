import style from "./index.module.css";
import { useState, useEffect } from "react";
import api from "../../Service/api";
import { Link } from "react-router-dom";
import Swal from "sweetalert2"; // Certifique-se de importar o Swal

export default function DashClass() {
  // API para buscar todos os cursos
  const [post, setPost] = useState([]);

  useEffect(() => {
    api
      .get("/allVideoCourses")
      .then((response) => {
        setPost(response.data);
      })
      .catch(() => {
        console.log("Erro ao buscar os cursos");
      });
  }, []);

  // Função para deletar o curso
  const deleteVideoCourse = async (videoCourseId) => {
    try {
      // Fazendo a requisição DELETE
      const response = await api.delete(`/videoCourse/${videoCourseId}`);
      
      // Exibe o conteúdo da resposta para depuração (opcional)
      console.log(response.data);

      // Exibe uma mensagem de sucesso usando SweetAlert2
      Swal.fire({
        title: 'Sucesso!',
        text: 'Vídeo deletado com sucesso!',
        icon: 'success',
        confirmButtonText: 'Ok'
      });

      setPost(post.filter(course => course.videoCourseId !== videoCourseId));

    } catch (error) {
      // Lógica para tratar os diferentes tipos de erro com base no status HTTP
      let errorMessage = 'Não foi possível deletar o video curso. Tente novamente.';

      // Exibe a mensagem de erro no modal
      Swal.fire({
        title: 'Erro!',
        text: errorMessage,
        icon: 'error',
        confirmButtonText: 'Ok'
      });

      // Exibe detalhes do erro no console (para depuração)
      console.log(error);
    }
  };

  return (
    <section className={style.conteudo}>
      <div className={style.conteudocards}>
        <div className={style.CardUm}>
          <h1 className={style.nome_cardUm}>EDITE SUAS VÍDEO AULAS</h1>
          {post.map((course, key) => {
            return <a key={key} className={style.itens}>{course.videoCourseName}</a>;
          })}
        </div>
        <div className={style.CardDois}>
          <Link to="/teacher/class/post">
            <button className={style.poste_videoaulas}>
              POSTE SUAS VÍDEO AULAS AQUI
            </button>
          </Link>
        </div>
      </div>

      <div className={style.CardTres}>
        <h1 className={style.nome_cardTres}>SUAS VÍDEO AULAS</h1>
        {post.map((course, key) => {
          return (
            <div key={key}>
              <div className={style.videoeditar}>
                <a className={style.titulovideoaula}>{course.videoCourseName}</a>
                <Link to={`/teacher/class/edit/`} className={style.link}>
                  <button
                    className={style.botaoeditar}
                    onClick={() => sessionStorage.setItem('currentVideoCourseId', course.videoCourseId)} // Armazena o videoCourseId no sessionStorage
                  >
                    Editar
                  </button>
                </Link>
                <button
                  className={style.botaoapagar}
                  onClick={() => deleteVideoCourse(course.videoCourseId)} // Passando a função corretamente
                >
                  Apagar
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
