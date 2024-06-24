document.addEventListener("DOMContentLoaded", function() {

  
  function sacButton(txjIn, dvdIn, amrt){

    if(buttonChoice){
      txjIn = document.getElementById("TaxaJuros").value;
      dvdIn = document.getElementById("DividaInicial").value;
      amrt = document.getElementById("Amortizacao").value;
    } else{
      txjIn = 1.5;
      dvdIn = 10000;
      amrt = 500;
    }

    txjIn = parseFloat(txjIn) / 100;
    dvdIn = parseFloat(dvdIn);
    amrt = parseFloat(amrt);
    
    let divTable = document.getElementById("sacTableData");
    divTable.innerHTML = "";
    let table = document.createElement("table");
    let tableHead = table.createTHead();
    let line = tableHead.insertRow();
    let th1 = document.createElement("th");
    let th2 = document.createElement("th");
    let th3 = document.createElement("th");
    th1.textContent = "Taxa de Juros";
    th2.textContent = "Dívida Inicial";
    th3.textContent = "Amortização";
    line.appendChild(th1);
    line.appendChild(th2);
    line.appendChild(th3);
    let tablebody = table.createTBody();
    let lineBody = tablebody.insertRow();
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    td1.textContent = (txjIn * 100).toFixed(2) + "%";
    td2.textContent = "$" + dvdIn.toFixed(2);
    td3.textContent = "$" + amrt.toFixed(2);
    lineBody.appendChild(td1);
    lineBody.appendChild(td2);
    lineBody.appendChild(td3);
    divTable.appendChild(table);

    let divsacTable = document.getElementById("sacTable");
    divsacTable.innerHTML = "";
    let table2 = document.createElement("table");
    let tableHead2 = table2.createTHead();
    let lineHead2 = tableHead2.insertRow();
    let th4 = document.createElement("th");
    let th5 = document.createElement("th");
    let th6 = document.createElement("th");
    let th7 = document.createElement("th");
    let th8 = document.createElement("th");
    th4.textContent = "Mês";
    th5.textContent = "Juros";
    th6.textContent = "Amortização";
    th7.textContent = "Parcela";
    th8.textContent = "Saldo Devedor";
    lineHead2.appendChild(th4);
    lineHead2.appendChild(th5);
    lineHead2.appendChild(th6);
    lineHead2.appendChild(th7);
    lineHead2.appendChild(th8);
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
        let parcela = amrt + juros;
        saldoDev = saldoDev - amrt;
        console.log("mes: " + mes);
        console.log("Saldo devedor:" + saldoDev);
        console.log("amortizacao: " + amrt);
        console.log("Juros: " + juros);
        console.log("Taxa de juros: " + txjIn);
        console.log("valor da parcela:" + parcela);
        console.log("Dvidida Inicial: " + dvdIn);

        let newRow = document.createElement("tr");
        let cell1 = document.createElement("td");
        cell1.textContent = ++mes;
        let cell2 = document.createElement("td");
        cell2.textContent = "$" + juros.toFixed(2);
        let cell3 = document.createElement("td");
        cell3.textContent = "$" +  amrt.toFixed(2);
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

    divsacTable.appendChild(table2);
  }

  let buttonChoice = true;

  document.getElementById("sacButton").addEventListener("click", function() {
    sacButton();
  });
  document.getElementById("sacExample").addEventListener("click", function() {
    buttonChoice = false;
    sacButton();
  });
});

