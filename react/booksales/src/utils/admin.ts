export interface Genre {
  id: number
  name: string
  description: string
}

export interface Author {
  id: number
  name: string
  country: string
}

export type NewGenre = Omit<Genre, 'id'>
export type NewAuthor = Omit<Author, 'id'>

export const initialGenres: Genre[] = [
  {
    id: 1,
    name: 'Frontend',
    description: 'Topik terkait pengembangan antarmuka web modern.',
  },
  {
    id: 2,
    name: 'Programming Basics',
    description: 'Materi dasar pemrograman untuk pemula.',
  },
  {
    id: 3,
    name: 'Software Engineering',
    description: 'Praktik terbaik, arsitektur, dan maintainability kode.',
  },
]

export const initialAuthors: Author[] = [
  {
    id: 1,
    name: 'Andi Prasetyo',
    country: 'Indonesia',
  },
  {
    id: 2,
    name: 'Dina Sari',
    country: 'Indonesia',
  },
  {
    id: 3,
    name: 'Rama Nugroho',
    country: 'Indonesia',
  },
]

const getNextId = <T extends { id: number }>(items: ReadonlyArray<T>): number =>
  items.reduce((maxId, item) => Math.max(maxId, item.id), 0) + 1

export const createGenre = (genres: ReadonlyArray<Genre>, newGenre: NewGenre): Genre => ({
  id: getNextId(genres),
  ...newGenre,
})

export const createAuthor = (authors: ReadonlyArray<Author>, newAuthor: NewAuthor): Author => ({
  id: getNextId(authors),
  ...newAuthor,
})

export const updateGenre = (genres: ReadonlyArray<Genre>, id: number, payload: NewGenre): Genre[] =>
  genres.map((genre) => (genre.id === id ? { ...genre, ...payload } : genre))

export const deleteGenre = (genres: ReadonlyArray<Genre>, id: number): Genre[] => genres.filter((genre) => genre.id !== id)

export const updateAuthor = (authors: ReadonlyArray<Author>, id: number, payload: NewAuthor): Author[] =>
  authors.map((author) => (author.id === id ? { ...author, ...payload } : author))

export const deleteAuthor = (authors: ReadonlyArray<Author>, id: number): Author[] =>
  authors.filter((author) => author.id !== id)
