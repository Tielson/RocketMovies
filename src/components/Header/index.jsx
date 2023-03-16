import { Container } from "./styles";
import { Input } from "../Input";
import { H1 } from "./styles";
import { User } from "./styles";
import { Inp } from "./styles";
import { Box } from './styles'
import { api } from "../../services/api";
import avatarPlaceHolder from "../../../img/avatar_placeholder.svg"
import { useAuth } from "../../hooks/auth";
import { useNavigate } from 'react-router-dom';


export function Header({handleSearch, isActive}) {
  const { user, signOut } = useAuth()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder

  const navigate = useNavigate()

  function handleSignUp() {
    signOut()
    navigate("/")

  }

  return (
    <Container>
      <Box>
        <H1>
          <h1>RocketMovies</h1>
        </H1>
        <Inp>
          <Input isActive={isActive}
            placeholder="Pesquisar pelo titulo"
            onChange={e => handleSearch(e.target.value)}
          />
        </Inp>
        <User>
          <div>
            <h1>{user.name}</h1>
            <button onClick={handleSignUp}>Sair</button>
          </div>
          <button onClick={()=> navigate("/profile")}>
            <img src={avatarUrl} alt="Foto de perfil" />
          </button>
        </User>
      </Box>
    </Container>
  )

}