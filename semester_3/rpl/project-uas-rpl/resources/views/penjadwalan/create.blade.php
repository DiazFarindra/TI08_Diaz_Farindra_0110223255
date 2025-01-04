<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    @vite('resources/css/app.css')
    <title>Admin Profile</title>
    <link rel="stylesheet" href="https://rsms.me/inter/inter.css">
    <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
</head>

<body class="bg-gray-100">

    @if ($errors->any())
    <div class="alert alert-danger mb-6 mx-auto max-w-4xl p-4 bg-red-500 text-white rounded-lg">
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
    @endif

    @include('header')
    @include('../penjadwalan/sidebar')

    <form action="{{ route('penjadwalan.store') }}" method="post" enctype="multipart/form-data" class="w-full max-w-4xl mx-auto mt-10 p-8 bg-white shadow-lg rounded-lg">

        @csrf
        <h2 class="text-2xl font-bold text-center text-gray-800 mb-8">Tambah Penjadwalan</h2>

        <!-- Mahasiswa Dropdown -->
        <div class="mb-4">
            <label for="mahasiswa" class="block text-gray-700">Mahasiswa</label>
            <select name="mahasiswa_id" id="mahasiswa" class="w-full p-2 border border-gray-300 rounded-md">
                <option value="">Pilih Mahasiswa</option>
                @foreach ($mahasiswa as $mhs)
                    <option value="{{ $mhs->id }}">{{ $mhs->nama }}</option>
                @endforeach
            </select>

        </div>

        <div class="mb-4">
            <label for="dosen" class="block text-gray-700">Dosen</label>
            <select name="dosen_id" id="dosen" class="w-full p-2 border border-gray-300 rounded-md">
                <option value="">Pilih Dosen</option>
                @foreach ($dosen as $dsn)
                    <option value="{{ $dsn->id }}">{{ $dsn->nama }}</option>
                @endforeach
            </select>

        </div>

        <!-- Tanggal -->
        <div class="mb-6">
            <label for="tanggal" class="block text-sm font-medium text-gray-700">Tanggal</label>
            <input type="date" id="tanggal" name="tanggal" value="{{ old('tanggal') }}"
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        </div>

        <!-- Jam -->
        <div class="mb-6">
            <label for="jam" class="block text-sm font-medium text-gray-700">Jam</label>
            <input type="text" id="jam" name="jam" value="{{ old('jam') }}"
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        </div>

        <!-- Topik -->
        <div class="mb-6">
            <label for="topik" class="block text-sm font-medium text-gray-700">Topik</label>
            <input type="text" id="topik" name="topik" value="{{ old('topik') }}"
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        </div>

        <!-- Status -->
        <div class="mb-6">
            <label for="status" class="block text-sm font-medium text-gray-700">Status</label>
            <select id="status" name="status"
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                <option value="terlaksana" {{ old('status') == 'terlaksana' ? 'selected' : '' }}>Terlaksana</option>
                <option value="tidak_terlaksana" {{ old('status') == 'tidak_terlaksana' ? 'selected' : '' }}>Tidak Terlaksana</option>
            </select>
        </div>

        <!-- Submit Button -->
        <div class="mt-8">
            <button type="submit"
                class="w-full py-3 px-4 bg-blue-600 text-white font-bold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                Simpan Penjadwalan
            </button>
        </div>
    </form>

</body>

</html>
