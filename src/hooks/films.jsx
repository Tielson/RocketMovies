import { createContext, useContext, useState, useEffect } from "react";
import { marvel } from "../services/marvel"
export const FilmsContext = createContext([]);

function FilmsProvider({ children }) {
  const [films, setFilms] = useState([])


useEffect(() => {
  (async () => {
    const response = await marvel.get("/");
    setFilms(response.data.data)
  })();
}, [])

return (
  <FilmsContext.Provider value={{
    films,
  }}>
    {children}
  </FilmsContext.Provider>
)
}


function Films() {
  const context = useContext(FilmsContext)
  return context
}

export { FilmsProvider, Films }