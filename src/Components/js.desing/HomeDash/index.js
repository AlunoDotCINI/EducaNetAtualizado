import Card from '../CardsDsh/Card/index'
import CardDois from '../CardsDsh/Card.2/index'
import style from './index.module.css'

import Imagem from '../../img/cursos.jpg'
import Cursos from '../../img/cursosonline.jpg'
import Classe from '../../img/classe.jpg'


export default function HomeStudents() {
    return (
        <section className={style.conteudo}>
            <h1 className={style.home}>HOME</h1>
            <div className={style.corpo}>
                <div className={style.parteum}>
                    <Card
                        foto={Imagem}
                        titulo="Está participando de algum curso?"
                        subtitulo="Senão, explore e se aventure em um dos nossos cursos"
                        botao="Veja agora!!!" />
                    <Card foto={Cursos}
                        titulo="Está participando de algum curso?"
                        subtitulo="Senão, explore e se aventure em um dos nossos cursos"
                        botao="Veja agora!!!" />
                </div>
                <div className={style.partedois}>
                    <CardDois foto={Classe}
                        titulo="Está participando de algum curso?"
                        subtitulo="Senão, explore e se aventure em um dos nossos cursos"
                        botao="Veja agora!!!" />
                </div>
            </div>
        </section>
    )
}