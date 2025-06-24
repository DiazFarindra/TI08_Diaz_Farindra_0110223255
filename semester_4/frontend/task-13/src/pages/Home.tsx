import { useEffect, useState } from 'react'
import { Form } from '../components/Form'
import { Hero } from '../components/Hero'
import { Movies } from '../components/Movies'
import axios from 'axios'

interface MovieProps {
  id: string;
  title: string;
  type: string;
  poster_path: string;
  release_date: string;
}

export const Home = () => {
  const [movies, setMovies] = useState<MovieProps[]>([]);

    useEffect(() => {
        async function fetchData() {
            if (!import.meta.env.VITE_TMDB_API_KEY || !import.meta.env.VITE_TMDB_BASE_URL) {
                throw new Error('TMDB API key or base URL is not defined');
            }

            const response = await axios.get(`${import.meta.env.VITE_TMDB_BASE_URL}/movie/now_playing?api_key=${import.meta.env.VITE_TMDB_API_KEY}`)

            if (response.status !== 200) {
                throw new Error('Network response was not ok');
            }

            setMovies(response.data.results);
        }

        fetchData()
    }, [])

  return (
    <>
      <Hero />
      <Movies movies={movies} />
      <Form movies={movies} setMovies={setMovies} />
    </>
  )
}
