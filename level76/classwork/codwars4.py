#https://www.codewars.com/kata/566d5e2e57d8fae53c00000c/train/python
import random
from random import sample
def get_bingo_card():
    sp = [""] * 25
    count = 0
    unique_numbers1 = random.sample(range(1, 16), 5)
    unique_numbers2 = random.sample(range(16, 31), 5)
    unique_numbers3 = random.sample(range(31, 46), 5)
    unique_numbers4 = random.sample(range(46, 61), 5)
    unique_numbers5 = random.sample(range(61, 76), 5)
    for i  in range(5):
        sp[count] = 'B' + str(unique_numbers1[i])
        count += 1
    for i  in range(5):
        sp[count] = 'I' + str(unique_numbers2[i])
        count += 1
    for i  in range(5):
        sp[count] = 'N' + str(unique_numbers3[i])
        count += 1
    for i  in range(5):
        sp[count] = 'G' + str(unique_numbers4[i])
        count += 1
    for i  in range(5):
        sp[count] = 'O' + str(unique_numbers5[i])
        count += 1
    sp.pop(12)

    return sp