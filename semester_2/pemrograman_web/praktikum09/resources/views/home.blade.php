@extends('main')

@section('content')
    <h1>syahrul ganteng ngantuk</h1>

    @if ($role === 'mahasiswa')
        <h3>nama saya adalah {{ $username }} role saya adalah {{ $role }}</h3>
    @else
        <h3>nama saya adalah {{ $username }}</h3>
    @endif
@endsection
