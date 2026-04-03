export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Selamat Datang di <span className="text-indigo-600">TI-08 Dev</span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600">
              Platform inovatif untuk pembelajaran web development dengan React dan teknologi modern
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/team"
                className="rounded-lg bg-indigo-600 px-8 py-3 font-medium text-white hover:bg-indigo-700 transition"
              >
                Lihat Tim
              </a>
              <a
                href="/contact"
                className="rounded-lg border-2 border-indigo-600 px-8 py-3 font-medium text-indigo-600 hover:bg-indigo-50 transition"
              >
                Hubungi Kami
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mt-16 rounded-xl bg-white p-8 shadow-lg">
            <img
              src="/src/assets/hero.png"
              alt="Hero"
              className="w-full rounded-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-4xl font-bold text-gray-900">
            Fitur Utama
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: "📚",
                title: "Pembelajaran Terstruktur",
                desc: "Materi pembelajaran yang terorganisir dengan baik dari dasar hingga advanced",
              },
              {
                icon: "👥",
                title: "Kolaborasi Tim",
                desc: "Bekerja sama dengan tim dalam proyek-proyek nyata dan menantang",
              },
              {
                icon: "🚀",
                title: "Teknologi Modern",
                desc: "Menggunakan React, TypeScript, Tailwind CSS, dan tools terkini",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="rounded-lg border border-gray-200 bg-gray-50 p-8 text-center hover:shadow-lg transition"
              >
                <div className="mb-4 text-5xl">{feature.icon}</div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-indigo-600">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-8 text-center md:grid-cols-3">
            {[
              { label: "Anggota Tim", value: "10+" },
              { label: "Proyek Selesai", value: "15+" },
              { label: "Jam Belajar", value: "500+" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl font-bold text-white">{stat.value}</div>
                <p className="mt-2 text-indigo-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
