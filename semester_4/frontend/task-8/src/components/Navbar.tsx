import { Link } from 'react-router'

export const Navbar = () => {
  return (
    <div role='container' className='container-default'>
        <nav role='navbar' className='flex flex-col md:flex-row justify-between items-center'>
            <div>
                <h1 role='brand' className='text-4xl md:mb-0'>Movie App</h1>
            </div>
            <div>
                <ul role='list' className='flex flex-col list-none md:flex-row'>
                    <Link to='/' className='mb-4 md:m-y-0 md:mx-4'>home</Link>
                    <Link to='/movies/create' className='mb-4 md:m-y-0 md:mx-4'>add movies</Link>
                    <Link to='/movies/popular' className='mb-4 md:m-y-0 md:mx-4'>popular</Link>
                    <Link to='/movies/now' className='mb-4 md:m-y-0 md:mx-4'>now playing</Link>
                    <Link to='/movies/top' className='mb-4 md:m-y-0 md:mx-4'>top rated</Link>
                </ul>
            </div>
        </nav>
    </div>
  )
}
