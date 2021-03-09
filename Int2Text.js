function int2Text(num) {   
    /* Converts a positive number up to 3 digits to its text form and returns a string.
    * Code makes use of .padStart() method for strings. 
    */

    // 4 separate dictionaries for 'hundredths', 'tens' (into 'teens' & 'ty') and 'ones' places.
    const hundreds = {
        "1": "one hundred",
        "2": "two hundred",
        "3": "three hundred",
        "4": "four hundred",
        "5": "five hundred",
        "6": "six hundred",
        "7": "seven hundred",
        "8": "eight hundred",
        "9": "nine hundred",
    };
    
    const teens = { 
        "10": "ten",
        "11": "eleven",
        "12": "twelve",
        "13": "thirteen",
        "14": "fourteen",
        "15": "fifteen",
        "16": "sixteen",
        "17": "seventeen",
        "18": "eighteen",
        "19": "nineteen",
    };
    
    const ty = { 
        "2": "twenty",
        "3": "thirty",
        "4": "forty",
        "5": "fifty",
        "6": "sixty",
        "7": "seventy",
        "8": "eighty",
        "9": "ninety",
    };

    const ones = {
        "1": "one",
        "2": "two",
        "3": "three",
        "4": "four",
        "5": "five",
        "6": "six",
        "7": "seven",
        "8": "eight",
        "9": "nine",
    };

    // Given number padded to 3-digit string such that indexes map to fixed dictionaries
    num = num.toString().padStart(3, 0);
    let textResult = "";

    //  Internal function defined to check if index number exists in corresponding dictionary.
    //  Returns text output for that 'place'
    function isValid(i, dict){
            if (dict[num[i]]) 
                return dict[num[i]];
            else return ""; 
    }

    let hundredthsPlace = isValid(0, hundreds);
    let tensPlace = isValid(1, ty);
    let onesPlace = isValid(2, ones);

    //  Defensive code assumes given number is '0'
    if (num.split().every(i => i == 0)){
        onesPlace = "zero";
    }
    // Output for special cases (in 'tens' place)
    if (num[1] == 1){
        key = num[1] + num[2];
        tensPlace = teens[key];
        onesPlace = "";     
    }   
    textResult = hundredthsPlace + " " + tensPlace + " " + onesPlace;
    return(textResult.trim().replace("  "," "));
}