import { Container } from "./styles";
import { Input } from "../Input";
import { H1 } from "./styles";
import { User } from "./styles";
import { Inp } from "./styles";
import {Box} from './styles'


export function Header(){
  return(
    <Container>
      <Box>

   
     <H1>
      <h1>RocketMovies</h1>
     </H1>
     <Inp>
      <Input placeholder="Pesquisar pelo titulo"/>

     </Inp>

     <User>

    <div>
      <h1>Filipe Tielson</h1>
      <p>Sair</p>
    </div>

    <a href="/profile">
      <img src="https://github.com/Tielson.png" alt="Foto de perfil" />
    </a>
     </User>
     </Box>
    </Container>
  )

}