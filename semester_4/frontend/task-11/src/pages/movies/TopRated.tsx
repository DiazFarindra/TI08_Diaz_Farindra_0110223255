import { useEffect, useState } from 'react'
import { Hero } from '../../components/Hero'
import axios from 'axios'
import { Movies } from '../../components/Movies'

export const TopRated = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        async function fetchData() {
            if (!import.meta.env.VITE_TMDB_API_KEY || !import.meta.env.VITE_TMDB_BASE_URL) {
                throw new Error('TMDB API key or base URL is not defined');
            }

            const response = await axios.get(`${import.meta.env.VITE_TMDB_BASE_URL}/movie/top_rated?api_key=${import.meta.env.VITE_TMDB_API_KEY}`)

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
        </>
    )
}
