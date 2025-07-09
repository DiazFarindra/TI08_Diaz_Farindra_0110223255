import type { GeneralDataType } from './general-data.type';

interface ApiContextType {
    global: GeneralDataType | null;
    region: GeneralDataType | null;
}

export type { ApiContextType };
