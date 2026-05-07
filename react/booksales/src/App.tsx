import { useState } from 'react'
import { BrowserRouter, Navigate, NavLink, Route, Routes, useNavigate } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { useAuth } from './hooks/useAuth'
import AdminPage from './pages/AdminPage'
import BooksPage from './pages/BooksPage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import RegisterPage from './pages/RegisterPage'
import UnauthorizedPage from './pages/UnauthorizedPage'
import ProtectedRoute from './routes/ProtectedRoute'
import {
  createAuthor,
  createGenre,
  deleteAuthor,
  deleteGenre,
  initialAuthors,
  initialGenres,
  updateAuthor,
  updateGenre,
} from './utils/admin'
import { createBook, initialBooks } from './utils/books'
import { initialRegisteredUsers } from './utils/registration'
import type { NewAuthor, NewGenre } from './utils/admin'
import type { Book, NewBook } from './utils/books'
import type { RegisteredUser } from './utils/registration'

function AppShell() {
  const { isAuthenticated, logout, user } = useAuth()
  const navigate = useNavigate()
  const [books, setBooks] = useState<Book[]>(initialBooks)
  const [genres, setGenres] = useState(initialGenres)
  const [authors, setAuthors] = useState(initialAuthors)
  const [registeredUsers, setRegisteredUsers] = useState<RegisteredUser[]>(initialRegisteredUsers)

  const handleAddBook = (newBook: NewBook) => {
    setBooks((previousBooks) => [createBook(previousBooks, newBook), ...previousBooks])
  }

  const handleAddGenre = (newGenre: NewGenre) => {
    setGenres((previousGenres) => [createGenre(previousGenres, newGenre), ...previousGenres])
  }

  const handleAddAuthor = (newAuthor: NewAuthor) => {
    setAuthors((previousAuthors) => [createAuthor(previousAuthors, newAuthor), ...previousAuthors])
  }

  const handleUpdateGenre = (id: number, payload: NewGenre) => {
    setGenres((previousGenres) => updateGenre(previousGenres, id, payload))
  }

  const handleDeleteGenre = (id: number) => {
    setGenres((previousGenres) => deleteGenre(previousGenres, id))
  }

  const handleUpdateAuthor = (id: number, payload: NewAuthor) => {
    setAuthors((previousAuthors) => updateAuthor(previousAuthors, id, payload))
  }

  const handleDeleteAuthor = (id: number) => {
    setAuthors((previousAuthors) => deleteAuthor(previousAuthors, id))
  }

  const handleRegisterUser = (newUser: RegisteredUser) => {
    setRegisteredUsers((previousUsers) => [newUser, ...previousUsers])
  }

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#060916] text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(45,212,191,0.18),transparent_38%),radial-gradient(circle_at_84%_0%,rgba(59,130,246,0.2),transparent_34%),radial-gradient(circle_at_70%_88%,rgba(16,185,129,0.18),transparent_42%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-size-[42px_42px] mask-[radial-gradient(circle_at_center,black,transparent_72%)]" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 pb-10 pt-6 sm:px-6 lg:px-10">
        <header className="glass-panel animate-rise-up mb-8 flex flex-col gap-5 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
          <div>
            <p className="text-xs uppercase tracking-[0.26em] text-cyan-200/75">Frontend Exam Project</p>
            <h1 className="mt-2 text-2xl font-bold text-white sm:text-3xl">BookSales</h1>
            <p className="mt-1 text-sm text-slate-300">Role-based protected routes with clean React state.</p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <NavLink
              to="/"
              end
              className={({ isActive }) => `nav-pill ${isActive ? 'nav-pill-active' : 'nav-pill-idle'}`}
            >
              Home
            </NavLink>
            {isAuthenticated ? (
              <NavLink
                to="/books"
                className={({ isActive }) => `nav-pill ${isActive ? 'nav-pill-active' : 'nav-pill-idle'}`}
              >
                Books
              </NavLink>
            ) : null}
            {isAuthenticated ? (
              <NavLink
                to="/profile"
                className={({ isActive }) => `nav-pill ${isActive ? 'nav-pill-active' : 'nav-pill-idle'}`}
              >
                Profile
              </NavLink>
            ) : null}
            {user?.role === 'admin' ? (
              <NavLink
                to="/admin"
                className={({ isActive }) => `nav-pill ${isActive ? 'nav-pill-active' : 'nav-pill-idle'}`}
              >
                Admin
              </NavLink>
            ) : null}
            <NavLink
              to="/register"
              className={({ isActive }) => `nav-pill ${isActive ? 'nav-pill-active' : 'nav-pill-idle'}`}
            >
              Register
            </NavLink>
            {isAuthenticated ? (
              <button type="button" onClick={handleLogout} className="nav-pill nav-pill-idle">
                Logout
              </button>
            ) : (
              <NavLink
                to="/login"
                className={({ isActive }) => `nav-pill ${isActive ? 'nav-pill-active' : 'nav-pill-idle'}`}
              >
                Login
              </NavLink>
            )}
            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-teal-100">
              {user ? user.role : 'guest'}
            </span>
            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-cyan-100">
              {registeredUsers.length} users
            </span>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<HomePage books={books} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage users={registeredUsers} onRegister={handleRegisterUser} />} />
          <Route path="/unauthorized" element={<UnauthorizedPage />} />

          <Route element={<ProtectedRoute allowedRoles={['user', 'admin']} />}>
            <Route path="/books" element={<BooksPage books={books} onAddBook={handleAddBook} />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Route>

          <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
            <Route
              path="/admin"
              element={
                <AdminPage
                  genres={genres}
                  authors={authors}
                  onAddGenre={handleAddGenre}
                  onAddAuthor={handleAddAuthor}
                  onUpdateGenre={handleUpdateGenre}
                  onDeleteGenre={handleDeleteGenre}
                  onUpdateAuthor={handleUpdateAuthor}
                  onDeleteAuthor={handleDeleteAuthor}
                />
              }
            />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppShell />
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
