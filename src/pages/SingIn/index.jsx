import { Container, BackGround, Section, Form } from "./styles";
import { Input } from "../../components/Input";
import { FiMail, FiLock } from 'react-icons/fi'
import { ButtonAR } from '../../components/ButtonAR'
import { Link } from "react-router-dom";
import { useState } from 'react';

import { useAuth } from "../../hooks/auth";

export function SingIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { signIn } = useAuth()

  function handleSignIn() {

    if (!email || !password) {
      return alert("Preencha todos os campos")
    }

    try {
      signIn({ email, password })
    }
    catch {
      error => {
        if (error.response) {
          alert(error.response.data.message)
        }
        else {
          alert("Não foi possível Logar")
        }
      }
    }

  }
  return (
    <Container>
      <Section>
        <header>
          <h1>RocketMovies</h1>
        </header>

        <h2>Faça seu login</h2>
        <Form>
          <Input
            icon={FiMail}
            type="text"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            icon={FiLock}
            type="password"
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
          />
          <ButtonAR add value="Salvar" onClick={handleSignIn} onKeyPress={e => handleSignIn(e.target.value, value)} />
          <Link to="/SingUp"> Criar conta</Link>
        </Form>
      </Section>
      <BackGround />



    </Container>
  )
}