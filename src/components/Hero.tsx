import { useEffect, useState } from 'react'
import tw from 'tailwind-styled-components'
import Button from '../ui/Button'

interface Movie {
  Title: string
  Genre: string
  Plot: string
  Poster: string
}

const HeroContainer = tw.div`
  margin-4 lg:max-w-7xl lg:my-12 lg:mx-auto
`

const HeroSection = tw.section`
  flex flex-col text-center
  lg:m-[0 1rem] lg:flex-row lg:justify-between lg:items-center lg:text-left
`

export const Hero = () => {
  const [movie, setMovie]: [Movie, React.Dispatch<React.SetStateAction<Movie>>] = useState({} as Movie)

  const [loading, setLoading]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState(true)

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch('https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590')
        const data = await response.json()

        if (!response.ok) {
          throw new Error('Network response was not ok')
        }

        setMovie(data)
      } catch (error) {
        console.error('Error fetching movie:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchMovie()
  }, [])

  return (
    <HeroContainer>
      {
        loading ? (
          <div className='flex justify-center items-center h-screen'>
            <svg className='animate-spin h-10 w-10 text-blue-500' viewBox='0 0 24 24'>
              <circle className='opacity-25' cx='12' cy='12' r='10' strokeWidth='4' stroke='currentColor' fill='none'></circle>
              <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 1 1 16 0A8 8 0 0 1 4 12z'></path>
            </svg>
          </div>
        ) : (
          <HeroSection>
            <div className='mb-4 lg:basis-[40%]'>
              <h2 className='text-primary mb-4 text-4xl'>{movie.Title}</h2>

              <h3 className='text-accent mb-4 text-2xl'>genre: {movie.Genre}</h3>

              <p className='text-secondary mb-4'>{movie.Plot}</p>

              <Button type='button' size='lg'>
                Watch
              </Button>
            </div>

            <div className='py-3 px-8 border-none rounded-xl bg-primary text-white lg:basis-[60%]'>
              <img className='max-w-full h-auto rounded-3xl' src={movie.Poster} alt={movie.Title} />
            </div>
          </HeroSection>
        )
      }
    </HeroContainer>
  )
}
