function Display() {
    try{
    if(document.getElementsByName('item')[0].value == "" || document.getElementsByName('Quantity')[0].value == ""){
        alert("Enter mandatory Input")
    }
    else{    

    var table = document.querySelector('.Display');
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = document.getElementsByName('item')[0].value;
    cell2.innerHTML = document.getElementsByName('Price')[0].value;
    cell3.innerHTML = document.getElementsByName('Quantity')[0].value;
    cell4.innerHTML = document.getElementsByName('Total')[0].value;

    document.getElementsByName('item')[0].value = "";
    document.getElementsByName('Price')[0].value = "";
    document.getElementsByName('Quantity')[0].value = "";
    document.getElementsByName('Total')[0].value = "";
    }
    }
    catch(er){
        alert(er.message);
    }
  }

  function pri(){
    var quantityInput = document.getElementsByName('Price')[0];
    var itemInput = document.getElementsByName('item')[0];

    if(itemInput.value == 'Edly') {
        quantityInput.value = 30;
    } else if(itemInput.value == 'Vada') {
        quantityInput.value = 15;
    } else if(itemInput.value == 'Dosa') {
        quantityInput.value = 50;
    }
    else {
        alert("Enter a Valid Item");
        itemInput.value = "";
    }
}

function cal(){
    var qu = document.getElementsByName('Quantity')[0];    
    var pr = document.getElementsByName('Price')[0];
    var to = document.getElementsByName('Total')[0];

    to.value = qu.value * pr.value;
}

function removeRow() {
    var table = document.querySelector('.Display');
    var rowCount = table.rows.length;

    for (var i = rowCount - 1; i > 0; i--) {
        table.deleteRow(i);
    }
}