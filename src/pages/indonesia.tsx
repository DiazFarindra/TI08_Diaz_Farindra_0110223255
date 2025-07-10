import { useContext } from 'react';
import HeroBanner from '../components/hero-banner';
import type { ApiContextType } from '../types/api.type';
import ApiContext from '../utils/api-context';
import CardStats from '../components/card-stats';
import Card from '../components/card';

export default function Indonesia() {
    const { region } = useContext<null | ApiContextType>(ApiContext) || {};

    return (
        <div>
            <HeroBanner headline='Indonesia' />

            <div className='mt-16 lg:mt-28 grid grid-cols-1 md:grid-cols-3 gap-4'>
                {region?.indonesia.map((item, index) => (
                    <Card key={index} item={item} />
                ))}
            </div>

            <div className='grid-background mt-16 lg:mt-28 rounded-xl bg-primary px-8 py-16'>
                <h2 className='text-3xl font-bold text-white'><span className='text-tertiary'>COVID-19</span> Statistics</h2>

                <p className='mt-4 text-sm md:text-lg text-white/80'>
                    The region statistics provide an overview of the <span className='text-tertiary'>COVID-19</span> pandemic, including total cases, recoveries, and deaths worldwide.
                </p>

                <div className='mt-8 grid grid-cols-1 md:grid-cols-3 gap-6'>
                    {region?.regions.map((item, index) => (
                        <CardStats key={index} item={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}
