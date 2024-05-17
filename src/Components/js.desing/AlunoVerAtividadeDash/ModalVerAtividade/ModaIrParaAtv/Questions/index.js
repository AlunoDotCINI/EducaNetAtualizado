import style from './index.module.css'
export default function Question(){
    return(
        <div className={style.conteiner}>
           <p className={style.resposta}>Questao um </p>
           <input type='radio' value={12}/>

        </div>
    )
}