@extends('admin.layouts.main')

@section('content')
<div class="row">
    <div class="col-md-12 grid-margin stretch-card">
        <div class="card">
            <div class="card-body">
                <h6 class="card-title">Inputs</h6>
                <form action="{{ route('admin.work-units.update', $workUnit->id) }}" method="post">
                    @csrf
                    @method('patch')

                    <div class="mb-3">
                        <label for="name" class="form-label">Nama Unit Kerja</label>
                        <input type="text" class="form-control" id="name" name="name" value="{{ $workUnit->name }}">
                    </div>

                    <button class="btn btn-primary" type="submit">update</button>
                </form>
            </div>
        </div>
    </div>
</div>
@endsection
