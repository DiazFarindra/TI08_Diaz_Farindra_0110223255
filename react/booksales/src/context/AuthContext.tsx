import type { ReactNode } from 'react'
import { useCallback, useMemo, useState } from 'react'
import { AuthContext } from './auth-context'
import {
  clearAuthUser,
  createAuthUser,
  getStoredAuthUser,
  saveAuthUser,
  type AuthUser,
  type LoginPayload,
} from '../services/auth'

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(() => getStoredAuthUser())

  const login = useCallback((payload: LoginPayload) => {
    const authUser = createAuthUser(payload)
    saveAuthUser(authUser)
    setUser(authUser)
  }, [])

  const logout = useCallback(() => {
    clearAuthUser()
    setUser(null)
  }, [])

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: user !== null,
      login,
      logout,
    }),
    [login, logout, user],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
