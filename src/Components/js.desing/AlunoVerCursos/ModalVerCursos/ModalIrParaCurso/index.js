import style from './index.module.css'
export default function Edite({ isOpenn, settModalOpen }, params) {
    if (isOpenn) {
        return (

            <section className={style.modalcorpo}>
                <h1 className={style.fechar} onClick={settModalOpen}>FECHAR</h1>
                <div className={style.conteiner}>
                <h1 className={style.conteinerCursorTitulo}>CURSOS TITULO</h1>
                <div className={style.conteinerdes}>
                <h2 className={style.titulodescricao}>TEMA DO CURSO</h2>
                <h2 className={style.titulodescricao}>PROFESSOR JOSE</h2>
                <h2 className={style.titulodescricao}>DESCRIÇÃO:</h2>
                <a className={style.txtdescricao}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec consequat ipsum. Integer iaculis, tortor ut placerat mollis, libero risus mollis elit, quis viverra nisi quam sit amet magna. Curabitur in nisi aliquam nisi lobortis rutrum. Mauris fermentum nunc a dui aliquet, at viverra libero ultricies. Curabitur tempus tellus vel ligula porttitor sodales. Sed risus est, dapibus eu purus vitae, placerat ullamcorper nisi. Integer urna libero, posuere at turpis eget, sagittis hendrerit augue. Ut eu sapien nibh.
                    Maecenas facilisis molestie enim a vulputate. Nam ullamcorper ante eu lectus fringilla, sit amet pellentesque tellus commodo. Ut auctor lobortis dolor vitae ultrices. Curabitur elementum quam vel lacus consectetur pharetra. Vestibulum volutpat aliquet diam, vulputate consequat metus auctor et. In iaculis purus eget lacus pulvinar, vel sagittis massa commodo. Pellentesque pellentesque nulla a velit dignissim mollis. Duis sed volutpat felis. Fusce imperdiet tellus risus, sed tristique velit tempus non. Ut finibus magna et arcu lobortis sollicitudin. Nulla facilisi. In hac habitasse platea dictumst. Vestibulum ultricies leo sed tempor lobortis. Mauris volutpat aliquam fermentum. Donec pulvinar, libero eget sagittis gravida, quam eros aliquet mauris, quis euismod lorem tortor id nulla.
                </a>
                </div>
                <button className={style.botaocadastre}>CASDASTRAR-SE</button>
                </div>
            </section>
        );
    }
    return null
}