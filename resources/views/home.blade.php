@extends('layout.main')
@section('content')
    <div class="container">
        <div class="mb-3">
                <table class="table table-hover">
                    <thead>
                    <tr>
                        <th scope=" col">Titulo</th>
                        <th scope="col">Prazo</th>
                        <th scope="col">Situação</th>
                        <th scope="col">Descrição</th>
                        <th>Documentos</th>
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
                    <td> {{$row->status}}</td>
                    <td>{{$row->descricao}}</td>
                    <td>@if ($row->anexo) <a href="{{url('')}}/uploads/anexos/{{$row->anexo}}" target="_blank">anexo</a> @endif</td>
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
