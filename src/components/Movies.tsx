import { Movie } from './Movie'

interface MovieProps {
  id: string;
  title: string;
  type: string;
  poster_path: string;
  release_date: string;
}

interface stateMoviesProps {
  movies: MovieProps[];
}

export const Movies = ({movies}: stateMoviesProps) => {
  return (
    <div className='m-4'>
        <section className='my-20 mx-0 lg:max-w-7xl lg:my-12 lg:mx-auto'>
            <h2 className='mb-4 text-4xl text-primary'>Latest Movie</h2>

            <div className='flex flex-col md:flex-row md:flex-wrap md:justify-center md:items-center'>
                {
                    movies.map((movie) => (
                        <Movie key={movie.id} title={movie.title} release_date={movie.release_date} type={movie.type} poster_path={movie.poster_path} />
                    ))
                }
            </div>
        </section>
    </div>
  )
}
