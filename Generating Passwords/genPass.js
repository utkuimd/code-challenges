// Fisher-Yates shuffle algorithm
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function genPass(nB, nS, nN, Lim) {
    if((nB + nS + nN) > Lim || nB < 0 || nS < 0 || nN < 0 || Lim < 0 ) {
        alert("Parameters cannot be negative or sum of first three parameters cannot greater than last one.")
        return null
    }

    var bigLets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
    var smLets = "abcdefghijklmnopqrstuvwxyz".split("")
    var nums = "0123456789".split("")
    var allChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split("")
    var result = []

    for(var i = 0; i < nB; i++) {   // Pushed big letters to result array depending on parameter.
        result.push(bigLets[Math.floor(Math.random() * bigLets.length)])
    }
    for(var i = 0; i < nS; i++) {   // Pushed small letters to result array depending on parameter.
        result.push(smLets[Math.floor(Math.random() * smLets.length)])
    }
    for(var i = 0; i < nN; i++) {   // Pushed numbers to result array depending on parameter.
        result.push(nums[Math.floor(Math.random() * nums.length)])
    }
    if((nB + nS + nN) < Lim) {      // We push extra characters from allChars array to result array in this condition.
        for(var i = 0; i < Lim - (nB + nS + nN); i++) {
            result.push(allChars[Math.floor(Math.random() * allChars.length)])
        }
    }

    shuffle(result)     // Shuffle result array for more security.

    for(var i = 0; i < result.length; i++) {
        if(result[i] === result[i + 1]) {   // If same character comes with in series, shuffle again.
            setTimeout(() => {}, 100)       // Wait a little :)
            shuffle(result)
        }
    }

    return result.join("")  // Convert result array to string.
}

const case1 = genPass(3, 2, 3, 10)
console.log(case1)


