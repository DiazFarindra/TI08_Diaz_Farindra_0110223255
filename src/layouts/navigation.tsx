import { useState } from 'react';
import { NavLink } from 'react-router';

export default function Navigation() {
    const [dropdownMenu, setDropdownMenu] = useState<boolean>(false);

    return (
        <div className='fixed top-8 left-0 inset-x-0 mx-auto w-full px-8 md:px-12 xl:px-0 xl:max-w-screen-xl'>
            <div className='relative flex justify-between items-center px-6 py-4 bg-white/30 backdrop-blur-lg rounded-xl'>
                <NavLink to='/' className='text-base lg:text-2xl font-bold text-secondary hover:text-primary'>CovidID</NavLink>

                <div className='hidden md:block absolute transform left-1/2 -translate-x-1/2'>
                    <img className='w-8 lg:w-10 h-auto' src="/virus.png" alt="virus" />
                </div>

                <div className='block lg:hidden'>
                    <button onClick={() => setDropdownMenu(true)} className={`w-8 h-auto text-primary hover:text-secondary focus:outline-none ${dropdownMenu ? 'hidden' : 'block'}`}>
                        <svg className='w-full h-full' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16m-7 6h7' />
                        </svg>
                    </button>
                </div>

                <div className='hidden lg:flex items-center justify-between gap-8 xl:gap-12'>
                    <NavLink to='/' className='text-primary hover:text-secondary hover:underline'>Home</NavLink>
                    <NavLink to='/indonesia' className='text-primary hover:text-secondary hover:underline'>Indonesia</NavLink>
                    <NavLink to='/provinces' className='text-primary hover:text-secondary hover:underline'>Provinces</NavLink>
                    <NavLink to='/about' className='text-primary hover:text-secondary hover:underline'>About</NavLink>
                </div>
            </div>

            <div className={`fixed top-0 left-0 w-full h-full grid place-items-center bg-white/70 backdrop-blur-md transition-all duration-300 ease-in-out ${dropdownMenu ? 'block' : 'hidden'} lg:hidden`}>
                <div className='flex flex-col items-center justify-center gap-12 p-6'>
                    <button onClick={() => setDropdownMenu(false)} className='absolute top-16 right-16 text-2xl text-primary hover:text-secondary focus:outline-none'>
                        <svg className='w-10 h-10' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                        </svg>
                    </button>

                    <NavLink onClick={() => setDropdownMenu(false)} to='/' className='text-2xl px-4 py-2 text-primary underline'>Home</NavLink>
                    <NavLink onClick={() => setDropdownMenu(false)} to='/indonesia' className='text-2xl px-4 py-2 text-primary underline'>Indonesia</NavLink>
                    <NavLink onClick={() => setDropdownMenu(false)} to='/provinces' className='text-2xl px-4 py-2 text-primary underline'>Provinces</NavLink>
                    <NavLink onClick={() => setDropdownMenu(false)} to='/about' className='text-2xl px-4 py-2 text-primary underline'>About</NavLink>
                </div>
            </div>
        </div>
    )
}
