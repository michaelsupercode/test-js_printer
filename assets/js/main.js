let inputText = document.getElementById('input_text');
let outputText = document.getElementById('output_text');

function sendMessage() {
    console.log('..function on duty..');
    console.log(inputText.value);
    if (inputText.value > '') {
        outputText.innerHTML = inputText.value;
        outputText.style.color = 'black';
    } else {
        outputText.innerHTML = `..missing input..`;
        outputText.style.color = 'red';
    }
}