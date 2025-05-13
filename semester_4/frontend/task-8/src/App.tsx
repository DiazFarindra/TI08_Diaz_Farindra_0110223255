import { Routes } from 'react-router'
import { Home } from './pages/Home'
import { Route } from 'react-router'
import { Create } from './pages/movies/Create'
import { Popular } from './pages/movies/Popular'
import { NowPlaying } from './pages/movies/NowPlating'
import { TopRated } from './pages/movies/TopRated'
import { Layout } from './pages/Layout'

export const App = () => {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/movie/create' element={<Create />} />
                <Route path='/movie/popular' element={<Popular />} />
                <Route path='/movie/now' element={<NowPlaying />} />
                <Route path='/movie/top' element={<TopRated />} />
            </Routes>
        </Layout>
    )
}
