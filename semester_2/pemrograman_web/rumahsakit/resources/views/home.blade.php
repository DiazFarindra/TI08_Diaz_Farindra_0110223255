@extends('main')

@section('content')
    <h1>Syahrul Ganteng</h1>

    @if ($role === 'mahasiswa')
        <p>Saya adalah {{ $username }} peran saya adalah {{$role}}</p>
    @else
        <p>Nama saya adalah {{ $username }}</p>
    @endif
@endsection
