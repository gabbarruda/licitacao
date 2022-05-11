@extends('layout.main')
@section('content')
    <div class="container">
        @foreach ($rows as $row)
        <div class="mb-3">
            {{$row->titulo}}
        </div>
        
        @endforeach
    </div>
@endsection
