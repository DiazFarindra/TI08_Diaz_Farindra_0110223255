@extends('admin.layouts.main')

@section('content')
<div class="row">
    <div class="col-md-12 grid-margin stretch-card">
        <div class="card">
            <div class="card-body">
                <h6 class="card-title">Inputs</h6>
                <form action="{{ route('admin.checkups.update', $checkup->id) }}" method="post">
                    @csrf
                    @method('patch')

                    <div class="mb-3">
                        <label for="patient_id" class="form-label">Pasien</label>
                        <select class="form-select" id="patient_id" name="patient_id">
                            @forelse ($patients as $patient)
                            <option @selected($patient->id === $checkup->patient_id) value="{{ $patient->id }}">{{ $patient->name }}</option>
                            @empty
                            <option disabled>no data!</option>
                            @endforelse
                        </select>
                    </div>

                    <div class="mb-3">
                        <label for="paramedic_id" class="form-label">Dokter</label>
                        <select class="form-select" id="paramedic_id" name="paramedic_id">
                            @forelse ($paramedics as $paramedic)
                            <option @selected($paramedic->id === $checkup->paramedic_id) value="{{ $paramedic->id }}">{{ $paramedic->name }}</option>
                            @empty
                            <option disabled>no data!</option>
                            @endforelse
                        </select>
                    </div>

                    <div class="mb-3">
                        <label for="date" class="form-label">Tanggal</label>
                        <input type="date" class="form-control" id="date" name="date" value="{{ Carbon\Carbon::parse($checkup->patient_id)->format('Y-m-d') }}">
                    </div>

                    <div class="mb-3">
                        <label for="weight" class="form-label">Berat Badan</label>
                        <input type="number" class="form-control" id="weight" name="weight" value="{{ $checkup->weight }}">
                    </div>

                    <div class="mb-3">
                        <label for="height" class="form-label">Tinggi Badan</label>
                        <input type="number" class="form-control" id="height" name="height" value="{{ $checkup->height }}">
                    </div>

                    <div class="mb-3">
                        <label for="tension" class="form-label">Tensi</label>
                        <input type="text" class="form-control" id="tension" name="tension" value="{{ $checkup->tension }}">
                    </div>

                    <div class="mb-3">
                        <label for="about" class="form-label">Keterangan</label>
                        <input type="text" class="form-control" id="about" name="about" value="{{ $checkup->about }}">
                    </div>

                    <button class="btn btn-primary" type="submit">update</button>
                </form>
            </div>
        </div>
    </div>
</div>
@endsection
