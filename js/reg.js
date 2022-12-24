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
    let score = 0;

    const user = { name: fname + " " + lname, phone: phone, email: email, password: password, score: score };
    console.log(user);
    window.localStorage.setItem(email, JSON.stringify(user));
    document.cookie = `email=${email}; path=/`;
}