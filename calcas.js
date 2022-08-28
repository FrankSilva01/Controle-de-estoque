
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
// let tamanhos = [tamanhoP, tamanhoM, tamanhoG, tamanhoGg, tamanhoXg, tamanhoXxg];
// let tamanho = document.getElementById('tamanho').value;

// Quantidade do estoque de cada tamanho

let totalEstoqueP = document.getElementById('totalEstoqueP').value;
let totalEstoqueM = document.getElementById('totalEstoqueM').value;
let totalEstoqueG = document.getElementById('totalEstoqueG').value;
let totalEstoqueGg = document.getElementById('totalEstoqueGg').value;
let totalEstoqueXg = document.getElementById('totalEstoqueXg').value;
let totalEstoqueXxg = document.getElementById('totalEstoqueXxg').value;
let totalEstoqueXxgg = document.getElementById('totalEstoqueXxgg').value;





function mostrarTabelaCalcaAzul() {
    calcaAzul.style.display = "block";
}

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

// Adicionar itens na quantidade de cada tamanho na tabela
             function alterarTamanhoP() {
                tamanhoP.onclick = function() {
              count+=1;
            document.getElementById('totalEstoqueP').innerHTML = count;
                }  
                }
                    function alterarTamanhoM() {    
                        tamanhoM.onclick = function() {
                    count+=1;
                    document.getElementById('totalEstoqueM').innerHTML = count;
                        }  
                        }

                        function alterarTamanhoG() {            
                            tamanhoG.onclick = function() {
                        count+=1;
                        document.getElementById('totalEstoqueG').innerHTML = count;
                            }  
                            }

                            function alterarTamanhoGg() {             
                                tamanhoGg.onclick = function() {
                            count+=1;
                            document.getElementById('totalEstoqueGg').innerHTML = count;
                                }  
                                }

                                function alterarTamanhoXg() {    
                                    tamanhoXg.onclick = function() {
                                count+=1;
                                document.getElementById('totalEstoqueXg').innerHTML = count;
                                    }  
                                    }

                                    function alterarTamanhoXxg() {
                                        tamanhoXxg.onclick = function() {
                                    count+=1;
                                    document.getElementById('totalEstoqueXxg').innerHTML = count;
                                        }  
                                        }

                                        function alterarTamanhoXxgg() {   
                                            tamanhoXxgg.onclick = function() {
                                        count+=1;
                                        document.getElementById('totalEstoqueXxgg').innerHTML = count;
                                            }  
                                            }
         
// Remover itens do estoque de cada tamanho da tabela

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
     
 

