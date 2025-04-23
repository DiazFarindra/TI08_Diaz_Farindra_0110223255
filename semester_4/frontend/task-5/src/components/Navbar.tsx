
export const Navbar = () => {
  return (
    <div role='container' className='container-default'>
        <nav role='navbar' className='flex flex-col md:flex-row justify-between items-center'>
            <div>
                <h1 role='brand' className='text-4xl md:mb-0'>Movie App</h1>
            </div>
            <div>
                <ul role='list' className='flex flex-col list-none md:flex-row'>
                    <a href='/' className='mb-4 md:m-y-0 md:mx-4'>home</a>
                    <a href='#form' className='mb-4 md:m-y-0 md:mx-4'>add movies</a>
                    <a href='#_' className='mb-4 md:m-y-0 md:mx-4'>popular</a>
                    <a href='#_' className='mb-4 md:m-y-0 md:mx-4'>now playing</a>
                    <a href='#_' className='mb-4 md:m-y-0 md:mx-4'>top rated</a>
                </ul>
            </div>
        </nav>
    </div>
  )
}
