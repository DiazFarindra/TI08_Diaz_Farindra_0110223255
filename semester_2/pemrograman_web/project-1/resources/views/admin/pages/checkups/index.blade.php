@extends('admin.layouts.main')

@push('plugin-styles')
<link href="{{ asset('admin/assets/plugins/datatables-net-bs5/dataTables.bootstrap5.css') }}" rel="stylesheet" />
@endpush

@section('content')
<div class="row">
    <div class="col-md-12 grid-margin">
        <a href="{{ route('admin.checkups.create') }}" class="btn btn-primary">+ buat data baru</a>
    </div>
</div>

<div class="row">
    <div class="col-md-12 grid-margin stretch-card">
        <div class="card">
            <div class="card-body">
                <h6 class="card-title">Data Periksa</h6>
                <div class="table-responsive">
                    <table id="dataTableExample" class="table">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Tanggal</th>
                                <th>Nama Pasien</th>
                                <th>Kode Pasien</th>
                                <th>Dokter</th>
                                <th>Berat Badan</th>
                                <th>Tinggi Badan</th>
                                <th>Tensi</th>
                                <th>Keterangan</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            @forelse ($checkups as $checkup)
                            <tr>
                                <td>{{ $loop->iteration }}</td>
                                <td>{{ Carbon\Carbon::parse($checkup->date)->format('d F Y') }}</td>
                                <td>{{ $checkup->patient->name }}</td>
                                <td>{{ $checkup->patient->code }}</td>
                                <td>{{ $checkup->paramedic->name }}</td>
                                <td>{{ $checkup->weight }}kg</td>
                                <td>{{ $checkup->height }}cm</td>
                                <td>{{ $checkup->tension }}</td>
                                <td>{{ str($checkup->about)->limit(20) }}</td>
                                <td>
                                    <div class="d-flex gap-3">
                                        <a href="{{ route('admin.checkups.edit', $checkup->id) }}" class="btn btn-success">edit</a>
                                        <form action="{{ route('admin.checkups.destroy', $checkup->id) }}" method="post">
                                            @csrf
                                            @method('delete')

                                            <button type="submit" onclick="return confirm('ingin menghapus data {{ $checkup->name }}?')" class="btn btn-outline btn-danger">delete</button>
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
