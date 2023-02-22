document.querySelector('.enter').addEventListener('click', function() {
    const input = Number(document.querySelector('.input').value);
    const undInput = document.querySelector('.input').value;
    if(!input) {
        alert('Please enter a number!');
    }
    else if(input < 0) {
        alert('This number is not natural!');
    }
    else {
        //const Properties = {even: null, odd: null, buzz: null, duck: null};

        const resultBox = document.createElement('div');
        resultBox.id = 'resDiv';
        document.body.appendChild(resultBox);

        const properTxt = document.createElement('p');
        properTxt.textContent = `Properties of ${undInput}`;
        resultBox.appendChild(properTxt);
        
        const evenTxt = document.createElement('span');
        evenTxt.textContent = `even: ${isEven(input)}`;
        resultBox.appendChild(evenTxt);
        resultBox.appendChild(document.createElement('br'));

        const oddTxt = document.createElement('span');
        oddTxt.textContent = `odd: ${isOdd(input)}`;
        resultBox.appendChild(oddTxt);
        resultBox.appendChild(document.createElement('br'));

        const buzzTxt = document.createElement('span');
        buzzTxt.textContent = `buzz: ${isBuzz(input)}`;
        resultBox.appendChild(buzzTxt);
        resultBox.appendChild(document.createElement('br'));

        const duckTxt = document.createElement('span');
        duckTxt.textContent = `duck: ${isDuck(undInput)}`;
        resultBox.appendChild(duckTxt);
    }
    document.querySelector('.input').value = '';
})

document.querySelector('.input').addEventListener('click', function() {
    const resDiv = document.querySelector('#resDiv');
    if(resDiv) {
        resDiv.remove()
    }
})

function isEven(num) {
    return num % 2 === 0 ? true : false
}

function isOdd(num) {
    return num % 2 === 1 ? true : false
}

function isBuzz(num) {
    if(num % 7 !== 0 && num % 10 !== 7) {
        return false
    } else {
        return true
    }
}

function isDuck(num) {
    var arr = num.toString().split('');
    if(arr[0] == 0) {
        return false
    }
    for(var i = 1; i < arr.length; i++) {
        if(arr[i] == 0) {
            return true
        }
    }
    return false
}
