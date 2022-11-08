import { Container } from "./styles";

export function ButtonAR({value, add, ...rest}){
return(

  <Container {...rest} add={add} >
      {value}
  </Container>
    )
}