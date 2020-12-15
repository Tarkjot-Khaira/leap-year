var inputYear = document.querySelector("#input-year");
var btnCheck = document.querySelector("#btn-check");
var divOutput = document.querySelector("#div-output");

btnCheck.addEventListener('click', function inputHandler() {
    var year = inputYear.value;
    var answer = "";
    if (year % 4 === 0) {
        answer = "It's a Leap year."
    } else {
        answer = "It's NOT a Leap year."
    }
    divOutput.innerText = answer;

})