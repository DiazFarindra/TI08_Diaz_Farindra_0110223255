import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { Container } from './Container'

export const Layout = ({ children }: { children: React.ReactNode }) => {
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
