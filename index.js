// let reset = document.getElementById('resetar');
// var quantia = document.getElementById('quantia').value;
// let total1 = document.getElementById('total').value;
// let tipo = document.getElementById('tipo').value;
// let tamanho = document.getElementById('tamanho').value;
// let cor = document.getElementById('cor').value;
// let quantidade = document.getElementById('quantidade');
// let count = 0; 
// let inicio = document.getElementById('inicio');



//     function mostrarInicio() {
//         inicio.style.display = "block";
//     }


    // Armazenagem dos itens no storage

    // let item = {
    //     tipo: tipo,
    //     tamanho: tamanho,
    //     quantia: quantia,
    //     cor: cor,
    //            }

//  valorQuantia = Number(item.quantia);

// function resetar () {
//     document.getElementById('quantia').value = '';
//     document.getElementsByClassName('form-select').value = '';
//     document.getElementsByClassName('form-check-input').value = '';
//     document.getElementsByClassName('total').value = 0;
//     item.quantia = 0;
//     total1 = 0;

// }


    // function cadastrarItem(tipo, tamanho, quantia, cor) {
    //     let novoItem = {tipo:tipo, tamanho:tamanho, quantia:quantia, cor:cor};
    
    //     if (typeof(Storage) !== "undefined") {
    //         let item = localStorage.getItem("item");
            //if (item == null) item = []; // Nenhum item ainda foi cadastrado
            // else item = JSON.parse(item);
            // item.push(novoItem); // Adiciona um novo item
            // localStorage.setItem("item",JSON.stringify(item))
            // alert("Foram cadastradas com sucesso "+ item.quantia +" unidades do item "+ item.tipo+"!");
            // atualizarTotalEstoque("totalEstoque");
//             location.reload();
//         } 
//         return false;
// }

// ALTERA TOTAL DE ACORDO COM A QUANTIDADE DIGITADA
// document.getElementById('quantia').onblur = function () {

//     let total = document.getElementById('quantia').value;
  
    // IF PARA VERIFICAR SE ESTOQUE ESTA NEGATIVO OU ZERADO SE TRUE EXIBE MENSAGEM, ESTOQUE ZERADO
 
    // if (total === ''){
    //     document.getElementById('total').innerHTML = ' Digite uma quantidade '
    // }
    // else if (total >= 0) {
    //  document.getElementById('total').innerHTML = 'Foi adicionado ' + document.getElementById('quantia').value + ' ' + document.getElementById('tipo').value  + ' ' + document.getElementById('cor').value + ' ' + tamanho + '' + ' ' + ' no estoque';
    // document.getElementById("quantidade").innerHTML = ` ${count} `;
    // }

    // }
   

//  FUNÇÕES DE ACRESCENTAR / DIMINUIR / RESETAR


// document.getElementById("adicionar").onclick = function() {
// count = valorQuantia ++; 
// if (tamanho === 'gg')
// document.getElementById("total").innerHTML = 'Foi adicionado ' +  ` ${count} ` + document.getElementById('tipo').value + tamanho + '' + document.getElementById('cor').value + '' + ' no estoque';
// document.getElementById("quantidade").innerHTML = valorQuantia +  '' +tamanho;
// } 



// document.getElementById("diminui").onclick = function() {
//     count = valorQuantia --; 

//     document.getElementById("total").innerHTML = 'Foi retirado ' +`${count} `+ document.getElementById('tipo').value + ' do estoque ' ;   
//     if (item.quantia <= 0) {
//         document.getElementById('total').innerHTML = 'Estoque zerado!'
//     }
//     else {
//         document.getElementById("quantidade").innerHTML = `${count}`;
//     }
// }
// document.getElementById("resetar").onclick = function() {
//     count =0;

//     document.getElementById("total").innerHTML = 'Quantidade: ' + `${count}`;
// }

    //        function armazenar () {
    //     // Transformar o objeto em string e salvar em localStorage
    //     localStorage.setItem('item', JSON.stringify(item));
    //     // Receber a string
    //     let itemString = localStorage.getItem('item');
    //     // transformar em objeto novamente
    //     let itemObj = JSON.parse(itemString);
    //     console.log(itemObj.nome);
    // }


    // MOSTRAR ITENS DO ESTOQUE CADASTRADOS

    // function listarEstoque() {
    //     if (typeof(Storage) !== "undefined") {
    //         let item = localStorage.getItem("item");
    //              document.write("<h1>Estoque:</h1>")
    //                 if (item == null)
    //                      document.write("<h3>Ainda não há nenhum item no estoque</h3>");
    //                       else {
    //                    item = JSON.parse(item);  
    //                   document.write("<ul>");
    //                 document.write("<li>Tipo do item: "+item.tipo+"</li>");
    //               document.write("<li>Cor do item: "+item.cor+"</li>");
    //            document.write("<li>Tamanho do item no estoque: "+item.tamanho+"</li>");
    //            document.write("<li>Quantidade desse item no estoque: "+item.quantia+"</li>");
    //         document.write("</ul>");     
    //         }
    //     } 
    //     cadastrarItem();
    //   }
    