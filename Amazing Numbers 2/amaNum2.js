document.querySelector('.enter').addEventListener('click', function() {
    const input = Number(document.querySelector('.input').value);
    if(!input) {
        alert('Please enter a number!');
    }
    else if(input < 0) {
        alert('This number is not natural!');
    }
    else {
        const resultBox = document.createElement('div');
        resultBox.id = 'resDiv';
        document.body.appendChild(resultBox);

        const oddEvenText = document.createElement('p');
        oddEvenText.textContent = `This number is ${isOddOrEven(input)}.`;
        resultBox.appendChild(oddEvenText);

        const buzzOrNotText = document.createElement('p');
        buzzOrNotText.textContent = isBuzz(input).buzzOrNot;
        resultBox.appendChild(buzzOrNotText);

        const expText = document.createElement('p');
        expText.innerHTML = 'Explanation:';
        resultBox.appendChild(expText);

        const explanationText = document.createElement('p');
        explanationText.textContent = isBuzz(input).explanation;
        resultBox.appendChild(explanationText);
    }
    document.querySelector('.input').value = '';
})

document.querySelector('.input').addEventListener('click', function() {
    const resDiv = document.querySelector('#resDiv');
    if(resDiv) {
        resDiv.remove()
    }
})

function isOddOrEven(num) {
    return num % 2 === 0 ? 'Even' : 'Odd'
}

function isBuzz(num) {
    const resObj = {}
    if(num % 7 !== 0) {
        if(num % 10 !== 7) {
            resObj.buzzOrNot = 'It is not a Buzz number.';
            resObj.explanation = `${num} is neither divisible by 7 nor does it end with 7.`
        }
        else {
            resObj.buzzOrNot = 'It is a Buzz number.';
            resObj.explanation = `${num} ends with 7.`
        }
    }
    else {
        resObj.buzzOrNot = 'It is a Buzz number.';
        if(num % 10 !== 7) {
            resObj.explanation = `${num} is divisible by 7.`
        }
        else {
            resObj.explanation = `${num} is divisible by 7 and ends with 7.`
        }
    }
    return resObj
}
