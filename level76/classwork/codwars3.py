#https://www.codewars.com/kata/526a569ca578d7e6e300034e/train/python
def to_decimal(input, alphabet):
    result = 0
    for p,d in enumerate(reversed(input)):
        result += alphabet.index(d)*len(alphabet)**p
    
    return result
    
def to_alphabet(input, alphabet):
    result = ""
    while input >= len(alphabet):
        result += alphabet[input % len(alphabet)]
        input = int(input / len(alphabet))
    
    result += alphabet[input]
    return "".join(reversed(result))

def convert(input, source, target):
    dec = to_decimal(input, source)
    final = to_alphabet(dec, target)
    return final