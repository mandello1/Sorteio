var nomesArray = [];
var participantes = 0;

//Adicionar à variável participantes o número de participantes do sorteio
function totalNum(){
    participantes = document.getElementById("inp").value;
    document.getElementById("inp").value = null;
}

//adiciona ao array os nomes dos participantes
function add(){
    nomesArray.push(document.getElementById("inp").value);
   document.getElementById("inp").value = null;
}

//Limpa o conteúdo da div inputArea e cria os campos para inputar os 
//dados do sorteio a depender se será feito com base nos nomes ou nos números
function activate(){
    if (document.getElementById("nome").checked == true){
        document.getElementById("inputArea").innerHTML = null;
        var inputerson = '<input type="text" id="inp" placeholder="Insira o nome aqui"><br><br><button id="enviarnome" onclick="add()">Adicionar Participante</button>';
        document.getElementById("inputArea").innerHTML += inputerson;
    } else {
        document.getElementById("inputArea").innerHTML = null;
        var inputerson = '<input type="number" id="inp" placeholder="insira o número de participantes"><br><br><button id="enviarnome" onclick="totalNum()">Seguir</button>';
        document.getElementById("inputArea").innerHTML += inputerson;
    }
}

//verifica qual o tipo de sorteio escolhido e realiza o sorteio correto para o tipo selecionado
function sorteio(){
   if (document.getElementById("nome").checked == true){
    let np = nomesArray.length;
    let ns = Math.floor(Math.random() * np);
    document.getElementById("sorteioArea").innerHTML = "<h2>" + "O sorteado foi: " + "<br>" + "<br>"  + nomesArray[ns] + "<h2>";
   } else {
    let ns = Math.round(Math.random() * participantes); 
    document.getElementById("sorteioArea").innerHTML = "<h2>" + "O número sorteado foi: " + "<br>" + "<br>" + ns + "<h2>";
   }
}

