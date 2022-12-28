function getDetailsForAllUsers() {

    let str = [];
    // iterate localStorage
    for (var i = 0; i < localStorage.length; i++) {

        // set iteration key name
        var key = localStorage.key(i);

        // use key name to retrieve the corresponding value
        var value = localStorage.getItem(key);

        // console.log the iteration key and value
        str += ('Key: ' + key + ', Value: ' + value);
        return str;
    }
}
window.onload = function () {

    document.getElementById('tablescore').innerHTML = getDetailsForAllUsers();

}