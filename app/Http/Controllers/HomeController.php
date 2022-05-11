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
        return view('salvar');
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
      return redirect()->route('home');
    }
}
