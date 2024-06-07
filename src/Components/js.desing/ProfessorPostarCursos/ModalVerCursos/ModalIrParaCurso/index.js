import style from './index.module.css'
       

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

    if (isOpenn) {
        return (

            <section className={style.modalcorpo}>
                <h1 className={style.fechar} onClick={settModalOpen}>FECHAR</h1>
                <div className={style.conteiner}>
                <h1 className={style.conteinerCursorTitulo}>CRIE SEU CURSO</h1>
                <form className={style.conteinerdes}> 
                                   
                        <input className={style.tabela} type='text' placeholder='NOME DO CURSO'
                         required maxLength={65}
                         onKeyDown={ (e) =>checkboxSpecialChar(e)} />
                         
                        <textarea className={style.descricao} placeholder="DESCRIÇÃO" 
                         required maxLength={500} 
                         onKeyDown={ (e) =>checkboxChar(e)}/>

                        <input className={style.tabela} type='text' placeholder='HORAS DE CURSOS (SOMENTE INTEIROS)'
                        required maxLength={2}
                        onKeyDown={ (e) =>checkboxNumber(e)}/>  

                        <input className={style.tabela} type='text' placeholder='TEMA CURSO' 
                        required maxLength={20}  
                        onKeyDown={ (e) =>checkboxSpecialChar(e)}/>
                        
                        <button className={style.botaopostar}>POSTAR</button>
                </form>
                </div>
            </section>
        );
    }
    return null
}