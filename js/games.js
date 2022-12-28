function alertComingSoon() {
    alert('בקרוב!!!!');
}

window.onload = function () {
    const email = document.cookie.split(';')[0]; //key value 0 = email
    const emailvalue = email.substring(email.indexOf('=') + 1);
    let user = localStorage.getItem(emailvalue);
    let userjson = JSON.parse(user);
    document.getElementById('username').innerHTML = "שלום " + userjson.name + "\t ניקוד: " + userjson.score;
   
}

