import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

function UnauthorizedPage() {
  const { logout, user } = useAuth()
  const navigate = useNavigate()

  const handleChangeRole = () => {
    logout()
    navigate('/login')
  }

  return (
    <main className="pb-6">
      <section className="glass-panel animate-rise-up px-6 py-8 lg:px-8">
        <p className="inline-flex rounded-full border border-rose-200/30 bg-rose-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-rose-100">
          Akses Ditolak
        </p>
        <h2 className="mt-4 text-3xl font-bold text-white">Halaman ini khusus administrator.</h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
          Role aktif saat ini adalah {user?.role ?? 'guest'}. Masuk sebagai admin untuk membuka dashboard data master.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            to="/profile"
            className="rounded-full bg-linear-to-r from-cyan-300 to-emerald-300 px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:brightness-110"
          >
            Kembali ke Profil
          </Link>
          <button
            type="button"
            onClick={handleChangeRole}
            className="rounded-full border border-white/25 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:bg-white/10"
          >
            Ganti Role
          </button>
        </div>
      </section>
    </main>
  )
}

export default UnauthorizedPage
