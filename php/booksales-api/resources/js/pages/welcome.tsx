import { Head, Link, usePage } from '@inertiajs/react';
import { dashboard, login, register } from '@/routes';

export default function Welcome({ canRegister }: { canRegister?: boolean }) {
    const { auth } = usePage().props;

    return (
        <>
            <Head title="BookSales — Temukan Buku Terbaik">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=lora:400,400i,500,600,700|instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>

            <div className="min-h-screen bg-white text-[#1a1a1a]" style={{ fontFamily: "'Instrument Sans', sans-serif" }}>

                {/* Navbar */}
                <nav className="fixed top-0 z-50 w-full border-b border-stone-100 bg-white/90 backdrop-blur-md">
                    <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                        <div className="flex items-center gap-2">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="4" y="3" width="14" height="20" rx="2" fill="#78350f"/>
                                <rect x="10" y="3" width="14" height="20" rx="2" fill="#d97706" opacity="0.7"/>
                                <rect x="7" y="6" width="8" height="1.5" rx="0.75" fill="white" opacity="0.8"/>
                                <rect x="7" y="9" width="6" height="1.5" rx="0.75" fill="white" opacity="0.6"/>
                            </svg>
                            <span className="text-lg font-semibold tracking-tight" style={{ fontFamily: "'Lora', serif" }}>
                                BookSales
                            </span>
                        </div>
                        <div className="flex items-center gap-3">
                            {auth.user ? (
                                <Link
                                    href={dashboard()}
                                    className="rounded-full bg-amber-700 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-amber-800"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={login()}
                                        className="text-sm font-medium text-stone-600 transition-colors hover:text-stone-900"
                                    >
                                        Log In
                                    </Link>
                                    {canRegister && (
                                        <Link
                                            href={register()}
                                            className="rounded-full bg-amber-700 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-amber-800"
                                        >
                                            Sign Up
                                        </Link>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                </nav>

                {/* Hero */}
                <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
                    {/* Background decoration */}
                    <div className="pointer-events-none absolute inset-0">
                        <div className="absolute -right-32 -top-32 h-[600px] w-[600px] rounded-full bg-amber-50 opacity-60" />
                        <div className="absolute -bottom-48 -left-24 h-[500px] w-[500px] rounded-full bg-stone-50 opacity-80" />
                    </div>

                    <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 py-24 lg:grid-cols-2">
                        {/* Text */}
                        <div>
                            <span className="mb-6 inline-block rounded-full border border-amber-200 bg-amber-50 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-amber-700">
                                Online Bookstore
                            </span>
                            <h1
                                className="mb-6 text-5xl font-bold leading-tight tracking-tight text-stone-900 lg:text-6xl"
                                style={{ fontFamily: "'Lora', serif" }}
                            >
                                Discover Stories
                                <br />
                                <span className="italic text-amber-700">That Change</span>
                                <br />
                                Your World
                            </h1>
                            <p className="mb-10 max-w-md text-lg leading-relaxed text-stone-500">
                                A curated collection from the finest authors. Fiction, non-fiction, self-growth — all in one place.
                            </p>
                            <div className="flex flex-wrap items-center gap-4">
                                <Link
                                    href="/books"
                                    className="rounded-full bg-amber-700 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-amber-200 transition-all hover:bg-amber-800 hover:shadow-amber-300"
                                >
                                    Browse Books
                                </Link>
                                {!auth.user && canRegister && (
                                    <Link
                                        href={register()}
                                        className="rounded-full border border-stone-200 px-8 py-3.5 text-sm font-semibold text-stone-700 transition-all hover:border-stone-300 hover:bg-stone-50"
                                    >
                                        Create Free Account
                                    </Link>
                                )}
                            </div>
                        </div>

                        {/* Book stack illustration */}
                        <div className="flex justify-center lg:justify-end">
                            <div className="relative h-80 w-72">
                                {/* Book 3 (back) */}
                                <div className="absolute bottom-0 left-8 h-56 w-40 rotate-[-8deg] rounded-r-lg bg-stone-200 shadow-xl">
                                    <div className="absolute left-0 top-0 h-full w-3 rounded-l-sm bg-stone-300" />
                                    <div className="flex h-full flex-col items-center justify-center gap-2 px-4">
                                        <div className="h-1 w-24 rounded bg-stone-300" />
                                        <div className="h-1 w-16 rounded bg-stone-300" />
                                    </div>
                                </div>
                                {/* Book 2 (middle) */}
                                <div className="absolute bottom-0 left-16 h-64 w-44 rotate-[-2deg] rounded-r-lg bg-amber-100 shadow-xl">
                                    <div className="absolute left-0 top-0 h-full w-3 rounded-l-sm bg-amber-300" />
                                    <div className="flex h-full flex-col items-center justify-center gap-3 px-5">
                                        <div className="h-10 w-10 rounded-full bg-amber-300 opacity-60" />
                                        <div className="h-1 w-24 rounded bg-amber-300" />
                                        <div className="h-1 w-16 rounded bg-amber-200" />
                                    </div>
                                </div>
                                {/* Book 1 (front) */}
                                <div className="absolute bottom-0 right-0 h-72 w-48 rotate-[4deg] rounded-r-lg bg-amber-700 shadow-2xl">
                                    <div className="absolute left-0 top-0 h-full w-4 rounded-l-sm bg-amber-900" />
                                    <div className="flex h-full flex-col items-start justify-end gap-2 px-5 pb-8">
                                        <div className="h-1 w-28 rounded bg-amber-400" />
                                        <div className="h-0.5 w-20 rounded bg-amber-500" />
                                        <div className="mt-2 h-0.5 w-16 rounded bg-amber-600" />
                                    </div>
                                    <div className="absolute left-5 top-8 right-5">
                                        <div className="mb-3 h-16 w-16 rounded-lg bg-amber-600 opacity-60" />
                                        <div className="h-1.5 w-28 rounded bg-amber-400 opacity-80" />
                                        <div className="mt-2 h-1 w-20 rounded bg-amber-500 opacity-60" />
                                    </div>
                                </div>
                                {/* Shadow under books */}
                                <div className="absolute -bottom-4 left-4 right-0 h-6 rounded-full bg-stone-200 opacity-50 blur-md" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats bar */}
                <section className="border-y border-stone-100 bg-stone-50">
                    <div className="mx-auto grid max-w-6xl grid-cols-3 divide-x divide-stone-200 px-6">
                        {[
                            { value: '500+', label: 'Book Titles' },
                            { value: '120+', label: 'Authors' },
                            { value: '20+', label: 'Genres' },
                        ].map((stat) => (
                            <div key={stat.label} className="py-8 text-center">
                                <div
                                    className="text-3xl font-bold text-amber-700"
                                    style={{ fontFamily: "'Lora', serif" }}
                                >
                                    {stat.value}
                                </div>
                                <div className="mt-1 text-sm text-stone-500">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Features */}
                <section className="py-24">
                    <div className="mx-auto max-w-6xl px-6">
                        <div className="mb-16 text-center">
                            <h2
                                className="mb-4 text-4xl font-bold text-stone-900"
                                style={{ fontFamily: "'Lora', serif" }}
                            >
                                Why BookSales?
                            </h2>
                            <p className="mx-auto max-w-lg text-stone-500">
                                A seamless, trustworthy book-buying experience — from browse to doorstep.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                            {[
                                {
                                    icon: (
                                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                                        </svg>
                                    ),
                                    title: 'Curated Collection',
                                    desc: 'Thousands of titles across every genre, hand-picked from renowned authors worldwide.',
                                },
                                {
                                    icon: (
                                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                        </svg>
                                    ),
                                    title: 'Easy Shopping',
                                    desc: 'Fast, secure checkout in just a few clicks. Your next read is always one step away.',
                                },
                                {
                                    icon: (
                                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                        </svg>
                                    ),
                                    title: 'Trusted Quality',
                                    desc: 'Thousands of happy readers. Original books sourced directly from publishers.',
                                },
                            ].map((f) => (
                                <div
                                    key={f.title}
                                    className="group rounded-2xl border border-stone-100 bg-white p-8 shadow-sm transition-all hover:border-amber-100 hover:shadow-md"
                                >
                                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-700 transition-colors group-hover:bg-amber-100">
                                        {f.icon}
                                    </div>
                                    <h3
                                        className="mb-2 text-xl font-semibold text-stone-900"
                                        style={{ fontFamily: "'Lora', serif" }}
                                    >
                                        {f.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed text-stone-500">{f.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-24">
                    <div className="mx-auto max-w-6xl px-6">
                        <div className="relative overflow-hidden rounded-3xl bg-amber-700 px-12 py-16 text-center">
                            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-amber-600 opacity-40" />
                            <div className="pointer-events-none absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-amber-800 opacity-30" />
                            <div className="relative">
                                <h2
                                    className="mb-4 text-4xl font-bold text-white"
                                    style={{ fontFamily: "'Lora', serif" }}
                                >
                                    Start Your Reading Journey
                                </h2>
                                <p className="mx-auto mb-8 max-w-md text-amber-100">
                                    Join thousands of readers and find your next book that will shift your perspective forever.
                                </p>
                                <div className="flex flex-wrap justify-center gap-4">
                                    <Link
                                        href="/books"
                                        className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-amber-700 transition-all hover:bg-amber-50"
                                    >
                                        View Catalog
                                    </Link>
                                    {!auth.user && canRegister && (
                                        <Link
                                            href={register()}
                                            className="rounded-full border border-amber-500 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-amber-600"
                                        >
                                            Sign Up Now
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="border-t border-stone-100 py-8">
                    <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
                        <div className="flex items-center gap-2">
                            <svg width="20" height="20" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="4" y="3" width="14" height="20" rx="2" fill="#78350f"/>
                                <rect x="10" y="3" width="14" height="20" rx="2" fill="#d97706" opacity="0.7"/>
                            </svg>
                            <span className="text-sm font-medium text-stone-600" style={{ fontFamily: "'Lora', serif" }}>
                                BookSales
                            </span>
                        </div>
                        <p className="text-xs text-stone-400">
                            &copy; {new Date().getFullYear()} BookSales. All rights reserved.
                        </p>
                    </div>
                </footer>

            </div>
        </>
    );
}
