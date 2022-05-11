
            /* ============================================================================================
                FUNÇÃO PARA RETORNO DA VOTAÇÃO DA ENQUETE
            ============================================================================================ */
            function retorna_enquete(data){
                if(data != '')
                {
                    $('#votar').hide();
                    $("#e_cont_enquete").html(data);
                }
            }
                
            /* ============================================================================================
                POPUP
            ============================================================================================ */
        
            // FUNÇÃO ABRIR PÁGINA
            function sw_abrir_janela(pagina, altura, largura) {
                var a = (screen.height/2)-(altura/2);
                var l = (screen.width/2)-(largura/2);
                window.open(pagina,'senha','width='+largura+',height='+altura+',top='+a+',left='+l+',scrollbars=1');
            }
                
            // ABRIR POPUP
            function sw_abrir_popup(elemento) {
                elemento.fadeIn(200);
                elemento.find(".sw_popup").animate({"top": "+20px"}, "fast");
                $("body").css("overflow", "hidden");        
            }
        
            // FECHAR POPUP
            function sw_fechar_popup(elemento) {
                elemento.fadeOut(200);
                elemento.find(".sw_popup").animate({"top": "-20px"}, "fast", function() { $(".sw_popup_modal:visible").last().find("input, button").first().focus(); });
                setTimeout(function () {
                    if (!$(".sw_popup_modal:visible").length) {
                        $("body").css("overflow", "auto");
                    }
                }, 400);      
            }
        
            // SW POPUP ( ".ELEMENTO / #ELEMENTO" , "SE MODAL PODE SER FECHADO OU NÃO")
            function sw_popup(elemento, fechar) {
                if (!fechar) { fechar = "S"; }
                var id_elemento = elemento.substr(1); //  REMOVE O PRIMEIRO CARACTERE (# OU .)
                var elemento = $(elemento);
                // ABRIR POPUP
                sw_abrir_popup(elemento);
                // FECHAR POPUP
                elemento.find(".sw_btn_fechar_popup").click(function() { sw_fechar_popup(elemento); });
        
                // ANALISANDO SE MODAL PODE SER FECHADO AO CLICAR FORA DA JANELA E AO TECLAR ESC
                if (fechar == "S") {
                    elemento.addClass("keyupmodal")
                    // FECHAR AO CLICAR NA TELA ESCURA
                    elemento.mousedown(function(e) {
                        if (e.target.id == id_elemento) {
                            sw_fechar_popup(elemento);
                        }
                    });
        
                    //elemento.click(function() { console.log("fechou!"); sw_fechar_popup(elemento); });
                    //elemento.find(".sw_popup").on("click", function() { event.stopPropagation(); });
        
                    // FECHAR AO CLICAR ESC
                    $(document).on("keyup", function(e) {
                        if (e.keyCode === 27) {
                            var modal_fehcar, zindex_fechar = 0;
                            $(".sw_popup_modal.keyupmodal:visible").each(function() {
                                var modal = $(this);
                                var zindex_modal = parseInt(modal.css("z-index"));
                                if (zindex_modal > zindex_fechar) {
                                    zindex_fechar =  zindex_modal;
                                    modal_fechar = modal;
                                }
                            });
                            // FECHAR MODAL
                            sw_fechar_popup(modal_fechar);
                        }
                    });
                }
            }
        
        
            /* ============================================================================================
                ACESSIBILIDADE
            ============================================================================================ */
        
            // SW ACESSIBILIDADE
            if (typeof sw_acessibilidade !== "function") {
                function sw_acessibilidade(param, callback) {
        
                    // ANALISANDO PARÂMETROS
                    if (typeof param === "undefined" || !param) { param = {} }
                    if (typeof param.media === "undefined") { param.media = "desktop" }
        
                    // ANALISANDO MEDIA
                    if (
                        (param.media === "todas" || param.media === "all") ||
                        (param.media === "desktop" && window.innerWidth > 1000) ||
                        (param.media === "mobile" && window.innerWidth <= 1000) ||
                        (window.innerWidth <= param.media)
                    ) { 
        
                        // ANALISANDO PARÂMETROS
                        if (typeof param.layout === "undefined") { param.layout = "a1" }
                        if (typeof param.caminho === "undefined") { param.caminho = "body" }
        
                        // FUNÇÕES
                        if (param.fonte !== false) { param.fonte = true; }
                        if (param.contraste !== false) { param.contraste = true; }
                        if (param.mapa !== false) { param.mapa = true; }
                        if (param.vlibras !== false) { param.vlibras = true; }
                        if (param.pagina !== false) { param.pagina = true; }
                        if (param.transicoes !== false) { param.transicoes = true; }
                        if (param.reset !== false) { param.reset = true; }
                        if (param.irconteudo !== false) { param.irconteudo = true; }
                        if (param.irmenu !== false) { param.irmenu = true; }
                        if (param.irbusca !== false) { param.irbusca = true; }
                        if (param.irrodape !== false) { param.irrodape = true; }
        
        
                        // CRIANDO ELEMENTOS
                        var sw_acessibilidade = $("#sw_acessibilidade");
                        if (!sw_acessibilidade.length) {
                            sw_acessibilidade = $('<div id="sw_acessibilidade" />');
                            $(param.caminho).prepend(sw_acessibilidade);
                        }
                        sw_acessibilidade.addClass("sw_area_acessibilidade " + param.layout);
        
        
                        // BOTÃO MENU ACESSIBILIDADE
                        if (!sw_acessibilidade.find("#sw_btn_menu_acessibilidade").length) {
                            var btn_menu_acessibilidade = $('<div id="sw_btn_menu_acessibilidade" class="sw_btn_menu_acessibilidade" />')
        
                            // INSERINDO ÍCONE DE ACESSIBILIDADE E FECHAR
                            btn_menu_acessibilidade.append('<div class="sw_icone_acessibilidade" />')
                            .append('<div class="sw_icone_fechar" />');
        
                            // INSERINDO BOTÃO MENU
                            sw_acessibilidade.append(btn_menu_acessibilidade);
                        }
                        // CLICK DO BOTÃO
                        sw_acessibilidade.find("#sw_btn_menu_acessibilidade").on({
                            "click": function() {
                                sw_acessibilidade.toggleClass("show");
                            }
                        });
                        sw_acessibilidade.on({
                            "mouseenter": function() {
                                if (window.innerWidth >= 1000) {
                                    sw_acessibilidade.addClass("show");
                                }
                            },
                            "mouseleave": function() {
                                if (window.innerWidth >= 1000) {
                                    sw_acessibilidade.removeClass("show");
                                }
                            }
                        });
        
        
                        // CONT ACESSIBILIDADE
                        if (!sw_acessibilidade.find(".sw_cont_acessibilidade").length) {
                            sw_acessibilidade.append('<div class="sw_cont_acessibilidade" />');
                        }
        
                        // TÍTULO ACESSIBILIDADE
                        if (!sw_acessibilidade.find(".sw_titulo_acessibilidade").length) {
                            sw_acessibilidade.find(".sw_cont_acessibilidade").append('<div class="sw_titulo_acessibilidade"><span>Acessibilidade</span></div>');
                        }
        
                        // ÁREA BOTÕES
                        if (!sw_acessibilidade.find(".sw_area_botoes_acessibilidade").length) {
                            sw_acessibilidade.find(".sw_cont_acessibilidade").append('<div class="sw_area_botoes_acessibilidade" />');
                        }
        
                        // FUNÇÃO INSERE BOTÃO DE ACESSIBILIDADE
                        function sw_insere_btn_acessibilidade(param_btn) {
                            if (param_btn.seletor) {
        
                                // ANALISANDO SE O ELEMENTO NÃO EXISTE PARA ENTÃO CRIAR
                                if (!sw_acessibilidade.find(param_btn.seletor).length) {
                                    var item = $(
                                        '<a>'+
                                            '<div></div>'+
                                        '</a>'
                                    ).attr(
                                        param_btn.seletor.charAt(0) === '#' ? 'id' : 'class',
                                        param_btn.seletor.substring(1)
                                    );
        
                                    // CLASSES
                                    if (param_btn.classes) {
                                        item.find("div").addClass(param_btn.classes);
                                    }
        
                                    // DESCRIÇÃO
                                    if (param_btn.descricao) {
                                        item.find(".sw_btn_acessibilidade").append('<span class="sw_txt_btn_acessibilidade">'+param_btn.descricao+'</span>');
                                        item.attr("title", param_btn.descricao);
                                    }
        
                                    // ÍCONE
                                    if (param_btn.icone) {
                                        item.find(".sw_btn_acessibilidade").append('<span class="sw_icone_btn tamanho_fixo swfa '+param_btn.icone+'" />')
                                    }
        
                                    // LINK
                                    if (param_btn.link) {
                                        item.attr("href", param_btn.link);
                                    }
        
                                    // ACCESSKEY
                                    if (param_btn.accesskey) {
                                        item.attr("accesskey", param_btn.accesskey);
        
                                        // INSERINDO TECLADO NUMÉRICO
                                        window.addEventListener("keydown", function(e) {
                                            var keyCode = e.keyCode || e.which;
                                            if (e.altKey && keyCode === param_btn.accesskey+96) {
                                                if (param_btn.link) {
                                                    window.location.href = param_btn.link;
                                                }
                                                else {
                                                    item.trigger("click")
                                                }
                                            }
                                        }, false)
                                    }
        
                                    // INSERINDO ITEM
                                    sw_acessibilidade.find(".sw_area_botoes_acessibilidade").append(item);
                                }
                            }
                        }
        
        
                        // =============================================================
                        //      BOTÃO AUMENTAR
                        // =============================================================
                        if (param.fonte && !sw_acessibilidade.find("#sw_btn_aumentar_acessibilidade").length) {
                            sw_insere_btn_acessibilidade({
                                seletor: "#sw_btn_aumentar_acessibilidade",
                                classes: "sw_btn_acessibilidade sw_btn_aumentar_acessibilidade",
                                icone: "fas fa-plus",
                                descricao: "Aumentar fonte"
                            });
                        }
                        // ATRIBUINDO FUNÇÃO
                        sw_acessibilidade.find("#sw_btn_aumentar_acessibilidade").click(function() {
                            // CARREGANDO FS
                            sw_carregando_fs("show");
        
                            // ALTERANDO FONTS
                            sw_altera_fonts(1);
        
                            // REMOVE CARREGANDO FS
                            setTimeout(function() {
                                sw_carregando_fs("hide");
                            }, 400);
                        });
        
                        // =============================================================
                        //      BOTÃO DIMINUIR
                        // =============================================================
                        if (param.fonte && !sw_acessibilidade.find("#sw_btn_diminuir_acessibilidade").length) {
                            sw_insere_btn_acessibilidade({
                                seletor: "#sw_btn_diminuir_acessibilidade",
                                classes: "sw_btn_acessibilidade sw_btn_diminuir_acessibilidade",
                                icone: "fas fa-minus",
                                descricao: "Diminuir fonte"
                            });
                        }
                        // ATRIBUINDO FUNÇÃO
                        sw_acessibilidade.find("#sw_btn_diminuir_acessibilidade").click(function() {
                            // CARREGANDO FS
                            sw_carregando_fs("show");
        
                            // ALTERANDO FONTS
                            sw_altera_fonts(-1);
        
                            // REMOVE CARREGANDO FS
                            setTimeout(function() {
                                sw_carregando_fs("hide");
                            }, 400);
                        });
        
                        // =============================================================
                        //      BOTÃO CONTRASTE
                        // =============================================================
                        if (param.contraste && !sw_acessibilidade.find("#sw_btn_contraste_acessibilidade").length) {
                            sw_insere_btn_acessibilidade({
                                seletor: "#sw_btn_contraste_acessibilidade",
                                classes: "sw_btn_acessibilidade sw_btn_contraste_acessibilidade",
                                icone: "fas fa-adjust",
                                descricao: "Alto contraste",
                                accesskey: 5
                            });
                        }
                        // ATRIBUINDO FUNÇÃO
                        sw_acessibilidade.find("#sw_btn_contraste_acessibilidade").click(function() {
                            var action_contraste = (localStorage.getItem("sw_acessibilidade_contraste") === "true") ? false : true;
                            sw_contraste(action_contraste);
                        });
        
                        // =============================================================
                        //      BOTÃO VLIBRAS
                        // =============================================================
                        if (param.vlibras && !sw_acessibilidade.find("#sw_btn_vlibras_acessibilidade").length && $("#vlibras_include img").length) {
                            sw_insere_btn_acessibilidade({
                                seletor: "#sw_btn_vlibras_acessibilidade",
                                classes: "sw_btn_acessibilidade sw_btn_vlibras_acessibilidade",
                                icone: "fas fa-sign-language",
                                descricao: "Habilitar VLibras", 
                                accesskey: 7
                            });
                        }
                        // ATRIBUINDO FUNÇÃO
                        sw_acessibilidade.find("#sw_btn_vlibras_acessibilidade").click(function() {
                            var action_vlibras = (localStorage.getItem("sw_acessibilidade_vlibras") === "true") ? false : true;
                            sw_vlibras(action_vlibras);
                        });
                        var vlibras_include = $("#vlibras_include");
                        if (vlibras_include.length) {
                            // BOTÃO ABRIR VLIBRAS
                            vlibras_include.on("click", "div[vw-access-button]", function(e) {
                                setTimeout(function() {
                                    sw_vlibras(true);
                                }, 100);
                            });
                            // BOTÃO FECHAR VLIBRAS
                            vlibras_include.on("click", "img.vpw-settings-btn-close", function() {
                                setTimeout(function() {
                                    sw_vlibras(false);
                                }, 100);
                            });
                        }    
        
                        // =============================================================
                        //      BOTÃO TRANSIÇÕES
                        // =============================================================
                        if (param.transicoes && !sw_acessibilidade.find("#sw_btn_transicoes_acessibilidade").length) {
                            sw_insere_btn_acessibilidade({
                                seletor: "#sw_btn_transicoes_acessibilidade",
                                classes: "sw_btn_acessibilidade sw_btn_transicoes_acessibilidade",
                                icone: "fab fa-delicious",
                                descricao: "Ativar/Desativar transições"
                            });
                        }
                        // ATRIBUINDO FUNÇÃO
                        sw_acessibilidade.find("#sw_btn_transicoes_acessibilidade").click(function() {
                            // CARREGANDO FS
                            sw_carregando_fs("show");
        
                            // ACIONANDO FUNÇÃO
                            var action_transicoes = (localStorage.getItem("sw_acessibilidade_transicoes") === "true") ? false : true;
                            sw_desativa_transicoes(action_transicoes);
        
                            // REMOVE CARREGANDO FS
                            setTimeout(function() {
                                sw_carregando_fs("hide");
                            }, 400);
                        });            
        
                        // =============================================================
                        //      BOTÃO MAPA
                        // =============================================================
                        if (param.mapa && !sw_acessibilidade.find("#sw_btn_mapa_acessibilidade").length) {
                            sw_insere_btn_acessibilidade({
                                seletor: "#sw_btn_mapa_acessibilidade",
                                classes: "sw_btn_acessibilidade sw_btn_mapa_acessibilidade",
                                icone: "fas fa-sitemap",
                                descricao: "Mapa do site",
                                link: "/portal/mapa"
                            });
                        }
        
                        // =============================================================
                        //      BOTÃO ACESSIBILIDADE PÁGINA
                        // =============================================================
                        if (param.pagina && !sw_acessibilidade.find("#sw_btn_pagina_acessibilidade").length) {
                            sw_insere_btn_acessibilidade({
                                seletor: "#sw_btn_pagina_acessibilidade",
                                classes: "sw_btn_acessibilidade sw_btn_pagina_acessibilidade",
                                icone: "fas fa-wheelchair",
                                descricao: "Página de Acessibilidade",
                                link: "/portal/acessibilidade",
                                accesskey: 6
                            });
                        }
        
                        // =============================================================
                        //      BOTÃO RESET
                        // =============================================================
                        if (param.reset && !sw_acessibilidade.find("#sw_btn_reset_acessibilidade").length) {
                            sw_insere_btn_acessibilidade({
                                seletor: "#sw_btn_reset_acessibilidade",
                                classes: "sw_btn_acessibilidade sw_btn_reset_acessibilidade",
                                icone: "fas fa-undo",
                                descricao: "Resetar acessibilidade"
                            });
                        }
                        // ATRIBUINDO FUNÇÃO
                        sw_acessibilidade.find("#sw_btn_reset_acessibilidade").click(function() {
                            // CARREGANDO FS
                            sw_carregando_fs("show");
        
                            // RESETANDO ACESSIBILIDADE
                            var reset = true;
                            set_acessibilidade(reset);
        
                            // REMOVE CARREGANDO
                            setTimeout(function() {
                                sw_carregando_fs("hide");
                            }, 400);
                        }).hide();
        
        
                        // =============================================================
                        //      BOTÃO IR PARA O CONTEÚDO
                        // =============================================================
                        if (param.irconteudo && !sw_acessibilidade.find("#sw_btn_irconteudo_acessibilidade").length) {
                            sw_insere_btn_acessibilidade({
                                seletor: "#sw_btn_irconteudo_acessibilidade",
                                classes: "sw_btn_acessibilidade sw_link_acessibilidade sw_btn_irconteudo_acessibilidade",
                                icone: "fas fa-desktop",
                                descricao: "Ir para o conteúdo",
                                link: (location.pathname === "/" || location.pathname === "/portal" || location.pathname === "/portal/") ? "#e_conteudo" : "#e_centralizar",
                                accesskey: 1
                            });
                        }
        
                        // =============================================================
                        //      BOTÃO IR PARA O MENU
                        // =============================================================
                        if (param.irmenu && !sw_acessibilidade.find("#sw_btn_irmenu_acessibilidade").length) {
                            sw_insere_btn_acessibilidade({
                                seletor: "#sw_btn_irmenu_acessibilidade",
                                classes: "sw_btn_acessibilidade sw_link_acessibilidade sw_btn_irmenu_acessibilidade",
                                icone: "fas fa-bars",
                                descricao: "Ir para o menu",
                                link: "#e_cont_topo",
                                accesskey: 2
                            });
                        }
        
                        // =============================================================
                        //      BOTÃO IR PARA A BUSCA
                        // =============================================================
                        if (param.irbusca && !sw_acessibilidade.find("#sw_btn_irbusca_acessibilidade").length) {
                            sw_insere_btn_acessibilidade({
                                seletor: "#sw_btn_irbusca_acessibilidade",
                                classes: "sw_btn_acessibilidade sw_link_acessibilidade sw_btn_irbusca_acessibilidade",
                                icone: "fas fa-search",
                                descricao: "Ir para a busca",
                                link: "#e_campo_busca",
                                accesskey: 3
                            });
                        }
                        // IR PARA BUSCA
                        $("#irbusca").click(function () {
                            $("#e_campo_busca").focus();
                        });
                        // FORMULÁRIO
                        $("#formulario_busca").bind('submit',function() {
                            var busca = ($("#e_campo_busca").val() == "") ? 0 : $("#e_campo_busca").val();
                            window.location.href = '/portal/busca/' + busca;
                            return false;
                        });            
        
                        // =============================================================
                        //      BOTÃO IR PARA O RODAPÉ
                        // =============================================================
                        if (param.irrodape && !sw_acessibilidade.find("#sw_btn_irrodape_acessibilidade").length) {
                            sw_insere_btn_acessibilidade({
                                seletor: "#sw_btn_irrodape_acessibilidade",
                                classes: "sw_btn_acessibilidade sw_link_acessibilidade sw_btn_irrodape_acessibilidade",
                                icone: "fas fa-arrow-down", 
                                descricao: "Ir para o rodapé",
                                link: "#e_cont_rodape",
                                accesskey: 4
                            });
                        }
                    }
                }
            }
        
            // FUNÇÃO AUMENTAR / DIMINUIR FONTS
            if (typeof sw_altera_fonts !== "function") {
                function sw_altera_fonts(action) {
                    var elemento;
                    var body = $("body");
                    var fonte = (localStorage.getItem("sw_acessibilidade_fonte") !== null) ? parseInt(localStorage.getItem("sw_acessibilidade_fonte")) : 0;
                    var fontoriginal;
                    var font_size;
                    var nova_font_size;
        
                    // ANALISANDO SE FONT ORIGINAL E PARÂMETRO SÃO DIFERENTES DE ZERO
                    if (!((action === 0 || action === false || action === null) && fonte === 0)) {
        
                        // CALCULANDO NOVA FONT
                        nova_font_size = (action === 0) ? 0 : fonte + action;
        
                        // PERCORRENDO ELEMENTOS DO BODY E SETANDO FONTS ORIGINAIS
                        if (nova_font_size >= -5 && nova_font_size <= 5) {
        
                            body.find("*").each(function() {
                                elemento = $(this);
                                // ANALISANDO | SE ELEMENTO PAI CONTÉM A CLASSE TAMANHO_FIXO | && | SE O ELEMENTO NÃO TEM FONT-SIZE ZERO OU | && | SE O ELEMENTO NÃO TEM A CLASSE TAMANHO_FIXO
                                if ( (!elemento.parents(".tamanho_fixo").length) && (elemento.css("font-size").replace(/\D/g, "") > 0) && (!elemento.hasClass("tamanho_fixo")) ) {
        
                                    // ANALISANDO ESTADO ATUAL DAS FONTS
                                    fontoriginal = elemento.attr("data-fontoriginal");
                                    if (typeof fontoriginal === "undefined" || fontoriginal === false) {
                                        // SETANDO ATRIBUTO DATA-FONTSIZE ATUAL
                                        fontoriginal = parseInt(elemento.css("font-size").replace("px", ""));
                                        elemento.attr("data-fontoriginal", fontoriginal)
                                    }
                                }
                            });
        
                            // PERCORRENDO ELEMENTOS DO BODY E ALTERANDO FONT-SIZE
                            body.find("[data-fontoriginal]").each(function() {
                                elemento = $(this);
                                // ANALISANDO FONT ATUAL DO ELEMENTO
                                fontoriginal = parseInt(elemento.attr("data-fontoriginal"));
                                font_size = fontoriginal + nova_font_size;
                                elemento.css({"font-size" : font_size + "px"});
                            });
        
                            // ATUALIZANDO LOCAL STORAGE
                            if (nova_font_size == 0) {
                                localStorage.removeItem("sw_acessibilidade_fonte");
                            } else {
                                localStorage.setItem("sw_acessibilidade_fonte", nova_font_size);
                            }
                        }
        
                        // ACIONANDO FUNÇÃO SET ACESSIBILIDADE
                        sw_deb_acessibilidade = sw_debounce(set_acessibilidade, 500, sw_deb_acessibilidade);
                    }
                }
            }
        
            // FUNÇÃO CONTRASTE
            if (typeof sw_contraste !== "function") {
                function sw_contraste(action) {
                    var body = $("body");
                    var contraste = (localStorage.getItem("sw_acessibilidade_contraste") !== null) ? localStorage.getItem("sw_acessibilidade_contraste") : false;
        
                    // ANALISANDO SE HÁ MUDANÇA DE AÇÃO
                    if (typeof action === "undefined" || action === null) {
                        action = contraste;
                    }
        
                    // REMOVENDO TRANSIÇÕES MOMENTANEAMENTE
                    body.addClass("transition0s");
                    setTimeout(function() {
                        body.removeClass("transition0s");
                    }, 100);
        
                    // ANALISANDO AÇÃO
                    if (action || action === "true") {
                        body.addClass("contraste");
        
                        // SETANDO LOCAL STORAGE
                        localStorage.setItem("sw_acessibilidade_contraste", action);                
                    }
                    else {
                        body.removeClass("contraste");
        
                        // RESETANDO LOCAL STORAGE
                        localStorage.removeItem("sw_acessibilidade_contraste");
                    }
        
                    // ACIONANDO FUNÇÃO SET ACESSIBILIDADE
                    sw_deb_acessibilidade = sw_debounce(set_acessibilidade, 200, sw_deb_acessibilidade);
                }
            }
        
            // FUNÇÃO DESATIVA TRANSIÇÕES
            if (typeof sw_desativa_transicoes !== "function") {
                function sw_desativa_transicoes(action) {
                    var contents = $("body >*");
                    var transicoes = (localStorage.getItem("sw_acessibilidade_transicoes") !== null) ? localStorage.getItem("sw_acessibilidade_transicoes") : false;
        
                    // ANALISANDO SE HÁ MUDANÇA DE AÇÃO
                    if (typeof action === "undefined" || action === null) {
                        action = transicoes;
                    }
        
                    // ANALISANDO AÇÃO
                    if (action || action === "true") {
                        contents.addClass("transition0s");
        
                        // SETANDO LOCAL STORAGE
                        localStorage.setItem("sw_acessibilidade_transicoes", true);
                    }
                    else {
                        contents.removeClass("transition0s");
        
                        // RESETANDO LOCAL STORAGE
                        localStorage.removeItem("sw_acessibilidade_transicoes");
                    }
        
                    // ACIONANDO FUNÇÃO SET ACESSIBILIDADE
                    sw_deb_acessibilidade = sw_debounce(set_acessibilidade, 500, sw_deb_acessibilidade);
                }
            }
        
            // FUNÇÃO HABILITA VLIBRAS
            if (typeof sw_vlibras !== "function") {
                function sw_vlibras(action) {
                    var vlibras = (localStorage.getItem("sw_acessibilidade_vlibras") !== null) ? localStorage.getItem("sw_acessibilidade_vlibras") : false;
                    var vlibras_include = $("#vlibras_include");
        
                    // ANALISANDO SE HÁ MUDANÇA DE AÇÃO
                    if (typeof action === "undefined" || action === null) {
                        action = vlibras;
                    }
        
                    // ANALISANDO AÇÃO
                    if (action || action === "true") {
                        if (vlibras_include.find("div[vw-access-button]").hasClass("active")) {
                            vlibras_include.find("div[vw-access-button]").trigger("click");
                        }
        
                        // SETANDO LOCAL STORAGE
                        localStorage.setItem("sw_acessibilidade_vlibras", action);                
                    }
                    else {
                        if (!vlibras_include.find("div[vw-access-button]").hasClass("active")) {
                            vlibras_include.find("img.vpw-settings-btn-close").trigger("click");
                        }
        
                        // RESETANDO LOCAL STORAGE
                        localStorage.removeItem("sw_acessibilidade_vlibras");
                    }
        
                    // ACIONANDO FUNÇÃO SET ACESSIBILIDADE
                    sw_deb_acessibilidade = sw_debounce(set_acessibilidade, 500, sw_deb_acessibilidade);
                }
            }
        
            // FUNÇÃO SET ACESSIBILIDADE // INDICA AO USUÁRIO QUE HÁ FUNÇÕES DE ACESSIBILIDADES ATIVAS OU RESETA FUNÇÕES
            if (typeof set_acessibilidade !== "function") {
                function set_acessibilidade(reset)
                {
                    // CAPTURANDO ATRIBUTOS
                    var fonte = (localStorage.getItem("sw_acessibilidade_fonte") !== null) ? localStorage.getItem("sw_acessibilidade_fonte") : 0;
                    var contraste = (localStorage.getItem("sw_acessibilidade_contraste") !== null) ? localStorage.getItem("sw_acessibilidade_contraste") : false;
                    var transicoes = (localStorage.getItem("sw_acessibilidade_transicoes") !== null) ? localStorage.getItem("sw_acessibilidade_transicoes") : false;
                    var vlibras = (localStorage.getItem("sw_acessibilidade_vlibras") !== null) ? localStorage.getItem("sw_acessibilidade_vlibras") : false;
        
                    // BOTÕES
                    var sw_btn_menu_acessibilidade = $("#sw_btn_menu_acessibilidade");
                    var sw_btn_aumentar_acessibilidade = $("#sw_btn_aumentar_acessibilidade");
                    var sw_btn_diminuir_acessibilidade = $("#sw_btn_diminuir_acessibilidade");
                    var sw_btn_contraste_acessibilidade = $("#sw_btn_contraste_acessibilidade");
                    var sw_btn_transicoes_acessibilidade = $("#sw_btn_transicoes_acessibilidade");
                    var sw_btn_vlibras_acessibilidade = $("#sw_btn_vlibras_acessibilidade");
                    var sw_btn_reset_acessibilidade = $("#sw_btn_reset_acessibilidade");
        
                    // ANALISANDO RESET
                    if (reset === true) {
                        fonte = 0;
                        contraste = false;
                        transicoes = false;
                        vlibras = false;
        
                        // RESETANDO ACESSIBILIDADE
                        sw_altera_fonts(fonte);
                        sw_contraste(contraste);
                        sw_desativa_transicoes(transicoes);
                        sw_vlibras(vlibras);
                    }
        
                    // BOTÃO DE RESET
                    if (sw_btn_reset_acessibilidade.length) {
                        if (fonte != 0 || contraste || transicoes || vlibras) {
                            sw_btn_reset_acessibilidade.show();
                        }
                        else {
                            sw_btn_reset_acessibilidade.hide();
                        }
                    }
        
                    // ANALISANDO FUNÇÕES INDIVIDUALMENTE
                    var qtde_funcoes = 0;
        
                    // AUMENTAR / DIMINUIR FONTE
                    if (fonte > 0) {
                        qtde_funcoes++;
                        sw_btn_aumentar_acessibilidade.find(".sw_btn_acessibilidade").attr("data-acessibilidade", fonte).addClass("ativa");
                        sw_btn_diminuir_acessibilidade.find(".sw_btn_acessibilidade").removeAttr("data-acessibilidade").removeClass("ativa");
                    }
                    else if (fonte < 0) {
                        qtde_funcoes++;
                        sw_btn_diminuir_acessibilidade.find(".sw_btn_acessibilidade").attr("data-acessibilidade", fonte).addClass("ativa");
                        sw_btn_aumentar_acessibilidade.find(".sw_btn_acessibilidade").removeAttr("data-acessibilidade").removeClass("ativa");
                    }
                    else {
                        sw_btn_aumentar_acessibilidade.find(".sw_btn_acessibilidade").removeAttr("data-acessibilidade").removeClass("ativa");
                        sw_btn_diminuir_acessibilidade.find(".sw_btn_acessibilidade").removeAttr("data-acessibilidade").removeClass("ativa");
                    }
        
                    // CONTRASTE
                    if (contraste) {
                        qtde_funcoes++;
                        sw_btn_contraste_acessibilidade.find(".sw_btn_acessibilidade").attr("data-acessibilidade", 1).addClass("ativa");
                    }
                    else {
                        sw_btn_contraste_acessibilidade.find(".sw_btn_acessibilidade").removeAttr("data-acessibilidade").removeClass("ativa");
                    }
        
                    // TRANSIÇÕES
                    if (transicoes) {
                        qtde_funcoes++;
                        sw_btn_transicoes_acessibilidade.find(".sw_btn_acessibilidade").attr("data-acessibilidade", 1).addClass("ativa");
                    }
                    else {
                        sw_btn_transicoes_acessibilidade.find(".sw_btn_acessibilidade").removeAttr("data-acessibilidade").removeClass("ativa");
                    }
        
                    // VLIBRAS
                    if (vlibras) {
                        qtde_funcoes++;
                        sw_btn_vlibras_acessibilidade.find(".sw_btn_acessibilidade").attr("data-acessibilidade", 1).addClass("ativa");
                    }
                    else {
                        sw_btn_vlibras_acessibilidade.find(".sw_btn_acessibilidade").removeAttr("data-acessibilidade").removeClass("ativa");
                    }
        
                    // ANALISANDO QUANTIDADE DE FUNÇÕES
                    if (qtde_funcoes > 0) {
                        sw_btn_menu_acessibilidade.addClass("ativa").find(".sw_icone_acessibilidade").attr("data-acessibilidade", qtde_funcoes);
                    }
                    else {
                        sw_btn_menu_acessibilidade.removeClass("ativa").find(".sw_icone_acessibilidade").removeAttr("data-acessibilidade");
                    }
        
        
                    // ATRIBUINDO TEXTO AOS BOTÕES
                    if (sw_btn_contraste_acessibilidade.length) {
                        var txt_btn = (contraste === false) ? "Alto contraste" : "Baixo contraste";
                        sw_btn_contraste_acessibilidade.attr("title", txt_btn);
                        sw_btn_contraste_acessibilidade.find(".sw_txt_btn_acessibilidade").text(txt_btn);
                    }
                    if (sw_btn_transicoes_acessibilidade.length) {
                        var txt_btn = (transicoes == false) ? "Remover transições" : "Ativar transições";
                        sw_btn_transicoes_acessibilidade.attr("title", txt_btn);
                        sw_btn_transicoes_acessibilidade.find(".sw_txt_btn_acessibilidade").text(txt_btn);
                    }
                    if (sw_btn_vlibras_acessibilidade.length) {
                        var txt_btn = (vlibras == false) ? "Ativar VLibras" : "Desativar VLibras";
                        sw_btn_vlibras_acessibilidade.attr("title", txt_btn);
                        sw_btn_vlibras_acessibilidade.find(".sw_txt_btn_acessibilidade").text(txt_btn);
                    }
                }
            }
        
            // FUNÇÃO DEBOUNCE
            if (typeof sw_debounce !== "function") {
                function sw_debounce(funcao, time, debounce_timeout) {
                    clearTimeout(debounce_timeout);
        
                    // A CHAMADA DESSA FUNÇÃO DEVE SER RETORNADA PARA A VARIÁVEL 'debounce_timeout'
                    // Ex: var debounce_timeout = sw_debounce(funcao, time, debounce_timeout)
                    return debounce_timeout = setTimeout(funcao, time);
                }
            }
            var sw_deb_acessibilidade;
        
        
            /* ============================================================================================
                ACIONANDO FUNÇÕES ANTES DE CARREGAR A PÁGINA
            ============================================================================================ */
        
            // CONTRASTE
            sw_contraste(null);
        
            // TRANSIÇÕES
            sw_desativa_transicoes(null);
        
        
            /* ============================================================================================
                ACIONANDO FUNÇÕES AO CARREGAR A PÁGINA
            ============================================================================================ */
            $(document).ready(function() {
        
        
        
                /* ============================================================================================
                    ACESSIBILIDADE ---- ANTIGO --- REMOVER DEPOIS DE TODOS ALTERADOS
                ============================================================================================ */
        
                // BOTÃO DE AUMENTAR A FONTE
                $(".aumentar").click(function () {
                    $("*").each(function() {
                        
                        if ( (!$(this).parents(".tamanho_fixo").length) && ($(this).css("font-size").replace(/\D/g, "") > 0) && (!$(this).hasClass("tamanho_fixo")) )
                        {
                            var size = $(this).css('font-size');
                
                            size = size.replace('px', '');
                            size = parseInt(size) + 1;
                            
                            if(size < 18)
                            {
                                $(this).animate({'font-size' : size + 'px'});
                            }
                        }
                    }); 
                });
                
                // BOTÃO DE DIMINUIR A FONTE
                $(".diminuir").click(function () {
                    $("*").each(function() {
        
                        if ( (!$(this).parents(".tamanho_fixo").length) && ($(this).css("font-size").replace(/\D/g, "") > 0) && (!$(this).hasClass("tamanho_fixo")) )
                        {		 	
                            var size = $(this).css('font-size');
                
                            size = size.replace('px', '');
                            size = parseInt(size) - 1;
                            if(size > 10)
                            {
                                $(this).animate({'font-size' : size + 'px'});
                            }
                        }
                    });
                });
        
                // BOTÃO DE CONTRASTE DE COR
                $("#contraste").click(function () {
                
                    if($("body").hasClass("contraste"))
                    {
                        $("body").removeClass("contraste");	
                        $("body").css("background","#FFFFFF");
                        $("#logo_branca").hide();
                    }
                    else
                    {
                        $("body").addClass("contraste");
                        $("#logo_branca").show();
                    }
                });
        
                // BOTÃO IR PARA BUSCA
                $("#irbusca").click(function () {
                    $("#e_campo_busca").focus();
                });
        
                // VLIBRAS
                $(".vlibras").click(function() {
                    $("#vlibras_include div[vw-access-button]").trigger("click");
                });
        
        
        
        
        
        
                // // SW ACESSIBILIDADE
                // var sw_parametros_acessibilidade = {
                //     layout: "a1"
                // };
                // // ANALISANDO SE HÁ PARÂMETROS EXCLUSIVOS DO LAYOUT 
                // if (typeof e_parametros_acessibilidade === "object") {
                //     sw_parametros_acessibilidade = e_parametros_acessibilidade;
                // }
        
                // // ACIONANDO FUNÇÃO DE ACESSIBILIDADE
                // sw_acessibilidade(sw_parametros_acessibilidade)
        
        
                // ACIONANDO FUNÇÃO DE ACESSIBILIDADE AO FIM DO CARREGAMENTO DA PÁGINA
                $(window).on("load", function() {
                    // ALTERAR FONTS
                    sw_altera_fonts(null);
        
                    // VLIBRAS
                    sw_vlibras(null);
                });
        
                // SETANDO ATRIBUTOS
                sw_deb_acessibilidade = sw_debounce(set_acessibilidade, 500, sw_deb_acessibilidade);
        
                 
        
            });