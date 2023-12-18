function display(value) {
    document.getElementById('value').value += value;
}
function clearscreen() {
    document.getElementById('value').value = "";
}
function back() {
    const a = document.querySelector('#value').value;
    const b = a.slice(0, -1);
    document.querySelector('#value').value = b;
}
function result() {
    const a = document.querySelector('#value').value;
    const b = eval(a);
    if (b == Infinity) {
        document.querySelector('#value').value = "incorrect value";
    }
    else {
        document.querySelector('#value').value = b;
    }

}
