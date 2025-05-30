interface MovieProps {
  title: string;
  year: string;
  type: string;
  poster: string;
}

export const Movie = ({ title, year, type, poster }: MovieProps) => {
  return (
    <div className='mb-4 md:basis-1/2 lg:basis-1/4 lg:p-4'>
        <img className='rounded-3xl max-w-full h-auto mb-4' src={poster} alt={title} />

        <h3 className='text-primary text-3xl mb-2'>{title}</h3>

        <p className='text-secondary'>Type: {type}</p>
        <p className='text-secondary'>Year: {year}</p>
    </div>
  )
}
