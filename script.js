let speedTypingTestEl = document.getElementById('speedTypingTest');
let timerEl = document.getElementById("timer");
let quoteDisplayEl = document.getElementById("quoteDisplay");
let resultEl = document.getElementById("result");
let quoteInputEl = document.getElementById("quoteInput");
let submitBtnEl = document.getElementById("submitBtn");
let resetBtnEl = document.getElementById("resetBtn");
let spinnerEl = document.getElementById("spinner");

function randomQuotation() {
    spinnerEl.classList.remove("d-none");
    let url = "https://apis.ccbp.in/random-quote";
    let options = {
        method: "GET"
    };
    fetch(url, options).then(function(response) {
        return response.json();
    }).then(function(jsonData) {
        spinnerEl.classList.add("d-none");
        console.log(jsonData);
        quoteDisplayEl.textContent = jsonData.content;
    });


}

let intervalId = null;

function timerStart() {
    let counter = 0;
    intervalId = setInterval(function() {
        timerEl.textContent = counter + " seconds";
        counter = counter + 1;
    }, 1000);

    submitBtnEl.onclick = function() {
        let typedAns = quoteInputEl.value;
        let givenQuote = quoteDisplayEl.value;
        if (typedAns !== givenQuote) {
            resultEl.textContent = "You typed incorrect sentence";
        } else {
            resultEl.textContent = "You typed in " + counter;
        }
    };
}

resetBtnEl.onclick = function() {
    resetBtnEl.addEventListener("click", randomQuotation);
    clearInterval(intervalId);
    resultEl.textContent = "";
    timerStart();
};
timerStart();
randomQuotation();
//Do not give your attention to what others do or fail to do; give it to what you do or fail to do.