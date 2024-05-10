@extends('admin.layouts.main')

@push('plugin-styles')
<link href="{{ asset('admin/assets/plugins/datatables-net-bs5/dataTables.bootstrap5.css') }}" rel="stylesheet" />
@endpush

@section('content')
<div class="row">
    <div class="col-md-12 grid-margin">
        <a href="{{ route('admin.patients.create') }}" class="btn btn-primary">+ buat data baru</a>
    </div>
</div>

<div class="row">
    <div class="col-md-12 grid-margin stretch-card">
        <div class="card">
            <div class="card-body">
                <h6 class="card-title">Data Pasien</h6>
                <div class="table-responsive">
                    <table id="dataTableExample" class="table">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Name</th>
                                <th>Kode</th>
                                <th>Kelurahan</th>
                                <th>Email</th>
                                <th>Tempat Lahir</th>
                                <th>Tanggal Lahir</th>
                                <th>Gender</th>
                                <th>Alamat</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            @forelse ($patients as $patient)
                            <tr>
                                <td>{{ $loop->iteration }}</td>
                                <td>{{ $patient->name }}</td>
                                <td>{{ $patient->code }}</td>
                                <td>{{ $patient->kelurahan->name }}</td>
                                <td>{{ $patient->email }}</td>
                                <td>{{ $patient->birth_place }}</td>
                                <td>{{ Carbon\Carbon::parse($patient->birth_date)->format('d F Y') }}</td>
                                <td>{{ $patient->gender === 'L' ? 'laki-laki' : 'perempuan' }}</td>
                                <td>{{ str($patient->address)->limit(20) }}</td>
                                <td>
                                    <div class="d-flex gap-3">
                                        <a href="{{ route('admin.patients.edit', $patient->id) }}" class="btn btn-success">edit</a>
                                        <form action="{{ route('admin.patients.destroy', $patient->id) }}" method="post">
                                            @csrf
                                            @method('delete')

                                            <button type="submit" onclick="return confirm('ingin menghapus data pasien {{ $patient->name }}?')" class="btn btn-outline btn-danger">delete</button>
                                        </form>
                                    </div>
                                </td>
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
</div>
@endsection

@push('plugin-scripts')
<script src="{{ asset('admin/assets/plugins/datatables-net/jquery.dataTables.js') }}"></script>
<script src="{{ asset('admin/assets/plugins/datatables-net-bs5/dataTables.bootstrap5.js') }}"></script>
@endpush

@push('custom-scripts')
<script src="{{ asset('admin/assets/js/data-table.js') }}"></script>
@endpush
