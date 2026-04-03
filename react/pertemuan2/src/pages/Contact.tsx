import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulasi pengiriman form
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-4 text-5xl font-bold text-gray-900">
            Hubungi Kami
          </h1>
          <p className="text-xl text-gray-600">
            Punya pertanyaan atau ingin berkolaborasi? Kami siap mendengarkan!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 md:grid-cols-3">
            {/* Contact Info */}
            <div className="md:col-span-1 space-y-8">
              {[
                {
                  icon: "📍",
                  title: "Lokasi",
                  content: "Jakarta, Indonesia",
                },
                {
                  icon: "📧",
                  title: "Email",
                  content: "hello@ti08dev.com",
                },
                {
                  icon: "📞",
                  title: "Telepon",
                  content: "+62 821 1234 5678",
                },
                {
                  icon: "⏰",
                  title: "Jam Kerja",
                  content: "Senin - Jumat, 09:00 - 18:00",
                },
              ].map((info, i) => (
                <div key={i}>
                  <div className="mb-2 text-4xl">{info.icon}</div>
                  <h3 className="mb-1 font-bold text-gray-900">{info.title}</h3>
                  <p className="text-gray-600">{info.content}</p>
                </div>
              ))}

              {/* Social Links */}
              <div>
                <h3 className="mb-4 font-bold text-gray-900">Ikuti Kami</h3>
                <div className="flex gap-4">
                  {[
                    { icon: "f", label: "Facebook" },
                    { icon: "in", label: "Instagram" },
                    { icon: "tw", label: "Twitter" },
                  ].map((social, i) => (
                    <a
                      key={i}
                      href="#"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition"
                      title={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2 rounded-lg bg-white p-8 shadow-lg">
              {submitted && (
                <div className="mb-6 rounded-lg bg-green-100 p-4 text-green-800">
                  ✓ Pesan Anda telah dikirim! Kami akan membalas dalam 24 jam.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 outline-none transition"
                    placeholder="Masukkan nama Anda"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 outline-none transition"
                    placeholder="email@example.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Subjek
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 outline-none transition"
                    placeholder="Topik pertanyaan Anda"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 outline-none transition"
                    placeholder="Ceritakan apa yang ingin Anda sampaikan..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700 transition"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
            Lokasi Kami
          </h2>
          <div className="overflow-hidden rounded-lg h-96 bg-gray-200">
            <iframe
              title="Lokasi Kami"
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3518267234526!2d106.79739!3d-6.194541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3d3c3c3c3c3%3A0x3c3c3c3c3c3c3c3c!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1234567890"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
