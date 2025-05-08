import type { StatsInterface } from '../utils/interfaces';

export const Stats = ({ stats }: { stats: StatsInterface }) => {
    return (
        <div id='stats' className='bg-white py-24 sm:py-32'>
            <div className='text-center mx-auto max-w-7xl px-6 lg:px-8'>
                <h2 className='text-5xl font-bold tracking-tight sm:text-6xl'>Indonesia</h2>

                <p className='text-lg leading-8 text-gray-600'>
                    data covid yang ada di Indonesia
                </p>
            </div>

            <div className='mt-20 mx-auto max-w-7xl px-6 lg:px-8'>
                <dl className='grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3'>
                    {stats.indonesia.map((item, index) => (
                        <a href={item.detail} target='_blank' className='mx-auto flex max-w-xs flex-col gap-y-4 rounded-2xl py-6 px-8 hover:shadow' key={index}>
                            <dt className='text-base/7 text-gray-600'>
                                {item.status} <span aria-hidden="true">&rarr;</span>
                            </dt>
                            <dd className='order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl'>
                                {item.total}
                            </dd>
                        </a>
                    ))}
                </dl>
            </div>
        </div>
    );
};
