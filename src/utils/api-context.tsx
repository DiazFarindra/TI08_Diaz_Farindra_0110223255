import { createContext } from 'react';
import type { ApiContextType } from '../types/api.type';

const ApiContext = createContext<null | ApiContextType>(null);

export default ApiContext;
