import { Container } from "./styles";
import { Tag } from "../Tag";

export function NoteDes({data,gray500, ...rest}){
  return(
    <Container  {...rest}>
  {
    data.tags &&
    <footer>
      {
  
        data.tags.map(tag => <Tag gray500={gray500} key={tag.id} title={tag.name.split(",")} />)
      }
    </footer>
  }
    </Container>
)
}