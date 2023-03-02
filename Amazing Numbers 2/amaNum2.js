const properties = ['even', 'odd', 'buzz', 'duck', 'palindromic', 'gapful', 'spy', 'square', 'sunny'];
const functions = [isEven, isOdd, isBuzz, isDuck, isPal, isGap, isSpy, isSquare, isSunny];

// HELPER FUNCTIONS
function containsOnlyNumbers(str) {
    return /^\d+$/.test(str);
}

function leftShift(arr) {
    var firstEl = arr.shift()
    arr.push(firstEl)
    return arr
}

document.querySelector('.enter').addEventListener('click', function() {
    const input = document.querySelector('.input').value;
    const arrIn = input.split(' ');

    const resultBox = document.createElement('div');
    resultBox.id = 'resDiv';
    document.body.appendChild(resultBox);

    if(arrIn[0] === '') {
        const supReqBox = document.querySelector('#supReqDiv');
        const clone = supReqBox.cloneNode(true);
        clone.id = 'supReqDiv2';
        resultBox.appendChild(clone);
    }
    else if(!containsOnlyNumbers(arrIn[0])) {
        const errMes = document.createElement('p');
        errMes.textContent = 'The first parameter should be a natural number or zero.';
        errMes.style.color = 'red';
        resultBox.appendChild(errMes);
    }
    else if((!containsOnlyNumbers(arrIn[1]) && arrIn[1] !== undefined) || arrIn[1] === '0') {
        const errMes = document.createElement('p');
        errMes.textContent = 'The second parameter should be a natural number.';
        errMes.style.color = 'red';
        resultBox.appendChild(errMes);
    }
    else if(!properties.includes(arrIn[2]) && arrIn[2] !== undefined) {
        const errMes = document.createElement('p');
        errMes.innerText = `The property [${arrIn[2]}] is wrong.\n\nAvailable properties: [${properties.toString()}]`;
        errMes.style.color = 'red';
        resultBox.appendChild(errMes);
    }
    else if(!properties.includes(arrIn[3]) && arrIn[3] !== undefined) {
        const errMes = document.createElement('p');
        errMes.innerText = `The property [${arrIn[3]}] is wrong.\n\nAvailable properties: [${properties.toString()}]`;
        errMes.style.color = 'red';
        resultBox.appendChild(errMes);
    }
    else if((arrIn[2] === 'even' && arrIn[3] === 'odd') ||
            (arrIn[3] === 'even' && arrIn[2] === 'odd') ||
            (arrIn[2] === 'duck' && arrIn[3] === 'spy') ||
            (arrIn[3] === 'duck' && arrIn[2] === 'spy') ||
            (arrIn[2] === 'square' && arrIn[3] === 'sunny') ||
            (arrIn[3] === 'square' && arrIn[2] === 'sunny')) {
        const errMes = document.createElement('p');
        errMes.innerText = `The request contains mutually exclusive properties: [${arrIn[2]}, ${arrIn[3]}]\nThere are no numbers with these properties.`;
        errMes.style.color = 'red';
        resultBox.appendChild(errMes);
    }
    else if(arrIn[0] === '0') {
        const byeMes = document.createElement('p');
        byeMes.textContent = 'Goodbye!';
        resultBox.appendChild(byeMes);
        setTimeout(() => { window.close() }, 1000)
    }
    else {
        if(arrIn.length === 1) {
            const properTxt = document.createElement('p');
            properTxt.textContent = `Properties of ${arrIn[0]}`;
            resultBox.appendChild(properTxt);
            
            for(var i = 0; i < properties.length; i++) {
                const text = document.createElement('span');
                text.textContent = `${properties[i]}: ${functions[i](arrIn[0])}`;
                resultBox.appendChild(text);
                resultBox.appendChild(document.createElement('br'));
            }
        }
        else if(arrIn.length === 2) {
            for(var i = 0; i < arrIn[1]; i++) {
                var trueFunc = [];
                for(var j = 0; j < functions.length; j++) {
                    if(functions[j](String(parseInt(arrIn[0]) + i))) {
                        trueFunc.push(properties[j])
                    }
                }
                const text = document.createElement('span');
                text.textContent = `${String(parseInt(arrIn[0]) + i)} is ${trueFunc.toString()}`;
                resultBox.appendChild(text);
                resultBox.appendChild(document.createElement('br'));
            }
        }
        else if(arrIn.length === 3) {
            var cnt = 0
            for(var i = parseInt(arrIn[0]); i < Infinity; i++) {
                if(cnt == arrIn[1]) {
                    break
                }
                var trueFuncFilPro = []
                for(var j = 0; j < functions.length; j++) {
                    if(functions[j](String(i))) {
                        trueFuncFilPro.push(properties[j])
                    }
                }
                if(trueFuncFilPro.includes(arrIn[2])) {
                    const text = document.createElement('span');
                    text.textContent = `${String(i)} is ${trueFuncFilPro.toString()}`;
                    resultBox.appendChild(text);
                    resultBox.appendChild(document.createElement('br'));
                    cnt++
                }
            }
        }
        else if(arrIn.length === 4) {
            var cnt = 0
            for(var i = parseInt(arrIn[0]); i < Infinity; i++) {
                if(cnt == arrIn[1]) {
                    break
                }
                var trueFuncFilPro = []
                for(var j = 0; j < functions.length; j++) {
                    if(functions[j](String(i))) {
                        trueFuncFilPro.push(properties[j])
                    }
                }
                if(trueFuncFilPro.includes(arrIn[2]) && trueFuncFilPro.includes(arrIn[3])) {
                    const text = document.createElement('span');
                    text.textContent = `${String(i)} is ${trueFuncFilPro.toString()}`;
                    resultBox.appendChild(text);
                    resultBox.appendChild(document.createElement('br'));
                    cnt++
                }
            }
        }
    }
    document.querySelector('.input').value = '';
})

document.querySelector('.input').addEventListener('click', function() {
    const resDiv = document.querySelector('#resDiv');
    if(resDiv) {
        resDiv.remove()
    }
})

// PROPERTIES FUNCTIONS
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

function isGap(val) {
    var arr = val.split('');
    if(arr.length < 3) {
        return false
    }
    var divisor = parseInt(arr[0].concat(arr[arr.length - 1]));
    if(val % divisor !== 0) {
        return false
    }
    return true
}

function isSpy(val) {
    var arr  = val.split('');
    var sum = 0
    var mul = 1
    for(var i = 0; i < arr.length; i++) {
        sum += parseInt(arr[i])
    }
    for(var i = 0; i < arr.length; i++) {
        mul *= parseInt(arr[i])
    }
    return sum === mul ? true : false
}

function isSquare(val) {
    return Math.sqrt(parseInt(val)) % 1 === 0 ? true : false
}

function isSunny(val) {
    return Math.sqrt(parseInt(val) + 1) % 1 === 0 ? true : false
}

