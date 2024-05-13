import imagem from '../../img/arte.jpg'
import style from './index.module.css'
export default function Divirta(){
    return(
        <div className={style.corpo}>
            <div className={style.coluna1}>
                <h1 className={style.Titulo}>DIVIRTA-SE</h1>
                <h2 className={style.Subtitulo}>AGORA É SOU ACESSAR A ABA <span className={style.span}>CURSOS</span> E ESCOLHER SEU CURSO DE PREFERÊNCIA!!</h2>
                <h3 className={style.texto}>
                   1- Defina Objetivos Claros: <br></br>
                            •  Antes de iniciar um curso, saiba o que deseja alcançar. Quer adquirir novas habilidades? Busca uma certificação específica?
                    <br></br>•  Ter metas claras ajudará você a se manter motivado e focado.
                </h3>
            </div>
            <div className={style.coluna2}>
             <img className={style.Img} src={imagem}></img>
            </div>
        </div>
    )
}
