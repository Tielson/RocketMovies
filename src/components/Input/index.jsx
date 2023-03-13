import { Container } from "./styles";

export function Input({ icon: Icon, isActive, ...rest }) {
  return (
    <Container isActive={isActive}>
      {Icon && <Icon size={20} />}
      <input {...rest}  />
    </Container>
  )
}