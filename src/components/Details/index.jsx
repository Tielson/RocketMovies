import { Container, TiSt, Creation } from "./styles";
import { Stars } from "../Stars";
import {FiClock} from 'react-icons/fi'
import { useAuth } from "../../hooks/auth";
import avatarPlaceHolder from "../../../img/avatar_placeholder.svg"
import { api } from './../../services/api';

export function Details({title,evaluation, created_at}){
  const {user} = useAuth()
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder

  return(
    <Container>
      <TiSt>
        {title} <Stars evaluation={evaluation}/> 
      </TiSt>
      <Creation>
        <img src={avatarUrl} alt="Foto de perfil" />
        <p>{user.name}</p>
        <FiClock/>
        <p> 
          {created_at}
        </p>
      </Creation>
    </Container>
  )
}