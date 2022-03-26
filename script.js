// Random generate pin..
function generation() {
    let generatePin = Math.floor(Math.random() * 9000) + 1000;
    document.getElementById('left-generate-pin').value = generatePin;
    document.getElementById('right-generate-pin').value = "";
};

// Click all buttons
function expand(equalPin) {
    document.getElementById('right-generate-pin').value += equalPin;
}

// Clear all generate numbers
function clearAll() {
    document.getElementById('right-generate-pin').value = null;
}

// submit button (pin matching or did't matching condition)
function submited() {
    const generatePin = document.getElementById('left-generate-pin').value;
    const submitedPin = document.getElementById('right-generate-pin').value;
    const pinMached = document.getElementById('notify-success');
    const notMatched = document.getElementById('notify-fail');
    // pin matching condition
    if (generatePin == submitedPin) {
        pinMached.style.display = "block";
        notMatched.style.display = 'none';
    }
    else {
        pinMached.style.display = "none";
        notMatched.style.display = 'block';
    }
}

// clear last value..
function singleClear() {
    var inputResult = document.getElementById('right-generate-pin').value;
    var removeValue = inputResult.slice(0, inputResult.length - 1);
    document.getElementById('right-generate-pin').value = removeValue;
}
