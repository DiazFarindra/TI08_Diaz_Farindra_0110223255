export interface RegistrationForm {
  fullName: string
  email: string
  username: string
  password: string
}

export interface RegisteredUser {
  id: number
  fullName: string
  email: string
  username: string
}

export type RegistrationErrors = Partial<Record<keyof RegistrationForm, string>>

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const usernamePattern = /^[a-zA-Z0-9_]{4,20}$/

const getNextUserId = (users: ReadonlyArray<RegisteredUser>): number =>
  users.reduce((maxId, user) => Math.max(maxId, user.id), 0) + 1

export const initialRegisteredUsers: RegisteredUser[] = [
  {
    id: 1,
    fullName: 'Nadia Kirana',
    email: 'nadia@example.com',
    username: 'nadia_reader',
  },
]

export const validateRegistrationForm = (
  form: RegistrationForm,
  users: ReadonlyArray<RegisteredUser>,
): RegistrationErrors => {
  const errors: RegistrationErrors = {}
  const fullName = form.fullName.trim()
  const email = form.email.trim().toLowerCase()
  const username = form.username.trim()

  if (!fullName) {
    errors.fullName = 'Nama lengkap wajib diisi.'
  } else if (fullName.length < 3) {
    errors.fullName = 'Nama lengkap minimal 3 karakter.'
  }

  if (!email) {
    errors.email = 'Email wajib diisi.'
  } else if (!emailPattern.test(email)) {
    errors.email = 'Format email belum valid.'
  } else if (users.some((user) => user.email.toLowerCase() === email)) {
    errors.email = 'Email sudah digunakan.'
  }

  if (!username) {
    errors.username = 'Username wajib diisi.'
  } else if (!usernamePattern.test(username)) {
    errors.username = 'Username 4-20 karakter, hanya huruf, angka, atau underscore.'
  } else if (users.some((user) => user.username.toLowerCase() === username.toLowerCase())) {
    errors.username = 'Username sudah digunakan.'
  }

  if (!form.password) {
    errors.password = 'Password wajib diisi.'
  } else if (form.password.length < 6) {
    errors.password = 'Password minimal 6 karakter.'
  }

  return errors
}

export const createRegisteredUser = (
  users: ReadonlyArray<RegisteredUser>,
  form: RegistrationForm,
): RegisteredUser => ({
  id: getNextUserId(users),
  fullName: form.fullName.trim(),
  email: form.email.trim().toLowerCase(),
  username: form.username.trim(),
})
