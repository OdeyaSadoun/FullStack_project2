
function showImgAlefBeit(AlefBeit) {
    findAlefBeit(AlefBeit);
  }
  
  function findAlefBeit(l){
    let letAlefBeit= document.getElementById(l.toString());
    letAlefBeit.src ='../media//alef-beit-poto/'+ l.toString() +'.jpg';
    addScoreToUser();
  }
  
  /* showDropdown toggles between adding and removing the show class, which is used to hide and show the dropdown content */
  function showDropdown() {
    document.getElementById('myDropdown').classList.toggle('show');
  }
  
  function addActionToUser() {
    const email = document.cookie.split(';')[0]; //key value 0 = email
    const emailvalue = email.substring(email.indexOf('=') + 1);
    let user = localStorage.getItem(emailvalue);
    let userjson = JSON.parse(user);
    console.log(userjson.actions + userjson.name);
    const enterGameDate = new Date();
    userjson.actions[userjson.counter++] = {time: enterGameDate.toString() , action: "משחק למידה שלב 2"};
    window.localStorage.setItem(emailvalue, JSON.stringify(userjson));
  }

  addActionToUser();

  function addScoreToUser() {
    const email = document.cookie.split(';')[0]; //key value 0 = email
    const emailvalue = email.substring(email.indexOf('=') + 1);
    let user = localStorage.getItem(emailvalue);
    let userjson = JSON.parse(user);
    userjson.score += 2;
    window.localStorage.setItem(emailvalue, JSON.stringify(userjson));
  }

  window.onload = function () {
    const email = document.cookie.split(';')[0]; //key value 0 = email
    const emailvalue = email.substring(email.indexOf('=') + 1);
    let user = localStorage.getItem(emailvalue);
    let userjson = JSON.parse(user);
    document.getElementById('username').innerHTML = "שלום " + userjson.name + "\t ניקוד: " + userjson.score;
  }