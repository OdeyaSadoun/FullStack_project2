
function showImgAlefBeit(AlefBeit) {
    findAlefBeit(AlefBeit);
  }
  
  function findAlefBeit(l){
    let letAlefBeit= document.getElementById(l.toString());
    letAlefBeit.src ='../media//alef-beit-poto/'+ l.toString() +'.jpg';
  }
  
  /* showDropdown toggles between adding and removing the show class, which is used to hide and show the dropdown content */
  function showDropdown() {
    document.getElementById('myDropdown').classList.toggle('show');
  }
  