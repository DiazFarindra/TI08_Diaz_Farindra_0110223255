<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <form action="{{ route('fruits.create')}}" method="post">
        @csrf
        
        <input type="text" name="name">
        <input type="number" name="stock">

        <button type="submit">create</button>
    </form>

    @foreach ( $fruits as $fruit)
        <p>nama: {{ $fruit->name }}</p>
        <p>stock: {{ $fruit->stock }}</p>
    @endforeach
</body>
</html>
