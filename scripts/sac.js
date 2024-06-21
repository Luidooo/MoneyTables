
document.addEventListener("DOMContentLoaded", function() {

  document.getElementById("sacButton").addEventListener("click", function(){

  let txjIn = document.getElementById("TaxaJuros").value;
  let dvdIn = document.getElementById("DividaInicial").value;
  let amrt = document.getElementById("Amortizacao").value;

  txjIn = parseFloat(txjIn);
  dvdIn = parseFloat(dvdIn);
  amrt = parseFloat(amrt);
  
  let divTable = document.getElementById("sacTableData");
  let table = document.createElement("table");
  let tableHead = table.createTHead();
  let line = tableHead.insertRow();
  let th1 = document.createElement("th");
  let th2 = document.createElement("th");
  let th3 = document.createElement("th");
  th1.textContent = "Taxa de Juros";
  th2.textContent = "Amortizacao";
  th3.textContent = "Divida Inicial";
  line.appendChild(th1);
  line.appendChild(th2);
  line.appendChild(th3);
  let tablebody = table.createTBody();
  let lineBody = tablebody.insertRow();
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  td1.textContent = txjIn;
  td2.textContent = dvdIn;
  td3.textContent = amrt;
  lineBody.appendChild(td1);
  lineBody.appendChild(td2);
  lineBody.appendChild(td3);
  divTable.appendChild(table);


  let divsacTable = document.getElementById("sacTable");
  let table2 = document.createElement("table");
  let tableHead2 = table2.createTHead();
  let lineHead2 = tableHead2.insertRow();
  let th4 = document.createElement("th");
  let th5 = document.createElement("th");
  let th6 = document.createElement("th");
  let th7 = document.createElement("th");
  let th8 = document.createElement("th");
  th4.textContent = "Mes";
  th5.textContent = "Juros";
  th6.textContent = "Amortizacao";
  th7.textContent = "Parcela";
  th8.textContent = "Saldo Devedor";
  lineHead2.appendChild(th4);
  lineHead2.appendChild(th5);
  lineHead2.appendChild(th6);
  lineHead2.appendChild(th7);
  lineHead2.appendChild(th8);
  let tableBody2 = table2.createTBody();
  let lineBody2 = tableBody2.insertRow();
  let td4 = document.createElement("td");
  let td5 = document.createElement("td");
  let td6 = document.createElement("td");
  td4.textContent = txjIn;
  td5.textContent = dvdIn;
  td6.textContent = amrt;
  lineBody2.appendChild(td4);
  lineBody2.appendChild(td5);
  lineBody2.appendChild(td6);
  divsacTable.appendChild(table2);

  });
});

