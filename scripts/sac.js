document.addEventListener("DOMContentLoaded", function() {

  document.getElementById("sacButton").addEventListener("click", function(){
  let taxaJurosIN = document.getElementById("TaxaJuros").value;
  let dividaInicialIN = document.getElementById("DividaInicial").value;
  let tempoIN = document.getElementById("Tempo").value;

  console.log(taxaJurosIN);
  console.log(dividaInicialIN);
  console.log(tempoIN);

  taxaJurosIN = parseFloat(taxaJurosIN);
  dividaInicialIN = parseFloat(dividaInicialIN);
  tempoIN = parseFloat(tempoIN);


  let divtableData = document.getElementById("SacTableData");
  let tableData = document.createElement("table");
  let tableDataHead = tableData.createTHead();
  let lineTableData = tableDataHead.insertRow();
  let txJuros = document.createElement("th");
  let divInicial = document.createElement("th");
  let parcelas = document.createElement("th");
  let tempo = document.createElement("th");
  txJuros.textContent = taxaJurosIN;
  divInicial.textContent = dividaInicialIN;
  parcelas.textContent = dividaInicialIN/tempoIN
  tempo.textContent = tempoIN;
  lineTableData.appendChild(txJuros);
  lineTableData.appendChild(divInicial);
  lineTableData.appendChild(parcelas);
  lineTableData.appendChild(tempo);
  let tableDataBody = tableData.createTBody();
  divtableData.appendChild(tableData);

  });

  
  
   

});

