#https://www.codewars.com/kata/5938f5b606c3033f4700015a/train/python
def alphabet_war(fight):
    left_power = {'w': 4, 'p': 3, 'b': 2, 's': 1}
    right_power = {'m': 4, 'q': 3, 'd': 2, 'z': 1}

    left_score = 0
    right_score = 0

    previous_letter = None
    skip_next = False
    
    for value in fight:
        
        # If bomb remove points given for previous_letter
        # and skip the next character
        if value == '*':

            if previous_letter in left_power:
                left_score -= left_power[previous_letter]

            if previous_letter in right_power:
                right_score -= right_power[previous_letter]

            skip_next = True
            previous_letter = None
            continue
        
        # If previous value was a bomb '*' skip this letter
        if skip_next:
            skip_next = False
            continue
        
        # value is a letter, add the power to the score
        if value in left_power:
            left_score += left_power[value]

        if value in right_power:
            right_score += right_power[value]
        
        previous_letter = value
    
    if left_score > right_score:
        return "Left side wins!"
    
    if left_score < right_score:
        return "Right side wins!"

    return "Let's fight again!"