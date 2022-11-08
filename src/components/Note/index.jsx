import { Container } from "./styles";
import { Stars } from "../Stars";
import { NoteDes } from "../NoteDes";


export function Note({ data, evaluation,value, ...rest }) {
  return (
    <Container {...rest} >
    

      <h1>{data.title}</h1>
      <Stars evaluation = {evaluation}/>
        <div className="content">
        {value}
        </div>
        <NoteDes data={data}/>

    </Container>
  )
}