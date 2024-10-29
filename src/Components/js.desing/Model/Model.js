import React, { useState } from 'react'
import * as Components from './index.js'
import api from '../../Service/api.js';
import { useNavigate } from "react-router-dom";
export default function Modal({ isOpen, setModalOpen},props) {
  
  const [signIn, toggle] = React.useState(true);
  //API VERIFICAÇAÕ DE EMAIL E SENHA
   const [valiemail,setValiEmail]= useState('')
   const [valipassoword,setValiPassword]= useState('')
   const navigate = useNavigate();


   const handleCheck = async()=>{
    try{
      const response = await api.post('/validateUser',{email:valiemail,password:valipassoword})
      console.log(response.data)
      console.log(response.data.userVerification)

      let userCode = response.data.userVerification;
      sessionStorage.setItem("userId", response.data.userId);

      if (userCode !== "A" && userCode !== "P") {
        navigate("/error")
      }
      if (userCode === "A") {
        navigate("/students");
      }
      if (userCode === "P")
        navigate("/teacher");
    }
    catch(error){
      console.log(error)
    }
   }

   //API CADASTRO
   const [vemail,setEmail] = useState('');
   const [vpassword,setPassword] = useState('');
   const [vcpf,setCpf] = useState('');
   const [vnome,setNome] = useState('');
   const [vsobrenome,setSobrenome] = useState('');

   const handleSubmit = async () =>{
    try{
   const response = await api.post('/users',{email:vemail,password:vpassword,userCpf:vcpf ,userVerification:resultado,userName:vnome,userLastName:vsobrenome})
   console.log(response.data)
   
  }
  catch(error){
    console.log(error)
  }
}
  //VALIDACÃO ALUNO OU PROFESSOR
   const [isProfessor, setIsProfessor] = useState(false);
   const resultado = isProfessor ? 'P' : 'A';
   //##########################

  //PROTEGER DE LETRAS 
  const checkboxNumber = (e) => {
      if (!/^[0-9]+$/u.test(e.key)) {
          e.preventDefault();
      }
    }
  //VALIDAÇÃO EMAIL
      const validateEmail = (e) => {
        if (!/^[a-zA-Z0-9._:$!-]+@[a-zA-Z09.-]+.[a-zA-Z]$/.test(e.key)) {
          e.preventDefault();
      }
    }
 
   if (isOpen) {
      return (
        <Components.Container>
        <Components.SignUpContainer signingIn={signIn}>
          <Components.Form  >
            <Components.Title>CRIE UMA CONTA!</Components.Title>
            
            <Components.Input  type="text" placeholder="Nome" 
            minLength={1} maxLength={31} required
            onChange={(e)=> setNome(e.target.value)}/>

            <Components.Input  type="text" placeholder="Sobrenome" 
            minLength={1} maxLength={100} required
            onChange={(e)=> setSobrenome(e.target.value)}/>
            
            <Components.Input type="email" placeholder="Email"  
            maxLength={105} required
            onChange= {(e)=> setEmail(e.target.value)}/>

            <Components.Input type="password" placeholder="Password"  
            maxLength={25} required 
            onChange={(e)=> setPassword(e.target.value)}
            />

            <Components.Input  type="text" placeholder="CPF" 
            minLength={11} maxLength={11} required
    
            onChange={(e)=> setCpf(e.target.value)}/>

            <Components.Button type='button'  onClick={handleSubmit} >Registre-se</Components.Button>
            <Components.Divcheck>

            <Components.Check type='checkbox' placeholder="Deseja se cadastrar um Professor"
            onChange={(e) => setIsProfessor(e.target.checked)}/>
            <Components.Subtitule>Deseja se cadastrar como professor? </Components.Subtitule>

            </Components.Divcheck>
          </Components.Form>
        </Components.SignUpContainer>
        <Components.SignInContainer signingIn={signIn}>
          <Components.Form>
            <Components.Title>ENTRE AGORA!</Components.Title>
            <Components.Input type="email" placeholder="Email"
             maxLength={105} 
            onChange={(e) => setValiEmail(e.target.value)}
            />
            <Components.Input type="password" placeholder="Password" 
            maxLength={25} required
            onChange={(e) => setValiPassword(e.target.value)}/>
            <Components.Button type='button' onClick={handleCheck}>Entrar</Components.Button>
          </Components.Form>
        </Components.SignInContainer>
        <Components.OverlayContainer signingIn={signIn}>
          <Components.Overlay signingIn={signIn}>
            <Components.LeftOverlayPanel signingIn={signIn}>
            <Components.FecharEsquerda onClick={setModalOpen}>Fechar</Components.FecharEsquerda>
              <Components.Title>Bem-Vindo!</Components.Title>
              <Components.Paragraph>
                Conecte-se novamente e se misture nsse mundo de ducação e diversão...
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(true)}>
              Entrar
              </Components.GhostButton>
            </Components.LeftOverlayPanel>
            <Components.RightOverlayPanel signingIn={signIn}>
            <Components.FecharDireita onClick={setModalOpen}>Fechar</Components.FecharDireita>
              <Components.Title>Olá amigo!</Components.Title>
              <Components.Paragraph>
                 Explore uma jornada de aventuras e conhecimento.Faça parte do time!!!
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(false)}>
                Registre-se
              </Components.GhostButton>
            </Components.RightOverlayPanel>
          </Components.Overlay>
        </Components.OverlayContainer>
      </Components.Container>
     );
   }
   return null
}
