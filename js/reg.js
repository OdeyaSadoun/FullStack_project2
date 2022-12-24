
let IDNUMBER = 0;

function validPasswordFunction() {
    // Get the value of the input field with id="numb"
    let password = document.getElementById('password').value;
    let re_password = document.getElementById('re_password').value;
    // If x is Not a Number or less than one or greater than 10
    let text;
    if (isNaN(password) || password < 1 || password > 10) {
        text = "Input not valid";
    } else {
        text = "Input OK";
    }
    document.getElementById('password').innerHTML = text;
}

function hasNumber() {

}

function confirmPassword() {
    if (document.getElementById('password').value ===
        document.getElementById('re_password').value) {
        document.getElementById('submit').disabled = false;

    } else {
        document.getElementById('submit').disabled = true;
        document.getElementById('message').innerHTML = "אימות הסיסמא שונה מהסיסמא";
        document.getElementById('message').style.color = 'black';
        document.getElementById('submit').value = '';
    }
}


function submitReg() {
    let fname = document.getElementById('first_name').value;
    let lname = document.getElementById('last_name').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    const user = { name: fname + " " + lname, phone: phone, email: email, password: password };
    console.log(user);
    window.localStorage.setItem(email, JSON.stringify(user));
    document.cookie = `email=${email}; path=/`;
}