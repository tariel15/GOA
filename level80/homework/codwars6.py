#https://www.codewars.com/kata/586a933fc66d187b6e00031a/train/python
from random import sample
from string import ascii_letters

def generateName(length=6):
    while True:
        name = ''.join(sample(ascii_letters, length))
        if not photoManager.nameExists(name):
            return name