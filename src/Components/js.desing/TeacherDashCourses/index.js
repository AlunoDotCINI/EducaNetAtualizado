import style from "./index.module.css";
import { useState, useEffect } from 'react';
import api from "../../Service/api";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

export default function DashClass() {
  // Todos Cursos
  const [post, setPost] = useState([]);

  useEffect(() => {
    api.get("/course/AllCourses")
      .then((response) => {
        setPost(response.data);
      })
      .catch(() => {
        console.log('Erro ao buscar os cursos');
      });
  }, []);

  const [postById, setPostById] = useState([]);
  var id = sessionStorage.getItem("userId");

  useEffect(() => {
    api.get(`/CoursesById/${id}`)
      .then((response) => {
        setPostById(response.data);
      })
      .catch(() => {
        console.log('Erro ao buscar cursos por ID');
      });
  }, [id]);

  // Função para deletar um curso
  const deleteCourse = async (courseId) => {
    try {
      const response = await api.delete(`/course/deleteCourse/${courseId}`);
      console.log(response.data);
      // Atualiza a lista de cursos após a exclusão
      setPost(post.filter(course => course.courseId !== courseId));
      Swal.fire({
        title: 'Sucesso!',
        text: 'Curso deletado com sucesso!',
        icon: 'success',
        confirmButtonText: 'Ok'
      });
    } catch (error) {
      Swal.fire({
        title: 'Erro!',
        text: 'Não foi possível deletar o curso. Tente novamente.',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
      console.log(error);
    }
  }

  return (
    <section className={style.conteudo}>
      <div className={style.conteudocards}>
        <div className={style.CardUm}>
          <h1 className={style.nome}>CURSOS CADASTRADOS</h1>
          {post.map((course, key) => {
            return (
              <a key={key} className={style.itens}>{course.courseName}</a>
            );
          })}
        </div>
        <div className={style.CardDois}>
          <Link to="/teacher/courses/post" className={style.link}>
            <button className={style.poste_curso}> POSTE UM CURSO</button>
          </Link>
        </div>
      </div>
      <div className={style.CardTres}>
        <h1 className={style.nome_cardTres}>EDITE SEUS CURSOS</h1>
        {post.map((course, key) => {
          return (
            <div key={key} className={style.cursoeditar}>
              <a className={style.titulocurso}>{course.courseName}</a>
              <Link to="/teacher/courses/edit" className={style.link}>
                <button className={style.botaoeditar}>Editar</button>
              </Link>
              <button 
                className={style.botaoapagar} 
                onClick={() => deleteCourse(course.courseId)}  // Passa o ID do curso para deleteCourse
              >
                Apagar
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
