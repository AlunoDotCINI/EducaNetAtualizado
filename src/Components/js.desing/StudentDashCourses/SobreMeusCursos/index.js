import { useLocation } from "react-router-dom";
import style from "./index.module.css";

export default function SobreMeusCursos() {
    const location = useLocation();
    const { course } = location.state || {}; // Obter dados do curso do estado

    return (
        <div className={style.conteudo}>
            <h1 className={style.titulo}>{course?.courseName || "NOME DO CURSO"}</h1>
            <h3 className={style.temacurso}>{course?.theme || "TEMA CURSO"}</h3>
            <h3 className={style.descricao}>DESCRIÇÃO</h3>
            <p className={style.enunciado}>
                {course?.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec consequat ipsum. Integer iaculis, tortor ut placerat mollis, libero risus mollis elit, quis viverra nisi quam sit amet magna..."}
            </p>
            <button className={style.sair}>SAIR DO CURSO</button>
        </div>
    );
}
