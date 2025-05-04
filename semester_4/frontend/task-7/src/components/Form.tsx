import { nanoid } from 'nanoid';
import { useState } from 'react';

interface MoviesProps {
  id: string;
  title: string;
  year: string;
  type: string;
  poster: string;
}

interface stateMovieProps {
  movies: MoviesProps[];
  setMovies: React.Dispatch<React.SetStateAction<MoviesProps[]>>;
}

export const Form = ({ movies, setMovies }: stateMovieProps) => {
  const [title, setTitle] = useState('')
  const [year, setYear] = useState('')
  const [poster, setPoster] = useState('')
  const [type, setType] = useState('')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (title === '' || year === '' || poster === '' || type === '') {
      alert('please fill in all fields')
      return
    }

    const movie = {
      id: nanoid(),
      title: title,
      year: year,
      type: type,
      poster: poster,
    }

    setMovies([...movies, movie]);
  }

  return (
    <div id='form' className='m-4'>
      <div className='flex justify-center items-center gap-12'>
        <div className='w-fit bg-primary rounded-3xl p-4'>
          <img
            className='max-w-full h-auto rounded-4xl'
            src='https://picsum.photos/200/300'
            alt=''
          />
        </div>

        <div className='w-fit flex flex-col gap-4'>
          <form onSubmit={handleSubmit}>
            <div className='text-center'>
              <h2 className='text-primary text-4xl'>Add Movie</h2>
            </div>

            <div className='w-full flex flex-col'>
              <label className='text-secondary'>title</label>
              <input
                type='text'
                className='w-full px-2 py-1 border border-primary rounded-lg'
                onChange={(e) => setTitle(e.target.value)}
              />
              {title !== '' ? null : <small>please fill in title field</small>}
            </div>

            <div className='w-full flex flex-col'>
              <label className='text-secondary'>poster</label>
              <input
                type='text'
                className='w-full px-2 py-1 border border-primary rounded-lg'
                onChange={(e) => setPoster(e.target.value)}
              />
              {poster !== '' ? null : <small>please fill in poster field</small>}
            </div>

            <div className='w-full flex flex-col'>
              <label className='text-secondary'>year</label>
              <input
                type='text'
                className='w-full px-2 py-1 border border-primary rounded-lg'
                onChange={(e) => setYear(e.target.value)}
              />
              {year !== '' ? null : <small>please fill in year field</small>}
            </div>

            <div className='w-full flex flex-col'>
              <label className='text-secondary'>type</label>
              <select
                className='w-full px-2 py-1 border border-primary rounded-lg'
                onChange={(e) => setType(e.target.value)}
              >
                <option value='action'>action</option>
                <option value='drama'>drama</option>
                <option value='horror'>horror</option>
                <option value='comedy'>comedy</option>
                <option value='dll'>dll</option>
              </select>
              {type !== '' ? null : <small>please fill in type field</small>}
            </div>

            <button type='submit' className='w-full bg-primary py-2 text-white rounded-xl'>
              submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
