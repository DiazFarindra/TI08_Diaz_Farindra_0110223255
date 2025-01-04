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
<body>

    @if ($errors->any())
    <div class="alert alert-danger">
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif

    @include('header')

    <form action="{{ route('akun.store') }}" method="post" enctype="multipart/form-data">
        @csrf
        <div class="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg mt-8">
            <h2 class="text-2xl font-bold mb-6 text-center">Tambah Akun</h2>

            <!-- Nama -->
            <div class="mb-4">
                <label for="nama" class="block text-sm font-medium text-gray-700">Nama</label>
                <input type="text" id="nama" name="nama" value="{{ old('nama') }}"
                    class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required>
            </div>

            <!-- NIM -->
            <div class="mb-4">
                <label for="nim" class="block text-sm font-medium text-gray-700">NIM</label>
                <input type="text" id="nim" name="nim" value="{{ old('nim') }}"
                    class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required>
            </div>

            <!-- Email -->
            <div class="mb-4">
                <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" name="email" value="{{ old('email') }}"
                    class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required>
            </div>

            <!-- No Telpon -->
            <div class="mb-4">
                <label for="telpon" class="block text-sm font-medium text-gray-700">No Telpon</label>
                <input type="text" id="telpone" name="telpone" value="{{ old('telpone') }}"
                    class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required>
            </div>

            <!-- Peran (Dropdown) -->
            <div class="mb-4">
                <label for="peran" class="block text-sm font-medium text-gray-700">Peran</label>
                <select id="peran" name="peran"
                    class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required>
                    <option value="mahasiswa" {{ old('peran') == 'mahasiswa' ? 'selected' : '' }}>Mahasiswa</option>
                    <option value="dosen" {{ old('peran') == 'dosen' ? 'selected' : '' }}>Dosen</option>
                </select>
            </div>

            <!-- Status (Dropdown) -->
            <div class="mb-4">
                <label for="status" class="block text-sm font-medium text-gray-700">Status</label>
                <select id="status" name="status"
                    class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required>
                    <option value="aktif" {{ old('status') == 'aktif' ? 'selected' : '' }}>Aktif</option>
                    <option value="tidak_aktif" {{ old('status') == 'tidak_aktif' ? 'selected' : '' }}>Tidak Aktif</option>
                </select>
            </div>

            <!-- Submit Button -->
            <div class="mt-6">
                <button type="submit" class="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    Simpan Akun
                </button>
            </div>
        </div>
    </form>
</body>
</html>
