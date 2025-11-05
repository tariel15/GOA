#https://www.codewars.com/kata/5263c6999e0f40dee200059d/train/python
from itertools import product

def get_pins(observed):
    # Map each digit to the possible digits that could be observed (including itself)
    adjacent = {
        '0': ['0', '8'],
        '1': ['1', '2', '4'],
        '2': ['1', '2', '3', '5'],
        '3': ['2', '3', '6'],
        '4': ['1', '4', '5', '7'],
        '5': ['2', '4', '5', '6', '8'],
        '6': ['3', '5', '6', '9'],
        '7': ['4', '7', '8'],
        '8': ['5', '7', '8', '9', '0'],
        '9': ['6', '8', '9']
    }

    # Create a list of lists for each digit's possible options
    possible_digits = [adjacent[d] for d in observed]

    # Compute all combinations of possible digits
    return [''.join(p) for p in product(*possible_digits)]
