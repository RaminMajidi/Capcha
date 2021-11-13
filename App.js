const capchaText = document.getElementById("capchaText");
const btnRefresh = document.getElementById("refreshIcon");
const inputTxt = document.getElementById("inCapcha");
const btnCheck = document.getElementById("btnCheck");


let charcters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1', '2',
    '3', '4', '5', '6', '7', '8', '9'
];
window.addEventListener("load", createText);
btnRefresh.addEventListener("click", createText);
btnCheck.addEventListener("click", checkText);

function createText() {
    capchaText.innerHTML = "";
    inputTxt.value = "";
    for (var i = 0; i < 5; i++) {
        let rand = Math.floor(Math.random() * 35);
        capchaText.innerHTML += charcters[rand];
    }
}

function checkText() {
    let capcha = capchaText.innerHTML;
    let Text = inputTxt.value;
    console.log(capcha);
    console.log(Text);
    if (capcha.length > 0 && capcha === Text) {
        alert("capcha Equal input");
    } else {
        alert("capcha Not equal input");
    }
    createText();
}