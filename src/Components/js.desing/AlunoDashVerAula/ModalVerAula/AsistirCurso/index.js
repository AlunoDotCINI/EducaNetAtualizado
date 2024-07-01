import style from './index.module.css'
import YouTube from 'react-youtube'
export default function AssistirAula() {

    return (

        <section className={style.modalcorpo}>
            <div className={style.conteiner}>
                <h1 className={style.conteinerCursorTitulo}>AULA NOSLEN</h1>
                <div className={style.conteinerdes}>
                    <YouTube videoId='l1HOqhpsLZE?si=oA4pjEUWtsU_xCYL' className={style.video} />
                    <h2 className={style.titulodescricao}>DESCRIÇÃO:</h2>
                    <a className={style.txtdescricao}>TESTE.
                    </a>
                </div>
            </div>
        </section>
    );
}