window.onload = function () {
    let user = localStorage.getItem('user1');
    console.log(localStorage);
}


function submitLogin() {

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let user = JSON.parse(window.localStorage.getItem(email));

    if (user == undefined || user == null) {
      alert('אינך קיים במערכת! לצורך כניסה יש להרשם');
    }
    else if(user.email == email && user.password == password){
        console.log(email);
        document.cookie = `email=${email}; path=/`;
        document.getElementById('login_form').submit();
    }
    else {
      alert('שם משתמש או סיסמא שגויים');
    }

}
function goBegining() {
    location.href = 'index.html';
}

function expiresCoockies(){
  var now = new Date();
  now.setMonth( now.getDay() + 3);
  cookievalue = escape(document.myform.customer.value) + ";"
  
  document.cookie="name=" + cookievalue;
  document.cookie = "expires=" + now.toUTCString() + ";"
  document.write ("Setting Cookies : " + "name=" + cookievalue );
}