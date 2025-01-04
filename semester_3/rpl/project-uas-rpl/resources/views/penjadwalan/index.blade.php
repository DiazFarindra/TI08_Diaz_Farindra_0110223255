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
        @include('../penjadwalan/sidebar')
        {{-- End SideBar --}}

        <!-- Container Utama -->
        <div class="flex flex-col w-full gap-6 p-6">

            <!-- Kalender dan List Bimbingan -->
            <div class="flex flex-col md:flex-row gap-6">

                <!-- Kalender -->
                <div class="bg-white rounded-lg shadow-md p-4 w-full md:w-1/3">
                    <div class="text-center mb-4">
                        <h2 class="font-bold text-lg">September 2024</h2>
                    </div>
                    <div class="grid grid-cols-7 gap-2 text-center">
                        <!-- Hari -->
                        <div class="font-semibold">Su</div>
                        <div class="font-semibold">Mo</div>
                        <div class="font-semibold">Tu</div>
                        <div class="font-semibold">We</div>
                        <div class="font-semibold">Th</div>
                        <div class="font-semibold">Fr</div>
                        <div class="font-semibold">Sa</div>

                        <!-- Tanggal Kosong -->
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div class="text-gray-400">31</div>
                        <!-- Tanggal -->
                        <div class="bg-red-500 text-white rounded-md p-2">1</div>
                        <div class="text-gray-700 p-2">2</div>
                        <div class="bg-green-500 text-white rounded-md p-2">3</div>
                        <div class="bg-green-500 text-white rounded-md p-2">4</div>
                        <div class="text-gray-700 p-2">5</div>
                        <div class="text-gray-700 p-2">6</div>
                        <div class="text-gray-700 p-2">7</div>
                        <div class="bg-green-500 text-white rounded-md p-2">8</div>
                        <div class="text-gray-700 p-2">9</div>
                        <div class="text-gray-700 p-2">10</div>
                        <div class="bg-green-500 text-white rounded-md p-2">11</div>
                        <div class="text-gray-700 p-2">12</div>
                        <div class="text-gray-700 p-2">13</div>
                        <div class="text-gray-700 p-2">14</div>
                        <div class="text-gray-700 p-2">15</div>
                        <div class="text-gray-700 p-2">16</div>
                        <div class="text-gray-700 p-2">17</div>
                        <div class="text-gray-700 p-2">18</div>
                        <div class="text-gray-700 p-2">19</div>
                        <div class="text-gray-700 p-2">20</div>
                        <div class="text-gray-700 p-2">21</div>
                        <div class="text-gray-700 p-2">22</div>
                        <div class="text-gray-700 p-2">23</div>
                        <div class="text-gray-700 p-2">24</div>
                        <div class="text-gray-700 p-2">25</div>
                        <div class="text-gray-700 p-2">26</div>
                        <div class="bg-green-500 text-white rounded-md p-2">27</div>
                    </div>
                </div>

                <!-- List Bimbingan -->
                <div class="">
                    <div class="flex flex-col gap-2">
                        <div class="border rounded-md px-2 py-1 text-red-500 font-semibold whitespace-nowrap">
                            1. Bimbingan Calista Azaata Sudah terlaksana
                        </div>
                        <div class="border rounded-md px-2 py-1 text-green-500 font-semibold whitespace-nowrap">
                            4. Bimbingan Kaapten Rayjendral belum terlaksana
                        </div>
                        <div class="border rounded-md px-2 py-1 text-green-500 font-semibold whitespace-nowrap">
                            5. Bimbingan Muhammad Riski belum terlaksana
                        </div>
                        <div class="border rounded-md px-2 py-1 text-green-500 font-semibold whitespace-nowrap">
                            8. Bimbingan Abdul Rahman belum terlaksana
                        </div>
                        <div class="border rounded-md px-2 py-1 text-green-500 font-semibold whitespace-nowrap">
                            11. Bimbingan Khamil belum terlaksana
                        </div>
                        <div class="border rounded-md px-2 py-1 text-green-500 font-semibold whitespace-nowrap">
                            27. Bimbingan Andi Abdul belum terlaksana
                        </div>
                    </div>
                </div>
            </div>

            <!-- Tombol Jadwal Baru -->
            <div class="w-full mt-2">
                <a href="{{ route('penjadwalan.create') }}"
                    class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg inline-flex items-center">
                    <i class="fas fa-plus mr-2"></i>Tambah Jadwal
                </a>
            </div>

            <!-- Tabel Jadwal (Ditempatkan di bawah Kalender dan List Bimbingan) -->
            <div class="overflow-x-auto mt-6">
                <table class=" w-full border-collapse border border-gray-200 shadow-sm rounded-md">
                    <thead class="bg-gray-100">
                        <tr>
                            <th class="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-600">No</th>
                            <th class="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-600">Mahasiswa
                            </th>
                            <th class="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-600">Dosen
                            </th>
                            <th class="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-600">Tanggal
                            </th>
                            <th class="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-600">Jam</th>
                            <th class="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-600">Topik
                            </th>
                            <th class="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-600">Status
                            </th>
                            <th class="border border-gray-300 px-4 py-2 text-center font-semibold text-gray-600">Aksi
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($penjadwalan as $jadwal)
                            <tr class="hover:bg-gray-50">
                                <td class="border border-gray-300 px-4 py-2">{{ $loop->iteration }}</td>
                                <td class="border border-gray-300 px-4 py-2">
                                    {{ $jadwal->mahasiswa->nama ?? 'Tidak Diketahui' }}</td>
                                <td class="border border-gray-300 px-4 py-2">
                                    {{ $jadwal->dosen->nama ?? 'Tidak Diketahui' }}</td>
                                <td class="border border-gray-300 px-4 py-2">{{ $jadwal->tanggal }}</td>
                                <td class="border border-gray-300 px-4 py-2">{{ $jadwal->jam }}</td>
                                <td class="border border-gray-300 px-4 py-2">{{ $jadwal->topik }}</td>
                                <td class="border border-gray-300 px-4 py-2">{{ $jadwal->status }}</td>
                                <td class="border border-gray-300 px-4 py-2 flex justify-center space-x-2">
                                    <!-- Edit Button -->
                                    <a href="{{ route('penjadwalan.edit', $jadwal->id) }}"
                                        class="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded-md flex items-center">
                                        <i class="bi bi-pencil-square"></i>
                                    </a>
                                    <!-- Delete Form -->
                                    <form action="{{ route('penjadwalan.destroy', $jadwal->id) }}" method="POST"
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
    </body>

    </html>
