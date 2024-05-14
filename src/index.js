import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import List from './Components/js.desing/ListOpitions/index'
import Landing from './Components/LandingPage/Lading';
import HomeStudents from './Components/js.desing/HomeDash/index';
import CardsGeral from './Components/js.desing/ProfessorDash';
import Alunos from './Components/js.desing/AlunosDash/index.js'
import PrivateRoute from './Routes/PrivateRoute.js'

import ErrorPage from './Components/Error/ErrorPage.js';
const router = createBrowserRouter([
  {
   path:"/",
   element:<App/>,
   errorElement:<ErrorPage/>,
   children:[
    {
      path:"/",
      element: <Landing/>
    },
    {
      path:"/teacher",
       element:<PrivateRoute><List/></PrivateRoute>,
       children:[
        {
          path:"/teacher",
       element: <HomeStudents/>
        },
        {
          path:"/teacher/class",
       element: <CardsGeral NomeCardUm="Cursos Criados" acao="Postar ou Editar Atividades" NomeCardDois="Grafico de Alunos"/>
        }
        
       ]
    },
    {
      path:"/students",
      element:<PrivateRoute><List/></PrivateRoute>,
      children:[
        {
          path:"/students",
       element: <HomeStudents/>
        },
        {
          path:"/students/class",
       element: <Alunos NomeCardUm="Cursos Criados" acao="Postar ou Editar Atividades" NomeCardDois="Grafico de Alunos"/>
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
