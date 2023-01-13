function convertToRoman(num) {
    const obj = {
        0:['M',1000], 
        1:['CM', 900], 
        2:['D', 500], 
        3:['CD', 400], 
        4:['C', 100], 
        5:['XC', 90], 
        6:['L', 50], 
        7:['XL', 40],
        8:['X', 10], 
        9:['IX', 9], 
        10:['V', 5], 
        11:['IV', 4], 
        12:['I', 1]
    };

    let result = '';
    let remainder = num;

    for (let i = 0; i < obj.length; i++) {
        while (remainder >= obj[i][1]) {
            result += obj[i][0];
            remainder -= obj[i][1];
        }
    }

    return result;
}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

convertToRoman(36)




// do not edit below this line
module.exports = convertToRoman
