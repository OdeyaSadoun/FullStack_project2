function getDetailsForAllUsers() {

    let str = [];
    // iterate localStorage
    for (var i = 0; i < localStorage.length; i++) {

        // set iteration key name
        var key = localStorage.key(i);
        console.log(key + "keyyyyyy");

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
    for (let i = 0; i < users.length; i++) {
        let tr = document.createElement('tr');

        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');

        let nameUser = document.createTextNode(users[i].name);
        let scoreUser = document.createTextNode(users[i].score);
        let lastAction = document.createTextNode("ykhkhkhk");

        td1.appendChild(nameUser);
        td2.appendChild(scoreUser);
        td3.appendChild(lastAction);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);


        table.appendChild(tr);
    }
    document.body.appendChild(table);

}

