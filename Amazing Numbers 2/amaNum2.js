document.querySelector('.enter').addEventListener('click', function() {
    
    const input = document.querySelector('.input').value;

    const resultBox = document.createElement('div');
    resultBox.id = 'resDiv';
    document.body.appendChild(resultBox);

    if(!input) {
        alert('Please enter a number!');
    }
    else if(input === '0') {
        const byeMes = document.createElement('p');
        byeMes.textContent = 'Goodbye!';
        resultBox.appendChild(byeMes);
        setTimeout(() => { window.close() }, 1000)
    }
    else if(input < 0) {
        const errMes = document.createElement('p');
        errMes.textContent = 'The first parameter should be a natural number or zero.';
        errMes.style.color = 'red';
        resultBox.appendChild(errMes);
    }
    else {
        const properTxt = document.createElement('p');
        properTxt.textContent = `Properties of ${input}`;
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
        duckTxt.textContent = `duck: ${isDuck(input)}`;
        resultBox.appendChild(duckTxt);
        resultBox.appendChild(document.createElement('br'));

        const palTxt = document.createElement('span');
        palTxt.textContent = `palindromic: ${isPal(input)}`;
        resultBox.appendChild(palTxt);
    }
    document.querySelector('.input').value = '';
})

document.querySelector('.input').addEventListener('click', function() {
    const resDiv = document.querySelector('#resDiv');
    if(resDiv) {
        resDiv.remove()
    }
})

function isEven(val) {
    var arrVal = val.split('')
    var lastDigit = parseInt(arrVal[arrVal.length - 1])
    return lastDigit % 2 === 0 ? true : false
}

function isOdd(val) {
    var arrVal = val.split('')
    var lastDigit = parseInt(arrVal[arrVal.length - 1])
    return lastDigit % 2 === 1 ? true : false
}

function isBuzz(val) {
    var arrVal = val.split('')
    var lastEl = arrVal[arrVal.length - 1]

    var fArr = [1, 3, 2, -1, -3, -2]
    function leftShift(arr) {
        var firstEl = arr.shift()
        arr.push(firstEl)
        return arr
    }
    var arrVal1 = val.split('')
    var sum = 0

    while(arrVal1.length > 0) {
        sum += parseInt(arrVal1[arrVal1.length - 1]) * fArr[0]
        arrVal1.pop();
        leftShift(fArr);
    }

    if(sum % 7 !== 0 && lastEl != 7) {
        return false
    } else {
        return true
    }
}

function isDuck(val) {
    var arr = val.split('');
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

function isPal(val) {
    var arr = val.split('');
    var left = 0
    var right = arr.length - 1
    while(left < right) {
        if(arr[left] !== arr[right]) {
            return false
        }
        left++
        right--
    }
    return true
}