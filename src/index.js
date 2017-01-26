
export var romanReader = (romanNumeral) => {
    var romanDigitArray = romanNumeral.split("");
    return romanDigitArray.map(char => singleDigitRomanNumeralConverter(char)).reduce(compareValues,0);
}

var compareValues = (sum, currentVal, indexVal, arrayList) => {
    if (currentVal < arrayList[indexVal+1] && indexVal < arrayList.length -1) {
        return sum - currentVal;
    } else {
        return sum + currentVal;
    }
}

var singleDigitRomanNumeralConverter = (romanDigit) => {
    switch (romanDigit) {
        case "i":
            return 1;
        case "v":
            return 5;
        case "x":
            return 10;
        case "l":
            return 50;    
        case "c":
            return 100;    
        case "d":
            return 500;   
        case "m":
            return 1000;                            
    }
}

