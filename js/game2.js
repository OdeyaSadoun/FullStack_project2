window.onload = function () {

  var alphabet = ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח',
    'ט', 'י', 'כ', 'ך', 'ל', 'מ', 'ם', 'נ', 'ן', 'ס', 'ע', 'פ', 'ף', 'צ', 'ץ', 'ק',
    'ר', 'ש', 'ת'];

  const email = document.cookie.split(';')[0]; //key value 0 = email
  const emailvalue = email.substring(email.indexOf('=') + 1);
  let user = localStorage.getItem(emailvalue);
  let userjson = JSON.parse(user);
  document.getElementById('username').innerHTML = "שלום " + userjson.name + "\t ניקוד: " + userjson.score;

  let categories;         // Array of topics
  let chosenCategory;     // Selected catagory
  // let getHint;          // Word getHint
  let word;              // Selected word
  let guess;             // Geuss
  let geusses = [];      // Stored geusses
  let lives;             // Lives
  let counter;           // Count correct geusses
  let space;              // Number of spaces in word '-'
  let score;              //score for this game

  // Get elements
  var showLives = document.getElementById("mylives");
  var showCatagory = document.getElementById("scatagory");
  var getHint = document.getElementById("hint");
  var showClue = document.getElementById("clue");


  // create alphabet ul
  var buttons = function () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');

    for (var i = 0; i < alphabet.length; i++) {
      letters.id = 'alphabet';
      list = document.createElement('li');
      list.id = 'letter';
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  }


  // Select Catagory
  var selectCat = function () {
    if (chosenCategory === categories[0]) {
      catagoryName.innerHTML = "הקטגוריה הנבחרת היא פרחים";
    } else if (chosenCategory === categories[1]) {
      catagoryName.innerHTML = "הקטגוריה הנבחרת היא שירים";
    } else if (chosenCategory === categories[2]) {
      catagoryName.innerHTML = "הקטגוריה הנבחרת היא ערים";
    }
  }

  // Create geusses ul
  //יוצר את המילה הרצויה לניחוש
  result = function () {
    wordHolder = document.getElementById('hold');

    console.log(wordHolder);

    correct = document.createElement('ul');

    console.log(correct);


    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space += 1;
      } else {
        guess.innerHTML = "_";
      }

      geusses.push(guess);

      console.log(guess);

      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }

  // Show lives
  comments = function () {
    showLives.innerHTML = "נשארו לך " + lives + " חיים";
    if (lives < 1) {
      showLives.innerHTML = "סוף המשחק!";
      console.log("סוףףףףף" + score)
      score = 0;
      console.log("סופי סופי" + score)

    }
    for (var i = 0; i < geusses.length; i++) {
      if (counter + space === geusses.length) {
        showLives.innerHTML = "ניצחת!";
      }
    }
  }

  // Animate man
  var animate = function () {
    var drawMe = lives;

    console.log(drawMe);

    drawArray[drawMe]();

    console.log(drawArray);
    console.log(drawArray[drawMe]);

  }


  // Hangman
  canvas = function () {

    myStickman = document.getElementById("stickman");
    context = myStickman.getContext('2d');
    context.beginPath();
    context.strokeStyle = "#fff";
    context.lineWidth = 2;
  };

  head = function () {
    myStickman = document.getElementById("stickman");
    context = myStickman.getContext('2d');
    context.beginPath();
    context.arc(60, 25, 10, 0, Math.PI * 2, true);
    context.stroke();
  }

  draw = function ($pathFromx, $pathFromy, $pathTox, $pathToy) {

    context.moveTo($pathFromx, $pathFromy);
    context.lineTo($pathTox, $pathToy);
    context.stroke();
  }


  //הציור של האיש תלוי
  frame1 = function () {
    draw(0, 150, 150, 150);
  };

  frame2 = function () {
    draw(10, 0, 10, 600);
  };

  frame3 = function () {
    draw(0, 5, 70, 5);
  };

  frame4 = function () {
    draw(60, 5, 60, 15);
  };

  torso = function () {
    draw(60, 36, 60, 70);
  };

  rightArm = function () {
    draw(60, 46, 100, 50);
  };

  leftArm = function () {
    draw(60, 46, 20, 50);
  };

  rightLeg = function () {
    draw(60, 70, 100, 100);
  };

  leftLeg = function () {
    draw(60, 70, 20, 100);
  };

  drawArray = [rightLeg, leftLeg, rightArm, leftArm, torso, head, frame4, frame3, frame2, frame1];


  // OnClick Function
  check = function () {
    list.onclick = function () {
      var geuss = (this.innerHTML);

      console.log(guess); //letter

      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === geuss) {
          geusses[i].innerHTML = geuss;
          counter += 1;
        }
      }
      var j = (word.indexOf(geuss));
      if (j === -1) { //אם האות לא קיימת
        lives -= 1;
        comments();
        animate();
      } else {
        comments();
      }
    }
  }


  // Play
  play = function () {
    categories = [
      ["סביון", "כלנית", "חצב", "רקפת", "חמניה", "ורד", "סיגלית"],
      ["פנתרה", "מי זאת", "מסע", "באת לי פתאום", "בעולם הזה", "צבעים", "להאמין", "קרן שמש"],
      ["אלעד", "פתח תקווה", "רחובות", "ירושליים", "בני ברק", "אילת", "דימונה"]
    ];

    console.log(categories);

    chosenCategory = categories[Math.floor(Math.random() * categories.length)];

    console.log(chosenCategory);

    word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];

    console.log(word);

    word = word.replace(/\s/g, "-");

    console.log(word);

    buttons(); //abc...

    geusses = [];
    score = 10;
    lives = 10;
    counter = 0;
    space = 0;






    result();
    comments();
    selectCat();
    canvas();
    addScoreToUser(score);
    addActionToUser();
    console.log('הגענו לכאןן עם ניקוד ' + score);
  }

  // Hint
  hint.onclick = function () {

    hints = [
      ["נראה כמו שיער סיבה, אוהבים לנשוף עליו", "נקראת גם שושנת המלך", "הפרחים נישאים לגובה על עמוד תפרחת בעל צורת חרוט", "פרח מוגן", "אוכלים את הגרעינים שלה", "פרח רומנטי", "בצבע סגול"],
      ["נועה קירל", "אנה זק", "אליעד נחום", "קרן פלס", "גיל ווין ונתן גושן", "גיל ווין", "דולי ופן", "בניה ברבי"],
      ["עיר הישיבות", "אם המושבות", "מכון ויצמן למדע נמצא שם", "מרכז העולם", "בין בנין לבנין יש בנין", "עיר נופש דרומית", "מרכז הכור האטומי"]
    ];

    var catagoryIndex = categories.indexOf(chosenCategory);
    var hintIndex = chosenCategory.indexOf(word);
    showClue.innerHTML = "רמז: " + hints[catagoryIndex][hintIndex];
    score -= 5;
    console.log(score);
  };

  // Reset

  document.getElementById('reset').onclick = function () {
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
    showClue.innerHTML = "";
    context.clearRect(0, 0, 400, 400);
    play();
  }

  // const myPromise = new Promise(function(myResolve, myReject) {
  //   setTimeout(function(){ addScoreToUser(); }, {play();});
   play();
  // console.log("אחרי המשחקק" + score)


}

function addScoreToUser(s) {
  const email = document.cookie.split(';')[0]; //key value 0 = email
  const emailvalue = email.substring(email.indexOf('=') + 1);
  let user = localStorage.getItem(emailvalue);
  let userjson = JSON.parse(user);
  userjson.score += s;
  window.localStorage.setItem(emailvalue, JSON.stringify(userjson));
}

function addActionToUser() {
  const email = document.cookie.split(';')[0]; //key value 0 = email
  const emailvalue = email.substring(email.indexOf('=') + 1);
  let user = localStorage.getItem(emailvalue);
  let userjson = JSON.parse(user);
  console.log(userjson.actions + userjson.name);
  const enterGameDate = new Date();
  userjson.actions[userjson.counter++] = ({time: enterGameDate.toString() , action: "איש תלוי"});
  window.localStorage.setItem(emailvalue, JSON.stringify(userjson));
}
