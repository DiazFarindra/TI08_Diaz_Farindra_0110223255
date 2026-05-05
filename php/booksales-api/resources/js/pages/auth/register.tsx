import { Form, Head } from '@inertiajs/react';
import { AtSign, BookOpenCheck, Mail, Sparkles, UserRound } from 'lucide-react';
import InputError from '@/components/input-error';
import PasswordInput from '@/components/password-input';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { login } from '@/routes';
import { store } from '@/routes/register';

export default function Register() {
    return (
        <>
            <Head title="Register" />

            <div className="rounded-lg border border-border/70 bg-gradient-to-br from-emerald-50 via-background to-sky-50 p-4 shadow-sm dark:from-emerald-950/20 dark:via-background dark:to-sky-950/20">
                <div className="flex items-center gap-3">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-emerald-600 text-white shadow-sm">
                        <BookOpenCheck className="size-5" />
                    </div>
                    <div className="min-w-0">
                        <p className="text-sm font-medium text-foreground">
                            Booksales Member
                        </p>
                        <p className="text-xs leading-5 text-muted-foreground">
                            Buat akun untuk mulai mengelola koleksi buku.
                        </p>
                    </div>
                </div>
            </div>

            <Form
                {...store.form()}
                resetOnSuccess={['password', 'password_confirmation']}
                disableWhileProcessing
                className="flex flex-col gap-6"
            >
                {({ processing, errors }) => (
                    <>
                        <div className="grid gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="name">Nama lengkap</Label>
                                <div className="relative">
                                    <UserRound className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
                                    <Input
                                        id="name"
                                        type="text"
                                        required
                                        autoFocus
                                        tabIndex={1}
                                        autoComplete="name"
                                        name="name"
                                        placeholder="Nama lengkap"
                                        className="pl-9"
                                        aria-invalid={Boolean(errors.name)}
                                    />
                                </div>
                                <InputError
                                    message={errors.name}
                                    className="mt-2"
                                />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <div className="relative">
                                    <Mail className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
                                    <Input
                                        id="email"
                                        type="email"
                                        required
                                        tabIndex={2}
                                        autoComplete="email"
                                        name="email"
                                        placeholder="email@example.com"
                                        className="pl-9"
                                        aria-invalid={Boolean(errors.email)}
                                    />
                                </div>
                                <InputError message={errors.email} />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="username">Username</Label>
                                <div className="relative">
                                    <AtSign className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
                                    <Input
                                        id="username"
                                        type="text"
                                        required
                                        minLength={3}
                                        maxLength={40}
                                        pattern="[A-Za-z0-9_-]+"
                                        tabIndex={3}
                                        autoComplete="username"
                                        name="username"
                                        placeholder="contoh: diaz_reader"
                                        className="pl-9"
                                        aria-invalid={Boolean(errors.username)}
                                    />
                                </div>
                                <InputError message={errors.username} />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="password">Password</Label>
                                <PasswordInput
                                    id="password"
                                    required
                                    minLength={8}
                                    tabIndex={4}
                                    autoComplete="new-password"
                                    name="password"
                                    placeholder="Minimal 8 karakter"
                                    aria-invalid={Boolean(errors.password)}
                                />
                                <InputError message={errors.password} />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="password_confirmation">
                                    Confirm password
                                </Label>
                                <PasswordInput
                                    id="password_confirmation"
                                    required
                                    minLength={8}
                                    tabIndex={5}
                                    autoComplete="new-password"
                                    name="password_confirmation"
                                    placeholder="Ulangi password"
                                    aria-invalid={Boolean(
                                        errors.password_confirmation,
                                    )}
                                />
                                <InputError
                                    message={errors.password_confirmation}
                                />
                            </div>

                            <Button
                                type="submit"
                                className="mt-2 w-full"
                                tabIndex={6}
                                data-test="register-user-button"
                            >
                                {processing && <Spinner />}
                                <Sparkles className="size-4" />
                                Buat akun
                            </Button>
                        </div>

                        <div className="text-center text-sm text-muted-foreground">
                            Sudah punya akun?{' '}
                            <TextLink href={login()} tabIndex={7}>
                                Masuk
                            </TextLink>
                        </div>
                    </>
                )}
            </Form>
        </>
    );
}

Register.layout = {
    title: 'Daftar Akun Baru',
    description: 'Lengkapi data berikut untuk membuat akun Booksales',
};
