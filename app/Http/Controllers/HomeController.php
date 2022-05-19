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
       ($request->id=='') ? $licitacao = new licitacao() : $licitacao = licitacao::find($request->id);
      
       $imput = $request->all();
        // Image Upload
        if($request->hasFile('anexo') && $request->file('anexo')->isValid()) 
        {
            $requestImage = $request->anexo;
            $extension = $requestImage->extension();
            $imageName = md5($requestImage->getClientOriginalName() . strtotime("now")) . "." . $extension;
            $request->anexo->move(public_path('uploads/anexos'), $imageName);
            $imput['anexo'] = $imageName;
        }

       $licitacao->fill($imput)->save();
      return redirect()->route('home')->with('msg', 'Efetuado, com sucesso!');
    }
    public function delete(Request $request)         
    {
        licitacao::find($request->id)->delete();
        return redirect()->route('home')->with('msg', 'Exluido, com sucesso!');
    }
}
