import { Container, Arrow, Creation, Section, Buttons } from "./styles";
import { useParams, useNavigate } from 'react-router-dom'

import { FaRegEdit } from 'react-icons/fa';

import { NoteDes } from "../../components/NoteDes";
import { Header } from "../../components/Header";
import { TfiArrowLeft } from 'react-icons/tfi'
import { Details } from "../../components/Details";
import { Link } from "react-router-dom";
import { api } from './../../services/api';
import { useState, useEffect } from "react";

import ReactPlayerLoader from '@brightcove/react-player-loader';
import ReactPlayer from "react-player";
import { ButtonAR } from "../../components/ButtonAR";



export function Preview() {

  const [data, setData] = useState("0")
  console.log(data)

  const reactPlayerLoader = React.createElement(ReactPlayerLoader, {
    accountId: `${data.accountid}`,
    videoId: `${data.videoid}`,

  })

  const params = useParams()
  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  async function handleDetails(id) {
    const confirm = window.confirm("Certeza que deseja excluir?")

    if (confirm) {
      await api.delete(`/notes/${id}`)
      navigate("/")
    }

  }


  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes/preview/${params.id}`)
      setData(response.data[0]?.[0])

    }

    fetchNotes()

  }, [])
  return (
    <Container>

      <Header isActive={true} />

      <Section >

        <Arrow>
          <Link to="/"> <TfiArrowLeft /> <h1>Voltar</h1></Link>
        </Arrow>
        <div className="section">
          <Creation>
            <div className="created">
              <Details created_at={data.created_at} title={data.title} evaluation={data.rating} />
            </div>

            <NoteDes gray500 data={{
              tags: [{ id: `${data.id}`, name: `${data.name}` }]
            }}
            />

          </Creation>

          <div className="video">
            <video-js >{reactPlayerLoader}</video-js>
            <video-js >{
              data.youtube &&
              <ReactPlayer url={data.youtube} controls="true" width="1000px" height="400px" />


            }</video-js>
          </div>


          <p>
            {data.overview}
          </p>
        </div>

        <Buttons>
          <ButtonAR value="Excluir nota" onClick={() => handleDetails(data.note_id)} />
        </Buttons>
      </Section>
    </Container>)
}