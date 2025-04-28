import { Movie } from './Movie'
import data from '../utils/contants/data'

export const Movies = () => {
  interface MoviesProps {
    id: string;
    title: string;
    year: string;
    type: string;
    poster: string;
  }

  const movies: MoviesProps[] = data;

  return (
    <div className='m-4'>
        <section className='my-20 mx-0 lg:max-w-7xl lg:my-12 lg:mx-auto'>
            <h2 className='mb-4 text-4xl text-primary'>Latest Movie</h2>

            <div className='flex flex-col md:flex-row md:flex-wrap md:justify-center md:items-center'>
                {
                    movies.map((movie) => (
                        <Movie key={movie.id} title={movie.title} year={movie.year} type={movie.type} poster={movie.poster} />
                    ))
                }
            </div>
        </section>
    </div>
  )
}
