import { Container, TiSt, Creation } from "./styles";
import { Stars } from "../Stars";
import {FiClock} from 'react-icons/fi'

export function Details({title,evaluation}){

  return(
    <Container>
      <TiSt>
        {title} <Stars evaluation={evaluation}/> 
      </TiSt>
      <Creation>
        <img src="https://github.com/Tielson.png" alt="Foto de perfil" />
        <p>Por Filipe Tielson</p>
        <FiClock/>
        <p> 
          23/05/22 ás 08:00
        </p>
      </Creation>
    </Container>
  )
}