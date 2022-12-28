window.onload = function () {
    let user = localStorage.getItem('user1');
    console.log(localStorage);
}


function submitLogin() {
    // let fname = document.getElementById("first_name").value;
    // let lname = document.getElementById("last_name").value;
    // let phone = document.getElementById("phone").value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    // const user = { name: fname + " " + lname, phone: phone, email: email, password: password };
    // console.log(user);
    let user = window.localStorage.getItem(email);
    if (user === undefined) {
        alert('שם משתמש או סיסמא שגויים');
    }
    else {
        document.cookie = `email=${email}; path=/`;
    }

}