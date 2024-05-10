@extends('admin.layouts.main')

@section('content')
<div class="d-flex justify-content-between align-items-center flex-wrap grid-margin">
    <div>
        <h4 class="mb-3 mb-md-0">Selamat Datang {{ auth()->user()->name }}!</h4>
    </div>
</div>

<div class="row">
    <div class="col-lg-5 col-xl-4 grid-margin grid-margin-xl-0 stretch-card">
        <div class="card">
            <div class="card-body">
                <div class="d-flex justify-content-between align-items-baseline mb-2">
                    <h6 class="card-title mb-2">data periksa</h6>
                </div>
                <div class="d-flex flex-column">
                    @forelse ($checkups as $checkup)
                    <div class="d-flex align-items-center border-bottom pb-3">
                        <div class="w-100">
                            <div class="d-flex justify-content-between">
                                <h6 class="fw-normal text-body mb-1">{{ $checkup->patient->name }} - {{ $checkup->patient->code }}</h6>
                                <p class="text-muted tx-12">{{ Carbon\Carbon::parse($checkup->date)->format('d F Y') }}</p>
                            </div>
                            <p class="text-muted tx-13">{{ $checkup->about }}</p>
                        </div>
                    </div>
                    @empty
                    <div class="d-flex align-items-center border-bottom pb-3">
                        no data!
                    </div>
                    @endforelse
                </div>
            </div>
        </div>
    </div>
    <div class="col-lg-7 col-xl-8 stretch-card">
        <div class="card">
            <div class="card-body">
                <div class="d-flex justify-content-between align-items-baseline mb-2">
                    <h6 class="card-title mb-2">Pasien</h6>
                </div>
                <div class="table-responsive">
                    <table class="table table-hover mb-0">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Kode</th>
                                <th>Email</th>
                                <th>Gender</th>
                                <th>Alamat</th>
                            </tr>
                        </thead>
                        <tbody>
                            @forelse ($patients as $patient)
                            <tr>
                                <td>{{ $loop->iteration }}</td>
                                <td>{{ $patient->name }}</td>
                                <td>{{ $patient->code }}</td>
                                <td>{{ $patient->email }}</td>
                                <td>{{ $patient->gender === 'L' ? 'laki-laki' : 'perempuan' }}</td>
                                <td>{{ str($patient->address)->limit(20) }}</td>
                            </tr>
                            @empty
                            <tr>
                                no data!
                            </tr>
                            @endforelse
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div> <!-- row -->
@endsection
