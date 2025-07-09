import type { PropsWithChildren } from 'react';
import Navigation from './navigation';
import Footer from './footer';

export default function AppLayout({ children }: PropsWithChildren) {
    return (
        <>
            <Navigation />

            <main className='my-32 max-w-screen-xl mx-auto'>
                {children}
            </main>

            <Footer />
        </>
    )
}

