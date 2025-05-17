import { useState } from 'react'
import { Form } from '../components/Form'
import { Hero } from '../components/Hero'
import { Movies } from '../components/Movies'
import data from '../utils/contants/data'


export const Home = () => {
  const [movies, setMovies] = useState(data)

  return (
    <>
        <Hero />
        <Movies movies={movies} />
        <Form movies={movies} setMovies={setMovies} />
    </>
  )
}
