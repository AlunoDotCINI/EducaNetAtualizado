import style from './index.module.css'
import api from '../../../../Service/api';
import { useState } from 'react';      
export default function Edite({ isOpenn, settModalOpen }, params) {

    //PROTEGER DE CARACTERES ESPECIAS
    const checkboxSpecialChar = (e) => {
        if (!/^[a-zA-Z0-9áàâãéèêíïóôõöúüçÁÀÂÃÉÈÊÍÏÓÔÕÖÚÜÇ]*$/.test(e.key)   || e.key === "&") {
            e.preventDefault();
        }
    }; 

    //PROTEGER DE CERTOS CARACTERES
    const checkboxChar = (e) => {
        if (!/^[a-zA-Z0-9áàâãéèêíïóôõöúüçÁÀÂÃÉÈÊÍÏÓÔÕÖÚÜÇ!^&()_[\]|;:'",.?/\\-\s]*$/.test(e.key)) {
            e.preventDefault();
        }
    };  

    //PROTEGER DE LETRAS 
    const checkboxNumber = (e) => {
        if (!/[0-9]|Backspace/.test(e.key)) {
            e.preventDefault();
        }
    };  
    const [openModal, settOpenModal] = useState(false)
    //API CADASTRO
   const [vdescricao,setDescricao] = useState('');
   const [vnome,setNome] = useState('');
   const [vhorascurso,setHorasCurso] = useState('');
   const [vtemacurso,setTemaCurso] = useState('');

   const handleSubmit = async () =>{
   try{
   const response = await api.put('/course/1',{courseName:vnome,workload:vhorascurso,description:vdescricao ,courseClass:vtemacurso})
   console.log(response.data)
    }
   catch(error){
  console.log(error)
}
}

    if (isOpenn) {
        return (

            <section className={style.modalcorpo}>
                <h1 className={style.fechar} onClick={settModalOpen}>FECHAR</h1>
                <div className={style.conteiner}>
                <h1 className={style.conteinerCursorTitulo}>EDITE SEU CURSO</h1>
                <form className={style.conteinerdes}> 
                                   
                        <input className={style.tabela} type='text' placeholder='NOME DO CURSO'
                         required maxLength={65}
                         onChange= {(e)=> setNome(e.target.value)} 
                         onKeyDown={ (e) =>checkboxSpecialChar(e)} />
                         
                        <textarea className={style.descricao} placeholder="DESCRIÇÃO" 
                         required maxLength={500} 
                         onChange= {(e)=> setDescricao(e.target.value)} 
                         onKeyDown={ (e) =>checkboxChar(e)}/>

                        <input className={style.tabela} type='text' placeholder='HORAS DE CURSOS (SOMENTE INTEIROS)'
                        required maxLength={2}
                        onChange= {(e)=> setHorasCurso(e.target.value)} 
                        onKeyDown={ (e) =>checkboxNumber(e)}/>  

                        <input className={style.tabela} type='text' placeholder='TEMA CURSO' 
                        required maxLength={20}  
                        onChange= {(e)=> setTemaCurso(e.target.value)} 
                        onKeyDown={ (e) =>checkboxSpecialChar(e)}/>
                        
                        <button className={style.botaopostar} onClick={handleSubmit}>POSTAR</button>
                </form>
                </div>
            </section>
        );
    }
    return null
}