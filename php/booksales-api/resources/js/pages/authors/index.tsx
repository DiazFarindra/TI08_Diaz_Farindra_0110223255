import { Head } from '@inertiajs/react';
import { index } from '@/routes/authors';

interface Author {
    id: number;
    name: string;
    photo: string;
    bio: string;
}

interface Props {
    authors: Author[];
}

export default function AuthorsIndex({ authors }: Props) {
    return (
        <>
            <Head title="Authors" />
            <div className="flex h-full flex-1 flex-col gap-6 p-6">
                <div>
                    <h1 className="text-2xl font-semibold tracking-tight">Daftar Author</h1>
                    <p className="text-muted-foreground text-sm mt-1">{authors.length} author tersedia</p>
                </div>
                <div className="rounded-xl border border-sidebar-border/70 dark:border-sidebar-border overflow-hidden">
                    <table className="w-full text-sm">
                        <thead className="bg-muted/50 text-muted-foreground">
                            <tr>
                                <th className="px-4 py-3 text-left font-medium w-12">#</th>
                                <th className="px-4 py-3 text-left font-medium w-16">Foto</th>
                                <th className="px-4 py-3 text-left font-medium">Nama</th>
                                <th className="px-4 py-3 text-left font-medium">Bio</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            {authors.length === 0 ? (
                                <tr>
                                    <td colSpan={4} className="px-4 py-8 text-center text-muted-foreground">
                                        Belum ada author.
                                    </td>
                                </tr>
                            ) : (
                                authors.map((author) => (
                                    <tr key={author.id} className="hover:bg-muted/30 transition-colors">
                                        <td className="px-4 py-3 text-muted-foreground">{author.id}</td>
                                        <td className="px-4 py-3">
                                            {author.photo ? (
                                                <img
                                                    src={author.photo}
                                                    alt={author.name}
                                                    className="w-9 h-9 rounded-full object-cover"
                                                />
                                            ) : (
                                                <div className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground text-xs font-medium">
                                                    {author.name.charAt(0).toUpperCase()}
                                                </div>
                                            )}
                                        </td>
                                        <td className="px-4 py-3 font-medium">{author.name}</td>
                                        <td className="px-4 py-3 text-muted-foreground max-w-xs truncate">{author.bio || '—'}</td>
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

AuthorsIndex.layout = {
    breadcrumbs: [
        { title: 'Authors', href: index.url() },
    ],
};
