        
        let quantidade = document.getElementById('quantidade');
        let estoque = document.getElementById('protetorEstoque').value;
        let adicionar = document.getElementById('adicionar');
        let remover = document.getElementById('diminuir')
        let resetar = document.getElementById('resetar');
        let count = 0;


        function adicionarAoEstoque() {
                adicionar.onclick = function() {
            count+=1;
            document.getElementById('total').innerHTML = count;
                }  
                }

      function retirarDoEstoque() {
         remover.onclick = function() {
                if(count <= 0) {
                    alert('Estoque Zerado!')
                } else {
                    document.getElementById('total').innerHTML = --count;
                }
             }  
          }

          function zerarEstoque() {
            resetar.onclick = function() {
               document.getElementById('total').innerHTML = count = 0;
            }

          }