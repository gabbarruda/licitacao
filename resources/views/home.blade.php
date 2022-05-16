@extends('layout.main')
@section('content')
    <div class="container">
        <div class="mb-3">
                <table class="table table-hover">
                    <thead>
                    <tr>
                        <th scope=" col">Titulo</th>
                        <th scope="col">Prazo</th>
                        <th scope="col">Quantidade</th>
                        <th scope="col">Observação</th>
                        <th>
                            Ações 
                        </th>
                    </tr>
                    </thead>
                @foreach ($rows as $row)
            
                <tbody>
                    <tr>
                    <td>{{$row->titulo}}</td>
                    <td>{{$row->prazo}}</td>
                    <td> {{$row->quantidade}}</td>
                    <td>{{$row->observacao}}</td>
                    <td>
                        <a href="{{route('delete', ['id' =>$row->id])}}"><i class="fa-solid fa-trash-can"></i></a>
                        <a href="{{route('salvar', ['id' =>$row->id])}}"><i class="fa-solid fa-file-pen"></i></a>
                    </td>
                    </tr>
                </tbody>
                
                @endforeach
                    
                </table>
        </div>
    </div>
@endsection
