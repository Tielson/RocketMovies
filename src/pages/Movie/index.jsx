import { Header } from "../../components/Header";
import { Container, Section, Arrow, InputC, Bookmarks, Buttons } from "./styles";
import { TfiArrowLeft } from 'react-icons/tfi'
import { Input } from "../../components/Input";
import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { ButtonAR } from '../../components/ButtonAR'
import { Link } from "react-router-dom";



export function Movie() {

  return (
    <Container>
      <Header />
      <Section>
        <Arrow>
        <Link to="/"> <TfiArrowLeft /></Link> <h1>Voltar</h1>
        </Arrow>
        <h1>Novo filme</h1>

        <InputC>
          <Input placeholder="Título" />
          <Input placeholder="Sua nota (de 0 a 5)" />
          <Textarea placeholder="Observações" />
        </InputC>


        <p>Marcadores</p>
        <Bookmarks>
          <NoteItem value="React" />
          <NoteItem placeholder="Novo marcador" isNew />
        </Bookmarks>

        <Buttons>
          <ButtonAR  value="Excluir filme" />
          <ButtonAR add value="Salvar alterações" />
        </Buttons>



      </Section>
    </Container>
  )
}