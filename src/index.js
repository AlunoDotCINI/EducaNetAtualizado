import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import List from './Components/js.desing/ListOpitions/index'
import Landing from './Components/LandingPage/Lading';
import Home from './Components/js.desing/HomeDash/index';
import ErrorPage from './Components/Error/ErrorPage.js';
import ListaEstudante from './Components/js.desing/ListOpitionsStudent/index.js'
//Rotas Aluno
import AlunosAula from './Components/js.desing/StudentDashClass/index.js'
import AtividadeAluno from './Components/js.desing/StudentDashActivity/index.js'
import AssistirAula from './Components/js.desing/StudentDashClass/AssistClassView/index';
import VerCursos from './Components/js.desing/StudentDashCourses/index.js'
import IrParaAtividade from './Components/js.desing/StudentDashActivity/LayoutAtividade/index.js'
import IrParaMeuCurso from './Components/js.desing/StudentDashCourses/SobreMeusCurso/index.js'
import IrParaaSobreCurso from './Components/js.desing/StudentDashCourses/SobreCurso/index.js'

//ROTAS PROFESSOR
//professor editar atividades
import ProfessorAtividade from './Components/js.desing/TeacherDashActivity/index.js'
import ProfessorAtividadePostar from './Components/js.desing/TeacherDashActivity/ProfessorPostarAtividade/index.js'
import ProfessorAtividadeEditar from './Components/js.desing/TeacherDashActivity/ProfessorEditarAtividade/index.js'
//professor video aula postar e editar
import ProfessorClasse from './Components/js.desing/TeacherDashClass/index.js'
import ProfessorClassePostarVideo from './Components/js.desing/TeacherDashClass/ProfessorPostarAula/index.js'
//professor postar curso e editar
import ProfessorCurso from './Components/js.desing/TeacherDashCourses/index.js'
import ProfessorPostarCurso from './Components/js.desing/TeacherDashCourses/ProfessorPostarCurso/index.js'
import ProfessorEditarCurso from './Components/js.desing/TeacherDashCourses/ProfessorEditarCurso/index.js'
const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Landing />
      },
      {
        path: "/teacher",
        element: <List />,
        children: [
          {
            path: "/teacher",
            element: <Home />
          },
          {
            path: "/teacher/class",
            element: <ProfessorClasse />
          },
          { 
            path: "/teacher/class/post",
            element:<ProfessorClassePostarVideo />
          },
          {
            path: "/teacher/class/edit",
            element:<ProfessorEditarCurso/>
          },

          {
            path: "/teacher/activity",
            element: <ProfessorAtividade />
          },
          {
            path: "/teacher/activity/post",
            element: <ProfessorAtividadePostar/>
          },
          {
            path: "/teacher/activity/edit",
            element: <ProfessorAtividadeEditar />
          },
          {
            path: "/teacher/courses",
            element: <ProfessorCurso />,
          },
          {
            path: "/teacher/courses/post",
            element:<ProfessorPostarCurso/>
          },   
          {
            path: "/teacher/courses/edit",
            element:<ProfessorEditarCurso/>
          }
        ]
      },
      {
        path: "/students",
        element: <ListaEstudante />,
        children: [
          {
            path: "/students",
            element: <Home />
          },
          {
            path: "/students/courses",
            element: <VerCursos />
          },
          {
            path: "/students/courses/seemycourse",
            element: <IrParaMeuCurso />
          },
          {
            path: "/students/courses/seecourse",
            element: <IrParaaSobreCurso />
          },
          {
            path: "/students/class",
            element: <AlunosAula />,
          },
          {
            path: "/students/watch",
            element: <AssistirAula />
          },
          {
            path: "/students/activity",
            element: <AtividadeAluno />
          },
          {
            path: "/students/goactivity",
            element: <IrParaAtividade />
          }
        ]

      }
    ]
  }
])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
