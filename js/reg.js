function verifyPassword() {

    var pw = document.getElementById('password').value;

    //check empty password field  
    if (pw == "") {
        document.getElementById("message").innerHTML = "לא הוזנה סיסמא - יש להזין";
        document.getElementById("password").style.borderColor = "red";
        return false;
    }

    //minimum password length validation  
    else if (pw.length < 8) {
        document.getElementById("message").innerHTML = "אורך הסיסמא חייב להכיל לפחות 8 תווים";
        document.getElementById("password").style.borderColor = "red";
        return false;
    }

    //maximum length of password validation  
    else if (pw.length > 15) {
        document.getElementById("message").innerHTML = "אורך הסיסמא יכול להכיל לא יותר מ15 תווים";
        document.getElementById("password").style.borderColor = "red";
        return false;
    }

    else {
        document.getElementById("message").innerHTML = "הסיסמא תקינה:)";
        document.getElementById("password").style.borderColor = "green";
    }

    return true;
}

function verifyName() {

    //function to verify the text fields

    var fname = document.getElementById("first_name").value;
    var lname = document.getElementById("last_name").value;

    //check empty first name field  
    if (fname == "") {
        document.getElementById("message").innerHTML = "יש למלא את השם הפרטי";
        document.getElementById("first_name").style.borderColor = "red";
        return false;
    }

    //character data validation  
    if (!isNaN(fname)) {
        document.getElementById("message").innerHTML = "יש להזין אותיות ותווים- לא מספרים";
        document.getElementById("first_name").value = "";
        document.getElementById("first_name").style.borderColor = "red";
        return false;
    }

    document.getElementById("first_name").style.borderColor = "green";

    //character data validation  
    if (!isNaN(lname)) {
        document.getElementById("message").innerHTML = "יש להזין אותיות ותווים- לא מספרים";
        document.getElementById("last_name").value = "";
        document.getElementById("last_name").style.borderColor = "red";
        return false;
    }

    document.getElementById("last_name").style.borderColor = "green";
    return true;
}


function confirmPassword() {
    //function to confirm the password
    var pw1 = document.getElementById("password").value;
    var pw2 = document.getElementById("re_password").value;

    if (pw1 !== pw2 || !verifyPassword()) {
        document.getElementById("message").innerHTML = "הסיסמא ואימות הסיסמא אינן שוות- יש לנסות שוב";
        document.getElementById("re_password").value = "";
        document.getElementById("re_password").style.borderColor = "red";
        return false;
    }
    else {
        document.getElementById("message").innerHTML = "נפלא!!!";
        document.getElementById("re_password").style.borderColor = "green";
        return true;
    }
}


function submitReg() {

    let password = document.getElementById('password').value;
    let re_password = document.getElementById('re_password').value;

    let fname = document.getElementById('first_name').value;
    let lname = document.getElementById('last_name').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;

    let userFromStroge = JSON.parse(window.localStorage.getItem(email));

    if (userFromStroge != undefined || userFromStroge != null) {
        alert('המשתמש כבר קיים במערכת! יש לבצע כניסה')
        return false;
    }

    if (!password || !fname || !lname || !phone || !email || !re_password) {
        alert('נא מלא את כל השדות לצורך הרשמה!');
        return false;
    }
    else {

        let score = 0;
        const enterGameDate = new Date();
        let actions = [{ time: enterGameDate.toString(), action: "הרשמה" }];
        let cnt = 1;

        const user = { name: fname + " " + lname, phone: phone, email: email, password: password, score: score, actions: actions, counter: cnt };
        console.log(user);
        window.localStorage.setItem(email, JSON.stringify(user));
        document.cookie = `email=${email}; path=/`;

        document.getElementById('reg_form').submit();
    }

}


function goBegining() {
    location.href = 'index.html';
}
