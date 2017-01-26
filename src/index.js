
export var romanReader = (romanNumeral) => {
    var romanDigitArray = romanNumeral.split("");
    return romanDigitArray.map(char => singleDigitRomanNumeralConverter(char)).reduce((a,b)=>a+b);
}

function singleDigitRomanNumeralConverter(romanDigit) {
    switch (romanDigit) {
        case "i":
            return 1;
        case "v":
            return 5;
        case "x":
            return 10;
    }
}

