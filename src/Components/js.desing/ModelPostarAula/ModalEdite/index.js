import style from './index.module.css'
export default function Edite({isOpenn, settModalOpen},params) {
    if (isOpenn) {
        return (

            <section className={style.modalcorpo}>
                <h1 className={style.fechar} onClick={settModalOpen}>FECHAR</h1>
                        <h1 className={style.conteinerpostarTitulo}>EDITE ATIVIDADES</h1>
                        <form className={style.fomulario}>
                        <input className={style.tabela} type='text' placeholder={params.input1} />
                            <input className={style.tabela} type='text' placeholder={params.input2} />
                            <label className={style.texto}>
                            Horas de curso(somente inteiras)
                            ( de 00:00 a 12:00):    
                            </label>
                            <input className={style.tabela} type='time'step={3600000} min={0}max={12}  />
                            <textarea  className={style.descricao} placeholder="descrição" maxLength={500} />

                            <button className={style.botaopostar}>POSTAR</button>
                        </form>
            </section>
        );
    }
    return null
}