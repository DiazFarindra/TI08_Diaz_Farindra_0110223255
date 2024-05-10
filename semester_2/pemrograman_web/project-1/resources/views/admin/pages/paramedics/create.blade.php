@extends('admin.layouts.main')

@section('content')
<div class="row">
    <div class="col-md-12 grid-margin stretch-card">
        <div class="card">
            <div class="card-body">
                <h6 class="card-title">Inputs</h6>
                <form action="{{ route('admin.paramedics.store') }}" method="post">
                    @csrf

                    <div class="mb-3">
                        <label for="work_unit_id" class="form-label">Unit Kerja</label>
                        <select class="form-select" id="work_unit_id" name="work_unit_id">
                            <option selected disabled>pilih unit kerja!</option>
                            @forelse ($workUnits as $unit)
                            <option value="{{ $unit->id }}">{{ $unit->name }}</option>
                            @empty
                            <option disabled>no data!</option>
                            @endforelse
                        </select>
                    </div>

                    <div class="mb-3">
                        <label for="category" class="form-label">Kategori</label>
                        <select class="form-select" id="category" name="category">
                            <option selected disabled>pilih Kategori!</option>
                            @forelse ($categories as $category)
                            <option value="{{ $category->name }}">{{ $category->name }}</option>
                            @empty
                            <option disabled>no data!</option>
                            @endforelse
                        </select>
                    </div>

                    <div class="mb-3">
                        <label for="name" class="form-label">Nama</label>
                        <input type="text" class="form-control" id="name" name="name">
                    </div>

                    <div class="mb-3">
                        <label for="phone" class="form-label">No. Telp</label>
                        <input type="text" class="form-control" id="phone" name="phone">
                    </div>

                    <div class="mb-3">
                        <label for="birth_place" class="form-label">Tempat Lahir</label>
                        <input type="text" class="form-control" id="birth_place" name="birth_place">
                    </div>

                    <div class="mb-3">
                        <label for="birth_date" class="form-label">Tanggal Lahir</label>
                        <input type="date" class="form-control" id="birth_date" name="birth_date">
                    </div>

                    <div class="mb-3">
                        <label for="gender" class="form-label">Gender</label>
                        <select class="form-select" id="gender" name="gender">
                            <option selected disabled>pilih gender!</option>
                            <option value="L">Laki-Laki</option>
                            <option value="P">perempuan</option>
                        </select>
                    </div>

                    <div class="mb-3">
                        <label for="address" class="form-label">Alamat</label>
                        <input type="text" class="form-control" id="address" name="address">
                    </div>

                    <button class="btn btn-primary" type="submit">create</button>
                </form>
            </div>
        </div>
    </div>
</div>
@endsection
