import { Route, Routes } from 'react-router';
import AppLayout from './layouts/app-layout';
import Home from './pages/home';
import { useEffect, useState } from 'react';
import { getGlobalData, getRegionData } from './utils/endpoints';
import ApiContext from './utils/api-context';
import type { ApiContextType } from './types/api.type';
import Indonesia from './pages/indonesia';
import Provinces from './pages/provinces';
import About from './pages/about';

export default function App() {
    const [api, setApi] = useState<ApiContextType | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const globalResponse = await getGlobalData();
                const regionResponse = await getRegionData();

                setApi({
                    global: globalResponse,
                    region: regionResponse,
                });
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <ApiContext.Provider value={api}>
            <AppLayout>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path='/indonesia' element={<Indonesia />} />
                    <Route path='/provinces' element={<Provinces />} />
                    <Route path='/about' element={<About />} />
                </Routes>
            </AppLayout>
        </ApiContext.Provider>
    )
}
