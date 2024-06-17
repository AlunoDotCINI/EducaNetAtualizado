import style from './index.module.css'
import api from '../../../../Service/api'
import { useEffect } from 'react'
import { useState } from 'react'
export default function SobreCurso({ isOpenn, settModalOpen,parentToChild }) {
    //API
    const [post, setPost] = useState([])
    useEffect(() => {
        api.get('/course/'+parentToChild)
            .then((response) => {
                setPost([response.data])
            })
            .catch(() => {
                console.log("error")
            })
    }, [])

    if (isOpenn) {
        return (

            <section className={style.modalcorpo}>
                <h1 className={style.fechar} onClick={settModalOpen}>FECHAR</h1>
                <div className={style.conteiner}>
                    {post.map((post, key) => {
                        return (
                            <div className={style.conteiner}>
                                <h1 key={key} className={style.conteinerCursorTitulo}>{post.courseName}</h1>
                                <div className={style.conteinerdes}>
                                    <h2 className={style.titulodescricao}>{post.courseClass}</h2>
                                    <h2 className={style.titulodescricao}>DESCRIÇÃO:</h2>
                                    <a className={style.txtdescricao}>{post.description}</a>
                                </div>
                                <button className={style.botaocadastre}>CASDASTRAR-SE</button>
                            </div>
                        )
                    })}

                </div>
            </section>
        );
    }
    return null
}