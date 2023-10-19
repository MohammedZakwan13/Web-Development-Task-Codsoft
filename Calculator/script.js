let input = "";

function updateInput(value) {
    input += value;
    document.getElementById('result').value = input;
}

function calculate() {
    try {
        let result = eval(input);
        document.getElementById('result').value = result;
        input = '';
    } catch (error) {
        document.getElementById('result').value = "Error";
    }
}