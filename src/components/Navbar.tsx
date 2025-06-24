import { Link } from 'react-router'
import tw from 'tailwind-styled-components'

const NavbarContainer = tw.nav`
  flex flex-col md:flex-row justify-between items-center
`
const Brand = tw.h1`
  text-4xl md:mb-0
`
const List = tw.ul`
  flex flex-col list-none md:flex-row
`

export const Navbar = () => {
  return (
    <div role='container' className='container-default'>
        <NavbarContainer role='navbar'>
            <div>
                <Brand role='brand'>Movie App</Brand>
            </div>
            <div>
                <List role='list' className='flex flex-col list-none md:flex-row'>
                    <Link to='/' className='mb-4 md:m-y-0 md:mx-4'>home</Link>
                    <Link to='/movies/create' className='mb-4 md:m-y-0 md:mx-4'>add movies</Link>
                    <Link to='/movies/popular' className='mb-4 md:m-y-0 md:mx-4'>popular</Link>
                    <Link to='/movies/now' className='mb-4 md:m-y-0 md:mx-4'>now playing</Link>
                    <Link to='/movies/top' className='mb-4 md:m-y-0 md:mx-4'>top rated</Link>
                </List>
            </div>
        </NavbarContainer>
    </div>
  )
}
