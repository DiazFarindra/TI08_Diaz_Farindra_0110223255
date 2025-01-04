<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    @vite('resources/css/app.css')
    <title>Informasi Mahasiswa dan Dosen</title>
    <link rel="stylesheet" href="https://rsms.me/inter/inter.css">
    <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
</head>
<body>

    {{-- Header --}}
    @include('header')
    {{-- End Header --}}

    {{-- SideBar --}}
    @include('../laporan/sidebar')
    {{-- End SideBar --}}

    <!-- Default Box -->
    <div class="card bg-white shadow-md w-full">
        <!-- Header -->
        <div class="card-header bg-blue-500 text-white p-4 flex justify-between items-center">
            <h3 class="card-title text-lg font-semibold">Laporan Mahasiswa</h3>
            <div class="card-tools flex space-x-2">
                <button type="button" class="btn btn-tool text-white" data-card-widget="collapse" title="Collapse">
                    <i class="fas fa-minus"></i>
                </button>
                <button type="button" class="btn btn-tool text-white" data-card-widget="remove" title="Remove">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        </div>

        @if (session('success'))
        <div class="bg-green-500 text-white p-4">
            {{ session('success') }}
        </div>
        @endif

        <!-- Body -->
        <div class="card-body p-6">
            <a href="{{ route('laporan.create') }}" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2  rounded-lg inline-flex items-center">
                <i class="fas fa-plus mr-2"></i>Tambah Data
            </a>

            <!-- Tabel Mahasiswa -->
            <div class="mt-8">
                <h2 class="text-2xl font-semibold text-gray-700 mb-4">Laporan Mahasiswa</h2>
                <div class="overflow-x-auto">
                    <table class="w-full border-collapse border border-gray-200 shadow-sm rounded-md">
                        <thead class="bg-gray-100">
                            <tr>
                                <th class="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-600">No</th>
                                <th class="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-600">Mahasiswa</th>
                                <th class="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-600">Judul</th>
                                <th class="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-600">Status</th>
                                <th class="border border-gray-300 px-4 py-2 text-center font-semibold text-gray-600">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach ($laporan as $data)
                            <tr class="hover:bg-gray-50">
                                <td class="border border-gray-300 px-4 py-2">{{ $loop->iteration }}</td>
                                <td class="border border-gray-300 px-4 py-2">{{ $data->mahasiswa->nama ?? '-' }}</td>
                                <td class="border border-gray-300 px-4 py-2">{{ $data->judul }}</td>
                                <td class="border border-gray-300 px-4 py-2">{{ $data->status }}</td>
                                <td class="border border-gray-300 px-4 py-2 flex justify-center space-x-2">
                                    <a href="{{ route('laporan.edit', $data->id) }}" class="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded-md flex items-center">
                                        <i class="bi bi-pencil-square"></i>
                                    </a>
                                    <a href="{{ route('laporan.show', $data->id) }}" class="bg-sky-400 hover:bg-sky-300 text-white px-3 py-1 rounded-md flex items-center">
                                        <i class="bi bi-eye"></i>
                                    </a>
                                    <form action="{{ route('laporan.destroy', $data->id) }}" method="POST" onsubmit="return confirm('Apakah Anda yakin ingin menghapus data ini?');">
                                        @csrf
                                        @method('DELETE')
                                        <button type="submit" class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md flex items-center">
                                            <i class="bi bi-trash3-fill"></i>
                                        </button>
                                    </form>
                                </td>
                            </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
            </div>

        <!-- Footer -->
        <div class="card-footer bg-gray-100 text-gray-600 text-center p-3 rounded-b-md">
            Laporan Mahasiswa
        </div>
    </div>
    <!-- /.card -->

</body>
</html>
