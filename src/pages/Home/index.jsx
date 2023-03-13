import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { HiOutlinePlus } from 'react-icons/hi'
import { Notes } from "../../components/Notes"

import { Container } from "./styles"
import { Link, useNavigate } from "react-router-dom"

import { api } from "../../services/api"
import { useState, useEffect } from "react"
import { useAuth } from "../../hooks/auth"



export function Home() {
  const [allFilm, setAllFilm] = useState([])
  const [filmSelected, setFilmSelected] = useState([])

  const f =   filmSelected[0] == undefined ?    allFilm[0] :   filmSelected[0]
  console.log(f)

  const navigate = useNavigate()


  function handleDetails(id, index) {
    console.log(index)
    navigate(`/preview/${id}`)
  }


  function handleSearch(target) {
    const filter = allFilm.map(e => e.filter(t => t.title.toLowerCase().includes(target.toLowerCase())))
    setFilmSelected(filter)
  }

  useEffect(() => {
    const filmsSelected = api.get(`/notes/show`)
    filmsSelected
    .then(data => setAllFilm(data.data))
    .catch(()=>alert("Não autorizado,faça o login novamente."), )

  }, [])
  return (
    <Container>
      <Header handleSearch={handleSearch}  />
      <main>
        <div className="content">
          <h1>Meus filmes</h1>
          <Link to="/movie">
            <Button
              value="Adicionar filme"
              icon={HiOutlinePlus}>
            </Button>
          </Link>
        </div>

        <div className="note">
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