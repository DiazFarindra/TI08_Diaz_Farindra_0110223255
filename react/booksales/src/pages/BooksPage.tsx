import type { FormEvent } from 'react'
import { useMemo, useState } from 'react'
import type { Book, NewBook } from '../utils/books'

interface BooksPageProps {
  books: Book[]
  onAddBook: (newBook: NewBook) => void
}

interface BookFormState {
  title: string
  author: string
  year: string
  description: string
  image: string
}

const initialFormState: BookFormState = {
  title: '',
  author: '',
  year: '',
  description: '',
  image: '',
}

function BooksPage({ books, onAddBook }: BooksPageProps) {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [formState, setFormState] = useState<BookFormState>(initialFormState)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  const currentYear = new Date().getFullYear()
  const uniqueAuthors = useMemo(() => new Set(books.map((book) => book.author)).size, [books])

  const handleChange = (field: keyof BookFormState, value: string) => {
    setFormState((previousState) => ({
      ...previousState,
      [field]: value,
    }))
  }

  const toggleForm = () => {
    setIsFormOpen((previousState) => !previousState)
    setErrorMessage(null)
    setSuccessMessage(null)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setErrorMessage(null)
    setSuccessMessage(null)

    const payload: NewBook = {
      title: formState.title.trim(),
      author: formState.author.trim(),
      year: Number(formState.year),
      description: formState.description.trim(),
      image: formState.image.trim(),
    }

    if (!payload.title || !payload.author || !payload.description || !payload.image) {
      setErrorMessage('Semua field wajib diisi sebelum menambahkan data buku.')
      return
    }

    if (!Number.isInteger(payload.year) || payload.year < 1900 || payload.year > currentYear + 1) {
      setErrorMessage(`Tahun harus berupa angka valid antara 1900 sampai ${currentYear + 1}.`)
      return
    }

    onAddBook(payload)
    setSuccessMessage(`Buku "${payload.title}" berhasil ditambahkan ke katalog.`)
    setFormState(initialFormState)
    setIsFormOpen(false)
  }

  return (
    <main className="space-y-8 pb-6">
      <section className="glass-panel animate-rise-up space-y-6 px-6 py-7 lg:px-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-white">Books Catalog</h2>
            <p className="mt-2 text-sm text-slate-300">
              Halaman ini menampilkan semua buku menggunakan map dan menyediakan form tambah data berbasis hooks.
            </p>
          </div>

          <button
            type="button"
            onClick={toggleForm}
            className="rounded-full bg-linear-to-r from-emerald-300 to-cyan-300 px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:brightness-110"
          >
            {isFormOpen ? 'Tutup Form' : 'Tambah Data Buku'}
          </button>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <article className="rounded-2xl border border-white/15 bg-white/6 px-4 py-4">
            <p className="text-xs uppercase tracking-[0.12em] text-slate-300">Total Data</p>
            <p className="mt-2 text-2xl font-bold text-white">{books.length}</p>
          </article>
          <article className="rounded-2xl border border-white/15 bg-white/6 px-4 py-4">
            <p className="text-xs uppercase tracking-[0.12em] text-slate-300">Penulis Unik</p>
            <p className="mt-2 text-2xl font-bold text-white">{uniqueAuthors}</p>
          </article>
          <article className="rounded-2xl border border-white/15 bg-white/6 px-4 py-4">
            <p className="text-xs uppercase tracking-[0.12em] text-slate-300">Metode Render</p>
            <p className="mt-2 text-2xl font-bold text-white">map()</p>
          </article>
        </div>

        {errorMessage ? (
          <div className="rounded-xl border border-rose-300/45 bg-rose-400/10 px-4 py-3 text-sm text-rose-100">{errorMessage}</div>
        ) : null}

        {successMessage ? (
          <div className="rounded-xl border border-emerald-300/45 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-100">
            {successMessage}
          </div>
        ) : null}

        {isFormOpen ? (
          <form onSubmit={handleSubmit} className="rounded-2xl border border-white/15 bg-slate-950/45 p-4 sm:p-5">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="title" className="field-label">
                  Judul Buku
                </label>
                <input
                  id="title"
                  className="field-input"
                  value={formState.title}
                  onChange={(event) => handleChange('title', event.target.value)}
                  placeholder="Contoh: React untuk Pemula"
                />
              </div>

              <div>
                <label htmlFor="author" className="field-label">
                  Penulis
                </label>
                <input
                  id="author"
                  className="field-input"
                  value={formState.author}
                  onChange={(event) => handleChange('author', event.target.value)}
                  placeholder="Contoh: Dina Sari"
                />
              </div>

              <div>
                <label htmlFor="year" className="field-label">
                  Tahun
                </label>
                <input
                  id="year"
                  type="number"
                  min={1900}
                  max={currentYear + 1}
                  className="field-input"
                  value={formState.year}
                  onChange={(event) => handleChange('year', event.target.value)}
                  placeholder="Contoh: 2026"
                />
              </div>

              <div>
                <label htmlFor="image" className="field-label">
                  URL Gambar
                </label>
                <input
                  id="image"
                  className="field-input"
                  value={formState.image}
                  onChange={(event) => handleChange('image', event.target.value)}
                  placeholder="https://picsum.photos/seed/..."
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="description" className="field-label">
                  Deskripsi
                </label>
                <textarea
                  id="description"
                  className="field-input min-h-28 resize-y"
                  value={formState.description}
                  onChange={(event) => handleChange('description', event.target.value)}
                  placeholder="Ringkasan singkat isi buku"
                />
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <button
                type="submit"
                className="rounded-full bg-linear-to-r from-cyan-300 to-emerald-300 px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:brightness-110"
              >
                Simpan Buku Baru
              </button>
              <button
                type="button"
                onClick={toggleForm}
                className="rounded-full border border-white/25 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:bg-white/10"
              >
                Batal
              </button>
            </div>
          </form>
        ) : null}
      </section>

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {books.map((book) => (
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
              <h3 className="text-xl font-bold text-white">{book.title}</h3>
              <p className="text-sm font-medium text-emerald-200/90">{book.author}</p>
              <p className="text-sm leading-6 text-slate-300/90">{book.description}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}

export default BooksPage
