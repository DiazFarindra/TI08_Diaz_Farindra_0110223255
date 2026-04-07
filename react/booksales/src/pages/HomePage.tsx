import { Link } from 'react-router-dom'
import type { Book } from '../utils/books'

interface HomePageProps {
  books: Book[]
}

function HomePage({ books }: HomePageProps) {
  const spotlightBooks = books.slice(0, 6)
  const uniqueAuthors = new Set(books.map((book) => book.author)).size
  const newestYear = books.reduce((latestYear, book) => Math.max(latestYear, book.year), 0)

  return (
    <main className="space-y-8 pb-6">
      <section className="glass-panel animate-rise-up grid gap-8 px-6 py-8 lg:grid-cols-[1.35fr_1fr] lg:px-8">
        <div>
          <p className="inline-flex rounded-full border border-cyan-200/30 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-cyan-100">
            Neo-Glass Library Interface
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
            Jelajahi Koleksi Buku Frontend
            <br className="hidden sm:block" />
            dengan Tampilan Futuristik
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
            Halaman ini menampilkan daftar buku menggunakan metode map. Data bersumber dari seed TypeScript sehingga
            lebih aman dan rapi untuk pengembangan React modern.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              to="/books"
              className="rounded-full bg-linear-to-r from-cyan-300 to-emerald-300 px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:brightness-110"
            >
              Lihat Semua Buku
            </Link>
            <span className="rounded-full border border-white/20 bg-white/8 px-4 py-2 text-xs font-medium uppercase tracking-widest text-slate-200">
              Rendered with map()
            </span>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          <article className="rounded-2xl border border-white/15 bg-white/6 px-4 py-4">
            <p className="text-xs uppercase tracking-[0.12em] text-slate-300">Total Buku</p>
            <p className="mt-2 text-3xl font-bold text-white">{books.length}</p>
          </article>
          <article className="rounded-2xl border border-white/15 bg-white/6 px-4 py-4">
            <p className="text-xs uppercase tracking-[0.12em] text-slate-300">Penulis Unik</p>
            <p className="mt-2 text-3xl font-bold text-white">{uniqueAuthors}</p>
          </article>
          <article className="rounded-2xl border border-white/15 bg-white/6 px-4 py-4">
            <p className="text-xs uppercase tracking-[0.12em] text-slate-300">Rilisan Terbaru</p>
            <p className="mt-2 text-3xl font-bold text-white">{newestYear === 0 ? '-' : newestYear}</p>
          </article>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h3 className="text-2xl font-bold text-white">Spotlight Books</h3>
            <p className="text-sm text-slate-300">Pilihan buku terbaru di katalog BookSales.</p>
          </div>
          <Link to="/books" className="text-sm font-semibold text-cyan-200 hover:text-cyan-100">
            Kelola data di halaman Books
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {spotlightBooks.map((book) => (
            <article key={book.id} className="glass-panel group overflow-hidden">
              <div className="relative aspect-16/10 overflow-hidden">
                <img
                  src={book.image}
                  alt={`Cover ${book.title}`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#060916] via-transparent to-transparent" />
              </div>
              <div className="space-y-3 p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-cyan-200/85">
                  #{book.id.toString().padStart(2, '0')} • {book.year}
                </p>
                <h4 className="line-clamp-2 text-lg font-bold text-white">{book.title}</h4>
                <p className="text-sm text-slate-300">{book.author}</p>
                <p className="text-sm leading-6 text-slate-300/90">{book.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default HomePage
