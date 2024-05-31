@include('admin.header')
@include('admin.sidebar')

<div class="container-fluid px-4">
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
        @session('success')
            <div class="info-box bg-success">
                <div class="info-box-content">
                    <span class="info-box-text">{{ session('success') }}</span>
                </div>
            </div>
        @endsession

        <!-- Content Header (Page header) -->
        <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1>Daftar Data Pasien</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item active">Pasien</li>
                        </ol>
                    </div>
                </div>
            </div><!-- /.container-fluid -->
        </section>

        <!-- Main content -->
        <section class="content">

            <!-- Default box -->
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Daftar Pasien</h3>

                    <div class="card-tools">
                        <button type="button" class="btn btn-tool" data-card-widget="collapse" title="Collapse">
                            <i class="fas fa-minus"></i>
                        </button>
                        <button type="button" class="btn btn-tool" data-card-widget="remove" title="Remove">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                </div>
                <div class="card-body">
                    <h1 class="my-4">Daftar Pasien</h1>
                        <a href="{{ route('pasien.create') }}" class="btn btn-primary">
                            <i class="fas fa-plus"></i>Tambah</a>
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Kode</th>
                                <th>Nama</th>
                                <th>Tempat Lahir</th>
                                <th>Tanggal Lahir</th>
                                <th>Gender</th>
                                <th>Email</th>
                                <th>Alamat</th>
                                <th>Kelurahan</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            @forelse($list_pasien as $pasien)
                                <tr>
                                    <td>{{ $loop->iteration }}</td>
                                    <td>{{ $pasien->kode }}</td>
                                    <td>{{ $pasien->nama }}</td>
                                    <td>{{ $pasien->tmp_lahir }}</td>
                                    <td>{{ $pasien->tgl_lahir }}</td>
                                    <td>{{ $pasien->gender }}</td>
                                    <td>{{ $pasien->email }}</td>
                                    <td>{{ $pasien->alamat }}</td>
                                    <td>{{ $pasien->kelurahan->nama }}</td>
                                    <td>
                                        <a href="{{ route('pasien.show', $pasien->id) }}" class="btn btn-primary">View</a>
                                        <a href="{{ route('pasien.edit', $pasien->id) }}" class="btn btn-warning">Edit</a>

                                        <form action="{{ route ('pasien.destroy', $pasien->id ) }}" method="post">
                                            @csrf
                                            @method('delete')
                                            <button type="submit" class="btn btn-danger">Delete</button>
                                        </form>
                                    </td>
                                </tr>
                            @empty
                            @endforelse
                        </tbody>
                    </table>
                </div>
                <!-- /.card-body -->
                <div class="card-footer">
                    Pasien
                </div>
                <!-- /.card-footer-->
            </div>
            <!-- /.card -->

        </section>
        <!-- /.content -->
    </div>
    <!-- /.content-wrapper -->
</div>

@include('admin.footer')
