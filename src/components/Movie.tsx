interface MovieProps {
  title: string;
  release_date: string;
  type: string;
  poster_path: string;
}

export const Movie = ({ title, release_date, type, poster_path }: MovieProps) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    <div className='mb-4 md:basis-1/2 lg:basis-1/4 lg:p-4'>
        <img className='rounded-3xl max-w-full h-auto mb-4' src={imageUrl} alt={title} />

        <h3 className='text-primary text-3xl mb-2'>{title}</h3>

        <p className='text-secondary'>Type: {type}</p>
        <p className='text-secondary'>Release Date: {release_date}</p>
    </div>
  )
}
