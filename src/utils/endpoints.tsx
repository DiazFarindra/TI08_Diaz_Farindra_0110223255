import axios from 'axios';
import type { GeneralDataType } from '../types/general-data.type';

const api = axios.create({
    baseURL: 'https://covid-fe-2023.vercel.app/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

const getGlobalData = async (): Promise<GeneralDataType> => {
    try {
        const response = await api.get('/global.json');

        if (response.status !== 200) {
            throw new Error(`Error fetching global data: ${response.statusText}`);
        }

        return response.data;
    } catch (error) {
        console.error('Error fetching global data:', error);
        throw error;
    }
};

const getRegionData = async (): Promise<GeneralDataType> => {
    try {
        const response = await api.get('/indonesia.json');

        if (response.status !== 200) {
            throw new Error(`Error fetching Indonesia data: ${response.statusText}`);
        }

        return response.data;
    } catch (error) {
        console.error('Error fetching Indonesia data:', error);
        throw error;
    }
};

export { getGlobalData, getRegionData };
