import { Container, Section, Arrow, InputC, Bookmarks, Buttons } from "./styles";
import { NoteItem } from '../../components/NoteItem'
import { ButtonAR } from '../../components/ButtonAR'
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { TfiArrowLeft } from 'react-icons/tfi'
import { Link } from "react-router-dom";

import { Films } from "../../hooks/films";
import { api } from './../../services/api';
import { useEffect, useState } from 'react';

import ReactPlayer from "react-player";

import ReactPlayerLoader from '@brightcove/react-player-loader';


export function Movie() {

  const { films } = Films()
  const [title, setTitle] = useState("")
  const [star, setStar] = useState(Number)

  const [newTag, setNewTag] = useState("")
  const [tags, setTags] = useState([])
  const [overview, setOverview] = useState("")
  const [img, setImg] = useState("")
  const [videoid, setVideoid] = useState(null)
  const [accountid, setAccountid] = useState(null)
  const [youtube, setYoutube] = useState(null)

  const reactPlayerLoader = React.createElement(ReactPlayerLoader, {
    accountId: `${accountid}`,
    videoId: `${videoid}`,

  })

  function addNewTagInformation() {
    setTags([])
    const information = films.map(film => film)
    const d = information.filter(t => t.title === title)
    const c = d[0]

    setOverview(c?.overview)
    setImg(c?.cover_url)

    if (c?.directed_by && c?.saga && c?.release_date) {
      setTags(prevState => [...prevState, `Diretor: ${c?.directed_by}`, `Saga: ${c?.saga}`, `Lançamento: ${c?.release_date}`])
    }

    if (!c?.directed_by && c?.saga && !c?.release_date) {
      setTags(prevState => [...prevState, `Saga: ${c?.saga}`])
    }

    if (c?.directed_by && c?.saga && !c?.release_date) {
      setTags(prevState => [...prevState, `Diretor: ${c?.directed_by}`, `Saga: ${c?.saga}`])
    }


    if (c?.trailer_url !== null) {
      const i = c?.trailer_url.split("/")

      if (i?.[2] !== "players.brightcove.net") {
        setAccountid(null)
        setVideoid(null)
        setYoutube(c?.trailer_url)
        return
      }
      const p = i?.[5].split("videoId=")

      setAccountid(i?.[3])
      setVideoid(p?.[1])
    }
  }


  function addNewTags() {
    if (!newTag) {
      return alert("Preencha a tag")
    }

    setTags(prevState => [...prevState, newTag])
    setNewTag("")
  }

  function removeTags(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  async function handleNewNote() {
    if (!title) {
      return alert("Escolha um filme")
    }
    if (!star) {
      return alert("Escolha uma nota de 0 a 5")
    }
    if (star > 5  || star < 0  ) {
      return alert("Escolha uma nota de 0 a 5")
    }
    if (newTag) {
      const t = window.confirm("Deseja colocar essa tag?")
      if (t) {
        setTags(prevState => [...prevState, newTag])
        document.location.reload(true);
      }
      else setNewTag("")
    }

    const response = await api.get("/notes/toCheck")
    const filterResponse = response.data.filter(e => e.title === title)
    console.log(filterResponse)
    if (filterResponse.length === 0) {
      await api.post("/notes", {
        title,
        rating: star,
        overview,
        img,
        accountid,
        videoid,
        youtube
      })

      await api.post("/tags", {
        name: tags
      })

    return  document.location.reload(true);
    }

    alert("Filme já adicionado")

  }
  function turnBack() {
    document.location.reload(true);

  }

  useEffect(() => {
    addNewTagInformation()
  }, [title])


  return (
    <Container>
      <Header isActive={true} />
      <Section>

        <Arrow>
          <Link to="/"> <TfiArrowLeft /><h1>Voltar</h1></Link>
        </Arrow>
        <h1>Novo filme</h1>
        <div className="filmInput">


          <InputC>

            <Input
              placeholder="Título"
              list="listFilms"
              onChange={e => { setTitle(e.target.value) }}
            />



            <datalist id="listFilms">
              {films.map((film) => (
                <option
                  key={film.id} value={film.title}
                />
              ))}
            </datalist>

            <Input
              placeholder="Sua nota (de 0 a 5)"
              onChange={e => setStar(e.target.value)}
            />

            <p>{overview}</p>
            <div className="video">
              <video-js >
                {
                  reactPlayerLoader
                }
                {
                  youtube &&
                  <ReactPlayer
                    url={youtube}
                    controls="true"
                    width="50vmin"
                    height="40vmin"
                  />}
              </video-js>


            </div>
          </InputC>
        </div>

        <p>Marcadores</p>
        <Bookmarks>

          <NoteItem
            placeholder="Novo marcador"
            isNew
            value={newTag}
            onChange={e => setNewTag(e.target.value)}
            onClick={addNewTags}
          />

          {
            tags && tags.map((tag, index) => (
              <NoteItem
                key={String(index)}
                value={tag}

                onClick={() => { removeTags(tag) }}
              />
            ))
          }

        </Bookmarks>

        <Buttons>
          <ButtonAR add value="Salvar alterações" onClick={handleNewNote} />
        </Buttons>



      </Section>
    </Container>
  )
}