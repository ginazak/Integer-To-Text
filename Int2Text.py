def int2Text(num):
    """ Converts a positive number up to 3 digits to its text form and returns a string.
    Code makes use of .zFill() method for strings
    """

    # 4 separate dictionaries for 'hundredths', 'tens' (into 'teens' & 'tys') and 'ones' places.
    hundreds = {
        "1": "one hundred",
        "2": "two hundred",
        "3": "three hundred",
        "4": "four hundred",
        "5": "five hundred",
        "6": "six hundred",
        "7": "seven hundred",
        "8": "eight hundred",
        "9": "nine hundred",
    }
    
    teens = { 
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
    }
    
    tys = { 
        "2": "twenty",
        "3": "thirty",
        "4": "forty",
        "5": "fifty",
        "6": "sixty",
        "7": "seventy",
        "8": "eighty",
        "9": "ninety",
    }

    ones = {
        "1": "one",
        "2": "two",
        "3": "three",
        "4": "four",
        "5": "five",
        "6": "six",
        "7": "seven",
        "8": "eight",
        "9": "nine",
    }

    # Given number padded to 3-digit list such that indexes map to fixed dictionaries        
    num_list = list(str(num).zfill(3)) 

    # Internal function to check if index number exists in corresponding dictionary
    # Returns text output for that 'place'
    def is_init(i, dict):
            if num_list[i] in dict:
                return dict[num_list[i]] 
            else:
                return ""

    hundredths_place = is_init(-3, hundreds)
    tens_place = is_init(-2, tys)
    ones_place = is_init(-1, ones)

    # Defensive code in case given number is '0'
    if all(i == "0" for i in num_list):
        ones_place = "zero"

    # Output for special cases in 'tens' place
    if num_list[-2] == "1":
        key = num_list[-2] + num_list[-1]
        tens_place = teens[key]
        ones_place = ""    

    text_result = hundredths_place + " " + tens_place + " " + ones_place

    # possible redundant whitespaces removed from resulting string
    return(text_result.strip().replace("  "," ")) 