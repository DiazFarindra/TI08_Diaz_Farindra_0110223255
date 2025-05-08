import type { ProvinceInterface } from '../utils/interfaces';

export const Province = ({ provinces }: { provinces: ProvinceInterface }) => {
    return (
        <div id='province' className='bg-white py-24 sm:py-32'>
            <div className='text-center mx-auto max-w-7xl px-6 lg:px-8'>
                <h2 className='text-5xl font-bold tracking-tight sm:text-6xl'>
                    Provinsi
                </h2>

                <p className='text-lg leading-8 text-gray-600'>
                    data covid yang ada ditiap provinsi
                </p>
            </div>

            <div className='mt-20 mx-auto max-w-7xl px-6 lg:px-8'>


                <div className='relative max-h-[32rem] overflow-x-auto shadow-md sm:rounded-lg'>
                    <table className='w-full text-sm text-left rtl:text-right text-gray-500'>
                        <thead className='sticky top-0 text-xs text-gray-700 uppercase bg-gray-50'>
                            <tr>
                                <th scope='col' className='px-6 py-3'>
                                    #
                                </th>
                                <th scope='col' className='px-6 py-3'>
                                    Provinsi
                                </th>
                                <th scope='col' className='px-6 py-3'>
                                    Positif
                                </th>
                                <th scope='col' className='px-6 py-3'>
                                    Sembuh
                                </th>
                                <th scope='col' className='px-6 py-3'>
                                    Dirawat
                                </th>
                                <th scope='col' className='px-6 py-3'>
                                    Meninggal
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {provinces.provinces.map((item, index) => (
                                <tr className='bg-white' key={index}>
                                    <th scope='row' className='px-6 py-4'>
                                        {index + 1}
                                    </th>
                                    <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                                        {item.kota}
                                    </th>
                                    <td className='px-6 py-4'>
                                        {item.positif}
                                    </td>
                                    <td className='px-6 py-4'>
                                        {item.sembuh}
                                    </td>
                                    <td className='px-6 py-4'>
                                        {item.dirawat}
                                    </td>
                                    <td className='px-6 py-4'>
                                        {item.meninggal}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};
