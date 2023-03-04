const properties = ['even', 'odd', 'buzz', 'duck', 'palindromic', 'gapful', 'spy', 'square', 'sunny', 'jumping', 'happy', 'sad'];
const nProperties = ['-even', '-odd', '-buzz', '-duck', '-palindromic', '-gapful', '-spy', '-square', '-sunny', '-jumping', '-happy', '-sad'];
const functions = [isEven, isOdd, isBuzz, isDuck, isPal, isGap, isSpy, isSquare, isSunny, isJump, isHappy, isSad];

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
    else if(isValidPro(arrIn).length !== 0) {
        const errMes = document.createElement('p');
        errMes.innerText = `The property [${isValidPro(arrIn)}] is wrong.\nAvailable properties: [${properties.toString()}]`;
        errMes.style.color = 'red';
        resultBox.appendChild(errMes);
    }
    else if(isMutPro(arrIn).length !== 0) {
        const errMes = document.createElement('p');
        errMes.innerText = `The request contains mutually exclusive properties: [${isMutPro(arrIn)}]\nThere are no numbers with these properties.`;
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
        else {
            var cnt = 0
            for(var i = parseInt(arrIn[0]); i < Infinity; i++) {
                if(cnt == arrIn[1]) {
                    break
                }
                var truePropers = []
                var falsePropers = []
                var allPropers = []
                var bool = true
                for(var j = 0; j < functions.length; j++) {
                    if(functions[j](String(i))) {
                        truePropers.push(properties[j])
                    } else {
                        falsePropers.push(nProperties[j])
                    }
                }
                allPropers = truePropers.concat(falsePropers)
                for(var k = 2; k < arrIn.length; k++) {
                    if(!allPropers.includes(arrIn[k])){
                        bool = false
                    }
                }
                if(bool){
                    const text = document.createElement('span');
                    text.textContent = `${String(i)} is ${truePropers.toString()}`;
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

function isJump(val) {
    var arr = val.split('');
    for(var i = 0; i < arr.length - 1; i++) {
        if(((parseInt(arr[i]) + 1) !== parseInt(arr[i + 1])) &&
            ((parseInt(arr[i]) - 1) !== parseInt(arr[i + 1]))) {
            return false
        }
    }
    return true
}

function isHappy(val) {
    var sum = parseInt(val);
    var arrAllSum = []
    var tempSum = 0
    while(1) {
        arrAllSum.push(sum)
        for(var i = 0; i < String(sum).split('').length; i++) {
            tempSum += Math.pow(parseInt(String(sum).split('')[i]), 2)
        }
        if(tempSum === 1) {
            return true
        }
        if(arrAllSum.includes(tempSum)) {
            return false
        }
        sum = tempSum
        tempSum = 0
    }
}

function isSad(val) {
    var sum = parseInt(val);
    var arrAllSum = []
    var tempSum = 0
    while(1) {
        arrAllSum.push(sum)
        for(var i = 0; i < String(sum).split('').length; i++) {
            tempSum += Math.pow(parseInt(String(sum).split('')[i]), 2)
        }
        if(tempSum === 1) {
            return false
        }
        if(arrAllSum.includes(tempSum)) {
            return true
        }
        sum = tempSum
        tempSum = 0
    }
}

// HELPER FUNCTIONS
function containsOnlyNumbers(str) {
    return /^\d+$/.test(str);
}

function leftShift(arr) {
    var firstEl = arr.shift()
    arr.push(firstEl)
    return arr
}

function isValidPro(arr) {
    var invalidPro = []
    for(var i = 2; i < arr.length; i++) {
        if(!properties.includes(arr[i]) && !nProperties.includes(arr[i]) && arr[i] !== undefined) {
            invalidPro.push(arr[i])
        }
    }
    return invalidPro
}

function isMutPro(arr) {
    var mutPro = []
    for(var i = 2; i < arr.length; i++) {
        if(arr[i] !== undefined) {
            if(arr.includes('-'.concat(arr[i]))) {      // E.g. [buzz, -buzz], [even, -even]...
                mutPro.push(arr[i], ' -'.concat(arr[i]))
            }
            if(arr[i] === 'even' && arr.includes('odd')) {
                mutPro.push('even', ' odd')
            }
            if(arr[i] === '-even' && arr.includes('-odd')) {
                mutPro.push('-even', ' -odd')
            }
            if(arr[i] === 'duck' && arr.includes('spy')) {
                mutPro.push('duck', ' spy')
            }
            if(arr[i] === 'sunny' && arr.includes('square')) {
                mutPro.push('sunny', ' square')
            }
            if(arr[i] === 'happy' && arr.includes('sad')) {
                mutPro.push('happy', ' sad')
            }
            if(arr[i] === '-happy' && arr.includes('-sad')) {
                mutPro.push('-happy', ' -sad')
            }
        }
    }
    return mutPro
}

