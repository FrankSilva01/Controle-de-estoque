
// Váriaveis para exibição de cada tabela de cada cor de camiseta
const camisetaRoyal = document.getElementById('camisetasRoyal');
const camisetaCinza = document.getElementById('camisetasCinza');
const camisetaMarinho = document.getElementById('camisetasMarinho');
const camisetasBranca = document.getElementById('camisetasBranca');
const camisetasPreto = document.getElementById('camisetasPreto');

let resetar = document.getElementById('reset');




// Funções para mostrar cada tabela selecionada

// Função para mostrar a tabela correspondente da cor AZUL ROYAL e acrescentar ao estoque de acordo com o tamanho apertado no botão do painel 
function mostrarTabelaRoyal() {
    camisetaRoyal.style.display = "block";
    camisetaCinza.style.display = "none";
    camisetaMarinho.style.display = "none";
    camisetasPreto.style.display = "none";
    camisetasBranca.style.display = "none";

    
    let estoqueTotalP = 0;
    let estoqueTotalM = 0;
    let estoqueTotalG = 0;
    let estoqueTotalGg = 0;
    let estoqueTotalXg = 0;
    let estoqueTotalXxg = 0;
    let estoqueTotalXxgg = 0;
    
    tamanhoP.onclick = function() {
        
        estoqueTotalP+=1;
document.getElementById('totalEstoquePRoyal').innerHTML = estoqueTotalP;
    }  
    
        tamanhoM.onclick = function() { 
           
            estoqueTotalM+=1;     
    document.getElementById('totalEstoqueMRoyal').innerHTML = estoqueTotalM;
        }  
       
            tamanhoG.onclick = function() {
                estoqueTotalG+=1;
        document.getElementById('totalEstoqueGRoyal').innerHTML = estoqueTotalG;
            }      
             
                tamanhoGg.onclick = function() {
                    estoqueTotalGg+=1;
            document.getElementById('totalEstoqueGgRoyal').innerHTML = estoqueTotalGg;
                }  
              
                    tamanhoXg.onclick = function() {
                        estoqueTotalXg+=1;
                document.getElementById('totalEstoqueXgRoyal').innerHTML = estoqueTotalXg;
                    }  
                
                        tamanhoXxg.onclick = function() {
                            estoqueTotalXxg+=1;
                    document.getElementById('totalEstoqueXxgRoyal').innerHTML = estoqueTotalXxg;
                        }  
                                            
                            tamanhoXxgg.onclick = function() {
                                estoqueTotalXxgg+=1;
                        document.getElementById('totalEstoqueXxggRoyal').innerHTML = estoqueTotalXxgg;
                            }     
                        }                    


// Função para mostrar a tabela correspondente da cor CINZA e acrescentar ao estoque de acordo com o tamanho apertado no botão do painel 
function mostrarTabelaCinza() {
    camisetaCinza.style.display = "block";
    camisetaRoyal.style.display = "none";
    camisetaMarinho.style.display = "none";
    camisetasBranca.style.display = "none";
    camisetasPreto.style.display = "none";

    let estoqueTotalP = 0;
    let estoqueTotalM = 0;
    let estoqueTotalG = 0;
    let estoqueTotalGg = 0;
    let estoqueTotalXg = 0;
    let estoqueTotalXxg = 0;
    let estoqueTotalXxgg = 0;

        tamanhoP.onclick = function() {
            estoqueTotalP;
             document.getElementById('totalEstoquePCinza').innerHTML = ++estoqueTotalP;
        }  
        
        tamanhoM.onclick = function() {
            estoqueTotalM;
            
        document.getElementById('totalEstoqueMCinza').innerHTML = ++estoqueTotalM;
            }  
           
             tamanhoG.onclick = function() {
                estoqueTotalG++;
            document.getElementById('totalEstoqueGCinza').innerHTML = estoqueTotalG;
                }      
                 
                    tamanhoGg.onclick = function() {
                        estoqueTotalGg++;
                 document.getElementById('totalEstoqueGgCinza').innerHTML = estoqueTotalGg;
                    }  
                  
                        tamanhoXg.onclick = function() {
                            estoqueTotalXg++;
                    document.getElementById('totalEstoqueXgCinza').innerHTML = estoqueTotalXg;
                        }  
                    
                            tamanhoXxg.onclick = function() {
                                estoqueTotalXxg++;
                        document.getElementById('totalEstoqueXxgCinza').innerHTML = estoqueTotalXxg;
                            }  
                                                
                                tamanhoXxgg.onclick = function() {
                                    estoqueTotalXxgg++;
                            document.getElementById('totalEstoqueXxggCinza').innerHTML = estoqueTotalXxgg;
                                }     
                            }        
                            


// Função para mostrar a tabela correspondente da cor AZUL MARINHO e acrescentar ao estoque de acordo com o tamanho apertado no botão do painel 
function mostrarTabelaMarinho() {
    camisetaMarinho.style.display = "block";
    camisetaCinza.style.display = "none";
    camisetaRoyal.style.display = "none";
    camisetasBranca.style.display = "none";
    camisetasPreto.style.display = "none";  

    let estoqueTotalP = 0;
    let estoqueTotalM = 0;
    let estoqueTotalG = 0;
    let estoqueTotalGg = 0;
    let estoqueTotalXg = 0;
    let estoqueTotalXxg = 0;
    let estoqueTotalXxgg = 0;

                           
                                        tamanhoP.onclick = function() {
                                            estoqueTotalP+=1;
                                    document.getElementById('totalEstoquePMarinho').innerHTML = estoqueTotalP;
                                        }  
                                        
                                            tamanhoM.onclick = function() {
                                                estoqueTotalM+=1;
                                        document.getElementById('totalEstoqueMMarinho').innerHTML = estoqueTotalM;
                                            }  
                                        
                                                tamanhoG.onclick = function() {
                                                    estoqueTotalG+=1;
                                            document.getElementById('totalEstoqueGMarinho').innerHTML = estoqueTotalG;
                                                }      
                                                
                                                    tamanhoGg.onclick = function() {
                                                        estoqueTotalGg+=1;
                                                document.getElementById('totalEstoqueGgMarinho').innerHTML = estoqueTotalGg;
                                                    }  
                                                
                                                        tamanhoXg.onclick = function() {
                                                    estoqueTotalXg+=1;
                                                    document.getElementById('totalEstoqueXgMarinho').innerHTML = estoqueTotalXg;
                                                        }  
                                                    
                                                            tamanhoXxg.onclick = function() {
                                                        estoqueTotalXxg+=1;
                                                        document.getElementById('totalEstoqueXxgMarinho').innerHTML = estoqueTotalXxg;
                                                            }  
                                                                                
                                                                tamanhoXxgg.onclick = function() {
                                                            estoqueTotalXxgg+=1;
                                                            document.getElementById('totalEstoqueXxggMarinho').innerHTML = estoqueTotalXxgg;
                                                                }     
                                                            }    


// Função para mostrar a tabela correspondente da cor BRANCA e acrescentar ao estoque de acordo com o tamanho apertado no botão do painel 

function mostrarTabelaBranca() {
    camisetasBranca.style.display = "block";
    camisetaMarinho.style.display = "none";
    camisetaCinza.style.display = "none";
    camisetaRoyal.style.display = "none";
    camisetasPreto.style.display = "none"; 

    let estoqueTotalP = 0;
    let estoqueTotalM = 0;
    let estoqueTotalG = 0;
    let estoqueTotalGg = 0;
    let estoqueTotalXg = 0;
    let estoqueTotalXxg = 0;
    let estoqueTotalXxgg = 0;

    tamanhoP.onclick = function() {
estoqueTotalP+=1;
document.getElementById('totalEstoquePBranca').innerHTML = estoqueTotalP;
    }  
    
        tamanhoM.onclick = function() {
    estoqueTotalM+=1;
    document.getElementById('totalEstoqueMBranca').innerHTML = estoqueTotalM;
        }  
       
            tamanhoG.onclick = function() {
        estoqueTotalG+=1;
        document.getElementById('totalEstoqueGBranca').innerHTML = estoqueTotalG;
            }      
             
                tamanhoGg.onclick = function() {
            estoqueTotalGg+=1;
            document.getElementById('totalEstoqueGgBranca').innerHTML = estoqueTotalGg;
                }  
              
                    tamanhoXg.onclick = function() {
                estoqueTotalXg+=1;
                document.getElementById('totalEstoqueXgBranca').innerHTML = estoqueTotalXg;
                    }  
                
                        tamanhoXxg.onclick = function() {
                    estoqueTotalXxg+=1;
                    document.getElementById('totalEstoqueXxgBranca').innerHTML = estoqueTotalXxg;
                        }  
                                            
                            tamanhoXxgg.onclick = function() {
                        estoqueTotalXxgg+=1;
                        document.getElementById('totalEstoqueXxggBranca').innerHTML = estoqueTotalXxgg;
                            }     
                        }         



// Função para mostrar a tabela correspondente da cor PRETA e acrescentar ao estoque de acordo com o tamanho apertado no botão do painel 
function mostrarTabelaPreto() {
    camisetasPreto.style.display = "block"; 
    camisetasBranca.style.display = "none";
    camisetaMarinho.style.display = "none";
    camisetaCinza.style.display = "none";
    camisetaRoyal.style.display = "none";
    
    let estoqueTotalP = 0;
    let estoqueTotalM = 0;
    let estoqueTotalG = 0;
    let estoqueTotalGg = 0;
    let estoqueTotalXg = 0;
    let estoqueTotalXxg = 0;
    let estoqueTotalXxgg = 0;
  
    tamanhoP.onclick = function() {
estoqueTotalP+=1;
document.getElementById('totalEstoquePPreto').innerHTML = estoqueTotalP;
    }  
    
        tamanhoM.onclick = function() {
    estoqueTotalM+=1;
    document.getElementById('totalEstoqueMPreto').innerHTML = estoqueTotalM;
        }  
       
            tamanhoG.onclick = function() {
        estoqueTotalG+=1;
        document.getElementById('totalEstoqueGPreto').innerHTML = estoqueTotalG;
            }      
             
                tamanhoGg.onclick = function() {
            estoqueTotalGg+=1;
            document.getElementById('totalEstoqueGgPreto').innerHTML = estoqueTotalGg;
                }  
              
                    tamanhoXg.onclick = function() {
                estoqueTotalXg+=1;
                document.getElementById('totalEstoqueXgPreto').innerHTML = estoqueTotalXg;
                    }  
                
                        tamanhoXxg.onclick = function() {
                    estoqueTotalXxg+=1;
                    document.getElementById('totalEstoqueXxgPreto').innerHTML = estoqueTotalXxg;
                        }  
                                            
                            tamanhoXxgg.onclick = function() {
                        estoqueTotalXxgg+=1;
                        document.getElementById('totalEstoqueXxggPreto').innerHTML = estoqueTotalXxgg;
                            }     
                        }     



    //**AINDA NÃO ESTÁ FUNCIONAL**

    // Função para zerar toda a quantidade no estoque de todos os itens, 

    function resetarEstoque() {
    function zerarEstoqueMarinho() {
        resetar.onclick = function() {
           document.getElementById('totalEstoquePMarinho').innerHTML = count = 0;
            document.getElementById('totalEstoqueMMarinho').innerHTML = count = 0;
             document.getElementById('totalEstoqueGMarinho').innerHTML = count = 0;
              document.getElementById('totalEstoqueGgMarinho').innerHTML = count = 0;
                document.getElementById('totalEstoqueXgMarinho').innerHTML = count = 0;
                   document.getElementById('totalEstoqueXxgMarinho').innerHTML = count = 0;
                   document.getElementById('totalEstoqueXxggMarinho').innerHTML = count = 0;
             }
         }

         function zerarEstoqueCinza() {
            resetar.onclick = function() {
               document.getElementById('totalEstoquePCinza').innerHTML = count = 0;
                document.getElementById('totalEstoqueMCinza').innerHTML = count = 0;
                 document.getElementById('totalEstoqueGCinza').innerHTML = count = 0;
                  document.getElementById('totalEstoqueGgCinza').innerHTML = count = 0;
                    document.getElementById('totalEstoqueXgCinza').innerHTML = count = 0;
                       document.getElementById('totalEstoqueXxgCinza').innerHTML = count = 0;
                       document.getElementById('totalEstoqueXxggCinza').innerHTML = count = 0;
                 }
             }

             function zerarEstoqueRoyal() {
                resetar.onclick = function() {
                   document.getElementById('totalEstoquePRoyal').innerHTML = count = 0;
                    document.getElementById('totalEstoqueMRoyal').innerHTML = count = 0;
                     document.getElementById('totalEstoqueGRoyal').innerHTML = count = 0;
                      document.getElementById('totalEstoqueGgRoyal').innerHTML = count = 0;
                        document.getElementById('totalEstoqueXgRoyal').innerHTML = count = 0;
                           document.getElementById('totalEstoqueXxgRoyal').innerHTML = count = 0;
                           document.getElementById('totalEstoqueXxggRoyal').innerHTML = count = 0;
                     }
                 }

                 function zerarEstoqueBranca() {
                    resetar.onclick = function() {
                       document.getElementById('totalEstoquePBranca').innerHTML = count = 0;
                        document.getElementById('totalEstoqueMBranca').innerHTML = count = 0;
                         document.getElementById('totalEstoqueGBranca').innerHTML = count = 0;
                          document.getElementById('totalEstoqueGgBranca').innerHTML = count = 0;
                            document.getElementById('totalEstoqueXgBranca').innerHTML = count = 0;
                               document.getElementById('totalEstoqueXxgBranca').innerHTML = count = 0;
                               document.getElementById('totalEstoqueXxggBranca').innerHTML = count = 0;
                         }
                     }

                     function zerarEstoquePreto() {
                        resetar.onclick = function() {
                           document.getElementById('totalEstoquePPreto').innerHTML = count = 0;
                            document.getElementById('totalEstoqueMPreto').innerHTML = count = 0;
                             document.getElementById('totalEstoqueGPreto').innerHTML = count = 0;
                              document.getElementById('totalEstoqueGgPreto').innerHTML = count = 0;
                                document.getElementById('totalEstoqueXgPreto').innerHTML = count = 0;
                                   document.getElementById('totalEstoqueXxgPreto').innerHTML = count = 0;
                                   document.getElementById('totalEstoqueXxggPreto').innerHTML = count = 0;
                             }
                         }
        
                        }  
