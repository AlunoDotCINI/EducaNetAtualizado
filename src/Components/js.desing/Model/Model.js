import React, { useState } from 'react'
import * as Components from './index.js'
import api from '../../Service/api.js';
export default function Modal({ isOpen, setModalOpen}) {
  const [signIn, toggle] = React.useState(true);
  
   //API VERIFICAÇAÕ DE EMAIL E SENHA
   const [valiemail,setValiEmail]= useState('')
   const [valipassoword,setValiPassword]= useState('')
   const handleCheck = async()=>{
    try{
      const response = await api.post('/validateUser',{email:valiemail,password:valipassoword})
      console.log(response.data)
    }
    catch(error){
      console.log(error)
    }
   }

   //API CADASTRO
   const [vemail,setEmail] = useState('');
   const [vpassword,setPassword] = useState('');
   const [vcpf,setCpf] = useState('');
   
   const handleSubmit = async () =>{
    try{
   const response = await api.post('/users',{email:vemail,password:vpassword,userCpf:vcpf ,userVerification:resultado})
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
            <Components.Input type="email" placeholder="Email"  
            maxLength={105} required
            onChange= {(e)=> setEmail(e.target.value)} 
            onKeyDown={validateEmail}/>

            <Components.Input type="password" placeholder="Password"  
            maxLength={25} required 
            onChange={(e)=> setPassword(e.target.value)}
            />

            <Components.Input  type="text" placeholder="CPF" 
            minLength={11} maxLength={11} required
            onKeyDown={checkboxNumber}
            onChange={(e)=> setCpf(e.target.value)}/>

            <Components.Button  onClick={handleSubmit} >Registre-se</Components.Button>
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
            <Components.Input type="email" placeholder="Email" maxLength={105} 
            onChange={(e) => setValiEmail(e.target.checked)}
            onKeyDown={validateEmail}/>
            <Components.Input type="password" placeholder="Password" maxLength={25} required
             onChange={(e) => setValiPassword(e.target.checked)}/>
            <Components.Button onClick={handleCheck}>Entrar</Components.Button>
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
