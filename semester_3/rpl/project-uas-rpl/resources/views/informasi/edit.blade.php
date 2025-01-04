<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    @vite('resources/css/app.css')
    <title>Tambah Pemberitahuan</title>
    <link rel="stylesheet" href="https://rsms.me/inter/inter.css">
    <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
</head>
<body>

    {{-- Header --}}
    @include('header')
    {{-- End Header --}}

    {{-- Sidebar --}}
    @include('../informasi/sidebar')
    {{-- End Sidebar --}}

    {{-- Menampilkan error validasi --}}
    @if ($errors->any())
    <div class="bg-red-500 text-white p-2 rounded mb-4">
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
    @endif

    {{-- Menampilkan pesan sukses jika ada --}}
    @if(session('success'))
    <div class="bg-green-500 text-white">
        {{ session('success') }}
    </div>
    @endif

    <div class="w-full bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-bold mb-6 text-center">Update Pemberitahuan</h2>

        {{-- Form tambah pemberitahuan --}}
        <form action="{{ route('informasi.update', $informasi->id) }}" method="post" class="space-y-4">
            @csrf
            @method('PATCH')
            <!-- Input Nama -->
            <div>
                <label for="nama" class="block text-sm font-semibold mb-2">Nama</label>
                <input type="text" id="nama" name="nama" value="{{ old('nama', $informasi->nama) }}" required
                    class="w-full p-2 border rounded-md focus:ring focus:ring-blue-200">
            </div>

            <!-- Input Pesan -->
            <div>
                <label for="pesan" class="block text-sm font-semibold mb-2">Pesan</label>
                <textarea id="pesan" name="pesan" rows="3" value="{{ old('pesan', $informasi->pesan) }}" required
                    class="w-full p-2 border rounded-md focus:ring focus:ring-blue-200"></textarea>
            </div>

            <!-- Input Status -->
            <div>
                <label for="status" class="block text-sm font-semibold mb-2">Status</label>
                <select id="status" name="status" value="{{ old('status', $informasi->status) }}"  required class="w-full p-2 border rounded-md">
                    <option value="Dibaca">✔ Dibaca</option>
                    <option value="Belum dibaca">💬 Belum dibaca</option>
                </select>
            </div>

           <!-- Input Jenis (Dosen/Mahasiswa) -->
            <div>
                <label for="dosen_id" class="block text-sm font-semibold mb-2">Jenis</label>
                <select id="dosen_id" name="dosen_id" value="{{ old('jenis', $informasi->jenis) }}" required class="w-full p-2 border rounded-md">
                    <option value="1">Dosen</option>
                    <option value="0">Mahasiswa</option>
                </select>
            </div>


            <!-- Tombol Submit -->
            <div class="flex justify-between">
                <a href="{{ route('informasi.index') }}" class="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
                    Kembali
                </a>
                <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Simpan
                </button>
            </div>
        </form>
    </div>

</body>
</html>
