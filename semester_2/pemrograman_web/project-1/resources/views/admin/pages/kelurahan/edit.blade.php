@extends('admin.layouts.main')

@section('content')
<div class="row">
    <div class="col-md-12 grid-margin stretch-card">
        <div class="card">
            <div class="card-body">
                <h6 class="card-title">Inputs</h6>
                <form action="{{ route('admin.kelurahan.update', $kelurahan->id) }}" method="post">
                    @csrf
                    @method('patch')

                    <div class="mb-3">
                        <label for="kecamatan_id" class="form-label">Kecamatan</label>
                        <select class="form-select" id="kecamatan_id" name="kecamatan_id">
                            @forelse ($kecamatan as $kec)
                            <option @selected($kec->id === $kelurahan->kecamatan_id) value="{{ $kec->id }}">{{ $kec->name }}</option>
                            @empty
                            <option disabled>no data!</option>
                            @endforelse
                        </select>
                    </div>

                    <div class="mb-3">
                        <label for="name" class="form-label">Nama Kelurahan</label>
                        <input type="text" class="form-control" id="name" name="name" value="{{ $kelurahan->name }}">
                    </div>

                    <button class="btn btn-primary" type="submit">create</button>
                </form>
            </div>
        </div>
    </div>
</div>
@endsection
