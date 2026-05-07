import { createContext } from 'react'
import type { AuthUser, LoginPayload } from '../services/auth'

export interface AuthContextValue {
  user: AuthUser | null
  isAuthenticated: boolean
  login: (payload: LoginPayload) => void
  logout: () => void
}

export const AuthContext = createContext<AuthContextValue | undefined>(undefined)
