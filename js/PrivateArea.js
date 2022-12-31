function getDetailsForAllUsers() {

    let str = [];
    // iterate localStorage
    for (var i = 0; i < localStorage.length; i++) {

        // set iteration key name
        var key = localStorage.key(i);
        console.log(key + "key");

        // use key name to retrieve the corresponding value
        var value = localStorage.getItem(key);
        console.log(value + "value");

        const obj = JSON.parse(value);
        // console.log the iteration key and value
        str[i] = obj;
        console.log(obj.name);
        console.log(str[i]);

    }
    console.log(str);
    return str;
}
window.onload = function () {

    let table = document.createElement('table');
    let users = getDetailsForAllUsers();

    let tr = document.createElement('tr');

    let th1 = document.createElement('th');
    let th2 = document.createElement('th');
    let th3 = document.createElement('th');

    let nameUser = document.createTextNode("שם");
    let scoreUser = document.createTextNode("ניקוד");
    let lastAction = document.createTextNode("פעילות אחרונה");

    th1.appendChild(nameUser);
    th2.appendChild(scoreUser);
    th3.appendChild(lastAction);

    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);


    table.appendChild(tr); 
    for (let i = 0; i < users.length; i++) {
        let tr = document.createElement('tr');

        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');

        let nameUser = document.createTextNode(users[i].name);
        let scoreUser = document.createTextNode(users[i].score);
        let lastAction = document.createTextNode(users[i].actions[users[i].actions.length-1]['action']);

        td1.appendChild(nameUser);
        td2.appendChild(scoreUser);
        td3.appendChild(lastAction);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);


        table.appendChild(tr);
    }
    document.body.appendChild(table);


    const email = document.cookie.split(';')[0]; //key value 0 = email
    const emailvalue = email.substring(email.indexOf('=') + 1);
    let user = localStorage.getItem(emailvalue);
    let userjson = JSON.parse(user);

    document.getElementById('first_name').innerHTML = userjson.name;
    document.getElementById('phone').innerHTML = userjson.phone;
    document.getElementById('email').innerHTML = userjson.email;
    document.getElementById('password').innerHTML = userjson.password;
    document.getElementById('score').innerHTML = userjson.score;
    console.log(userjson.actions);

    document.getElementById('actions').innerHTML = display10LastAction();
    
}


function display10LastAction(){
    const email = document.cookie.split(';')[0]; //key value 0 = email
    const emailvalue = email.substring(email.indexOf('=') + 1);
    let user = localStorage.getItem(emailvalue);
    let userjson = JSON.parse(user);
    let str ="";

    for(let i = userjson.actions.length - 1; i > userjson.actions.length - 5; i--){
        str += userjson.actions[i].action + userjson.actions[i].time;
        str += '\n';
    }
    return str;
}

    


