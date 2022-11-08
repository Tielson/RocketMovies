import { Container, BackGround, Section, Form } from "./styles";
import { Input } from "../../components/Input";
import { FiMail, FiLock, FiUser } from 'react-icons/fi'
import { TfiArrowLeft } from 'react-icons/tfi'
import {ButtonAR} from '../../components/ButtonAR'
import { Link } from "react-router-dom";

export function SingUp() {
  return (
    <Container>
      <Section>
        <header>
          <h1>RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir.</p>
        </header>

        <h2>Crie sua conta</h2>
        <Form>
          <Input
            id="input"
            icon={FiUser}
            type="text"
            placeholder="Nome"
          />
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
          <ButtonAR add value="Cadastrar" />
          <Link to="/"><TfiArrowLeft />  Voltar para o login </Link>
        </Form>
      </Section>
      <BackGround/>



    </Container>
  )
}