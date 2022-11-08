import { Container } from "./styles";
import {BsStarFill,BsStar} from 'react-icons/bs'

export function Stars({evaluation}){
return(
<Container>
  <span>{ evaluation >= 1 ? <BsStarFill/> : <BsStar/> }</span>
  <h1>{console.log(evaluation)}</h1>
  <span>{ evaluation >= 2 ? <BsStarFill/> : <BsStar/> }</span>
  <span>{ evaluation >= 3 ? <BsStarFill/> : <BsStar/> }</span>
  <span>{ evaluation >= 4 ? <BsStarFill/> : <BsStar/> }</span>
  <span>{ evaluation >= 5 ? <BsStarFill/> : <BsStar/> }</span>
</Container>
)
}