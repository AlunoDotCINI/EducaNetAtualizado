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


  const deleteCourse = async (courseId) => {
    try {
      // Fazendo a requisição DELETE
      const response = await api.delete(`/course/deleteCourse/${courseId}`);
      
      // Exibe o conteúdo da resposta para depuração (opcional)
      console.log(response.data);
  

      if(response.data== "Há usuários ativos no curso!"){
        Swal.fire({
          title: 'Erro!',
          text: 'Há usuários ativos no curso!',
          icon: 'error',
          confirmButtonText: 'Ok'
        });
      
      }
      else{
      Swal.fire({
        title: 'Sucesso!',
        text: 'Curso deletado com sucesso!',
        icon: 'success',
        confirmButtonText: 'Ok'
      });

      setPost(post.filter(course => course.courseId !== courseId));

    }
  
    } catch (error) {
      // Lógica para tratar os diferentes tipos de erro com base no status HTTP
      let errorMessage = 'Não foi possível deletar o curso. Tente novamente.';
  
      if (error.response) {
        const status = error.response.status;
        const message = error.response.data;
  
        if (status === 404) {
          // Curso não encontrado
          errorMessage = 'Curso não encontrado! Não foi possível deletar.';
        } else if (status === 409) {
          // Há usuários ativos no curso
          errorMessage = 'Não foi possível excluir o curso. Há usuários ativos no curso.';
        }
      } else if (error.request) {
        // Se não houve resposta do servidor
        errorMessage = 'Problema de conexão. Não foi possível se conectar ao servidor.';
      } else {
        // Erro desconhecido
        errorMessage = 'Ocorreu um erro desconhecido. Tente novamente.';
      }
  
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
                <button className={style.botaoeditar}  onClick={() => sessionStorage.setItem('currentCourseId', course.courseId)} >Editar</button>
              </Link>
              <button 
                className={style.botaoapagar} 
                onClick={() => deleteCourse(course.courseId)}  
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
