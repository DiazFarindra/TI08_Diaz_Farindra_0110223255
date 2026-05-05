import type { ChangeEvent, FormEvent, InputHTMLAttributes } from 'react'
import { useMemo, useState } from 'react'
import {
  createRegisteredUser,
  validateRegistrationForm,
  type RegisteredUser,
  type RegistrationErrors,
  type RegistrationForm,
} from '../utils/registration'

interface RegisterPageProps {
  users: RegisteredUser[]
  onRegister: (newUser: RegisteredUser) => void
}

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

const initialRegistrationForm: RegistrationForm = {
  fullName: '',
  email: '',
  username: '',
  password: '',
}

const passwordRules = [
  'Minimal 6 karakter',
  'Gunakan kombinasi huruf dan angka',
  'Simpan password secara pribadi',
]

function FormField({ label, error, id, ...inputProps }: FormFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="field-label">
        {label}
      </label>
      <input
        id={id}
        className={`field-input ${error ? 'border-rose-300/70 focus:border-rose-300/80 focus:ring-rose-300/25' : ''}`}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${id}-error` : undefined}
        {...inputProps}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-xs font-medium text-rose-100">
          {error}
        </p>
      ) : null}
    </div>
  )
}

function RegisterPage({ users, onRegister }: RegisterPageProps) {
  const [formState, setFormState] = useState<RegistrationForm>(initialRegistrationForm)
  const [errors, setErrors] = useState<RegistrationErrors>({})
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  const passwordStrength = useMemo(() => {
    const password = formState.password
    let score = 0

    if (password.length >= 6) {
      score += 1
    }

    if (/[A-Z]/.test(password) && /[a-z]/.test(password)) {
      score += 1
    }

    if (/\d/.test(password)) {
      score += 1
    }

    return score
  }, [formState.password])

  const latestUsers = users.slice(0, 3)
  const strengthLabel = ['Belum diisi', 'Dasar', 'Cukup', 'Kuat'][passwordStrength]
  const strengthWidth = ['w-1/12', 'w-1/3', 'w-2/3', 'w-full'][passwordStrength]

  const handleChange = (field: keyof RegistrationForm) => (event: ChangeEvent<HTMLInputElement>) => {
    setFormState((previousState) => ({
      ...previousState,
      [field]: event.target.value,
    }))
    setErrors((previousErrors) => ({
      ...previousErrors,
      [field]: undefined,
    }))
    setSuccessMessage(null)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const validationErrors = validateRegistrationForm(formState, users)

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      setSuccessMessage(null)
      return
    }

    const newUser = createRegisteredUser(users, formState)
    onRegister(newUser)
    setFormState(initialRegistrationForm)
    setErrors({})
    setSuccessMessage(`Registrasi berhasil. Selamat datang, ${newUser.fullName}.`)
  }

  return (
    <main className="pb-6">
      <section className="glass-panel animate-rise-up overflow-hidden">
        <div className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
          <aside className="relative min-h-80 overflow-hidden border-b border-white/15 bg-slate-950/35 p-6 sm:p-8 lg:border-b-0 lg:border-r">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(45,212,191,0.26),transparent_34%),radial-gradient(circle_at_90%_82%,rgba(16,185,129,0.22),transparent_36%)]" />
            <div className="relative flex h-full flex-col justify-between gap-10">
              <div>
                <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">Registrasi Pengguna</h2>
                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">
                  Buat akun pembaca BookSales untuk menyimpan profil dan mulai mengakses katalog buku dengan pengalaman
                  yang lebih personal.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                <article className="rounded-2xl border border-white/15 bg-white/7 p-4">
                  <p className="text-xs uppercase tracking-[0.12em] text-cyan-100/80">Total Pengguna</p>
                  <p className="mt-2 text-3xl font-bold text-white">{users.length}</p>
                </article>
                <article className="rounded-2xl border border-white/15 bg-white/7 p-4">
                  <p className="text-xs uppercase tracking-[0.12em] text-emerald-100/80">Status Form</p>
                  <p className="mt-2 text-lg font-bold text-white">{successMessage ? 'Berhasil' : 'Siap digunakan'}</p>
                </article>
              </div>
            </div>
          </aside>

          <div className="p-5 sm:p-7 lg:p-8">
            <div className="grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
              <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-white/15 bg-slate-950/45 p-4 sm:p-5">
                <div className="border-b border-white/10 pb-4">
                  <h3 className="text-2xl font-bold text-white">Buat Akun Baru</h3>
                  <p className="mt-1 text-sm text-slate-400">Isi data dengan benar sebelum menekan tombol daftar.</p>
                </div>

                {successMessage ? (
                  <div className="rounded-xl border border-emerald-300/45 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-100">
                    {successMessage}
                  </div>
                ) : null}

                <div className="grid gap-4 md:grid-cols-2">
                  <FormField
                    id="fullName"
                    label="Nama Lengkap"
                    value={formState.fullName}
                    onChange={handleChange('fullName')}
                    error={errors.fullName}
                    placeholder="Contoh: Farindra Diaz"
                    autoComplete="name"
                  />
                  <FormField
                    id="email"
                    label="Email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange('email')}
                    error={errors.email}
                    placeholder="nama@email.com"
                    autoComplete="email"
                  />
                  <FormField
                    id="username"
                    label="Username"
                    value={formState.username}
                    onChange={handleChange('username')}
                    error={errors.username}
                    placeholder="contoh_user"
                    autoComplete="username"
                  />
                  <FormField
                    id="password"
                    label="Password"
                    type="password"
                    value={formState.password}
                    onChange={handleChange('password')}
                    error={errors.password}
                    placeholder="Minimal 6 karakter"
                    autoComplete="new-password"
                  />
                </div>

                <div className="rounded-2xl border border-white/15 bg-white/6 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-semibold text-white">Kekuatan Password</p>
                    <span className="text-xs font-semibold uppercase tracking-[0.12em] text-cyan-100">{strengthLabel}</span>
                  </div>
                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-800">
                    <div className={`h-full rounded-full bg-linear-to-r from-cyan-300 to-emerald-300 ${strengthWidth}`} />
                  </div>
                  <ul className="mt-4 grid gap-2 text-xs leading-5 text-slate-300 sm:grid-cols-3">
                    {passwordRules.map((rule) => (
                      <li key={rule} className="rounded-xl border border-white/10 bg-slate-950/35 px-3 py-2">
                        {rule}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-3">
                  <button
                    type="submit"
                    className="rounded-full bg-linear-to-r from-cyan-300 to-emerald-300 px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:brightness-110"
                  >
                    Daftar Sekarang
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setFormState(initialRegistrationForm)
                      setErrors({})
                      setSuccessMessage(null)
                    }}
                    className="rounded-full border border-white/25 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:bg-white/10"
                  >
                    Reset Form
                  </button>
                </div>
              </form>

              <aside className="space-y-4 rounded-2xl border border-white/15 bg-white/6 p-4 sm:p-5">
                <div>
                  <h3 className="text-xl font-bold text-white">Pengguna Terbaru</h3>
                  <p className="mt-1 text-sm text-slate-400">Data password tidak ditampilkan pada ringkasan.</p>
                </div>

                <div className="space-y-3">
                  {latestUsers.map((user) => (
                    <article key={user.id} className="rounded-2xl border border-white/15 bg-slate-950/40 p-4">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-cyan-200/85">
                        User #{user.id.toString().padStart(2, '0')}
                      </p>
                      <h4 className="mt-2 text-base font-bold text-white">{user.fullName}</h4>
                      <p className="mt-1 text-sm text-emerald-100">@{user.username}</p>
                      <p className="mt-1 break-all text-xs text-slate-400">{user.email}</p>
                    </article>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default RegisterPage
