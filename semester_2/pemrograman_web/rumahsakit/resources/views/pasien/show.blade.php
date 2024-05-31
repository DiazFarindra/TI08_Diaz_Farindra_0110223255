@include('admin.header')
@include('admin.sidebar')

<div class="container-fluid px-4">
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
        <section class="content">
            <div class="container-fluid">
                <!-- Small boxes (Stat box) -->
                <div class="row">
                    <!-- Bootstrap CSS -->
                    <div class="container mt-5">

                        <h2 class="text-center">Form Pasien</h2>
                        <form>
                            <div class="form-group row">
                                <label for="kelurahan_id" class="col-4 col-form-label">Pilih Kelurahan</label>
                                <div class="col-8">
                                    <select disabled id="kelurahan_id" name="kelurahan_id" class="custom-select">
                                        <option disabled selected>{{ $pasien->kelurahan->nama }}</option>
                                    </select>
                                    @error('kelurahan_id')
                                        <small class="text-danger">{{ $message }}</small>
                                    @enderror
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="kode" class="col-4 col-form-label">Kode</label>
                                <div class="col-8">
                                    <input disabled id="kode" name="kode" type="text" class="form-control" value="{{ $pasien->kode }}">
                                    @error('kode')
                                        <small class="text-danger">{{ $message }}</small>
                                    @enderror
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="nama" class="col-4 col-form-label">Nama</label>
                                <div class="col-8">
                                    <input disabled id="nama" name="nama" type="text" class="form-control" value="{{ $pasien->nama }}">
                                    @error('nama')
                                        <small class="text-danger">{{ $message }}</small>
                                    @enderror
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="tmp_lahir" class="col-4 col-form-label">Tempat Lahir</label>
                                <div class="col-8">
                                    <input disabled id="tmp_lahir" name="tmp_lahir" type="text" class="form-control" value="{{ $pasien->tmp_lahir }}">
                                    @error('tmp_lahir')
                                        <small class="text-danger">{{ $message }}</small>
                                    @enderror
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="tgl_lahir" class="col-4 col-form-label">Tanggal Lahir</label>
                                <div class="col-8">
                                    <input disabled id="tgl_lahir" name="tgl_lahir" type="date" class="form-control" value="{{ $pasien->tgl_lahir }}">
                                    @error('tgl_lahir')
                                        <small class="text-danger">{{ $message }}</small>
                                    @enderror
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="gender" class="col-4 col-form-label">Jenis Kelamin</label>
                                <div class="col-8">
                                    <select disabled id="gender" name="gender" class="custom-select">
                                        <option disabled {{ $pasien->gender === 'L' ? 'selected' : '' }} value="L">Laki-Laki</option>
                                        <option disabled {{ $pasien->gender === 'P' ? 'selected' : '' }} value="P">Perempuan</option>
                                    </select>
                                    @error('gender')
                                        <small class="text-danger">{{ $message }}</small>
                                    @enderror
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="email" class="col-4 col-form-label">Email</label>
                                <div class="col-8">
                                    <input disabled id="email" name="email" type="email" class="form-control" value="{{ $pasien->email }}">
                                    @error('email')
                                        <small class="text-danger">{{ $message }}</small>
                                    @enderror
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="alamat" class="col-4 col-form-label">Alamat</label>
                                <div class="col-8">
                                    <input disabled id="alamat" name="alamat" type="text" class="form-control" value="{{ $pasien->alamat }}">
                                    @error('alamat')
                                        <small class="text-danger">{{ $message }}</small>
                                    @enderror
                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="offset-4 col-8">
                                    <a href="{{ route('pasien.index') }}" class="btn btn-primary">kembali</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <!-- /.row (main row) -->
            </div><!-- /.container-fluid -->
        </section>
        <!-- /.content -->
    </div>
</div>

@include('admin.footer')
