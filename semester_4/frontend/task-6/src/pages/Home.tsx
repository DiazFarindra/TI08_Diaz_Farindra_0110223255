import { Footer } from '../components/Footer'
import { Form } from '../components/Form'
import { Hero } from '../components/Hero'
import { Movies } from '../components/Movies'
import { Navbar } from '../components/Navbar'


export const Home = () => {
  return (
    <div>
        <Navbar />
        <main>
            <Hero />
            <Movies />
            <Form />
        </main>
        <Footer />
    </div>
  )
}
