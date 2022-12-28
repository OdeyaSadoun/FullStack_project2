function showImgABC(letter) {
  findLetter(letter);
}

function findLetter(l){
  let letABC= document.getElementById(l.toString());
  letABC.src ='../media/abc-poto/'+ l.toString() +'.jpg';
}

/* showDropdown toggles between adding and removing the show class, which is used to hide and show the dropdown content */
function showDropdown() {
  document.getElementById('myDropdown').classList.toggle('show');
}
