import style from './index.module.css'
export default function Activity() {
    return (
        <div className={style.conteudo}>
            <h1 className={style.tituloatv}>TITULO ATIVIDADE</h1>
            <p className={style.enunciado}>ENUNCIADO
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu facilisis elit. Integer elementum, neque et efficitur congue, ligula sapien consequat dolor, a molestie lectus arcu in ligula. Vestibulum accumsan erat at elit aliquet vulputate. Curabitur a placerat massa, et gravida mauris. Sed aliquam lectus quis sapien egestas ullamcorper. Proin luctus, tortor eu feugiat vestibulum, ipsum nibh dignissim eros, in sodales ligula elit eu augue. Aliquam sagittis sit amet neque id maximus. Suspendisse potenti. Proin pharetra, risus mollis porta consequat, nisl nisi consequat libero, nec viverra arcu ante vel tortor. Cras nec congue nisl, nec semper dolor. Ut hendrerit ultricies nisl eget euismod. Vivamus pellentesque auctor erat ac sollicitudin.
Nullam nec purus at metus faucibus ultricies. Proin quis ornare velit. Aliquam id aliquet nibh. Ut vitae lectus a velit egestas accumsan. Maecenas lobortis viverra sem, non pellentesque ipsum tincidunt a. Maecenas suscipit venenatis ex, ut egestas sapien sodales in. Donec vestibulum, odio at tincidunt lacinia, lectus ipsum suscipit ligula, eu mollis elit quam auctor urna. Integer eleifend metus enim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras bibendum ligula ligula. Duis ac quam quis neque aliquet elementum nec ut lacus. Vivamus sit amet neque orci. Integer sed dictum tortor, ullamcorper facilisis libero. Curabitur ut neque et lectus laoreet consectetur ac eu tellus. Sed ac turpis et libero dignissim blandit. Praesent ultrices nunc neque, a sagittis massa sollicitudin a.
            </p>
            <div className={style.formatoquestao}>
                <a className={style.alternativa}>alternativa:Morbi iaculis quis sapien at vehicula. Nunc molestie ex id sollicitudin finibus. Sed laoreet lorem nec ipsum mattis, eget hendrerit sapien sagittis. In hac habitasse platea dictumst. Nam feugiat fermentum quam, id efficitur metus. Duis eu metus bibendum,</a>
                <input className={style.selecionando} type='radio'/>
            </div>
            <div className={style.formatoquestao}>
                <a className={style.alternativa}>alternativa:Morbi iaculis quis sapien at vehicula. Nunc molestie ex id sollicitudin finibus. Sed laoreet lorem nec ipsum mattis, eget hendrerit sapien sagittis. In hac habitasse platea dictumst. Nam feugiat fermentum quam, id efficitur metus. Duis eu metus bibendum,</a>
                <input className={style.selecionando} type='radio'/>
            </div>
            <div className={style.formatoquestao}>
                <a className={style.alternativa}>alternativa:Morbi iaculis quis sapien at vehicula. Nunc molestie ex id sollicitudin finibus. Sed laoreet lorem nec ipsum mattis, eget hendrerit sapien sagittis. In hac habitasse platea dictumst. Nam feugiat fermentum quam, id efficitur metus. Duis eu metus bibendum,</a>
                <input className={style.selecionando} type='radio'/>
            </div>
            <button className={style.enviar}>ENVIAR</button>
        </div>
    )
}