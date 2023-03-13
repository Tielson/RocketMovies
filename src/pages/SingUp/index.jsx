import { Container, BackGround, Section, Form } from "./styles";
import { Input } from "../../components/Input";
import { FiMail, FiLock, FiUser } from 'react-icons/fi'
import { TfiArrowLeft } from 'react-icons/tfi'
import { ButtonAR } from '../../components/ButtonAR'
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { useState } from 'react';

export function SingUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  async function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos!")
    }
   await api.post("/users", { name, email, password })
      .then(() => {
        alert("Usuario cadastrado com sucesso")
        navigate("/")
      }).catch((error => {
        if (error.response) {
          alert(error.response.data.message)
        }
        else {
          alert("Não foi possível cadastrar")
        }
      }))
  }
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
            icon={FiUser}
            type="text"
            placeholder="Nome"
            onChange={e => setName(e.target.value)}
          />
          <Input
            icon={FiMail}
            type="text"
            placeholder="E-mail"
            onChange={e=> setEmail(e.target.value)}
          />
          <Input
            icon={FiLock}
            type="password"
            placeholder="Senha"
            onChange={e => setPassword(e.target.value)}
          />
          <ButtonAR add value="Cadastrar" onClick={handleSignUp} />
          <Link to="/"><TfiArrowLeft />  Voltar para o login </Link>
        </Form>
      </Section>
      <BackGround />



    </Container>
  )
}