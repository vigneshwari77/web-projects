//form1
function vfun() {
    var uname = document.forms["myform"]["uname"].value;
    var upswd = document.forms["myform"]["upswd"].value;

    if (uname == null || uname == "" ) {
        document.getElementById("errorBox").innerHTML = "enter the user name";
        return false;
    }
    
    if (upswd == null || upswd == "") {
        document.getElementById("errorBox").innerHTML = "enter the password";
        return false;
    }

    if (uname != '' && upswd != '') {
        alert("Login Successfully")
    }

}


//form 2
function vfun1() {
    var uname1 = document.forms["myform2"]["uname1"].value;
    var email1 = document.forms["myform2"]["email"].value;
    var upswd1 = document.forms["myform2"]["upswd1"].value;
    var upswd2 = document.forms["myform2"]["upswd2"].value;
 
    if (uname1 == null || uname1 == '') {
        document.getElementById("errorBox").innerHTML = "enter the username";
        return false;
    }

    if (email == null || email == '') {
        document.getElementById(errorBox).innerHTML = "enter the email";
        return false;

    }

    if (upswd1 == null || upswd1== '') {
        document.getElementById(errorBox).innerHTML = "enter the password";
        return false;
    }

    if (upswd1 == null || upswd2 == '') {
        document.getElementById(errorBox).innerHTML = "enter the conform password";
        return false;
    }
    
    if (upswd1 != upswd2) {
        document.getElementById(errorBox).innerHTML = "password don't match";
        return false;
    }

    if (uname != '' && email != '' && upswd1 != '' && upswd2 != '' && upswd1==upswd2) {
        alert("register successfully");
    }



}