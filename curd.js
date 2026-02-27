var selectedRow = null;

function onFormsubmit() {
    var formData = readFormData();

    if (selectedRow == null) {
        insertNewRecord(formData);
    } else {
        updateRecord(formData);
    }

    resetForm();
}

function readFormData() {
    var formData = {};
    formData["fullname"] = document.getElementById("fullname").value;
    formData["empcode"] = document.getElementById("empcode").value;
    formData["salery"] = document.getElementById("salery").value;
    formData["city"] = document.getElementById("city").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("emplist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);

    newRow.insertCell(0).innerHTML = data.fullname;
    newRow.insertCell(1).innerHTML = data.empcode;
    newRow.insertCell(2).innerHTML = data.salery;
    newRow.insertCell(3).innerHTML = data.city;
    newRow.insertCell(4).innerHTML =
        `<button onclick="onEdit(this)">Edit</button>
         <button onclick="onDelete(this)">Delete</button>`;
}

function resetForm() {
    document.getElementById("fullname").value = "";
    document.getElementById("empcode").value = "";
    document.getElementById("salery").value = "";
    document.getElementById("city").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;

    document.getElementById("fullname").value = selectedRow.cells[0].innerHTML;
    document.getElementById("empcode").value = selectedRow.cells[1].innerHTML;
    document.getElementById("salery").value = selectedRow.cells[2].innerHTML;
    document.getElementById("city").value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullname;
    selectedRow.cells[1].innerHTML = formData.empcode;
    selectedRow.cells[2].innerHTML = formData.salery;
    selectedRow.cells[3].innerHTML = formData.city;
}

function onDelete(td) {
    if (confirm("del record")) {
        var row = td.parentElement.parentElement;
        document.getElementById("emplist").deleteRow(row.rowIndex);
        resetForm();
    }
}