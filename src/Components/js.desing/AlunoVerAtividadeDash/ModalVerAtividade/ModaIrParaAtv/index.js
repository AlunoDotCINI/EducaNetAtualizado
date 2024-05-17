import style from './index.module.css'
import Question from './Questions';
export default function Edite(params) {
        return (

            <section className={style.modalcorpo}>
                <div className={style.conteinertxt}>
                <h1 className={style.Titulo}>Questao titulo</h1>
                <a className={style.txt}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam laoreet nec mauris hendrerit dapibus. Pellentesque lacinia molestie ultricies. Nunc sem enim, accumsan id condimentum vel, dictum non tellus. Suspendisse malesuada accumsan tortor, quis convallis eros sagittis a. Maecenas cursus massa volutpat nisl efficitur viverra. Sed varius, arcu et gravida congue, eros lacus blandit ex, eget congue ante ante at dui. Aliquam rutrum urna et justo imperdiet condimentum. Sed porta et erat ut tempor. Vivamus vel mollis sapien. Cras egestas, sapien sit amet suscipit viverra, magna purus iaculis ipsum, vitae scelerisque felis lacus sed nisl. Nunc tempus nulla enim, ac viverra tortor consequat eu. Quisque ornare diam ac nisi finibus venenatis. Aenean quis sapien ut ante porttitor vestibulum. Duis molestie, dui eu pretium consectetur, odio lectus volutpat turpis, vitae auctor metus sem eu quam.</a>
                <Question/>
                  <Question/>
                  <Question/>
                </div>
            </section>
        );
     
}