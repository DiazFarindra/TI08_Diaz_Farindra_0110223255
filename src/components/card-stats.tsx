import type { Regions } from '../types/general-data.type';

export default function CardStats({ item }: { item: Regions }) {
    return (
        <div className='bg-white/10 rounded-xl p-6 text-white'>
            <h3 className='underline text-xl md:text-2xl font-semibold'>{item.name}</h3>

            <div className='mt-4 md:mt-8 flex flex-col gap-4'>
                <div>
                    <p className=''>confirmed:</p>
                    <span className='text-base md:text-lg font-bold'>{new Intl.NumberFormat().format(item.numbers.confirmed)}</span>
                </div>
                <div>
                    <p className=''>recovered:</p>
                    <span className='text-base md:text-lg font-bold'>{new Intl.NumberFormat().format(item.numbers.recovered)}</span>
                </div>
                {item.numbers.treatment && (
                    <div>
                        <p className=''>treatment:</p>
                        <span className='text-base md:text-lg font-bold'>{new Intl.NumberFormat().format(item.numbers.treatment)}</span>
                    </div>
                )}
                <div>
                    <p className=''>deaths:</p>
                    <span className='text-base md:text-lg font-bold'>{new Intl.NumberFormat().format(item.numbers.death)}</span>
                </div>
            </div>
        </div>
    )
}
