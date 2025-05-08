export interface StatsInterface {
    last_update: string;
    indonesia: {
        status: string;
        total: number;
        detail: string;
    }[];
}

export interface ProvinceInterface {
    last_update: string;
    total_province: number;
    provinces: {
        kota: string;
        positif: number;
        sembuh: number;
        meninggal: number;
        dirawat: number;
    }[];
}
