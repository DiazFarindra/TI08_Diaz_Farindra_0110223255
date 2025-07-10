import type { PropsWithChildren } from 'react';
import Navigation from './navigation';
import Footer from './footer';

export default function AppLayout({ children }: PropsWithChildren) {
    return (
        <>
            <Navigation />

            <main className='mt-32 mb-24 px-8 md:px-12 xl:px-0 xl:max-w-screen-xl mx-auto'>
                {children}
            </main>

            <Footer />
        </>
    )
}

