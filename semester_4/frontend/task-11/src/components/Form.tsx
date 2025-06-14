import { nanoid } from 'nanoid';
import { useState } from 'react';
import Button from '../ui/Button';

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
  const [form, setForm] = useState({
    title: '',
    year: '',
    poster: '',
    type: '',
  })

  const { title, year, poster, type } = form;

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  }

  function addMovie() {
    const movie = {
      id: nanoid(),
      title: title,
      year: year,
      type: type,
      poster: poster,
    }

    setMovies([...movies, movie]);
  }

  function validate() {
    if (title === '') {
      alert('please fill in title field');
      return false;
    }

    if (poster === '') {
      alert('please fill in poster field');
      return false;
    }

    if (year === '' || isNaN(Number(year))) {
      alert('please fill in year field');
      return false;
    }

    if (type === '') {
      alert('please fill in type field');
      return false;
    }

    return true;
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (validate()) {
      addMovie();

      setForm({
        title: '',
        year: '',
        poster: '',
        type: '',
      });

      alert('movie added');

      setTimeout(() => {
        window.location.reload();
      }
      , 1000);
    }

    if (!validate()) return;
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
                onChange={handleChange}
                name='title'
                value={title}
              />
              {title !== '' ? null : <small>please fill in title field</small>}
            </div>

            <div className='w-full flex flex-col'>
              <label className='text-secondary'>poster</label>
              <input
                type='text'
                className='w-full px-2 py-1 border border-primary rounded-lg'
                onChange={handleChange}
                name='poster'
                value={poster}
              />
              {poster !== '' ? null : <small>please fill in poster field</small>}
            </div>

            <div className='w-full flex flex-col'>
              <label className='text-secondary'>year</label>
              <input
                type='text'
                className='w-full px-2 py-1 border border-primary rounded-lg'
                onChange={handleChange}
                name='year'
                value={year}
              />
              {year !== '' ? null : <small>please fill in year field</small>}
            </div>

            <div className='w-full flex flex-col'>
              <label className='text-secondary'>type</label>
              <select
                className='w-full px-2 py-1 border border-primary rounded-lg'
                onChange={handleChange}
                name='type'
                value={type}
              >
                <option value='action'>action</option>
                <option value='drama'>drama</option>
                <option value='horror'>horror</option>
                <option value='comedy'>comedy</option>
                <option value='dll'>dll</option>
              </select>
              {type !== '' ? null : <small>please fill in type field</small>}
            </div>

            <Button type='submit' size='lg'>
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
