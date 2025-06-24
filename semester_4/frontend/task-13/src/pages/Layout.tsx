import { PropsWithChildren } from 'react'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { Container } from './Container'

export const Layout = ({ children }: PropsWithChildren) => {
    return (
        <>
            <Navbar />
            <main>
                <Container>
                    {children}
                </Container>
            </main>
            <Footer />
        </>
    )
}
