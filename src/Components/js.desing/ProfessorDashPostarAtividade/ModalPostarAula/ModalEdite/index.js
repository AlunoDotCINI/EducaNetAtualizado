import style from './index.module.css'
import InputQuestao from '../../InputQuestao/index'
export default function Edite({ isOpenn, settModalOpen }, params) {
    if (isOpenn) {
        return (

            <section className={style.modalcorpo}>
                <h1 className={style.fechar} onClick={settModalOpen}>FECHAR</h1>
                <h1 className={style.conteinerpostarTitulo}>EDITE ATIVIDADES</h1>
                <form className={style.fomulario}>
                <InputQuestao/> 
                <InputQuestao/> 
                <InputQuestao/> 
                <InputQuestao/> 
                <InputQuestao/> 
                <InputQuestao/> 

                          <label className={style.label}>Qual curso voce deseja adicionar essa aula?</label>
                            <select className={style.select} >
                                <option disabled selected>Escolha</option>
                                <option>Escolha</option>
                                <option>Escolha</option>
                            </select>
                    <button className={style.botaopostar}>EDITAR</button>
                </form>
            </section>
        );
    }
    return null
}