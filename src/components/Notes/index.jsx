import { Container } from "./styles";
import { Stars } from "../Stars";
import { NoteDes } from "../NoteDes";

export function Notes({ data, img, value, evaluation, ...rest }) {
  return (
    <Container {...rest} >
<div>

        <img src={img} alt="dd" />
</div>
<div className="ii">
      <h1>{data.title}</h1>
      <div className="content">
        <p>{value}</p>
      </div>
      <Stars evaluation={evaluation} />
      <NoteDes data={data} />

</div>
    </Container>
  )
}