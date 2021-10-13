window.onload = initAll;


var btnSave;

function initAll() {
    btnSave = document.getElementById("btn_save");
    btnSave.onclick = saveData;
}

function saveData() {

    var title = document.getElementById("title_name").value;
    alert("Kayıt başarılı " + title);


    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            alert(this.responseText);
        }
    };
    xhttp.open("POST", "/save", true);
    xhttp.send();
}