<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    @vite('resources/css/app.css')
    <title>Informasi Mahasiswa dan Dosen</title>
    <link rel="stylesheet" href="https://rsms.me/inter/inter.css">
    <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
    <script src="https://cdn.tailwindcss.com"></script>
</head>

<body>
    {{-- Header --}}
    @include('header')
    {{-- End Header --}}

    {{-- SideBar --}}
    @include('../dosen/sidebar')
    {{-- End SideBar --}}

    <!-- Container Utama -->
    <div class="flex flex-col w-full gap-6 ">
        <!-- Default Box -->
        <div class="card bg-white shadow-md w-full">
            <!-- Header -->
            <div class="card-header bg-blue-500 text-white p-4 flex justify-between items-center">
                <h3 class="card-title text-lg font-semibold">Informasi Dosen</h3>
                <div class="card-tools flex space-x-2">
                    <button type="button" class="btn btn-tool text-white" data-card-widget="collapse" title="Collapse">
                        <i class="fas fa-minus"></i>
                    </button>
                    <button type="button" class="btn btn-tool text-white" data-card-widget="remove" title="Remove">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            </div>
            <!-- Tombol Jadwal Baru -->
            <div class="w-full mt-2">
                <a href="{{ route('dosen.create') }}"
                    class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 ml-4 mt-4 rounded-lg inline-flex items-center">
                    <i class="fas fa-plus mr-2"></i>Tambah Dosen
                </a>
            </div>

            <div class="card-body p-6">
                <!-- Tabel Jadwal (Ditempatkan di bawah Kalender dan List Bimbingan) -->
                <div class="overflow-x-auto mt-6">
                    <table class=" w-full border-collapse border border-gray-200 shadow-sm rounded-md ">
                        <thead class="bg-gray-100">
                            <tr>
                                <th class="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-600">No
                                </th>
                                <th class="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-600">Dosen
                                </th>
                                <th class="border border-gray-300 px-4 py-2 text-center font-semibold text-gray-600">
                                    Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach ($dosen as $dsn)
                                <tr class="hover:bg-gray-50">
                                    <td class="border border-gray-300 px-4 py-2">{{ $loop->iteration }}</td>
                                    <td class="border border-gray-300 px-4 py-2">{{ $dsn->nama ?? 'Tidak Diketahui' }}
                                    </td>
                                    <td class="border border-gray-300 px-4 py-2 flex justify-center space-x-2">
                                        <!-- Edit Button -->
                                        <a href="{{ route('dosen.edit', $dsn->id) }}"
                                            class="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded-md flex items-center">
                                            <i class="bi bi-pencil-square"></i>
                                        </a>
                                        <!-- Delete Form -->
                                        <form action="{{ route('dosen.destroy', $dsn->id) }}" method="POST"
                                            onsubmit="return confirm('Apakah Anda yakin ingin menghapus data ini?');">
                                            @csrf
                                            @method('DELETE')
                                            <button type="submit"
                                                class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md flex items-center">
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
        </div>





    </div>
</body>

</html>
