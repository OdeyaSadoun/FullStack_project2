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

function addActionToUser() {
    const email = document.cookie.split(';')[0]; //key value 0 = email
    const emailvalue = email.substring(email.indexOf('=') + 1);
    let user = localStorage.getItem(emailvalue);
    let userjson = JSON.parse(user);
    console.log(userjson.actions + userjson.name);
    const enterGameDate = new Date();
    userjson.actions[userjson.counter++] = ({time: enterGameDate.toString() , action: "המשחקים שלנו"});
    window.localStorage.setItem(emailvalue, JSON.stringify(userjson));
  }

  addActionToUser();