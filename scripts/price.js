document.addEventListener("DOMContentLoaded", function() {

  document.getElementById("priceButton").addEventListener("click", function(){
  let taxaJurosIN = document.getElementById("TaxaJuros").value;
  let dividaInicialIN = document.getElementById("DividaInicial").value;
  let tempoIN = document.getElementById("Tempo").value;

  console.log(taxaJurosIN);
  console.log(dividaInicialIN);
  console.log(tempoIN);

  taxaJurosIN = parseFloat(taxaJurosIN);
  dividaInicialIN = parseFloat(dividaInicialIN);
  tempoIN = parseFloat(tempoIN);


  let divtableData = document.getElementById("priceTableData");
  let tableData = document.createElement("table");
  let tableDataHead = tableData.createTHead();
  let lineTableData = tableDataHead.insertRow();
  let txJuros = document.createElement("th");
  let divInicial = document.createElement("th");
  let parcelas = document.createElement("th");
  let tempo = document.createElement("th");
  txJuros.textContent = "Taxa de juros";
  divInicial.textContent = "Divida Inicial";
  parcelas.textContent = "Parcelas";
  tempo.textContent = "Tempo em meses";
  lineTableData.appendChild(txJuros);
  lineTableData.appendChild(divInicial);
  lineTableData.appendChild(parcelas);
  lineTableData.appendChild(tempo);
  let tableDataBody = tableData.createTBody();
  let linedataBody = tableDataBody.insertRow();
  let th1 = document.createElement("th");
  let th2 = document.createElement("th");
  let th3 = document.createElement("th");
  let th4 = document.createElement("th");
  th1.textContent = taxaJurosIN;
  th2.textContent = dividaInicialIN;
  th3.textContent = dividaInicialIN/tempoIN;
  th4.textContent = tempoIN;
  linedataBody.appendChild(th1);
  linedataBody.appendChild(th2);
  linedataBody.appendChild(th3);
  linedataBody.appendChild(th4);
  divtableData.appendChild(tableData);

  });

  
  
   

});

