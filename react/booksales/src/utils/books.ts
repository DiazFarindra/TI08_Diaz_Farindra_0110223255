export interface Book {
  id: number
  title: string
  author: string
  year: number
  description: string
  image: string
}

export type NewBook = Omit<Book, 'id'>

export const initialBooks: Book[] = [
  {
    id: 1,
    title: 'Belajar JavaScript Dasar',
    author: 'Andi Prasetyo',
    year: 2021,
    description: 'Panduan lengkap untuk pemula yang ingin memahami fondasi JavaScript modern.',
    image: 'https://picsum.photos/seed/booksales-js/960/600',
  },
  {
    id: 2,
    title: 'React untuk Pemula',
    author: 'Dina Sari',
    year: 2022,
    description: 'Mengenal konsep component, props, state, dan alur berpikir React secara praktis.',
    image: 'https://picsum.photos/seed/booksales-react/960/600',
  },
  {
    id: 3,
    title: 'TypeScript Praktis',
    author: 'Rama Nugroho',
    year: 2023,
    description: 'Cara membangun aplikasi front-end yang lebih aman dengan static typing yang efisien.',
    image: 'https://picsum.photos/seed/booksales-ts/960/600',
  },
  {
    id: 4,
    title: 'Clean Code Frontend',
    author: 'Maya Kusuma',
    year: 2022,
    description: 'Teknik menulis kode UI yang mudah dibaca, dirawat, dan siap dikembangkan tim.',
    image: 'https://picsum.photos/seed/booksales-clean-code/960/600',
  },
  {
    id: 5,
    title: 'UI Design untuk Developer',
    author: 'Farhan Akbar',
    year: 2024,
    description: 'Jembatan antara prinsip desain visual dan implementasi antarmuka modern.',
    image: 'https://picsum.photos/seed/booksales-ui/960/600',
  },
  {
    id: 6,
    title: 'State Management React',
    author: 'Nabila Putri',
    year: 2025,
    description: 'Pembahasan state lokal, lifting state up, dan pola manajemen data lintas komponen.',
    image: 'https://picsum.photos/seed/booksales-state/960/600',
  },
  {
    id: 7,
    title: 'Pengantar Tailwind CSS',
    author: 'Yogi Pratama',
    year: 2023,
    description: 'Pendekatan utility-first untuk membangun UI cepat tanpa kehilangan konsistensi desain.',
    image: 'https://picsum.photos/seed/booksales-tailwind/960/600',
  },
  {
    id: 8,
    title: 'Asynchronous JavaScript',
    author: 'Lia Rahma',
    year: 2021,
    description: 'Memahami promise, async/await, dan strategi handling request data di aplikasi web.',
    image: 'https://picsum.photos/seed/booksales-async/960/600',
  },
  {
    id: 9,
    title: 'Testing React App',
    author: 'Bimo Ardiansyah',
    year: 2024,
    description: 'Langkah menyusun pengujian komponen agar fitur front-end lebih stabil saat berkembang.',
    image: 'https://picsum.photos/seed/booksales-testing/960/600',
  },
]

const getNextBookId = (books: ReadonlyArray<Book>): number => books.reduce((maxId, book) => Math.max(maxId, book.id), 0) + 1

export const createBook = (books: ReadonlyArray<Book>, newBook: NewBook): Book => ({
  id: getNextBookId(books),
  ...newBook,
})
