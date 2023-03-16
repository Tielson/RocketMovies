import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { HiOutlinePlus } from 'react-icons/hi'
import { Notes } from "../../components/Notes"

import { Container } from "./styles"
import { useNavigate } from "react-router-dom"

import { api } from "../../services/api"
import { useState, useEffect } from "react"
import { FcSearch } from 'react-icons/fc';



export function Home() {
  const [allFilm, setAllFilm] = useState([])
  const [filmSelected, setFilmSelected] = useState([])

  const f = filmSelected[0] == undefined ? allFilm[0] : filmSelected[0]


  const navigate = useNavigate()


  function handleDetails(id, index) {
    navigate(`/preview/${id}`)
  }


  function handleSearch(target) {
    const filter = allFilm.map(e => e.filter(t => t.title.toLowerCase().includes(target.toLowerCase())))
    setFilmSelected(filter)
  }

  function handleInput() {
    document.querySelector(".hh").classList.toggle('hidden')
  }

  useEffect(() => {

    const filmsSelected = api.get(`/notes/show`)
    filmsSelected
      .then(data => setAllFilm(data.data))
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message)
        }
        else {
          alert("Não autorizado ,faça o login novamente.")
      }
      }
      )

  }, [])
  return (
    <Container>
      <Header className="header" handleSearch={handleSearch} />
      <main>
        <div className="inputButton">
          <button className="cc" onClick={() => handleInput()}>
            <FcSearch />
          </button>
          <div className="hh hidden">
            <input type="text" onChange={e => handleSearch(e.target.value)} />
          </div>
        </div>
        <div className="content">
          <h1>Meus filmes</h1>
          <Button onClick={() => navigate("/movie")}
            value="Adicionar filme"
            icon={HiOutlinePlus}>
          </Button>
        </div>

        <div className="notes">
          {
            f?.map((film, Index) => (
              <Notes
                onClick={() => handleDetails(film.note_id, Index)}
                key={String(Index + 2)}
                data={{
                  title: film.title,
                  tags: [
                    { id: `${String(film.note_id)}`, name: `${film.name}` },
                  ]
                }}
                img={film.img}
                evaluation={film.rating}
                value={film.overview} />
            ))
          }

        </div>
      </main>
    </Container >
  )
}