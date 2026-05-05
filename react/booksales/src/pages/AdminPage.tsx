import type { FormEvent } from 'react'
import { useMemo, useState } from 'react'
import type { Author, Genre, NewAuthor, NewGenre } from '../utils/admin'

interface AdminPageProps {
  genres: Genre[]
  authors: Author[]
  onAddGenre: (newGenre: NewGenre) => void
  onAddAuthor: (newAuthor: NewAuthor) => void
  onUpdateGenre: (id: number, payload: NewGenre) => void
  onDeleteGenre: (id: number) => void
  onUpdateAuthor: (id: number, payload: NewAuthor) => void
  onDeleteAuthor: (id: number) => void
}

interface GenreFormState {
  name: string
  description: string
}

interface AuthorFormState {
  name: string
  country: string
}

const initialGenreFormState: GenreFormState = {
  name: '',
  description: '',
}

const initialAuthorFormState: AuthorFormState = {
  name: '',
  country: '',
}

const normalizeSearch = (value: string) => value.trim().toLowerCase()

function AdminPage({
  genres,
  authors,
  onAddGenre,
  onAddAuthor,
  onUpdateGenre,
  onDeleteGenre,
  onUpdateAuthor,
  onDeleteAuthor,
}: AdminPageProps) {
  const [genreForm, setGenreForm] = useState<GenreFormState>(initialGenreFormState)
  const [authorForm, setAuthorForm] = useState<AuthorFormState>(initialAuthorFormState)
  const [genreEditId, setGenreEditId] = useState<number | null>(null)
  const [genreEditForm, setGenreEditForm] = useState<GenreFormState>(initialGenreFormState)
  const [authorEditId, setAuthorEditId] = useState<number | null>(null)
  const [authorEditForm, setAuthorEditForm] = useState<AuthorFormState>(initialAuthorFormState)
  const [genreError, setGenreError] = useState<string | null>(null)
  const [authorError, setAuthorError] = useState<string | null>(null)
  const [genreSuccess, setGenreSuccess] = useState<string | null>(null)
  const [authorSuccess, setAuthorSuccess] = useState<string | null>(null)
  const [genreSearch, setGenreSearch] = useState('')
  const [authorSearch, setAuthorSearch] = useState('')
  const [genreDeleteId, setGenreDeleteId] = useState<number | null>(null)
  const [authorDeleteId, setAuthorDeleteId] = useState<number | null>(null)

  const filteredGenres = useMemo(() => {
    const query = normalizeSearch(genreSearch)

    if (!query) {
      return genres
    }

    return genres.filter(
      (genre) => genre.name.toLowerCase().includes(query) || genre.description.toLowerCase().includes(query),
    )
  }, [genreSearch, genres])

  const filteredAuthors = useMemo(() => {
    const query = normalizeSearch(authorSearch)

    if (!query) {
      return authors
    }

    return authors.filter(
      (author) => author.name.toLowerCase().includes(query) || author.country.toLowerCase().includes(query),
    )
  }, [authorSearch, authors])

  const resetGenreMessage = () => {
    setGenreError(null)
    setGenreSuccess(null)
  }

  const resetAuthorMessage = () => {
    setAuthorError(null)
    setAuthorSuccess(null)
  }

  const handleGenreSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    resetGenreMessage()

    const payload: NewGenre = {
      name: genreForm.name.trim(),
      description: genreForm.description.trim(),
    }

    if (!payload.name || !payload.description) {
      setGenreError('Nama dan deskripsi genre wajib diisi.')
      return
    }

    onAddGenre(payload)
    setGenreSuccess(`Genre "${payload.name}" berhasil ditambahkan.`)
    setGenreForm(initialGenreFormState)
  }

  const handleAuthorSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    resetAuthorMessage()

    const payload: NewAuthor = {
      name: authorForm.name.trim(),
      country: authorForm.country.trim(),
    }

    if (!payload.name || !payload.country) {
      setAuthorError('Nama author dan negara wajib diisi.')
      return
    }

    onAddAuthor(payload)
    setAuthorSuccess(`Author "${payload.name}" berhasil ditambahkan.`)
    setAuthorForm(initialAuthorFormState)
  }

  const handleStartGenreEdit = (genre: Genre) => {
    resetGenreMessage()
    setGenreDeleteId(null)
    setGenreEditId(genre.id)
    setGenreEditForm({
      name: genre.name,
      description: genre.description,
    })
  }

  const handleStartAuthorEdit = (author: Author) => {
    resetAuthorMessage()
    setAuthorDeleteId(null)
    setAuthorEditId(author.id)
    setAuthorEditForm({
      name: author.name,
      country: author.country,
    })
  }

  const handleCancelGenreEdit = () => {
    setGenreEditId(null)
    setGenreEditForm(initialGenreFormState)
  }

  const handleCancelAuthorEdit = () => {
    setAuthorEditId(null)
    setAuthorEditForm(initialAuthorFormState)
  }

  const handleGenreUpdateSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    resetGenreMessage()

    if (genreEditId === null) {
      return
    }

    const payload: NewGenre = {
      name: genreEditForm.name.trim(),
      description: genreEditForm.description.trim(),
    }

    if (!payload.name || !payload.description) {
      setGenreError('Nama dan deskripsi genre wajib diisi untuk update.')
      return
    }

    onUpdateGenre(genreEditId, payload)
    setGenreSuccess(`Genre "${payload.name}" berhasil diperbarui.`)
    setGenreDeleteId(null)
    handleCancelGenreEdit()
  }

  const handleAuthorUpdateSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    resetAuthorMessage()

    if (authorEditId === null) {
      return
    }

    const payload: NewAuthor = {
      name: authorEditForm.name.trim(),
      country: authorEditForm.country.trim(),
    }

    if (!payload.name || !payload.country) {
      setAuthorError('Nama author dan negara wajib diisi untuk update.')
      return
    }

    onUpdateAuthor(authorEditId, payload)
    setAuthorSuccess(`Author "${payload.name}" berhasil diperbarui.`)
    setAuthorDeleteId(null)
    handleCancelAuthorEdit()
  }

  const handleAskDeleteGenre = (genre: Genre) => {
    resetGenreMessage()
    setGenreEditId(null)
    setGenreEditForm(initialGenreFormState)
    setGenreDeleteId(genre.id)
  }

  const handleConfirmDeleteGenre = (genre: Genre) => {
    resetGenreMessage()
    onDeleteGenre(genre.id)
    setGenreDeleteId(null)
    setGenreSuccess(`Genre "${genre.name}" berhasil dihapus.`)
  }

  const handleAskDeleteAuthor = (author: Author) => {
    resetAuthorMessage()
    setAuthorEditId(null)
    setAuthorEditForm(initialAuthorFormState)
    setAuthorDeleteId(author.id)
  }

  const handleConfirmDeleteAuthor = (author: Author) => {
    resetAuthorMessage()
    onDeleteAuthor(author.id)
    setAuthorDeleteId(null)
    setAuthorSuccess(`Author "${author.name}" berhasil dihapus.`)
  }

  return (
    <main className="space-y-8 pb-6">
      <section className="glass-panel animate-rise-up space-y-6 px-6 py-7 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold text-white">Admin Data Master</h2>
          <p className="mt-2 text-sm text-slate-300">
            Kelola data genre dan author dengan fitur lengkap create, read, update, dan delete.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <article className="rounded-2xl border border-white/15 bg-white/6 px-4 py-4">
            <p className="text-xs uppercase tracking-[0.12em] text-slate-300">Total Genre</p>
            <p className="mt-2 text-2xl font-bold text-white">{genres.length}</p>
          </article>
          <article className="rounded-2xl border border-white/15 bg-white/6 px-4 py-4">
            <p className="text-xs uppercase tracking-[0.12em] text-slate-300">Total Author</p>
            <p className="mt-2 text-2xl font-bold text-white">{authors.length}</p>
          </article>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-2">
        <article className="glass-panel space-y-5 p-5 sm:p-6">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-2xl font-bold text-white">Genre</h3>
            <span className="rounded-full border border-cyan-300/35 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-cyan-100">
              CRUD
            </span>
          </div>

          {genreError ? (
            <div className="rounded-xl border border-rose-300/45 bg-rose-400/10 px-4 py-3 text-sm text-rose-100">{genreError}</div>
          ) : null}

          {genreSuccess ? (
            <div className="rounded-xl border border-emerald-300/45 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-100">
              {genreSuccess}
            </div>
          ) : null}

          <form onSubmit={handleGenreSubmit} className="space-y-4 rounded-2xl border border-white/15 bg-slate-950/45 p-4">
            <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-3">
              <div>
                <p className="text-sm font-semibold text-white">Create Genre</p>
                <p className="text-xs text-slate-400">Tambah kategori baru untuk katalog buku.</p>
              </div>
            </div>

            <div>
              <label htmlFor="genre-name" className="field-label">
                Nama Genre
              </label>
              <input
                id="genre-name"
                className="field-input"
                value={genreForm.name}
                onChange={(event) => setGenreForm((previous) => ({ ...previous, name: event.target.value }))}
                placeholder="Contoh: Backend"
              />
            </div>

            <div>
              <label htmlFor="genre-description" className="field-label">
                Deskripsi
              </label>
              <textarea
                id="genre-description"
                className="field-input min-h-24 resize-y"
                value={genreForm.description}
                onChange={(event) => setGenreForm((previous) => ({ ...previous, description: event.target.value }))}
                placeholder="Ringkasan kategori genre"
              />
            </div>

            <button
              type="submit"
              className="rounded-full bg-linear-to-r from-cyan-300 to-emerald-300 px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:brightness-110"
            >
              Simpan Genre
            </button>
          </form>

          <div className="space-y-4 rounded-2xl border border-white/15 bg-slate-950/35 p-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-white">Read Genre</p>
                <p className="text-xs text-slate-400">
                  Menampilkan {filteredGenres.length} dari {genres.length} genre.
                </p>
              </div>
              <div className="w-full sm:max-w-64">
                <label htmlFor="genre-search" className="field-label">
                  Cari Genre
                </label>
                <input
                  id="genre-search"
                  className="field-input"
                  value={genreSearch}
                  onChange={(event) => setGenreSearch(event.target.value)}
                  placeholder="Nama atau deskripsi"
                />
              </div>
            </div>

            {filteredGenres.map((genre) => {
              const isEditing = genreEditId === genre.id
              const isConfirmingDelete = genreDeleteId === genre.id

              return (
                <article key={genre.id} className="rounded-2xl border border-white/15 bg-white/6 px-4 py-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-cyan-200/85">
                        Genre #{genre.id.toString().padStart(2, '0')}
                      </p>
                      <h4 className="mt-1 text-lg font-bold text-white">{genre.name}</h4>
                      <p className="mt-1 text-sm leading-6 text-slate-300/90">{genre.description}</p>
                    </div>

                    <div className="flex shrink-0 items-center gap-2">
                      <button
                        type="button"
                        onClick={() => handleStartGenreEdit(genre)}
                        className="rounded-full border border-cyan-300/45 bg-cyan-300/10 px-3 py-1.5 text-xs font-semibold text-cyan-100 transition hover:bg-cyan-300/20"
                      >
                        Update
                      </button>
                      <button
                        type="button"
                        onClick={() => handleAskDeleteGenre(genre)}
                        className="rounded-full border border-rose-300/45 bg-rose-400/10 px-3 py-1.5 text-xs font-semibold text-rose-100 transition hover:bg-rose-400/20"
                      >
                        Hapus
                      </button>
                    </div>
                  </div>

                  {isEditing ? (
                    <form onSubmit={handleGenreUpdateSubmit} className="mt-4 space-y-3 rounded-xl border border-cyan-200/35 bg-slate-950/55 p-3">
                      <div className="border-b border-white/10 pb-3">
                        <p className="text-sm font-semibold text-white">Update Genre</p>
                        <p className="text-xs text-slate-400">Ubah nama dan deskripsi genre yang dipilih.</p>
                      </div>

                      <div>
                        <label htmlFor={`genre-edit-name-${genre.id}`} className="field-label">
                          Nama Genre Baru
                        </label>
                        <input
                          id={`genre-edit-name-${genre.id}`}
                          className="field-input"
                          value={genreEditForm.name}
                          onChange={(event) => setGenreEditForm((previous) => ({ ...previous, name: event.target.value }))}
                        />
                      </div>

                      <div>
                        <label htmlFor={`genre-edit-description-${genre.id}`} className="field-label">
                          Deskripsi Baru
                        </label>
                        <textarea
                          id={`genre-edit-description-${genre.id}`}
                          className="field-input min-h-20 resize-y"
                          value={genreEditForm.description}
                          onChange={(event) =>
                            setGenreEditForm((previous) => ({
                              ...previous,
                              description: event.target.value,
                            }))
                          }
                        />
                      </div>

                      <div className="flex flex-wrap items-center gap-2">
                        <button
                          type="submit"
                          className="rounded-full bg-cyan-300 px-4 py-2 text-xs font-semibold text-slate-900 transition hover:brightness-110"
                        >
                          Simpan Perubahan
                        </button>
                        <button
                          type="button"
                          onClick={handleCancelGenreEdit}
                          className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold text-slate-100 transition hover:bg-white/20"
                        >
                          Batal
                        </button>
                      </div>
                    </form>
                  ) : null}

                  {isConfirmingDelete ? (
                    <div className="mt-4 rounded-xl border border-rose-300/35 bg-rose-400/10 p-3">
                      <p className="text-sm font-semibold text-rose-100">Hapus genre ini?</p>
                      <p className="mt-1 text-xs leading-5 text-rose-100/80">
                        Data "{genre.name}" akan dihapus dari daftar genre Admin.
                      </p>
                      <div className="mt-3 flex flex-wrap items-center gap-2">
                        <button
                          type="button"
                          onClick={() => handleConfirmDeleteGenre(genre)}
                          className="rounded-full bg-rose-300 px-4 py-2 text-xs font-semibold text-slate-950 transition hover:brightness-110"
                        >
                          Ya, Hapus
                        </button>
                        <button
                          type="button"
                          onClick={() => setGenreDeleteId(null)}
                          className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold text-slate-100 transition hover:bg-white/20"
                        >
                          Batal
                        </button>
                      </div>
                    </div>
                  ) : null}
                </article>
              )
            })}

            {filteredGenres.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-white/20 px-4 py-8 text-center text-sm text-slate-300">
                Tidak ada genre yang cocok dengan kata kunci tersebut.
              </div>
            ) : null}
          </div>
        </article>

        <article className="glass-panel space-y-5 p-5 sm:p-6">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-2xl font-bold text-white">Author</h3>
            <span className="rounded-full border border-emerald-300/35 bg-emerald-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-emerald-100">
              CRUD
            </span>
          </div>

          {authorError ? (
            <div className="rounded-xl border border-rose-300/45 bg-rose-400/10 px-4 py-3 text-sm text-rose-100">{authorError}</div>
          ) : null}

          {authorSuccess ? (
            <div className="rounded-xl border border-emerald-300/45 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-100">
              {authorSuccess}
            </div>
          ) : null}

          <form onSubmit={handleAuthorSubmit} className="space-y-4 rounded-2xl border border-white/15 bg-slate-950/45 p-4">
            <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-3">
              <div>
                <p className="text-sm font-semibold text-white">Create Author</p>
                <p className="text-xs text-slate-400">Tambah penulis baru untuk referensi katalog.</p>
              </div>
            </div>

            <div>
              <label htmlFor="author-name" className="field-label">
                Nama Author
              </label>
              <input
                id="author-name"
                className="field-input"
                value={authorForm.name}
                onChange={(event) => setAuthorForm((previous) => ({ ...previous, name: event.target.value }))}
                placeholder="Contoh: Yusuf Maulana"
              />
            </div>

            <div>
              <label htmlFor="author-country" className="field-label">
                Negara
              </label>
              <input
                id="author-country"
                className="field-input"
                value={authorForm.country}
                onChange={(event) => setAuthorForm((previous) => ({ ...previous, country: event.target.value }))}
                placeholder="Contoh: Indonesia"
              />
            </div>

            <button
              type="submit"
              className="rounded-full bg-linear-to-r from-emerald-300 to-cyan-300 px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:brightness-110"
            >
              Simpan Author
            </button>
          </form>

          <div className="space-y-4 rounded-2xl border border-white/15 bg-slate-950/35 p-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-white">Read Author</p>
                <p className="text-xs text-slate-400">
                  Menampilkan {filteredAuthors.length} dari {authors.length} author.
                </p>
              </div>
              <div className="w-full sm:max-w-64">
                <label htmlFor="author-search" className="field-label">
                  Cari Author
                </label>
                <input
                  id="author-search"
                  className="field-input"
                  value={authorSearch}
                  onChange={(event) => setAuthorSearch(event.target.value)}
                  placeholder="Nama atau negara"
                />
              </div>
            </div>

            {filteredAuthors.map((author) => {
              const isEditing = authorEditId === author.id
              const isConfirmingDelete = authorDeleteId === author.id

              return (
                <article key={author.id} className="rounded-2xl border border-white/15 bg-white/6 px-4 py-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-emerald-200/85">
                        Author #{author.id.toString().padStart(2, '0')}
                      </p>
                      <h4 className="mt-1 text-lg font-bold text-white">{author.name}</h4>
                      <p className="mt-1 text-sm text-slate-300/90">Negara: {author.country}</p>
                    </div>

                    <div className="flex shrink-0 items-center gap-2">
                      <button
                        type="button"
                        onClick={() => handleStartAuthorEdit(author)}
                        className="rounded-full border border-emerald-300/45 bg-emerald-300/10 px-3 py-1.5 text-xs font-semibold text-emerald-100 transition hover:bg-emerald-300/20"
                      >
                        Update
                      </button>
                      <button
                        type="button"
                        onClick={() => handleAskDeleteAuthor(author)}
                        className="rounded-full border border-rose-300/45 bg-rose-400/10 px-3 py-1.5 text-xs font-semibold text-rose-100 transition hover:bg-rose-400/20"
                      >
                        Hapus
                      </button>
                    </div>
                  </div>

                  {isEditing ? (
                    <form onSubmit={handleAuthorUpdateSubmit} className="mt-4 space-y-3 rounded-xl border border-emerald-200/35 bg-slate-950/55 p-3">
                      <div className="border-b border-white/10 pb-3">
                        <p className="text-sm font-semibold text-white">Update Author</p>
                        <p className="text-xs text-slate-400">Ubah nama author dan asal negara yang dipilih.</p>
                      </div>

                      <div>
                        <label htmlFor={`author-edit-name-${author.id}`} className="field-label">
                          Nama Author Baru
                        </label>
                        <input
                          id={`author-edit-name-${author.id}`}
                          className="field-input"
                          value={authorEditForm.name}
                          onChange={(event) => setAuthorEditForm((previous) => ({ ...previous, name: event.target.value }))}
                        />
                      </div>

                      <div>
                        <label htmlFor={`author-edit-country-${author.id}`} className="field-label">
                          Negara Baru
                        </label>
                        <input
                          id={`author-edit-country-${author.id}`}
                          className="field-input"
                          value={authorEditForm.country}
                          onChange={(event) => setAuthorEditForm((previous) => ({ ...previous, country: event.target.value }))}
                        />
                      </div>

                      <div className="flex flex-wrap items-center gap-2">
                        <button
                          type="submit"
                          className="rounded-full bg-emerald-300 px-4 py-2 text-xs font-semibold text-slate-900 transition hover:brightness-110"
                        >
                          Simpan Perubahan
                        </button>
                        <button
                          type="button"
                          onClick={handleCancelAuthorEdit}
                          className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold text-slate-100 transition hover:bg-white/20"
                        >
                          Batal
                        </button>
                      </div>
                    </form>
                  ) : null}

                  {isConfirmingDelete ? (
                    <div className="mt-4 rounded-xl border border-rose-300/35 bg-rose-400/10 p-3">
                      <p className="text-sm font-semibold text-rose-100">Hapus author ini?</p>
                      <p className="mt-1 text-xs leading-5 text-rose-100/80">
                        Data "{author.name}" akan dihapus dari daftar author Admin.
                      </p>
                      <div className="mt-3 flex flex-wrap items-center gap-2">
                        <button
                          type="button"
                          onClick={() => handleConfirmDeleteAuthor(author)}
                          className="rounded-full bg-rose-300 px-4 py-2 text-xs font-semibold text-slate-950 transition hover:brightness-110"
                        >
                          Ya, Hapus
                        </button>
                        <button
                          type="button"
                          onClick={() => setAuthorDeleteId(null)}
                          className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold text-slate-100 transition hover:bg-white/20"
                        >
                          Batal
                        </button>
                      </div>
                    </div>
                  ) : null}
                </article>
              )
            })}

            {filteredAuthors.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-white/20 px-4 py-8 text-center text-sm text-slate-300">
                Tidak ada author yang cocok dengan kata kunci tersebut.
              </div>
            ) : null}
          </div>
        </article>
      </section>
    </main>
  )
}

export default AdminPage
