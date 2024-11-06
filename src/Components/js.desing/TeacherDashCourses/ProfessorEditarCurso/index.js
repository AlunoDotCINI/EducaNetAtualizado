import style from "./index.module.css"
import React, {useState} from "react";
import api from "../../../Service/api";
export default function EditCourse() {

    const [vCourseName,setCourseName] = useState('');
    const [vWorkLoad,setWorkLoad] = useState('');
    const [vDescription,setDescription] = useState('');
    const [vCourseClass,setCourseClass] = useState('');

    const handleSubmit = async () =>{
        try{
            const response = await api.put('/course/courseId',{courseName:vCourseName,workload:vWorkLoad,description:vDescription,courseClass:vCourseClass})
            console.log(response.data)
        }
        catch(error){
            console.log(error)
        }
    }   
    return (
        <div className={style.conteudo} >
            <div className={style.coteudocard}>
                <h1 className={style.titulo}>EDITE SUA VÍDEO AULA</h1>
                <input type="text" className={style.entrada} onChange={(e) => setCourseName (e.target.value)} placeholder="NOME DO CURSO" />
                <textarea className={style.area} onChange={(e) => setDescription (e.target.value) } placeholder="DESCRIÇÃO DO CURSO" />
                <input type="text" className={style.entrada} onChange={(e) => setWorkLoad (e.target.value)} placeholder="HORAS DO CURSO" />
                <input type="text" className={style.entrada} onChange={(e) => setCourseClass(e.target.value)} placeholder="TEMA DO CURSO" />
                <button className={style.botao} onClick={handleSubmit}>EDITAR VÍDEO AULA</button>
            </div>
        </div>
    )
}