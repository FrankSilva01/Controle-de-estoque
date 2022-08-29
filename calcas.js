
const calcaAzul = document.getElementById('calcaAzul');
let reset = document.getElementById('resetar');
let count = 0;
let adicionar = document.getElementById('adicionar');

// Alterar valores do estoque por tamanho
let tamanhoP = document.getElementById('tamanhoP');
let tamanhoM = document.getElementById('tamanhoM');
let tamanhoG = document.getElementById('tamanhoG');
let tamanhoGg = document.getElementById('tamanhoGg');
let tamanhoXg = document.getElementById('tamanhoXg');
let tamanhoXxg = document.getElementById('tamanhoXxg');
let tamanhoXxgg = document.getElementById('tamanhoXxgg');


//Váriaveis pegando a quantidade do estoque de cada tamanho

let totalEstoqueP = document.getElementById('totalEstoqueP').value;
let totalEstoqueM = document.getElementById('totalEstoqueM').value;
let totalEstoqueG = document.getElementById('totalEstoqueG').value;
let totalEstoqueGg = document.getElementById('totalEstoqueGg').value;
let totalEstoqueXg = document.getElementById('totalEstoqueXg').value;
let totalEstoqueXxg = document.getElementById('totalEstoqueXxg').value;
let totalEstoqueXxgg = document.getElementById('totalEstoqueXxgg').value;





// Função para mostrar a tabela de calças da cor Azul e acrescentar ao estoque de acordo com o botão de tamanho clicado.
function mostrarTabelaCalcaAzul() {
    calcaAzul.style.display = "block";

     
    let estoqueTotalP = 0;
    let estoqueTotalM = 0;
    let estoqueTotalG = 0;
    let estoqueTotalGg = 0;
    let estoqueTotalXg = 0;
    let estoqueTotalXxg = 0;
    let estoqueTotalXxgg = 0;
    
    tamanhoP.onclick = function() {
        
        estoqueTotalP+=1;
document.getElementById('totalEstoqueP').innerHTML = estoqueTotalP;
    }  
    
        tamanhoM.onclick = function() { 
           
            estoqueTotalM+=1;     
    document.getElementById('totalEstoqueM').innerHTML = estoqueTotalM;
        }  
       
            tamanhoG.onclick = function() {
                estoqueTotalG+=1;
        document.getElementById('totalEstoqueG').innerHTML = estoqueTotalG;
            }      
             
                tamanhoGg.onclick = function() {
                    estoqueTotalGg+=1;
            document.getElementById('totalEstoqueGg').innerHTML = estoqueTotalGg;
                }  
              
                    tamanhoXg.onclick = function() {
                        estoqueTotalXg+=1;
                document.getElementById('totalEstoqueXg').innerHTML = estoqueTotalXg;
                    }  
                
                        tamanhoXxg.onclick = function() {
                            estoqueTotalXxg+=1;
                    document.getElementById('totalEstoqueXxg').innerHTML = estoqueTotalXxg;
                        }  
                                            
                            tamanhoXxgg.onclick = function() {
                                estoqueTotalXxgg+=1;
                        document.getElementById('totalEstoqueXxgg').innerHTML = estoqueTotalXxgg;
                            }     
                        }           


//**NÃO ESTA FUNCIONANDO COMO DEVIA, IREI CORRIGIR EM BREVE**
// Função para resetar os itens da tabela
function zerarEstoque() {
    resetar.onclick = function() {
       document.getElementById('totalEstoqueP').innerHTML = count = 0;
        document.getElementById('totalEstoqueM').innerHTML = count = 0;
         document.getElementById('totalEstoqueG').innerHTML = count = 0;
          document.getElementById('totalEstoqueGg').innerHTML = count = 0;
            document.getElementById('totalEstoqueXg').innerHTML = count = 0;
               document.getElementById('totalEstoqueXxg').innerHTML = count = 0;
               document.getElementById('totalEstoqueXxgg').innerHTML = count = 0;
         }
     }

         
// **NÃO FUNCIONAL NO MOMENTO**
// Remover  os itens do estoque de cada tamanho da tabela

function diminuirTamanhoP() {
   
    tamanhoP.onclick = function() {
count;
document.getElementById('totalEstoqueP').innerHTML = --count;
    }  
    }
        function diminuirTamanhoM() {
            tamanhoM.onclick = function() {
        count;
        document.getElementById('totalEstoqueM').innerHTML = --count;
            }  
            }

            function diminuirTamanhoG() {
                tamanhoG.onclick = function() {
            count;
            document.getElementById('totalEstoqueG').innerHTML = --count;
                }  
                }

                function diminuirTamanhoGg() {
                    tamanhoGg.onclick = function() {
                count;
                document.getElementById('totalEstoqueGg').innerHTML = --count;
                    }  
                    }

                    function diminuirTamanhoXg() {
                        tamanhoXg.onclick = function() {
                    count;
                    document.getElementById('totalEstoqueXg').innerHTML = --count;
                        }  
                        }

                        function diminuirTamanhoXxg() {
                            tamanhoXxg.onclick = function() {
                        count;
                        document.getElementById('totalEstoqueXxg').innerHTML = --count;
                            }  
                            }

                            function diminuirTamanhoXxgg() {
                                tamanhoXxgg.onclick = function() {
                            count;
                            document.getElementById('totalEstoqueXxgg').innerHTML = --count;
                                }  
                                }
     
 

