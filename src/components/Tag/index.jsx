import { Container } from "./styles";

export function Tag({ title, ...rest }) {
  return (
    <Container {...rest}>
      {title.map(e=>( <p>{e}</p>))}
    </Container>
  )

}