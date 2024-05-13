import Cabacalho from "../js.desing/Header/index"
import Inicio from "../js.desing/Home/index"
import BemVindo from "../js.desing/Welcome/index"
import Mensagem from "../js.desing/Message/index"
import ComoFunciona from "../js.desing/HowItWorks/index"
import Divirta from "../js.desing/HaveFun/index"
import Historia from "../js.desing/History/index"
import Footer from "../js.desing/Footer/index"

import './index.module.css'
export default function Landing(){
    return(
        <div>
        <Cabacalho/>
        <Inicio/>
        <BemVindo/>
        <Mensagem 
         Titulo="1. Flexibilidade de horários"
         Subtitulo="Os estudantes podem assistir às aulas e realizar as atividades de acordo com sua disponibilidade" />
        <ComoFunciona/>
        <Divirta/> 
        <Mensagem
         Titulo="2.Áreas Atendidas:"
         Subtitulo="A teleducação abrange diversas áreas, incluindo Medicina, Enfermagem, Odontologia, Nutrição, Fisioterapia, Psicologia e muito mais."
        />
        <Historia/>
        <Footer/>
        </div>
        
    )
}