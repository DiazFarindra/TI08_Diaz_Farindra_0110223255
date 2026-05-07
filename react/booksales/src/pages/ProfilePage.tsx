import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

function ProfilePage() {
  const { user } = useAuth()

  if (!user) {
    return null
  }

  return (
    <main className="space-y-8 pb-6">
      <section className="glass-panel animate-rise-up space-y-6 px-6 py-7 lg:px-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200/30 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-cyan-100">
              Authenticated Area
            </p>
            <h2 className="mt-4 text-3xl font-bold text-white">Profil Pengguna</h2>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-300">
              Halaman ini dapat diakses oleh user dan admin. Data role dibaca dari context yang tersinkron dengan
              localStorage.
            </p>
          </div>

          <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-teal-100">
            Role: {user.role}
          </span>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <article className="rounded-2xl border border-white/15 bg-white/6 px-4 py-4">
            <p className="text-xs uppercase tracking-[0.12em] text-slate-300">Nama</p>
            <p className="mt-2 text-2xl font-bold text-white">{user.name}</p>
          </article>
          <article className="rounded-2xl border border-white/15 bg-white/6 px-4 py-4">
            <p className="text-xs uppercase tracking-[0.12em] text-slate-300">Username</p>
            <p className="mt-2 break-all text-2xl font-bold text-white">@{user.username}</p>
          </article>
          <article className="rounded-2xl border border-white/15 bg-white/6 px-4 py-4">
            <p className="text-xs uppercase tracking-[0.12em] text-slate-300">Akses Admin</p>
            <p className="mt-2 text-2xl font-bold text-white">{user.role === 'admin' ? 'Aktif' : 'Tidak Aktif'}</p>
          </article>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            to="/books"
            className="rounded-full bg-linear-to-r from-cyan-300 to-emerald-300 px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:brightness-110"
          >
            Buka Katalog
          </Link>
          {user.role === 'admin' ? (
            <Link
              to="/admin"
              className="rounded-full border border-white/25 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:bg-white/10"
            >
              Buka Admin
            </Link>
          ) : null}
        </div>
      </section>
    </main>
  )
}

export default ProfilePage
