import { useState } from 'react'
import type { ProvinceInterface } from '../utils/interfaces'

interface FormState {
    provinces: ProvinceInterface,
    setProvinces: React.Dispatch<React.SetStateAction<ProvinceInterface>>,
}

export const Form = ({ provinces, setProvinces }: FormState) => {

    const statuses = ['positif', 'sembuh', 'dirawat', 'meninggal']
    type Status = 'positif' | 'sembuh' | 'dirawat' | 'meninggal'

    const [validate, setValidate] = useState({
        provinsi: false,
        status: false,
        jumlah: false
    })

    const [alert, setAlert] = useState({
        status: false,
        message: ''
    })

    const handleAlert = (status: boolean, message: string) => {
        setAlert({ status, message })

        setTimeout(() => {
            setAlert({ status: false, message: '' })
        }, 3000)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement>) => {
        const { name, value } = e.target

        if (value === '') {
            setValidate({ ...validate, [name]: true })
        } else {
            setValidate({ ...validate, [name]: false })
        }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const provinsi = e.currentTarget.provinsi.value === ''
        const status = e.currentTarget.status.value === ''
        const jumlah = e.currentTarget.jumlah.value === ''

        if (provinsi && status && jumlah) {
            setValidate({
                provinsi: true,
                status: true,
                jumlah: true
            })

            return
        }

        if (provinsi) {
            validate.provinsi = true
            return
        }

        if (status) {
            validate.status = true
            return
        }

        if (jumlah) {
            validate.jumlah = true
            return
        }

        const formData: FormData = new FormData(e.currentTarget)
        const data: { [k: string]: FormDataEntryValue } = Object.fromEntries(formData.entries())

        const newProvinces = provinces.provinces.map((item) => {
            if (item.kota === data.provinsi) {
                return {
                    ...item,
                    [data.status as Status]: Number(item[data.status as Status]) + Number(data.jumlah)
                }
            }

            return item
        })

        setProvinces({ ...provinces, provinces: newProvinces })

        e.currentTarget.reset()

        handleAlert(true, `berhasil menambah ${data.jumlah} ${data.status} di ${data.provinsi}`)
    }


    return (
        <div id='form' className='flex min-h-full flex-col justify-center px-6 lg:px-8'>
            <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
                <h2 className='mt-10 text-center text-5xl/9 font-bold tracking-tight text-gray-900'>
                    Form Covid
                </h2>

                {alert.status && (
                    <div className='mt-2 text-center'>
                        <p className='text-sm/6 text-green-500'>{alert.message}</p>
                    </div>
                )}
            </div>

            <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
                <form onSubmit={handleSubmit} className='space-y-6'>
                    <div>
                        <label htmlFor='provinsi' className='block text-sm/6 font-medium text-gray-900'>provinsi</label>
                        <div className='mt-2 grid grid-cols-1'>
                            <select onChange={handleChange} id="provinsi" name="provinsi" className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                                <option selected aria-selected={true} value={''}>pilih kota</option>
                                {provinces.provinces.map((item, index) => (
                                    <option key={index} value={item.kota}>{item.kota}</option>
                                ))}
                            </select>

                            <svg className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-slot="icon">
                                <path fillRule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                            </svg>
                        </div>
                        {validate.provinsi && <p className='text-sm/6 text-red-500'>pilih provinsi</p>}
                    </div>

                    <div>
                        <label htmlFor='status' className='block text-sm/6 font-medium text-gray-900'>status</label>
                        <div className='mt-2 grid grid-cols-1'>
                            <select onChange={handleChange} id="status" name="status" className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                                <option selected aria-selected={true} value={''}>pilih status</option>
                                {statuses.map((item, index) => (
                                    <option key={index} value={item}>{item}</option>
                                ))}
                            </select>

                            <svg className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-slot="icon">
                                <path fillRule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                            </svg>
                        </div>
                        {validate.status && <p className='text-sm/6 text-red-500'>pilih status</p>}
                    </div>

                    <div>
                        <label htmlFor='jumlah' className='block text-sm/6 font-medium text-gray-900'>jumlah</label>
                        <div className='mt-2'>
                            <input onChange={handleChange} type='number' name='jumlah' id='jumlah' min={0} className='col-start-1 row-start-1 w-full rounded-md bg-white py-1.5 pr-2 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6' />
                        </div>
                        {validate.jumlah && <p className='text-sm/6 text-red-500'>masukkan jumlah</p>}
                    </div>

                    <div>
                        <button type='submit' className='cursor-pointer flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                            submit
                        </button>
                    </div>
                </form>
            </div>
        </div>

    )
}
