document.addEventListener("DOMContentLoaded", function() {

  function priceCacButton(txjIn, dvdIn, tmp){

    if(buttonChoice){
      txjIn = document.getElementById("TaxaJuros").value;
      dvdIn = document.getElementById("DividaInicial").value;
      tmp = document.getElementById("Tempo").value;
    } else{
      txjIn = 10;
      dvdIn = 100000;
      tmp = 5;
    }

    txjIn = parseFloat(txjIn) / 100;
    dvdIn = parseFloat(dvdIn);
    tmp = parseFloat(tmp);
    
    let divTable = document.getElementById("priceCacTableData");
    divTable.innerHTML = "";
    let table = document.createElement("table");
    let tableHead = table.createTHead();
    let line = tableHead.insertRow();
    let th1 = document.createElement("th");
    let th2 = document.createElement("th");
    let th3 = document.createElement("th");
    let th4 = document.createElement("th");
    th1.textContent = "Taxa de Juros";
    th2.textContent = "Dívida Inicial";
    th3.textContent = "Parcela";
    th4.textContent = "Tempo";
    line.appendChild(th1);
    line.appendChild(th2);
    line.appendChild(th3);
    line.appendChild(th4);
    let tablebody = table.createTBody();
    let lineBody = tablebody.insertRow();
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    td1.textContent = (txjIn * 100).toFixed(2) + "%";
    td2.textContent = "$" + dvdIn.toFixed(2);
    let parcela = (dvdIn * txjIn)/ (1 - Math.pow(1 + txjIn, -tmp));
    td3.textContent = "$" + parcela.toFixed(2);
    td4.textContent = tmp + " mes(es)";
    lineBody.appendChild(td1);
    lineBody.appendChild(td2);
    lineBody.appendChild(td3);
    lineBody.appendChild(td4);
    divTable.appendChild(table);

    let divpriceCacTable = document.getElementById("priceCacTable");
    divpriceCacTable.innerHTML = "";
    let table2 = document.createElement("table");
    let tableHead2 = table2.createTHead();
    let lineHead2 = tableHead2.insertRow();
    let th5 = document.createElement("th");
    let th6 = document.createElement("th");
    let th7 = document.createElement("th");
    let th8 = document.createElement("th");
    let th9 = document.createElement("th");
    th5.textContent = "Mês";
    th6.textContent = "Juros";
    th7.textContent = "Amortização";
    th8.textContent = "Parcela";
    th9.textContent = "Saldo Devedor";
    lineHead2.appendChild(th5);
    lineHead2.appendChild(th6);
    lineHead2.appendChild(th7);
    lineHead2.appendChild(th8);
    lineHead2.appendChild(th9);
    let tableBody2 = table2.createTBody();
    let saldoDev = dvdIn;
    let mes = 0;
    let firtRow = document.createElement("tr");
    let first1 = document.createElement("td");
    first1.textContent = mes;
    let first2 = document.createElement("td");
    first2.textContent = "$0.00";
    let first3 = document.createElement("td");
    first3.textContent = "$0.00";
    let first4 = document.createElement("td");
    first4.textContent = "$0.00";
    let first5 = document.createElement("td");
    first5.textContent = "$" + saldoDev.toFixed(2);
    firtRow.appendChild(first1);
    firtRow.appendChild(first2);
    firtRow.appendChild(first3);
    firtRow.appendChild(first4);
    firtRow.appendChild(first5);
    tableBody2.appendChild(firtRow);


    while (saldoDev > 0){
        let juros = saldoDev * txjIn;
        let amortizacao = parcela - juros;
        saldoDev = saldoDev - amortizacao; 
        if(saldoDev > 0){
          let newRow = document.createElement("tr");
          let cell1 = document.createElement("td");
          cell1.textContent = ++mes;
          let cell2 = document.createElement("td");
          cell2.textContent = "$" + juros.toFixed(2);
          let cell3 = document.createElement("td");
          cell3.textContent = "$" + amortizacao.toFixed(2);
          let cell4 = document.createElement("td");
          cell4.textContent = "$" + parcela.toFixed(2);
          let cell5 = document.createElement("td");
          cell5.textContent = "$" + saldoDev.toFixed(2);
          newRow.appendChild(cell1);
          newRow.appendChild(cell2);
          newRow.appendChild(cell3);
          newRow.appendChild(cell4);
          newRow.appendChild(cell5);
          tableBody2.appendChild(newRow);
        }
    }

    divpriceCacTable.appendChild(table2);
  }

  let buttonChoice = true;

  document.getElementById("priceCacButton").addEventListener("click", function() {
    priceCacButton();
  });
  document.getElementById("priceCacExample").addEventListener("click", function() {
    buttonChoice = false;
    priceCacButton();
  });
});

