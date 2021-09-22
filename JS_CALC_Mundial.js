let operacao = prompt("Digite o nome do seu time");

if (operacao == "palmeiras" || operacao == "Palmeiras" || operacao == "PALMEIRAS" || operacao == "pALMEIRAS") {
  let resultadoPalmeiras = ("Sem mundial");
  document.write("<h2>" + resultadoPalmeiras + "</h2>");
  document.write('<img src="https://img.r7.com/images/2017/10/27/8ptubz34qu_8uixnm4e5h_file">');
  document.clear("foto display:none");
} 
else if (operacao == "corinthians" || operacao == "Corinthians" || operacao == "CORINTHIANS" || operacao == "cORINTHIANS") {
  let resultadoCorinthians = ("Bi Campeão");
  document.write("<h2>" + resultadoCorinthians + "</h2>");
  document.write('<img src="https://i.ytimg.com/vi/VwZDlU4l_nE/maxresdefault.jpg">');
  document.clear("foto display:none");
} 
else if (operacao == "são paulo" || operacao == "São Paulo" || operacao == "SÃO PAULO" || operacao == "Sao Paulo" || operacao == "sao paulo" || operacao == "SAO PAULO") {
  let resultadoSaoPaulo = ("Tri Campeão");
  document.write("<h2>" + resultadoSaoPaulo + "</h2>");
  document.write('<img src="https://lh3.googleusercontent.com/proxy/ldLqvY_rfVAPSNuG4TEQiiuDJqTq1BQ8T7HWvB6IGVIheNYGR8wy4XuEVTZKghcts13Ay550LOJ2LtzMN1nXHjyQLtM7IWgmfQI6ngsrH5E9aemiwL2TxCp22g9nefHL">');
  document.clear("foto display:none");
} 
else if (operacao == "santos"|| operacao == "Santos"|| operacao == "SANTOS"|| operacao == "sANTOS") {
  let resultadoSantos = ("Bi Campeão");
  document.write("<h2>" + resultadoSantos + "</h2>");
  document.write('<img src="https://www.santosfc.com.br/wp-content/uploads/2018/11/Guide_55AnosBiMundial_920x400.png">');
  document.clear("foto display:none");
} 
else {
  document.write("<h2>Opção inválida</h2>");
}

//REVISÃO
//escrevendo na tela = document.write()
//concatenação (juntar palavra com variáves) - ("palavra" + variável)
//== - comparação diferente do = que usamos para fazer atribuição
// if = se
// else = senão
// else if = senão se
