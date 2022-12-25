/* showDropdown toggles between adding and removing the show class, which is used to hide and show the dropdown content */
function showDropdown() {
  document.getElementById('myDropdown').classList.toggle('show');
}

function showImgNumber() {
  let one = document.getElementById('one');
  one.src = './media/chess/jpg';
  let two = document.getElementById('two');
  two.src = './media/chess/jpg';
}

window.onload = function () {
  const email = document.cookie.split(';')[0]; //key value 0 = email
  const emailvalue = email.substring(email.indexOf('=') + 1);
  let user = localStorage.getItem(emailvalue);
  let userjson = JSON.parse(user);
  document.getElementById('username').innerHTML = "שלום " + userjson.name + "\t ניקוד: " + userjson.score;
  alert(user);
}

