import { NavLink } from 'react-router';

export default function Navigation() {
    return (
        <div className='fixed top-8 left-0 inset-x-0 mx-auto w-full max-w-screen-xl'>
            <div className='relative flex justify-between items-center px-6 py-4 bg-white/30 backdrop-blur-lg rounded-xl'>
                <NavLink to='/' className='text-2xl font-bold text-secondary hover:text-primary'>CovidID</NavLink>

                <div className='absolute transform left-1/2 -translate-x-1/2'>
                    <img className='w-10 h-auto' src="/virus.png" alt="virus" />
                </div>

                <div className='flex items-center justify-between gap-12'>
                    <NavLink to='/' className='text-primary hover:text-secondary hover:underline'>Home</NavLink>
                    <NavLink to='/indonesia' className='text-primary hover:text-secondary hover:underline'>Indonesia</NavLink>
                    <NavLink to='/provinces' className='text-primary hover:text-secondary hover:underline'>Provinces</NavLink>
                    <NavLink to='/about' className='text-primary hover:text-secondary hover:underline'>About</NavLink>
                </div>
            </div>
        </div>
    )
}
