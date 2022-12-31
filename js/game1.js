/* showDropdown toggles between adding and removing the show class, which is used to hide and show the dropdown content */
function showDropdown() {
  document.getElementById('myDropdown').classList.toggle('show');
}


function showImgNumber(num) {
  findNumber(num);
}

function findNumber(n){
  let letNUM= document.getElementById(n.toString());
  letNUM.src ='../media/poto-numbers/'+ n.toString() +'.jpg';
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
  userjson.actions[userjson.counter++] = ({time: enterGameDate.toString() , action: "משחק למידה שלב 1"});
  window.localStorage.setItem(emailvalue, JSON.stringify(userjson));
}
   addActionToUser();