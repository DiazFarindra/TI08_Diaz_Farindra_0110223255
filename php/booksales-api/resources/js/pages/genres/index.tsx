import { Head } from '@inertiajs/react';
import { index } from '@/routes/genres';

interface Genre {
    id: number;
    name: string;
    description: string;
}

interface Props {
    genres: Genre[];
}

export default function GenresIndex({ genres }: Props) {
    return (
        <>
            <Head title="Genres" />
            <div className="flex h-full flex-1 flex-col gap-6 p-6">
                <div>
                    <h1 className="text-2xl font-semibold tracking-tight">Daftar Genre</h1>
                    <p className="text-muted-foreground text-sm mt-1">{genres.length} genre tersedia</p>
                </div>
                <div className="rounded-xl border border-sidebar-border/70 dark:border-sidebar-border overflow-hidden">
                    <table className="w-full text-sm">
                        <thead className="bg-muted/50 text-muted-foreground">
                            <tr>
                                <th className="px-4 py-3 text-left font-medium w-12">#</th>
                                <th className="px-4 py-3 text-left font-medium">Nama</th>
                                <th className="px-4 py-3 text-left font-medium">Deskripsi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            {genres.length === 0 ? (
                                <tr>
                                    <td colSpan={3} className="px-4 py-8 text-center text-muted-foreground">
                                        Belum ada genre.
                                    </td>
                                </tr>
                            ) : (
                                genres.map((genre) => (
                                    <tr key={genre.id} className="hover:bg-muted/30 transition-colors">
                                        <td className="px-4 py-3 text-muted-foreground">{genre.id}</td>
                                        <td className="px-4 py-3 font-medium">{genre.name}</td>
                                        <td className="px-4 py-3 text-muted-foreground">{genre.description || '—'}</td>
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

GenresIndex.layout = {
    breadcrumbs: [
        { title: 'Genres', href: index.url() },
    ],
};
