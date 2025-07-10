import { useState } from 'react';
import type { Regions } from '../types/general-data.type';

export default function Form({ data, setData }: { data: Regions[], setData: React.Dispatch<React.SetStateAction<Regions[]>> }) {
    type StatusKey = 'confirmed' | 'recovered' | 'treatment' | 'death';

    const [form, setForm] = useState({
        provinces: '',
        status: '',
        total: 0,
    });

    const [showAlert, setShowAlert] = useState<boolean>(false);

    // Handle form input changes
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        const { name, value } = event.target;
        setForm(prevForm => ({
            ...prevForm,
            [name]: name === 'total' ? Number(value) : value,
        }));
    };

    // Handle form validation and submission
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Validate form fields
        if (!form.provinces || !form.status || form.total <= 0) {
            window.alert('Please fill in all fields correctly.');
            return;
        }

        const formData = new FormData(event.currentTarget);

        const selectedProvince = formData.get('provinces') as string;
        const status = formData.get('status') as string;
        const total = Number(formData.get('total'));

        // Find the province in the data
        const province = data.find(item => item.name === selectedProvince);

        if (province) {
            // Update the corresponding status count
            if (status === 'confirmed') {
                province.numbers.confirmed += total;
            } else if (status === 'recovered') {
                province.numbers.recovered += total;
            } else if (status === 'treatment') {
                province.numbers.treatment = (province.numbers.treatment ?? 0) + total;
            } else if (status === 'death') {
                province.numbers.death += total;
            }
        }

        // Update the state with the new data
        setData(prevData => {
            return prevData.map(item =>
                item.name === selectedProvince
                    ? {
                        ...item,
                        numbers: {
                            ...item.numbers,
                            confirmed: item.numbers.confirmed,
                            recovered: item.numbers.recovered,
                            treatment: item.numbers.treatment ?? 0,
                            death: item.numbers.death,
                            [status as StatusKey]: (item.numbers[status as StatusKey] ?? 0) + total,
                        },
                    }
                    : item
            );
        });

        // Reset form fields
        event.currentTarget.reset();

        // Show success alert
        setShowAlert(true);

        setTimeout(() => {
            setShowAlert(false);
        }, 2000);
    };

    return (
        <div className='mt-28 grid grid-cols-1 lg:grid-cols-2 content-center gap-12 md:gap-20 rounded-xl text-off bg-secondary grid-background px-8 py-16'>
            <div className='flex flex-col gap-4 place-self-center'>
                <h2 className='text-2xl md:text-4xl font-bold'>Add New Data</h2>
                <p className='mt-0 md:mt-4 text-sm md:text-xl'>
                    Use the form below to add new data and its COVID-19 statistics.
                </p>
            </div>

            {showAlert && (
                <div className='bg-emerald-400/50 text-off px-4 py-2'>
                    <p className='text-sm'>data has been updated</p>
                </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                <div className='flex flex-col gap-2'>
                    <label className="text-lg font-semibold" htmlFor="provinces">Provinces</label>
                    <select
                        id="provinces"
                        name="provinces"
                        className="border border-off rounded-lg p-2"
                        onChange={handleChange}
                    >
                        <option>Select province</option>
                        {data?.map((item: { name: string }) => (
                            <option key={item.name} value={item.name}>
                                {item.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className='flex flex-col gap-2'>
                    <label className="text-lg font-semibold" htmlFor="status">Status</label>
                    <select
                        id="status"
                        name="status"
                        className="border border-off rounded-lg p-2"
                        onChange={handleChange}
                    >
                        <option>Select status</option>
                        <option value="confirmed">Confirmed</option>
                        <option value="recovered">Recovered</option>
                        <option value="treatment">Treatment</option>
                        <option value="death">Death</option>
                    </select>
                </div>

                <div className='flex flex-col gap-2'>
                    <label className="text-lg font-semibold" htmlFor="total">Total</label>
                    <input
                        type="number"
                        id="total"
                        name="total"
                        className="border border-off rounded-lg p-2"
                        placeholder="Enter total"
                        onChange={handleChange}
                    />
                </div>

                <button
                    type="submit"
                    className="bg-primary text-white rounded-lg p-2"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}
