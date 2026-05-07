import type { FormEvent } from 'react'
import { useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import type { UserRole } from '../services/auth'

interface LocationState {
  from?: {
    pathname?: string
  }
}

function LoginPage() {
  const { isAuthenticated, login, user } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const [username, setUsername] = useState('')
  const [role, setRole] = useState<UserRole>('user')
  const state = location.state as LocationState | null
  const targetPath = state?.from?.pathname ?? (role === 'admin' ? '/admin' : '/profile')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    login({ username, role })
    navigate(targetPath, { replace: true })
  }

  if (isAuthenticated) {
    return <Navigate to={user?.role === 'admin' ? '/admin' : '/profile'} replace />
  }

  return (
    <main className="pb-6">
      <section className="glass-panel animate-rise-up overflow-hidden">
        <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="relative min-h-80 overflow-hidden border-b border-white/15 bg-slate-950/35 p-6 sm:p-8 lg:border-b-0 lg:border-r">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(45,212,191,0.26),transparent_34%),radial-gradient(circle_at_90%_82%,rgba(59,130,246,0.18),transparent_36%)]" />
            <div className="relative flex h-full flex-col justify-between gap-10">
              <div>
                <p className="inline-flex rounded-full border border-cyan-200/30 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-cyan-100">
                  Role-Based Access
                </p>
                <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">Masuk ke BookSales</h2>
                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">
                  Pilih role untuk mensimulasikan otorisasi frontend. Session akan disimpan di localStorage agar tetap
                  terbaca saat halaman di-refresh.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                <article className="rounded-2xl border border-white/15 bg-white/7 p-4">
                  <p className="text-xs uppercase tracking-[0.12em] text-cyan-100/80">User</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">Dapat membuka Home, Books, Profile, dan Register.</p>
                </article>
                <article className="rounded-2xl border border-white/15 bg-white/7 p-4">
                  <p className="text-xs uppercase tracking-[0.12em] text-emerald-100/80">Admin</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">Memiliki akses tambahan ke dashboard admin.</p>
                </article>
              </div>
            </div>
          </aside>

          <div className="p-5 sm:p-7 lg:p-8">
            <form onSubmit={handleSubmit} className="mx-auto max-w-xl space-y-5 rounded-2xl border border-white/15 bg-slate-950/45 p-4 sm:p-5">
              <div className="border-b border-white/10 pb-4">
                <h3 className="text-2xl font-bold text-white">Form Login</h3>
                <p className="mt-1 text-sm text-slate-400">Gunakan username bebas, lalu pilih hak akses.</p>
              </div>

              <div>
                <label htmlFor="login-username" className="field-label">
                  Username
                </label>
                <input
                  id="login-username"
                  className="field-input"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  placeholder="contoh: diaz_user"
                  autoComplete="username"
                />
              </div>

              <fieldset className="space-y-3">
                <legend className="field-label">Role Akses</legend>
                <div className="grid gap-3 sm:grid-cols-2">
                  {(['user', 'admin'] as const).map((option) => (
                    <label
                      key={option}
                      className={`cursor-pointer rounded-2xl border px-4 py-4 transition ${
                        role === option
                          ? 'border-cyan-200/60 bg-cyan-300/15 text-white'
                          : 'border-white/15 bg-white/6 text-slate-300 hover:bg-white/10'
                      }`}
                    >
                      <input
                        type="radio"
                        name="role"
                        value={option}
                        checked={role === option}
                        onChange={() => setRole(option)}
                        className="sr-only"
                      />
                      <span className="block text-sm font-bold uppercase tracking-[0.12em]">
                        {option === 'admin' ? 'Admin' : 'User'}
                      </span>
                      <span className="mt-2 block text-sm leading-6">
                        {option === 'admin' ? 'Akses dashboard dan data master.' : 'Akses halaman umum dan profil.'}
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <button
                type="submit"
                className="rounded-full bg-linear-to-r from-cyan-300 to-emerald-300 px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:brightness-110"
              >
                Masuk Sekarang
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}

export default LoginPage
