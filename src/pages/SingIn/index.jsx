import { Container, BackGround, Section, Form } from "./styles";
import { Input } from "../../components/Input";
import { FiMail, FiLock } from 'react-icons/fi'
import {ButtonAR} from '../../components/ButtonAR'
import { Link } from "react-router-dom";

export function SingIn() {
  return (
    <Container>
      <Section>
        <header>
          <h1>RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir.</p>
        </header>

        <h2>Faça seu login</h2>
        <Form>
          <Input
            id="input"
            icon={FiMail}
            type="text"
            placeholder="E-mail"
          />
          <Input
            id="input"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />
          <ButtonAR add value="Salvar" />
          <Link to="/SingUp"> Criar conta</Link>
        </Form>
      </Section>
      <BackGround/>



    </Container>
  )
}