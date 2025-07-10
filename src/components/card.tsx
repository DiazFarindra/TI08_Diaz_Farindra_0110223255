import type { General } from '../types/general-data.type';

export default function Card({ item }: { item: General }) {
    return (
        <div className='grid-background rounded-xl text-white bg-primary px-6 py-14'>
            <h2 className='text-lg'>{item.status}</h2>
            <p className='mt-2 text-2xl lg:text-4xl font-bold'>{new Intl.NumberFormat().format(item.total)}</p>
        </div>
    )
}
