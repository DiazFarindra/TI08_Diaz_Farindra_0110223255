export type UserRole = 'user' | 'admin'

export interface AuthUser {
  name: string
  username: string
  role: UserRole
}

export interface LoginPayload {
  username: string
  role: UserRole
}

const authStorageKey = 'booksales-auth-user'

const roleLabels: Record<UserRole, string> = {
  user: 'Pengguna',
  admin: 'Administrator',
}

const isUserRole = (value: unknown): value is UserRole => value === 'user' || value === 'admin'

const isAuthUser = (value: unknown): value is AuthUser => {
  if (!value || typeof value !== 'object') {
    return false
  }

  const candidate = value as Partial<AuthUser>

  return (
    typeof candidate.name === 'string' &&
    typeof candidate.username === 'string' &&
    isUserRole(candidate.role)
  )
}

export const getStoredAuthUser = (): AuthUser | null => {
  const rawUser = localStorage.getItem(authStorageKey)

  if (!rawUser) {
    return null
  }

  try {
    const parsedUser = JSON.parse(rawUser)

    return isAuthUser(parsedUser) ? parsedUser : null
  } catch {
    localStorage.removeItem(authStorageKey)
    return null
  }
}

export const saveAuthUser = (user: AuthUser) => {
  localStorage.setItem(authStorageKey, JSON.stringify(user))
}

export const clearAuthUser = () => {
  localStorage.removeItem(authStorageKey)
}

export const createAuthUser = ({ username, role }: LoginPayload): AuthUser => ({
  name: roleLabels[role],
  username: username.trim() || role,
  role,
})

export const canAccessRole = (user: AuthUser | null, allowedRoles?: ReadonlyArray<UserRole>) => {
  if (!user) {
    return false
  }

  if (!allowedRoles || allowedRoles.length === 0) {
    return true
  }

  return allowedRoles.includes(user.role)
}
