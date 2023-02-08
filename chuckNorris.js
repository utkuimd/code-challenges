function chuckNorris(str) {

    var charsAsciiBin = [];     // This array contains bits of ASCII characters in the input string.

    for(var i = 0; i < str.length; i++) {
        var bin = str.charCodeAt(i).toString(2).padStart(7, "0");   // charCodeAt() gives characters ASCII code.
        charsAsciiBin.push(bin);                                    // toString(2) convert ASCII code to binaries.
    };                                                              // padStart(7, "0") do this "100000 -> 0100000". 

    var strAsciiBin = charsAsciiBin.join("");   // Convert array to one single string.
    var res = []    // Our result array
    var cnt = 1     // This variable use for counting repeated bits.

    for(var i = 0; i < strAsciiBin.length; i++) {   
        if(strAsciiBin[i] !== strAsciiBin[i + 1]) {     // If bit changed.
            if(strAsciiBin[i] === "1") {    // If bit is 1;
                res.push("0 ");
            } else {        // If bit is 0;
                res.push("00 ");
            }
            for(var j = 0; j < cnt; j++) {  // Put "0" to result array depending on number of repeated bits.
                res.push("0");
            }
            res.push(" ");  // Put " " after 0's. 
            cnt = 1;
        } else {    // If bit not changed.
            cnt++;  // Increase number of repeated bits.
        }
    }
    
    res.pop()   // Remove excess space from last index of result array.
    return res.join("")     // Convert result array to string format.
}
const case1 = "C";
const case2 = "CC";
const case3 = "Hi <3";
console.log(chuckNorris(case3));




