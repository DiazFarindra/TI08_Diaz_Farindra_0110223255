import { Routes } from 'react-router'
import { Home } from './pages/Home'
import { Route } from 'react-router'
import { Create } from './pages/movies/Create'
import { Popular } from './pages/movies/Popular'
import { NowPlaying } from './pages/movies/NowPlaying'
import { TopRated } from './pages/movies/TopRated'
import { Layout } from './pages/Layout'

export const App = () => {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/movies/create' element={<Create />} />
                <Route path='/movies/popular' element={<Popular />} />
                <Route path='/movies/now' element={<NowPlaying />} />
                <Route path='/movies/top' element={<TopRated />} />
            </Routes>
        </Layout>
    )
}
