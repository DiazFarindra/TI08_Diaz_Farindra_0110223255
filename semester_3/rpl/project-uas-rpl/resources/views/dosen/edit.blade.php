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
    @include('../dosen/sidebar')

    <form action="{{ route('dosen.update', $dosen->id) }}" method="post" enctype="multipart/form-data" class="w-full max-w-4xl mx-auto mt-10 p-8 bg-white shadow-lg rounded-lg">
        @csrf
        @method('PATCH')

        <h2 class="text-2xl font-bold text-center text-gray-800 mb-8">Tambah Penjadwalan</h2>
        <!-- Jam -->
        <div class="mb-6">
            <label for="nama" class="block text-sm font-medium text-gray-700">Nama</label>
            <input type="text" id="nama" name="nama" value="{{ old('nama', $dosen->nama) }}"
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
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
