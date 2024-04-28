const inputNumberOne = document.getElementById("num-one");
const inputNumberTwo = document.getElementById("num-two");
const result = document.getElementById("result");
const operations = document.getElementById("operation");
const resultText = document.getElementById("result-text");
let resultInteger;

inputNumberOne.addEventListener('change', function () {
    if (parseInt(inputNumberOne.value) > 2000) {
        inputNumberOne.value = 2000;
    }
});

inputNumberTwo.addEventListener('change', function () {
    if (parseInt(inputNumberTwo.value) > 2000) {
        inputNumberTwo.value = 2000;
    }
});

result.addEventListener('click', function () {
    if (inputNumberOne.value === "" || inputNumberTwo.value === "") {
        console.log("Please fill in both fields before calculating.");
    } else {
        switch (operations.value) {
            case "+":
                resultInteger = Number(inputNumberOne.value) + Number(inputNumberTwo.value);
                resultText.textContent = resultInteger;
                console.log(resultInteger);
                break;
            case "-":
                resultInteger = inputNumberOne.value - inputNumberTwo.value;
                resultText.textContent = resultInteger;
                console.log(resultInteger);
                break;
            case "*":
                resultInteger = inputNumberOne.value * inputNumberTwo.value;
                resultText.textContent = resultInteger;
                console.log(resultInteger);
                break;
            case "/":
                resultInteger = inputNumberOne.value / inputNumberTwo.value;
                resultText.textContent = resultInteger;
                console.log(resultInteger);
                break;
        }
    }
});
