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
    @include('../laporan/sidebar')
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

    <div class="w-full bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-bold mb-6 text-center">Tambah Pemberitahuan</h2>

        {{-- Menampilkan pesan sukses jika ada --}}
        @if(session('success'))
            <div class="bg-green-500 text-white">
                {{ session('success') }}
            </div>
        @endif

        {{-- Form tambah pemberitahuan --}}
        <form action="{{ route('laporan.update', $laporan->id) }}" method="post" class="space-y-4">
            @csrf
            @method('PATCH')

            <!-- Input Nama -->
            <div>
                <label for="mahasiswa_id" class="block text-sm font-semibold mb-2">Mahasiswa</label>
                <select name="mahasiswa_id" id="mahasiswa_id" class="w-full p-2 border border-gray-300 rounded-md">
                    <option value="">Pilih Mahasiswa</option>
                    @foreach ($mahasiswa as $mhs)
                        <option value="{{ $mhs->id }}" {{ old('mahasiswa_id', $laporan->mahasiswa_id) == $mhs->id ? 'selected' : '' }} >{{ $mhs->nama }}</option>
                    @endforeach
                </select>
            </div>

            <!-- NIM -->
            <div class="mb-4">
                <label for="nim" class="block text-sm font-medium text-gray-700">NIM</label>
                <input type="text" id="nim" name="nim" value="{{ old('nim') ?? $laporan->nim }}"
                    class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required>
            </div>

            <!-- Tanggal -->
            <div class="mb-6">
                <label for="tanggal" class="block text-sm font-medium text-gray-700">Tanggal</label>
                <input type="date" id="tanggal" name="tanggal" value="{{ old('tanggal', $laporan->tanggal) }}"
                    class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            </div>

            <!-- Input Pesan -->
            <div>
                <label for="judul" class="block text-sm font-semibold mb-2">Judul</label>
                <textarea  id="judul" name="judul" rows="3" required
                    class="w-full p-2 border rounded-md focus:ring focus:ring-blue-200">{{ old('judul') ?? $laporan->judul }}</textarea>
            </div>

            <!-- Input Status -->
            <div class="mb-6">
                <label for="status" class="block text-sm font-medium text-gray-700">Status</label>
                <select id="status" name="status"
                    class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <option value="disetujui" {{ old('status', $laporan->status) == 'disetujui' ? 'selected' : '' }}>Disetujui</option>
                    <option value="perlu_revisi" {{ old('status', $laporan->status) == 'perlu_revisi' ? 'selected' : '' }}>Perlu Direvisi</option>
                </select>
            </div>

            <!-- Tombol Submit -->
            <div class="flex justify-between">
                <a href="{{ route('laporan.index') }}" class="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
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
