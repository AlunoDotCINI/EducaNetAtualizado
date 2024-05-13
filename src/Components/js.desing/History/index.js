import itb from '../../img/itb-barueri-2.jpg'
import robo from '../../img/robof.png'
import style from './index.module.css'

export default function Historia() {
    return (
        <div className={style.corpo} id="History">
            <div className={style.coluna1}>
                <h1 className={style.Titulo}> NOSSA HISTORIA !!</h1>
                <h2 className={style.Subtitulo}>SAIBA UM POUCO DE NÓS</h2>
                <h3 className={style.Subtitulo2}>TUDO COMEÇA NO ITB BASÍLIO FLORES DE AZEVEDO</h3>
                <img src={itb} className={style.itb}></img>
                <h3 className={style.texto}>
                    •  Onde seis alunos, provenientes do curso  de informatica, compartilhavam uma visão comum: tornar a educação mais acessível, personalizada e eficiente.<br></br>
                    •  Inspirados pelas possibilidades da tecnologia, eles decidiram criar um sistema que permitisse aos alunos aprender de forma flexível, independentemente de sua localização geográfica.
                </h3>
            </div>
            <div>
                <img src={robo}className={style.robo} ></img>

            </div>
        </div>
    )
}

