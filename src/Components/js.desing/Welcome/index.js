
import robo from '../../img/robo.png'
import style from './index.module.css'
function BemVindo(){
    return(
        <div className={style.CorpoBemvindo}>
           <img className={style.Imagem} src={robo}></img>                                                    
           <div  className={style.Texto}>
            <h1 className={style.Titulo}>BEM VINDO AO EDUCA-<span className={style.span}>NET</span></h1>
            <h2  className={style.subtitulo}>Esse é o Tech Boy,representante da nossa causa,mascote do nosso time!Voltado ao ensino <span className={style.span2}>BARATO</span> e de <span className={style.span2}> QUALIDADE!!!</span></h2>
            <h2  className={style.subtitulo}>Divirta-se e explore o site adiante :]</h2>
           </div>
        </div>
    )
}
export default BemVindo