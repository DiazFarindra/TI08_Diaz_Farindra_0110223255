export const Navbar = () => {
    return (
        <header className='fixed inset-x-0 top-0 z-50'>
            <nav
                className='flex items-center justify-between p-4 lg:px-6 bg-white/10 backdrop-blur-xl border-b border-gray-900/10'
                aria-label='Global'>
                <div className='flex lg:flex-1'>
                    <a href='#hero' className='-m-1.5 p-1.5'>
                        <span className='font-bold'>COVID ID</span>
                    </a>
                </div>
                <div className='flex lg:hidden'>
                    <button
                        type='button'
                        className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'>
                        <span className='sr-only'>Open main menu</span>
                        <svg
                            className='size-6'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth='1.5'
                            stroke='currentColor'
                            aria-hidden='true'
                            data-slot='icon'>
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                            />
                        </svg>
                    </button>
                </div>
                <div className='hidden lg:flex lg:gap-x-12'>
                    <a href='#hero' className='text-sm/6 font-semibold text-gray-900'>
                        Global
                    </a>
                    <a href='#stats' className='text-sm/6 font-semibold text-gray-900'>
                        Stats
                    </a>
                    <a href='#province' className='text-sm/6 font-semibold text-gray-900'>
                        Provinsi
                    </a>
                    <a href='#form' className='text-sm/6 font-semibold text-gray-900'>
                        About
                    </a>
                </div>
                <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
                </div>
            </nav>
        </header>
    );
};
