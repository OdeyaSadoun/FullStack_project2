function showImgABC(letter) {
    findLetter(letter);
  }

  function findLetter(l){
    let letABC= document.getElementById(l.toString());
    letABC.src ='../media/abc-poto/'+ l.toString() +'.jpg';
  }