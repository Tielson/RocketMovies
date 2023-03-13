
import { Container, Header, Avatar, Form } from "./styles";
import avatarPlaceHolder from '../../../img/avatar_placeholder.svg'
import { Input } from "../../components/Input";
import { TfiArrowLeft } from 'react-icons/tfi'
import { FiCamera, FiUser, FiLock, FiMail } from 'react-icons/fi'
import { ButtonAR } from '../../components/ButtonAR'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { api } from "../../services/api";

import { useAuth } from '../../hooks/auth'

export function Profile() {

  const { updatedUser, user } = useAuth()
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [passwordOld, setpasswordOld] = useState("")
  const [passwordNew, setPassword] = useState("")

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder

  const [avatar, setAvatar] = useState(avatarUrl)
  const [avatarFile, setAvatarFile] = useState(null)


  const navigate = useNavigate()

  async function handleUpdatedUser() {
    if(!name ){
      return alert("preencha campo nome")
    }
    if( !email){
      return alert("preencha campo email")
    }
    const updated = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld
    }
    const userUpdated = Object.assign(user, updated)

    await updatedUser({ user: userUpdated, avatarFile })
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0]

    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }

  function handleBack() {
    navigate(-1)
  }

  return (
    <Container>
      <Header>
        <button onClick={handleBack}> <TfiArrowLeft /> <h1>Voltar</h1></button>
      </Header>


      <Form>
        <Avatar>
          <img
            src={avatar}
            alt="Foto de perfil"
          />
          <label htmlFor="avatar">
            <FiCamera />
            <input
              type="file"
              id="avatar"
              onChange={handleChangeAvatar}
            />
          </label>
        </Avatar>

        <Input
          type="text"
          icon={FiUser}
          placeholder="Usuario"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <Input
          type="text"
          icon={FiMail}
          placeholder="E-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          type="password"
          icon={FiLock}
          placeholder="Senha atual"
          onChange={e => setpasswordOld(e.target.value)}
        />
        <Input
          type="password"
          icon={FiLock}
          placeholder="Nova senha"
          onChange={e => setPassword(e.target.value)}
        />

        <ButtonAR
          add
          id="button"
          value="Salvar"
          onClick={handleUpdatedUser} />

      </Form>
    </Container>
  )
}