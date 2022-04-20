let fontSize = document.getElementById('font-size');
let fontFamily = document.getElementById('font-family');
let inputtext = document.getElementById('input-text');
let result = document.getElementById('result');

function change() {
    // change size
    result.style.fontSize = fontSize.value + "px";
    // change font
    result.style.fontFamily = fontFamily.value;
    // change inputtext
    result.innerHTML = inputtext.value;
};
