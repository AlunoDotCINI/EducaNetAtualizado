import React from 'react'
import { ReactDOM } from 'react-dom';
import * as Components from './index.js'

export default function Modal({ isOpen, setModalOpen}) {
   const [signIn, toggle] = React.useState(true);
   if (isOpen) {
      return (
        <Components.Container>
        <Components.SignUpContainer signingIn={signIn}>
          <Components.Form>
            <Components.Title>CRIE UMA CONTA!</Components.Title>
            <Components.Input type="text" placeholder="Name" />
            <Components.Input type="email" placeholder="Email" />
            <Components.Input type="password" placeholder="Password" />
            <Components.Input type="text" placeholder="CPF" />
            <Components.Button>Registre-se</Components.Button>
            <Components.Divcheck>
            <Components.Check type='checkbox' placeholder="Deseja se cadastrar um Professor" />
            <Components.subtitule>Deseja se cadastrar como professor?</Components.subtitule>
            </Components.Divcheck>
          </Components.Form>
        </Components.SignUpContainer>
        <Components.SignInContainer signingIn={signIn}>
          <Components.Form>
            <Components.Title>ENTRE AGORA!</Components.Title>
            <Components.Input type="email" placeholder="Email" />
            <Components.Input type="password" placeholder="Password" />
            <Components.Button>Entrar</Components.Button>
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
