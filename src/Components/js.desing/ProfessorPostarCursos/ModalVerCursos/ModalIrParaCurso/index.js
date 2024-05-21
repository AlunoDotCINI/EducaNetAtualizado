import style from './index.module.css'
       

export default function Edite({ isOpenn, settModalOpen }, params) {
    if (isOpenn) {
        return (

            <section className={style.modalcorpo}>
                <h1 className={style.fechar} onClick={settModalOpen}>FECHAR</h1>
                <div className={style.conteiner}>
                <h1 className={style.conteinerCursorTitulo}>CRIE SEU CURSO</h1>
                <div className={style.conteinerdes}>                
                        <input className={style.tabela} type='text' placeholder='NOME DO CURSO' />
                        <textarea className={style.descricao} placeholder="DESCRIÇÃO" maxLength={500} />
                        <input className={style.tabela} type='text' placeholder='HORAS DE CURSOS (SOMENTE INTEIROS' />  
                        <input className={style.tabela} type='text' placeholder='TEMA CURSO' />                                                      
                        <button className={style.botaopostar}>POSTAR</button>
                </div>
                </div>
            </section>
        );
    }
    return null
}