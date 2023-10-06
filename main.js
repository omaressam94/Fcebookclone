function formValidate() {

    var userName = document.getElementById("userName").value;
    var pass = document.getElementById("passwrod").value;
    var err = document.getElementById("error");
    var text = "";

    if (userName.length < 5) {
        text = "enter a valid name";
        err.innerHTML = text;
        return false;
    }
    else if (pass.length < 5) {
        text = "enter a valid pw";
        err.innerHTML = text;
        return false;
    }
    else {
        return true;
    }
}
