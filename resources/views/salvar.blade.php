@extends('layout.main')
@section('content')

<div class="container pt-5">



<form action="{{route('salvar')}}" method="post">
@csrf
<div class="mb-3">
    <label for="titulo" class="form-label">Titulo</label>
    <input type="text" class="form-control" id="titulo" name="titulo">
  </div>
  <div class="mb-3">
    <label for="prazo" class="form-label">Prazo</label>
    <input type="text" class="form-control" id="prazo" name="prazo">
  </div>
  <div class="mb-3">
    <label for="quantidade" class="form-label">Quantidade</label>
    <input type="text" class="form-control" id="quantidade" name="quantidade" >
  </div>
  <div class="mb-3">
    <label for="observacao" class="form-label">Descrição</label>
    <textarea class="form-control" id="observacao" name="observacao" rows="3"></textarea>
  </div>
 <div class="mb-3">
    <input type="submit" class="btn btn-primary" value="salvar">
 </div>
</form>

</div>
@endsection