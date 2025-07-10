import { useContext } from 'react';
import ApiContext from '../utils/api-context';
import type { ApiContextType } from '../types/api.type';
import HeroBanner from '../components/hero-banner';
import Card from '../components/card';
import CardStats from '../components/card-stats';

export default function Home() {
    const { global } = useContext<null | ApiContextType>(ApiContext) || {};

    return (
        <div>
            <HeroBanner />

            <div className='mt-16 lg:mt-28 grid grid-cols-1 md:grid-cols-3 gap-4'>
                {global?.global.map((item, index) => (
                    <Card key={index} item={item} />
                ))}
            </div>

            <div className='grid-background mt-16 lg:mt-28 rounded-xl bg-primary px-8 py-16'>
                <h2 className='text-2xl md:text-3xl font-bold text-white'>Global COVID-19 Statistics</h2>

                <p className='mt-4 text-sm md:text-lg text-white/80'>
                    The global statistics provide an overview of the COVID-19 pandemic, including total cases, recoveries, and deaths worldwide.
                </p>

                <div className='mt-8 grid grid-cols-1 md:grid-cols-3 gap-6'>
                    {global?.regions.map((item, index) => (
                        <CardStats key={index} item={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}
