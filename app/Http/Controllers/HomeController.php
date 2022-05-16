<?php

namespace App\Http\Controllers;

use App\Models\licitacao;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function Index()
    {
        $rows = licitacao::all();
        return view('home', ['rows'=>$rows]);
    }

    public function Salvar(Request $request)       
    {
        $row =  licitacao::firstOrNew(['id'=>$request->id]);
        return view('salvar', ['row'=>$row]);
    }
    public function Post(Request $request)          
    {
       if ($request->id==''){
           $licitacao = new licitacao();
       }
       else {
           $licitacao = licitacao::find($request->id);
       }


       $licitacao->fill($request->all())->save();
      return redirect()->route('home')->with('msg', 'Efetuado, com sucesso!');
    }
    public function delete(Request $request)         
    {
        licitacao::find($request->id)->delete();
        return redirect()->route('home')->with('msg', 'Exluido, com sucesso!');
    }
}
