export default function Team() {
  const teamMembers = [
    {
      name: "Farindra Diaz",
      role: "Front-end Developer",
      bio: "Ahli dalam React dan UI/UX Design",
      avatar: "👨‍💻",
      skills: ["React", "TypeScript", "Tailwind CSS"],
    },
    {
      name: "Alfa Rizky",
      role: "Full-stack Developer",
      bio: "Spesialis dalam sistem dan database",
      avatar: "👨‍💼",
      skills: ["Node.js", "MongoDB", "React"],
    },
    {
      name: "Budi Santoso",
      role: "Backend Developer",
      bio: "Expert dalam API dan microservices",
      avatar: "👨‍💻",
      skills: ["Express.js", "PostgreSQL", "Docker"],
    },
    {
      name: "Citra Dewi",
      role: "UI/UX Designer",
      bio: "Desainer kreatif dengan pengalaman 3+ tahun",
      avatar: "👩‍🎨",
      skills: ["Figma", "Design System", "Prototyping"],
    },
    {
      name: "Doni Permata",
      role: "DevOps Engineer",
      bio: "Optimalisasi deployment dan CI/CD",
      avatar: "👨‍💼",
      skills: ["AWS", "Jenkins", "Kubernetes"],
    },
    {
      name: "Eka Wijaya",
      role: "QA Engineer",
      bio: "Memastikan kualitas dan testing menyeluruh",
      avatar: "👨‍🔬",
      skills: ["Jest", "Automation Testing", "Manual QA"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-4 text-5xl font-bold text-gray-900">Tim Kami</h1>
          <p className="text-xl text-gray-600">
            Kumpulan profesional berdedikasi siap membawa proyek Anda ke level berikutnya
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-shadow"
              >
                {/* Avatar */}
                <div className="flex justify-center bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-12">
                  <div className="text-7xl">{member.avatar}</div>
                </div>

                {/* Content */}
                <div className="px-6 py-6">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="mt-1 text-indigo-600 font-semibold">{member.role}</p>
                  <p className="mt-3 text-gray-600">{member.bio}</p>

                  {/* Skills */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {member.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="mt-6 flex gap-4">
                    <a
                      href="#"
                      className="text-gray-400 hover:text-indigo-600 transition"
                      title="GitHub"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-blue-600 transition"
                      title="LinkedIn"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-4xl font-bold text-gray-900">
            Nilai-nilai Tim
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { title: "Integritas", desc: "Kejujuran dan transparansi dalam setiap langkah" },
              { title: "Inovasi", desc: "Selalu mencari cara baru untuk menyelesaikan masalah" },
              { title: "Kolaborasi", desc: "Bekerja bersama untuk mencapai tujuan bersama" },
            ].map((value, i) => (
              <div key={i} className="text-center">
                <h3 className="mb-3 text-2xl font-bold text-indigo-600">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
