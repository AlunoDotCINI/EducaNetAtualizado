import style from './index.module.css'
export default function Edite({ isOpenn, settModalOpen }, params) {
    if (isOpenn) {
        return (

            <section className={style.modalcorpo}>
                <h1 className={style.fechar} onClick={settModalOpen}>FECHAR</h1>
                <h1 className={style.conteinerpostarTitulo}>EDITE A AULA</h1>
                <form className={style.fomulario}>
                <label className={style.label}>Qual curso voce deseja adicionar essa aula?</label>
                            <select className={style.select} >
                                <option disabled selected>Escolha</option>
                                <option>Escolha</option>
                                <option>Escolha</option>
                            </select>
                    <input className={style.tabela} type='text' placeholder='NOME DA AULA' />
                    <input className={style.tabela} type='text' placeholder='ID DA AULA (NO YOUTUBE)' />
                    <textarea className={style.descricao} placeholder="DESCRIÇÃO" maxLength={500} />

                    <button className={style.botaopostar}>EDITAR</button>
                </form>
            </section>
        );
    }
    return null
}