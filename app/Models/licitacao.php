<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class licitacao extends Model
{
    use HasFactory;
    protected $table = 'licitacoes';
    protected $fillable = ['titulo', 'prazo', 'quantidade', 'observacao'];
}
