
import { Container, Header, Avatar, Form } from "./styles";
import { Input } from "../../components/Input";
import { TfiArrowLeft } from 'react-icons/tfi'
import { FiCamera, FiUser, FiLock, FiMail } from 'react-icons/fi'
import {ButtonAR} from '../../components/ButtonAR'
import { Link } from "react-router-dom";


export function Profile() {

  return (
    <Container>
      <Header>
        <Link to="/"> <TfiArrowLeft /> <h1>Voltar</h1></Link> 
      </Header>


      <Form>
        <Avatar>
          <img src="https://github.com/Tielson.png" alt="Foto de perfil" />
          <label htmlFor="Avatar">
            <FiCamera />
            <input type="file" id="avatar" />
          </label>
        </Avatar>

        <Input type="text"
          icon={FiUser}
          placeholder="Usuario" />
        <Input type="text"
          icon={FiMail}
          placeholder="E-mail" />
        <Input type="password"
          icon={FiLock}
          placeholder="Senha atual" />
        <Input type="password"
          icon={FiLock}
          placeholder="Nova senha" />

        <ButtonAR add id="button" value="Salvar" />

      </Form>
    </Container>
  )
}