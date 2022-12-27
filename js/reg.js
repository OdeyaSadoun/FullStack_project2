function verifyPassword() {
    var pw = document.getElementById('password').value;
    //check empty password field  
    if (pw == "") {
        document.getElementById("message").innerHTML = "חסר שדה סיסמא- יש למלא!";
        return false;
    }

    //minimum password length validation  
    if (pw.length < 8) {
        document.getElementById("message").innerHTML = "אורך הסיסמא חייב להכיל לפחות 8 תווים";
        return false;
    }

    //maximum length of password validation  
    if (pw.length > 15) {
        document.getElementById("message").innerHTML = "אורך הסיסמא יכול להכיל לא יותר מ15 תווים";
        return false;
    } else {
        document.getElementById("message").innerHTML = "הסיסמא תקינה:)";
    }

    return true;
}

function verifyName() {
    var fname = document.getElementById("first_name").value;
    var lname = document.getElementById("last_name").value;

    //check empty first name field  
    if (fname == "") {
        document.getElementById("message").innerHTML = "יש למלא את השם הפרטי";
        return false;
    }

    //character data validation  
    if (!isNaN(fname)) {
        document.getElementById("message").innerHTML = "רק אותיות אפשריות- לא מספרים";
        return false;
    }

    //character data validation  
    if (!isNaN(lname)) {
        document.getElementById("message").innerHTML = "רק אותיות אפשריות- לא מספרים";
        return false;
    }
    return true;
}


function confirmPassword() {
    var pw1 = document.getElementById("password").value;
    var pw2 = document.getElementById("re_password").value;
    if (pw1 !== pw2) {
        document.getElementById("message").innerHTML = "הסיסמא ואימות הסיסמא אינן שוות- יש לנסות שוב";
        return false;
    } else {
        document.getElementById("message").innerHTML = "נפלא!!!";
        return true;
    }
}


function submitReg() {
    let flag = false
    while(!verifyName()){
        alert('הכנס שוב את השם');
        let fname = document.getElementById('first_name').innerText = "";
        let lname = document.getElementById('last_name').innerText = "";
    }

    let fname = document.getElementById('first_name').value;
    let lname = document.getElementById('last_name').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let score = 0;
    let actions = [];

    const user = { name: fname + " " + lname, phone: phone, email: email, password: password, score: score, actions: actions};
    console.log(user);
    window.localStorage.setItem(email, JSON.stringify(user));
    document.cookie = `email=${email}; path=/`;
}


