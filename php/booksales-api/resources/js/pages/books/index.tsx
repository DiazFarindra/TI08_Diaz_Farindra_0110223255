import { Head } from '@inertiajs/react';
import { index } from '@/routes/books';

interface Author {
    id: number;
    name: string;
}

interface Genre {
    id: number;
    name: string;
}

interface Book {
    id: number;
    title: string;
    description: string;
    price: number;
    stock: number;
    cover_photo: string | null;
    author: Author | null;
    genre: Genre | null;
}

interface Props {
    books: Book[];
}

export default function BooksIndex({ books }: Props) {
    return (
        <>
            <Head title="Books" />
            <div className="flex h-full flex-1 flex-col gap-6 p-6">
                <div>
                    <h1 className="text-2xl font-semibold tracking-tight">Daftar Buku</h1>
                    <p className="text-muted-foreground text-sm mt-1">{books.length} buku tersedia</p>
                </div>
                <div className="rounded-xl border border-sidebar-border/70 dark:border-sidebar-border overflow-hidden">
                    <table className="w-full text-sm">
                        <thead className="bg-muted/50 text-muted-foreground">
                            <tr>
                                <th className="px-4 py-3 text-left font-medium w-12">#</th>
                                <th className="px-4 py-3 text-left font-medium">Judul</th>
                                <th className="px-4 py-3 text-left font-medium">Penulis</th>
                                <th className="px-4 py-3 text-left font-medium">Genre</th>
                                <th className="px-4 py-3 text-left font-medium">Harga</th>
                                <th className="px-4 py-3 text-left font-medium">Stok</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            {books.length === 0 ? (
                                <tr>
                                    <td colSpan={6} className="px-4 py-8 text-center text-muted-foreground">
                                        Belum ada buku.
                                    </td>
                                </tr>
                            ) : (
                                books.map((book) => (
                                    <tr key={book.id} className="hover:bg-muted/30 transition-colors">
                                        <td className="px-4 py-3 text-muted-foreground">{book.id}</td>
                                        <td className="px-4 py-3 font-medium">{book.title}</td>
                                        <td className="px-4 py-3 text-muted-foreground">{book.author?.name ?? '—'}</td>
                                        <td className="px-4 py-3 text-muted-foreground">{book.genre?.name ?? '—'}</td>
                                        <td className="px-4 py-3">
                                            {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(book.price)}
                                        </td>
                                        <td className="px-4 py-3 text-muted-foreground">{book.stock}</td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

BooksIndex.layout = {
    breadcrumbs: [
        { title: 'Books', href: index.url() },
    ],
};
