@extends('layout.main')
@section('content')

<div class="container pt-5">



<form action="{{route('salvar', ['id' => $row->id])}}" method="post" enctype="multipart/form-data">
@csrf
<div class="mb-3">
    <label for="titulo" class="form-label">Titulo</label>
      <input type="text" class="form-control" id="titulo" name="titulo" value="{{old("titulo", $row->titulo)}}">
  </div>
  <div class="mb-3">
    <label for="prazo" class="form-label">Prazo</label>
    <input type="text" class="form-control" id="prazo" name="prazo" value="{{old("prazo", $row->prazo)}}">
  </div>
  <div class="mb-3">
    <label for="quantidade" class="form-label">Status</label>
    <select class="form-select" name="status">
      <option value="andamento">Andamento</option>
      <option value="encerrado">Encerrado</option>
    </select>
  </div>

  <div class="mb-3">
    <label for="anexo" class="form-label">Anexo</label>
    <input class="form-control" type="file" id="formFile" name="anexo">
  </div>

  <div class="mb-3">
    <label for="descricao" class="form-label">Descrição</label>
    <textarea class="form-control" id="descricao" name="descricao" rows="3">{{old("descricao", $row->descricao)}}</textarea>
  </div>
 <div class="mb-3">
    <input type="submit" class="btn btn-primary" value="salvar">
 </div>
</form>

</div>
@endsection
