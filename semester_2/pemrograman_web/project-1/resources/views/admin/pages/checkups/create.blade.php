@extends('admin.layouts.main')

@section('content')
<div class="row">
    <div class="col-md-12 grid-margin stretch-card">
        <div class="card">
            <div class="card-body">
                <h6 class="card-title">Inputs</h6>
                <form action="{{ route('admin.checkups.store') }}" method="post">
                    @csrf

                    <div class="mb-3">
                        <label for="patient_id" class="form-label">Pasien</label>
                        <select class="form-select" id="patient_id" name="patient_id">
                            <option selected disabled>pilih pasien!</option>
                            @forelse ($patients as $patient)
                            <option value="{{ $patient->id }}">{{ $patient->name }}</option>
                            @empty
                            <option disabled>no data!</option>
                            @endforelse
                        </select>
                    </div>

                    <div class="mb-3">
                        <label for="paramedic_id" class="form-label">Dokter</label>
                        <select class="form-select" id="paramedic_id" name="paramedic_id">
                            <option selected disabled>pilih dokter!</option>
                            @forelse ($paramedics as $paramedic)
                            <option value="{{ $paramedic->id }}">{{ $paramedic->name }}</option>
                            @empty
                            <option disabled>no data!</option>
                            @endforelse
                        </select>
                    </div>

                    <div class="mb-3">
                        <label for="date" class="form-label">Tanggal</label>
                        <input type="date" class="form-control" id="date" name="date">
                    </div>

                    <div class="mb-3">
                        <label for="weight" class="form-label">Berat Badan</label>
                        <input type="number" class="form-control" id="weight" name="weight">
                    </div>

                    <div class="mb-3">
                        <label for="height" class="form-label">Tinggi Badan</label>
                        <input type="number" class="form-control" id="height" name="height">
                    </div>

                    <div class="mb-3">
                        <label for="tension" class="form-label">Tensi</label>
                        <input type="text" class="form-control" id="tension" name="tension">
                    </div>

                    <div class="mb-3">
                        <label for="about" class="form-label">Keterangan</label>
                        <input type="text" class="form-control" id="about" name="about">
                    </div>

                    <button class="btn btn-primary" type="submit">create</button>
                </form>
            </div>
        </div>
    </div>
</div>
@endsection
