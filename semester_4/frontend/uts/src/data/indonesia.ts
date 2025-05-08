import type { StatsInterface } from '../utils/interfaces';

const data: StatsInterface = {
    last_update: '2025-05-01',
    indonesia: [
        {
            status: 'Confirmed',
            total: 6012818,
            detail: 'https://covid19.mathdro.id/api/countries/indonesia/confirmed',
        },
        {
            status: 'Recovered',
            total: 5750802,
            detail: 'https://covid19.mathdro.id/api/countries/indonesia/recovered',
        },
        {
            status: 'Death',
            total: 155089,
            detail: 'https://covid19.mathdro.id/api/countries/indonesia/deaths',
        },
    ],
};

export default data;
