import { Outlet } from 'react-router'
import style from './index.module.css'
import Logo from '../../img/logodashp.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircle} from '@fortawesome/free-regular-svg-icons'
import {faGraduationCap,faBook,faChartLine, faHouse} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
export default function alunos(){
    return(
        <div className={style.corpo}>
            <section className={style.table}>
                <div className={style.titulolist}>
                <img className={style.imagem} src={Logo}/>                
                <h1 className={style.titulo}> EDUCA-<span className={style.span}>NET</span></h1>
                </div>
                <div className={style.titulomenu}>
                <FontAwesomeIcon icon={faCircle} size="2xs" style={{color: "#ffffff",}} />
                <h1 className={style.menu}>Menu</h1>
                </div>
            <ul className={style.listdi}> 
            <Link to="/teacher"className={style.direcionador}><li><FontAwesomeIcon icon={faHouse} size="xs" style={{color: "#000000",}} className={style.logodash}/>HOME</li></Link>
            <Link to="/teacher"className={style.direcionador}><li className={style.direcionador}><FontAwesomeIcon icon={faChartLine} size="xs" style={{color: "#000000",}} className={style.logodash}/>CONCLUSÕES</li></Link>
            <Link to="/students/class"className={style.direcionador}><li className={style.direcionador}><FontAwesomeIcon icon={faGraduationCap} size="xs" style={{color: "#000000",}} className={style.logodash} />AULAS</li></Link>
            <Link to="/students/activity"className={style.direcionador}><li className={style.direcionador}><FontAwesomeIcon icon={faBook} size="xs" style={{color: "#000000",}} className={style.logodash}/>PRATICANDO</li></Link>

            </ul>
            <h1 className={style.perfil}>Perfil</h1>
            </section>
            <section className={style.section2}>
                <Outlet/>
            </section>
        </div>
    )
}