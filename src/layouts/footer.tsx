import { NavLink } from 'react-router';

export default function Footer() {
  return (
    <div className='grid-background mb-8 mx-auto w-full max-w-screen-xl bg-secondary rounded-2xl overflow-hidden'>
        <div className='px-6 py-4'>
            <NavLink to='/' className='text-white leading-loose font-mono text-9xl font-bold hover:text-primary'>CovidID</NavLink>

            <div className='flex justify-between items-center mt-8 gap-4'>
                <span className='text-white font-mono text-sm'>© {new Date().getFullYear()} CovidID. All rights reserved.</span>
                <span className='text-white font-mono text-sm'>Made with ❤️ by Diaz Farindra</span>
            </div>

            <hr className='mt-2 border-white/30' />

            <div className='mt-8 mb-2 flex justify-center'>
                <img className='invert w-8 h-auto' src="/virus.png" alt="Footer Image" />
            </div>
        </div>
    </div>
  )
}
