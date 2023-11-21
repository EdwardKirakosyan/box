import React from "react"
import Item from "./Item"
import Nav from "./Nav"

export default function App() {
  const [filmData, setFilmData] = React.useState([])

  const getMovies = () => {
    const url = "https://imdb-top-100-movies.p.rapidapi.com"
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "0b36454fe8msh4030639156d05f6p18a9cfjsnab4ad95062cf",
        "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
      },
    }

    try {
      fetch(url, options)
        .then((res) => res.json())
        .then((data) => setFilmData(data))
    } catch (error) {
      console.error(error)
    }
  }

  React.useEffect(() => {
    getMovies()
  }, [])

  return (
    <>
      <Nav />
      <Item data={filmData} />
    </>
  )
}
