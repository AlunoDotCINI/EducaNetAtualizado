import conecte from '../../img/conecte.png';
import entar from '../../img/login.png';
import registre from '../../img/registro.png';
import style from './index.module.css';


export default function ComoFunciona() {
    return (
        <div className={style.corpo} id='HowItWorks'>
            <div className={style.coluna1}>
                <h1 className={style.titulo}>COMO FUNCIONA?</h1>
                <h2 className={style.subtitulo}>CLIQUE EM <span className={style.span}>CONECTE-SE</span> E SEJA UM MEMBRO DO NOSSO TIME!</h2>
                <img className={style.conecte} src={conecte}></img>
                <h1 className={style.frase1}>AO CLICAR EM <span className={style.span}>"CONECTE-SE"</span> VOCÊ SERÁ REDIRECIONADO A ÁREA DE REGISTRO E/OU LOGIN</h1>
            </div>
            <div className={style.coluna2}>
                <h1 className={style.frase2}>ONDE TERÁ AS OPÇÕES DE:  <span className={style.span}> REGISTRE-SE </span> OU <span className={style.span}> ENTRE </span></h1>
                <img className={style.registro} src={registre}></img>
                <img className={style.login} src={entar}></img>
            </div>
        </div>

    );
}
