interface GeneralDataType {
    last_update: string;
    global: General[];
    indonesia: General[];
    regions: Regions[];
}

type General = {
    status: string;
    total: number;
}

type Regions = {
    type: string;
    name: string;
    numbers: {
        confirmed: number;
        recovered: number;
        treatment?: number;
        death: number;
    }
}

export type { GeneralDataType, General, Regions };
