function pwMatch(){
    var pw = document.signup.new_pwd.value;
    var chk = document.signup.confirm_pw.value;

    if(pw === chk) {
        document.getElementById("match").innerHTML = "<br>Passwords Match";
    }
    else {
        document.getElementById("match").innerHTML = "<br>Passwords Do Not Match";
    }
}


