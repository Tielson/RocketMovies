import { Container } from "./styles";

export function Button({ value,icon:Icon, ...rest }) {
  return (
    <Container type="button"  {...rest}>
       <Icon/>
       {value}
    </Container>
  )
}