<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    @vite('resources/css/app.css')
    <title>Informasi Laporan Mahasiswa</title>
    <link rel="stylesheet" href="https://rsms.me/inter/inter.css">
    <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
</head>
<body class="bg-gray-100 w-full">

    {{-- Header --}}
    @include('header')
    {{-- End Header --}}

    {{-- SideBar --}}
    @include('../laporan/sidebar')
    {{-- End SideBar --}}

    <!-- Main Content -->
    <div class="container-fluid px-4 w-full h-auto">
        <div class="content-wrapper">

            @if(session('success'))
                <div class="info-box bg-green-100 text-green-800 border border-green-300 rounded-lg p-4 mb-4">
                    <span class="info-box-text">{{ session('success') }}</span>
                </div>
            @endif

            <!-- Section Header -->
            <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-4">
                        <div class="col-sm-6">
                            <h1 class="text-2xl font-semibold">Detail Laporan Mahasiswa</h1>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Laporan Details -->
            <section class="content">
                <div class="bg-white rounded-lg shadow-lg p-6">
                    <div class="flex justify-between items-center border-b pb-4 mb-4">
                        <h2 class="text-xl font-bold">{{ $laporan->mahasiswa->nama ?? 'Mahasiswa Tidak Ditemukan' }}</h2>
                        <div>
                            <button type="button" class="text-gray-500 hover:text-gray-700">
                                <i class="fas fa-minus"></i>
                            </button>
                            <button type="button" class="text-gray-500 hover:text-gray-700">
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                    </div>

                    <!-- Card Body -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <!-- Informasi Mahasiswa -->
                        <div>
                            <h5 class="text-lg font-semibold mb-2">Informasi Mahasiswa</h5>
                            <ul class="space-y-2">
                                <li><b>Nama:</b> {{ $laporan->mahasiswa->nama ?? '-' }}</li>
                                <li><b>NIM:</b> {{ $laporan->nim ?? '-' }}</li>
                                <li><b>Judul Laporan:</b> {{ $laporan->judul ?? '-' }}</li>
                                <li><b>Status:</b> {{ $laporan->status ?? '-' }}</li>
                                <li><b>Tanggal Pengumpulan:</b> {{ $laporan->tanggal ?? '-' }}</li>
                            </ul>
                        </div>

                        <!-- Dokumen -->
                        <div>
                            <h5 class="text-lg font-semibold mb-2">Dokumen</h5>
                            <div class="bg-gray-100 p-4 rounded-lg flex items-center justify-between">
                                <span>{{ $laporan->dokumen ?? 'Dokumen tidak tersedia' }}</span>
                                <a href="{{ $laporan->file_url ?? '#' }}" class="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600">
                                    Unduh Dokumen
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- Catatan Pembimbing -->
                    <div class="mt-6">
                        <h5 class="text-lg font-semibold mb-2">Catatan Pembimbing</h5>
                        <div class="bg-gray-100 p-4 rounded-lg">
                            <p class="font-medium">Dosen Pembimbing</p>
                            <p>{{ $laporan->catatan ?? 'Belum ada catatan' }}</p>
                            <p class="text-gray-500 text-sm mt-2">{{ $laporan->catatan_tanggal ?? '' }}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</body>
</html>
