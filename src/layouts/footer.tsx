import { NavLink } from 'react-router';

export default function Footer() {
  return (
    <div className='mx-auto mb-8 px-8 md:px-12 xl:px-0 xl:max-w-screen-xl'>
      <div className='grid-background bg-secondary rounded-2xl'>
        <div className='px-6 py-4'>
            <NavLink to='/' className='text-white leading-loose font-mono text-4xl md:text-6xl lg:text-9xl font-bold hover:text-primary'>CovidID</NavLink>

            <div className='flex flex-col md:flex-row justify-between items-start md:items-center mt-8 gap-4'>
                <span className='text-white font-mono text-xs md:text-sm'>© {new Date().getFullYear()} CovidID. All rights reserved.</span>
                <span className='text-white font-mono text-xs md:text-sm'>Made with ❤️ by Diaz Farindra</span>
            </div>

            <hr className='mt-2 border-white/30' />

            <div className='mt-8 mb-2 flex justify-center'>
                <img className='invert w-8 h-auto' src="/virus.png" alt="Footer Image" />
            </div>
        </div>
    </div>
    </div>
  )
}
