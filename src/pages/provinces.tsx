import { useState } from 'react'
import CardStats from '../components/card-stats'
import Form from '../components/form'
import HeroBanner from '../components/hero-banner'
import provinces from '../utils/provinces'
import type { Regions } from '../types/general-data.type'

export default function Provinces() {
    const [data, setData] = useState<Regions[]>(provinces.regions)

    return (
        <div>
            <HeroBanner headline='Indonesia' />

            <div className='grid-background mt-28 rounded-xl bg-primary px-8 py-16'>
                <h2 className='text-3xl font-bold text-white'>Indonesia <span className='text-tertiary'>COVID-19</span> Statistics</h2>

                <p className='mt-4 text-lg text-white/80'>
                    The Indonesian statistics provide an overview of the <span className='text-tertiary'>COVID-19</span> pandemic, including total cases, recoveries, and deaths in the country.
                </p>

                <div className='mt-8 grid grid-cols-3 gap-6'>
                    {data.map((item, index) => (
                        <CardStats key={index} item={item} />
                    ))}
                </div>
            </div>

            <Form data={data} setData={setData} />
        </div>
    )
}
