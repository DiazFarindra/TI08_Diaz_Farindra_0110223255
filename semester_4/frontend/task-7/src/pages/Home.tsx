import { useState } from 'react'
import { Footer } from '../components/Footer'
import { Form } from '../components/Form'
import { Hero } from '../components/Hero'
import { Movies } from '../components/Movies'
import { Navbar } from '../components/Navbar'
import data from '../utils/contants/data'


export const Home = () => {
  const [movies, setMovies] = useState(data)

  return (
    <div>
        <Navbar />
        <main>
            <Hero />
            <Movies movies={movies} />
            <Form movies={movies} setMovies={setMovies} />
        </main>
        <Footer />
    </div>
  )
}
