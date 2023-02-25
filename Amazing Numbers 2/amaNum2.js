const properties = ['even', 'odd', 'buzz', 'duck', 'palindromic', 'gapful'];
const functions = [isEven, isOdd, isBuzz, isDuck, isPal, isGap];

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
    else if(!containsOnlyNumbers(arrIn[0]) || arrIn[0] < 0) {
        const errMes = document.createElement('p');
        errMes.textContent = 'The first parameter should be a natural number or zero.';
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