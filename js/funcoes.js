//Cria uma variável para manipilar um arquivo XML
xmlhttp = new XMLHttpRequest();
//Lê um determinado arquivo XML no diretório do projeto
xmlhttp.open("GET","xml/conteudo.xml",false);
//Envia o arquivo aberto pra leitura
xmlhttp.send();
//Envia uma resposta do tipo XML
xmlDoc = xmlhttp.responseXML;
//Cria um array a partir da quantidade de postagens
x = xmlDoc.getElementsByTagName("postagem");

function funcaoConteudo(){
    for(i = 0; i<=2; i++){
        document.write(
        "<tr>"+
        "<td>" + x[i].getAttribute("codigo") + "</td>" +
        "<td><img src='imgs/" + x[i].getElementsByTagName("imagem_1")[0].childNodes[0].nodeValue + "' width=150> </td>" +
        "<td>" + x[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue + "</td>" +
        "<td>" + x[i].getElementsByTagName("corpo")[0].childNodes[0].nodeValue.substr(0,150) +  "...</td>" +
        "</tr>");
    }
}






























/*
//Criar uma variável para manipular o XML
xmlhttp = new XMLHttpRequest();
//Efetuar a leitura do arquivo XML
xmlhttp.open("GET","xml/db_conteudo.xml",false);
//Enviar o arquivo para leitura
xmlhttp.send();
//Informar que o arquivo é um XML
xmlDoc = xmlhttp.responseXML;
//Organiza os dados em um vetor
x = xmlDoc.getElementsByTagName("postagem");

function funcaoConteudo(){
    for(n=x.length-1;n>=0;n--){
    //for(n=0;n<x.length;n++){
        document.write("<tr>" +
            "<td>"+ x[n].getAttribute("codigo") +"</td>" +
            "<td>"+ x[n].getElementsByTagName("titulo")[0].childNodes[0].nodeValue + "</td>" +
            "<td>"+ x[n].getElementsByTagName("corpo")[0].childNodes[0].nodeValue.substr(0,250) + "...</td>" +
            "<td><img src='imgs/"+ x[n].getElementsByTagName("imagem_1")[0].childNodes[0].nodeValue + "' width='250'></td>" +
            "</tr>");
    }
}
*/