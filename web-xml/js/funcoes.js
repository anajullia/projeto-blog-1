//Criar uma variável para manipular o XML
xmlhttp = new XMLHttpRequest();
//Efetuar a leitura do arquivo XML
xmlhttp.open("GET", "xml/db_conteudo.xml",false);
//enviar o arquivo para leitura
xmlhttp.send();
//Informar que o arquivo é um XML
xmlDoc = xmlhttp.responseXML;
//Orgamiza os dados em um vetor
x = xmlDoc.getElementsByTagName("postagem");

function funcaoConteudo(){
 for(n=x.length-1;n>=0;n--){
 //for(n=0;n<x.length;n++){
    document.write("<tr>" +
    "<td>"+ x[n].getAttribute("codigo") +"</td>"+
    "<td>"+ x[n].getElementsByTagName("titulo")[0].childNodes[0].nodeValue +"</td>"+
    "<td>"+ x[n].getElementsByTagName("corpo")[0].childNodes[0].nodeValue.substr(0,250) +"</td>"+
    "<td><img src='img/"+ x[n].getElementsByTagName("imagem_1")[0].childNodes[0].nodeValue +"'width='250'></td>"+
    "</tr>");
}
}