<!doctype html>
<html lang="pt-BR">
    <head>        
        <meta charset="utf-8" />
        <title>Home | Licitação | Prefeitura Minicipal de Caieiras</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">        
        <meta name="csrf-token" content="{{ csrf_token() }}" />
        <meta name="description" content=" " />
        <meta name="keywords" content="" />
        <meta content="" name="author" />
        <link rel="shortcut icon" href="{{url('')}}/images/favicon.png">
        <link href="{{url('')}}/plugins/bootstrap/css/bootstrap.min.css" id="bootstrap-style" rel="stylesheet" type="text/css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" type="text/css" href="{{url('')}}/plugins/sweetalert2/sweetalert2.min.css">
        <link href="{{url('')}}/css/app.min.css" id="app-style" rel="stylesheet" type="text/css" />
        <link href="{{url('')}}/css/contraste.css" id="app-style" rel="stylesheet" type="text/css" />
        @yield('css')
    </head>
    <body>
        <div>          
            <div class="d-flex justify-content-center top-c">
                <div class="top-c-dark-blue"></div>
                <div class="top-c-light-blue"></div>
                <div class="top-c-light-green"></div>
            </div>
            <div class="e_area_acessibilidade">
                <a accesskey="6" href="/portal/acessibilidade">
                    <div class="e_botao_acessibilidade" title="Ir para a página de acessibilidade"><img class="e_imgcentralizar" src="{{url('')}}/images/img_acessibilidade.png" alt="Acessibilidade"><span class="e_trans">acessibilidade</span></div>
                </a>
                <a class="aumentar">
                    <div class="e_botao_acessibilidade" title="Aumentar textos do site"><span class="fa fa-plus"></span><span class="e_trans">aumentar</span></div>
                </a>
                <a class="diminuir">
                    <div class="e_botao_acessibilidade" title="Diminuir textos do site"><span class="fa fa-minus"></span><span class="e_trans">diminuir</span></div>
                </a>
                <a id="contraste" accesskey="5">
                    <div class="e_botao_acessibilidade" title="Aumentar/diminuir contraste"><span class="fa fa-adjust"></span><span class="e_trans">contraste</span></div>
                </a>
                <a href="/portal/mapa">
                    <div class="e_botao_acessibilidade" title="Ir para o mapa do site"><span class="fa fa-map-marker"></span><span class="e_trans">mapa</span></div>
                </a>
                <a id="linkConteudo" href="#conteudo_esquerda" accesskey="1" class="e_trans">Ir para o conteúdo</a>
                <a href="#e_cont_topo" accesskey="2" class="e_trans">Ir para o menu</a>
                <a id="irbusca" accesskey="3" class="e_trans">Ir para a busca</a>
                <a href="#e_cont_rodape" accesskey="4" class="e_trans">Ir para o rodapé</a>
            </div>       

            <nav class="navbar navbar-expand-lg fixed-top sticky" id="navbar">
                <div class="container-fluid custom-container">
                    <a class="navbar-brand text-dark fw-bold me-auto" href="{{url('')}}">
                        <img src="{{url('')}}/images/logo.png" height="42" alt="" class="logo-dark" />
                        <img src="{{url('')}}/images/logo.png" height="22" alt="" class="logo-light" />
                    </a>
                    <div>
                        <button class="navbar-toggler me-3" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-label="Toggle navigation">
                            <i class="mdi mdi-menu"></i>
                        </button>
                    </div>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <ul class="navbar-nav mx-auto navbar-center">
                          <li class="nav-item"><a href="{{route('home')}}" class="nav-link">Home</a></li>
                          <li class="nav-item"><a href="{{route('salvar')}}" class="nav-link">Cadastrar</a></li>
                        </ul>
                    </div>
                    </navabar-collapse-->
                    <ul class="header-menu list-inline d-flex align-items-center mb-0" style="min-width: 191px">                      
                        
                    </ul>
                </div>
            </nav>

            <div class="main-content">

                <div class="page-content">                   
                    @yield('content')
                </div>           
            
                <section class="bg-footer pt-5">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="footer-item mt-4 mt-lg-0 me-lg-5 text-center"><img src="{{url('')}}/images/white.png" class="w-75 mt-5 mb-5" alt=""></div>
                            </div>                           
                            <div class="col-md-8">
                                <div class="row  align-items-center h-100 text-white">
                                    <div class="col-md-6 d-flex justify-content-start align-items-center">
                                        <div class="d-flex align-items-center justify-content-center icon_info me-2"><i class="fa-solid fa-location-dot"></i></div>
                                        <div class="e_txt_info"><span class="e_work_r">Av. Professor Carvalho Pinto, 207 <br>1º Andar - Centro - Caieiras</span></div>
                                    </div>
                                    <div class="col-md-6 d-flex justify-content-start align-items-center">
                                        <div class="d-flex align-items-center justify-content-center icon_info me-2"><i class="fa-solid fa-comment-dots"></i></div>
                                        <div class="e_txt_info">
                                            <a href="tel:(16)2105-3000"><span class="text-white">(11) 4445-9179</span></a><br>
                                            <a href="mailto:ouvidoria@sertaozinho.sp.gov.br" class="text-white"><span>pat@caieiras.sp.gov.br</span></a>     
                                        </div>
                                    </div>                                    
                                    <div class="col-md-6  d-flex justify-content-start align-items-center">
                                        <div class="d-flex align-items-center justify-content-center icon_info me-2"><i class="fa-solid fa-clock"></i></div>
                                        <div class="e_txt_info">Atendimento de Seg a Sex das 8h às 14h  </div>
                                    </div>
                                    <div class="col-md-6 d-flex justify-content-start align-items-center">
                                        <div class="d-flex align-items-center justify-content-center icon_info me-2"><i class="fa-solid fa-comment-dots"></i></div>
                                        <div class="e_txt_info">
                                            <a href="tel:(16)2105-3000"><span class="text-white">(11) 4445-9179</span></a><br>
                                            <a href="mailto:ouvidoria@sertaozinho.sp.gov.br" class="text-white"><span>pat@caieiras.sp.gov.br</span></a>     
                                        </div>
                                    </div>                                    
                                </div>
                            </div>                           
                        </div>
                    </div>
                    <div class="info_sistema">
                        <div class="container mt-5 ">
                            <div class=" d-flex justify-content-evenly p-2">
                                <div class="sw_info_sistema">
                                    <span class="fas fa-wrench" aria-hidden="true"></span>
                                    <span class="sw_texto_info_sistema e_nunitos_sb">Versão: <strong>1.0.1 </strong></span>
                                </div>

                                <div class="sw_info_sistema">
                                    <span class="far fa-clock" aria-hidden="true"></span>
                                    <span class="sw_texto_info_sistema e_nunitos_sb">Atualizado em: <strong>20/04/2022 14:55</strong></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer-alt">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-12">
                                    <p class="text-center mb-0">
                                        <script>document.write(new Date().getFullYear())</script> &copy; PAT - Prefeitura de Caieiras <a href="" target="_blank" class="text-reset text-decoration-underline">PMC</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>                
                <button onclick="topFunction()" id="back-to-top"><i class="mdi mdi-arrow-up"></i></button>
            </div>
        </div>

        @yield('modal')
        
        <!-- JAVASCRIPT -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        <script src="{{url('')}}/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="{{url('')}}/plugins/sweetalert2/sweetalert2.min.js"></script> 
        <script src="{{url('')}}/plugins/bootstrap/js/bs-stepper.min.js"></script>        
        <script src="{{ url('') }}/plugins/jquery.mask.js"></script>
        <script src="{{url('')}}/js/functions.js"></script>
        <script src="{{url('')}}/js/acessibilidade.js"></script>
        @yield('js')
        @yield('jss')
    </body>
</html>
