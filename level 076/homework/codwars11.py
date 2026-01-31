#https://www.codewars.com/kata/5282b48bb70058e4c4000fa7/train/python (RGB 2)
def hexToInt(hex_string):
    return int(hex_string, 16)

def hex_string_to_RGB(hex_string): 
    return {
        'r': hexToInt(hex_string[1:3]),
        'g': hexToInt(hex_string[3:5]),
        'b': hexToInt(hex_string[5:])
    }